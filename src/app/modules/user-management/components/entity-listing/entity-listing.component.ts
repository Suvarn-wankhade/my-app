import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

import { EntityHeader } from '../../models/entity-header';
import { User } from '../../models/user';

import { UserConstant } from '../../constants/user';

@Component({
  selector: 'app-entity-listing',
  templateUrl: './entity-listing.component.html',
  styleUrls: ['./entity-listing.component.scss']
})
export class EntityListingComponent implements AfterViewInit {

  @Input() entityListing: EntityHeader[] = [];
  @Input() users: User[] = [];
  @Output() userUpdated = new EventEmitter<User[]>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public displayedColumns = UserConstant.displayedColumns;
  public dataSource = new MatTableDataSource<User>(this.users);
  public isAllSelected: boolean = false;                       

  constructor(private dialog: MatDialog ) { }

  ngAfterViewInit() {
    this.dataSource.data = this.users;
    this.dataSource.paginator = this.paginator;
    this.isAllSelected = this.checkIsAllSelected();
  }

  public onAllSelection(event: MatCheckboxChange): void {             // all row selection feature
    this.users.forEach(user => user.isSelected = event.checked);
    this.isAllSelected = this.checkIsAllSelected();
  }

  public onChanged(event: MatCheckboxChange, user: User): void {       
    const idx = this.users.findIndex(element => element.id === user.id);     // single row selection feature
    this.users[idx].isSelected = event.checked;
    this.isAllSelected = this.checkIsAllSelected();
  }

  public onEditUser(user: User): void {     
    const dialogRef = this.dialog.open(EditUserComponent, {    // open edit dialog component
      width: '400px',   
      data: user,
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.editUser(result);
      console.log(result);
    });
  }

  public onDelete(user: User): void {      // delete user and update the user list
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '400px',
      data: user.name,
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        const idx = this.users.findIndex(item => item.id === user.id);
        if (idx !== -1) {
          this.users.splice(idx, 1);
          this.dataSource.data = this.users;
          this.userUpdated.emit(this.users);
        }
      }
    });
  }

  private editUser(result: User): void {
    const idx = this.users.findIndex((user: User) => result.id === user.id);   // edit user and update the user list
    if (idx !== -1) {
      this.users[idx] = result;
      this.dataSource.data = this.users;
    }
    this.userUpdated.emit(this.users);
  }

  private checkIsAllSelected(): boolean {  
    return this.users.every(user => user.isSelected);   // to check is all row selected
  }
}
