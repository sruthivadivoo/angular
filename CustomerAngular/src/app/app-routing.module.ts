import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent} from './customer-list/customer-list.component';
import { CustomerFormComponent} from './customer-form/customer-form.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { UserOptionComponent } from './user-option/user-option.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'customers', component: CustomerListComponent},
  {path : 'addcustomer', component: CustomerFormComponent},
  {path : 'adminaction', component: AdminListComponent},
  {path : 'deleteCustomer' , component : DeleteFormComponent},
  {path : 'customeraction', component : UserOptionComponent},
  {path : 'login' , component : UserLoginComponent},
  {path : 'find' , component : CustomerdetailComponent},
  {path : 'first' , component : AppComponent},
  {path : 'logout' , component : LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
