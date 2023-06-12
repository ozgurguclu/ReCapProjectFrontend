import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { EntityResponseModel } from '../models/entityResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44311/api/cars";

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newUrl = this.apiUrl + '/getcardetails';
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newUrl = this.apiUrl + '/getcardetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let newUrl = this.apiUrl + '/getcardetailsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }

  getCarsByBrandAndColor(brandId:number, colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "getbybrandcolorid?brandId="+ brandId +"&colorId=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarById(id: number): Observable<ListResponseModel<Car>> {
    let newUrl = this.apiUrl + '/getcardetailsbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }
}