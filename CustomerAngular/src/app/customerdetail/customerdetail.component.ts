import { Component, OnInit, Input } from '@angular/core';
import {Customer } from '../customer';
import { Login } from '../login';
import { CustomerServiceService} from '../customer-service.service';
@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit{
customers: Customer;
login: Login;
  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(){
      this.customerService.find().subscribe(data =>
    {
this.customers = data;
  });
  }
}
