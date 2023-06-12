import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44311/api/rentals";

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>> {
    let newUrl = this.apiUrl + '/getall';
    return this.httpClient.get<ListResponseModel<Rental>>(newUrl);
  }

  getRentalDetails():Observable<ListResponseModel<RentalDetail>> {
    let newUrl = this.apiUrl + '/getrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newUrl);
  }

  getRentalDetailsByCarId():Observable<ListResponseModel<RentalDetail>> {
    let newUrl = this.apiUrl + '/getrentaldetailsbycarid?carId=';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newUrl);
  }

  getRentalDetailsCustomerId():Observable<ListResponseModel<RentalDetail>> {
    let newUrl = this.apiUrl + '/getrentaldetailscustomerid?customerId=';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newUrl);
  }
}