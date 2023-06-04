import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit{

  carDetails: CarDetail[] = [];
  carImages: string[] = [];
  dataLoaded: boolean = false;
  

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsById(params['carId']);
        this.getImagesByCarId(params['carId']);
      }
    });
  }

  getCarDetailsById(id: number) {
    this.carService.getCarDetailsById(id).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((value) => {
      value.data.map((value1) => (this.carImages = value1.imagePath.split(','))),
        (this.carImages = value.data
          .map((value1) => value1.imagePath.split(','))
          .flat());
    });
  }
}
