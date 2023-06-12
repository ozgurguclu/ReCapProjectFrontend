import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:44311/api/carImages';

  constructor(private httpClient: HttpClient) {}

  getAllCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + '/getall';
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + '/getimagesbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}