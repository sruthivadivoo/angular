import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { CustomerServiceService} from '../customer-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent{
  login: Login;
  customer: Customer;
      constructor(
          private route: ActivatedRoute,
          private router: Router,
          private customerService: CustomerServiceService) {
    this.login = new Login();
    this.customer = new Customer();

     }

 OnSubmit() {
    this.customerService.login(this.login).subscribe(result => this.gotoCustomerList());
  }
gotoCustomerList(){
  this.router.navigate(['/find'], { state: { msg: 'Login Success..!!' } });
}
}
