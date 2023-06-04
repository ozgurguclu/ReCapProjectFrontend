import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../models/dataResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44311/api/brands/getall";

  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<DataResponseModel<Brand>> {
    return this.httpClient.get<DataResponseModel<Brand>>(this.apiUrl);
  }
}
