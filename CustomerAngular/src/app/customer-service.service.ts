import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs/Observable';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
private customersUrl: string;
  constructor(private http: HttpClient) {
     this.customersUrl = 'http://localhost:8086/customers';

   }
   public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }
 public save(customer: Customer) {
    return this.http.post<Customer>('http://localhost:8086/addCustomer', customer);
  }
  public delete(customer: Customer){
    return this.http.delete('http://localhost:8086/deleteCustomer', {
      params: {
        id: customer.id
      }
    });
  }
  public login(login: Login): Observable<Login>{
    return this.http.get<Login>('http://localhost:8086/login', {
  params: {
    username : login.username,
    password : login.password

  }

});
  }
  public find(login: Login): Observable<Customer>{
     return this.http.get<Customer>('http://localhost:8086/find', {
  params: {
        username : login.username
      }
    });
  }
    public isCustomerLoggedIn() {
    let customer = localStorage.getItem('id');
    return !(customer === null);
  }
}