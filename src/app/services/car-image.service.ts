import { Injectable } from '@angular/core';
import { DataResponseModel } from '../models/dataResponseModel';
import { CarImage } from '../models/carImage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:44311/api/carImages';

  constructor(private httpClient: HttpClient) {}

  getImagesByCarId(carId: number): Observable<DataResponseModel<CarImage>> {
    let newUrl = this.apiUrl + '/getimagesbycarid?carId=' + carId;
    return this.httpClient.get<DataResponseModel<CarImage>>(newUrl);
  }
}