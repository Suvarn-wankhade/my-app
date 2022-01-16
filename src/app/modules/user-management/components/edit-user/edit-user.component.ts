import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from '../../models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public userForm!: FormGroup;
  public maxDate = new Date();

  constructor(private dialogRef: MatDialogRef<EditUserComponent>, @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setFormGroupValues();
    if (this.data) {
      this.patchFormValues();
    }
  }

  public onSubmit(): void {
    this.dialogRef.close(this.userForm.value); // close dialog ref with form values 
  }

  public onClose(): void {
    this.dialogRef.close(); // close dialog ref
  }

  public onDateChanged(event: MatDatepickerInputEvent<Date>): void {
    this.userForm.controls['dateOfBirth'].setValue(event.value?.toISOString()); // set date in ISO format
  }

  private setFormGroupValues(): void {  // set form group values
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(500)]],
      email: ['', [Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gender: [''],
      dateOfBirth: [''],
      address: [''],
      id: null
    });
  }

  private patchFormValues(): void {  // patch form group values
    this.userForm.patchValue(
      {
        name: this.data.name,
        email: this.data.email,
        gender: this.data.gender,
        dateOfBirth: this.data.dateOfBirth,
        address: this.data.address,
        id: this.data.id
      });
  }
}
