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
 constructor(
          private route: ActivatedRoute,
          private router: Router,
          private customerService: CustomerServiceService) {}

  ngOnInit(): void{
this.customerService.logout();
this.router.navigate(['/login']);
  }

}
