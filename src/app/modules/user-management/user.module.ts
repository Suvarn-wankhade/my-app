import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { UserRouting } from './user-routing.module';

import { UserContainerComponent } from './components/user-container/user-container.component';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProgressCalculationComponent } from './components/progress-calculation/progress-calculation.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EntityListingComponent } from './components/entity-listing/entity-listing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersComponent } from './components/users/users.component';

import { UserService } from './services/user.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRouting.routes),
        FlexLayoutModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatCardModule
    ],
    declarations: [
        EntityListingComponent,
        UsersComponent,
        EditUserComponent,
        SidebarComponent,
        NavbarComponent,
        UserContainerComponent,
        DeleteConfirmationComponent,
        StatisticsComponent,
        ProgressCalculationComponent
    ],
    providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }, UserService],
    exports: [],
    entryComponents: []
})
export class UserModule {
}
