import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Customer } from '../customer';
import { CustomerServiceService} from '../customer-service.service';



@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
   customers: Customer[];
 constructor(private customerService: CustomerServiceService) { }

  ngOnInit(){
    this.customerService.findAll().subscribe(data =>
    {
this.customers = data;
  });
  }

}
