import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { AssociatesComponent } from 'src/app/modules/associates/associates.component';
import { BookingComponent } from 'src/app/modules/booking/booking.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { ChangepasswordComponent } from 'src/app/changepassword/changepassword.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AssociatesComponent,
    BookingComponent,
    DialogComponent,
ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
MatFormFieldModule,
MatInputModule,
MatSortModule,
    MatButtonModule,
    LayoutModule,
    HttpClientModule,
    MatDividerModule ,
    MatListModule,
    MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule

  ]
})
export class DefaultModule { }
