import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../models/dataResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44311/api/cars";

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<DataResponseModel<Car>> {
    let newUrl = this.apiUrl + '/getall';
    return this.httpClient.get<DataResponseModel<Car>>(newUrl);
  }

  getCarsByBrandId(brandId: number): Observable<DataResponseModel<Car>> {
    let newUrl = this.apiUrl + '/getcarsbybrandid?brandId=' + brandId;
    return this.httpClient.get<DataResponseModel<Car>>(newUrl);
  }

  getCarsByColorId(colorId: number): Observable<DataResponseModel<Car>> {
    let newUrl = this.apiUrl + '/getcarsbycolorid?colorId=' + colorId;
    return this.httpClient.get<DataResponseModel<Car>>(newUrl);
  }

  getCarDetails(): Observable<DataResponseModel<CarDetail>> {
    let newUrl = this.apiUrl + '/getcardetails';
    return this.httpClient.get<DataResponseModel<CarDetail>>(newUrl);
  }

  getCarDetailsById(id: number): Observable<DataResponseModel<CarDetail>> {
    let newUrl = this.apiUrl + '/getcardetailsbyid?carId=' + id;
    return this.httpClient.get<DataResponseModel<CarDetail>>(newUrl);
  }

  getCarDetailsByBrandId(brandId: number): Observable<DataResponseModel<CarDetail>> {
    let newUrl = this.apiUrl + '/getcardetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<DataResponseModel<CarDetail>>(newUrl);
  }

  getCarDetailsByColorId(colorId: number): Observable<DataResponseModel<CarDetail>> {
    let newUrl = this.apiUrl + '/getcardetailsbycolorid?colorId=' + colorId;
    return this.httpClient.get<DataResponseModel<CarDetail>>(newUrl);
  }
}