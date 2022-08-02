import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AssociatesComponent } from './modules/associates/associates.component';
import { BookingComponent } from './modules/booking/booking.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [{path:'',component:DefaultComponent,
children:[{path:'',component:DashboardComponent}]}, {path:'associates',component:AssociatesComponent}, {path:'booking',component:BookingComponent},{path:'changepassword', component:ChangepasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
