import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerServiceService} from '../customer-service.service';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css']
})
export class DeleteFormComponent{
customer: Customer;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerServiceService) {
    this.customer = new Customer();
     }

onSubmit() {
  this.customerService.delete(this.customer).subscribe(result => this.gotoCustomerList());
}
gotoCustomerList(){
  this.router.navigate(['/first']);
  alert('Customer Details deleted successfully');
}
}
