import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { CustomerDetail } from '../models/customerDetail';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44311/api/customers";

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>> {
    let newUrl = this.apiUrl + '/getall';
    return this.httpClient.get<ListResponseModel<Customer>>(newUrl);
  }

  getCustomerDetails():Observable<ListResponseModel<CustomerDetail>> {
    let newUrl = this.apiUrl + '/getcustomerdetails';
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(newUrl);
  }
}