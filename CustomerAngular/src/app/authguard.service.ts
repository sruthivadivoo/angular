import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CustomerServiceService} from './customer-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

   constructor(
    private router: Router,
    private customerService: CustomerServiceService
  ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.customerService.isCustomerLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/first']);
      return false;
    }
  }
}

