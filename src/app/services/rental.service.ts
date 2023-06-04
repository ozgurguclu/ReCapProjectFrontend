import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../models/dataResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44311/api/rentals";

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<DataResponseModel<Rental>> {
    let newUrl = this.apiUrl + '/getall';
    return this.httpClient.get<DataResponseModel<Rental>>(newUrl);
  }

  getRentalDetails():Observable<DataResponseModel<RentalDetail>> {
    let newUrl = this.apiUrl + '/getrentaldetails';
    return this.httpClient.get<DataResponseModel<RentalDetail>>(newUrl);
  }

  getRentalDetailsByCarId():Observable<DataResponseModel<RentalDetail>> {
    let newUrl = this.apiUrl + '/getrentaldetailsbycarid?carId=';
    return this.httpClient.get<DataResponseModel<RentalDetail>>(newUrl);
  }

  getRentalDetailsCustomerId():Observable<DataResponseModel<RentalDetail>> {
    let newUrl = this.apiUrl + '/getrentaldetailscustomerid?customerId=';
    return this.httpClient.get<DataResponseModel<RentalDetail>>(newUrl);
  }
}