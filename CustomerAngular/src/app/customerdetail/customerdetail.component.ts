import { Component, OnInit, Input } from '@angular/core';
import {Customer } from '../customer';
import { Login } from '../login';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService} from '../customer-service.service';
@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent{
customers: Customer;
login: Login;
msg: string;
  constructor(
          private route: ActivatedRoute,
          private router: Router,
          private customerService: CustomerServiceService) {
     this.msg = this.router.getCurrentNavigation().extras.state.msg;
   }
          ngOnInit() {
      this.customerService.find().subscribe(data =>
    {
this.customers = data;
  });
  }
}
