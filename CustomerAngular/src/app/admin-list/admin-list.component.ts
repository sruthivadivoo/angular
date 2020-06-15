import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerServiceService} from '../customer-service.service';
@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
   customers: Customer[];
 constructor(private customerService: CustomerServiceService) { }

  ngOnInit(){
    this.customerService.findAll().subscribe(data =>
    {
this.customers = data;
  });
  }

}
