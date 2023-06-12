import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent {
  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  carDetail: Car;
  carImages: CarImage[] = [];
  dataLoaded = false;
  baseImagePath: string = 'https://localhost:44311/Images/';
  defaultImagePath: string = 'https://localhost:44311/Images/default.jpg';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarDetailByCarId(params['carId']);
      this.getCarImagesByCarId(params['carId']);
    });
  }

  getCarDetailByCarId(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.carDetail = response.data[0];
      this.dataLoaded = true;
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getSliderClassName(index: Number) {
    if (index == 0) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }
}
