import { Component, OnInit } from '@angular/core';
import {Customer } from '../customer';
import { CustomerServiceService} from '../customer-service.service';
@Component({
  selector: 'app-user-option',
  templateUrl: './user-option.component.html',
  styleUrls: ['./user-option.component.css']
})
export class UserOptionComponent implements OnInit {
customers: Customer[];
  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(){
    this.customerService.findAll().subscribe(data =>
    {
this.customers = data;
  });
  }
}

