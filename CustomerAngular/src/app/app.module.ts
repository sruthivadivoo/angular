import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerServiceService } from './customer-service.service';
import { AdminListComponent } from './admin-list/admin-list.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { UserOptionComponent } from './user-option/user-option.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { AuthguardService } from './authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerFormComponent,
    AdminListComponent,
    DeleteFormComponent,
    UserOptionComponent,
    UserLoginComponent,
    LogoutComponent,
    CustomerdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CustomerServiceService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
