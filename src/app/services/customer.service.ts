import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../models/dataResponseModel';
import { Customer } from '../models/customer';
import { CustomerDetail } from '../models/customerDetail';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44311/api/customers";

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<DataResponseModel<Customer>> {
    let newUrl = this.apiUrl + '/getall';
    return this.httpClient.get<DataResponseModel<Customer>>(newUrl);
  }

  getCustomerDetails():Observable<DataResponseModel<CustomerDetail>> {
    let newUrl = this.apiUrl + '/getcustomerdetails';
    return this.httpClient.get<DataResponseModel<CustomerDetail>>(newUrl);
  }
}