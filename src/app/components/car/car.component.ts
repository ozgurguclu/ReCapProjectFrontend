import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carImages: CarImage[] = [];
  carsImages: CarImage[] = [];
  dataLoaded = false;
  baseImagePath: string = 'https://localhost:44311/Images/';
  defaultImagePath: string = 'https://localhost:44311/Images/default.jpg';

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params["brandId"] && params["colorId"]){
        this.getCarsByBrandAndColorId(params["brandId"], params["colorId"])
      }else if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCars();
      }
    });
    this.getAllCarsImages();
  }

  carImage(car: Car): string {
    this.carImages = [];
    this.carsImages.forEach((p: CarImage) => {
      if (p.carId === car.carId) {
        this.carImages.push(p);
      }
    });
    if (this.carImages.length === 0) {
      return this.defaultImagePath;
    }
    return this.baseImagePath + this.carImages[0].imagePath;
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandAndColorId(brandId:number, colorId:number){
    this.carService.getCarsByBrandAndColor(brandId, colorId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getAllCarsImages() {
    this.carImageService.getAllCarImages().subscribe((data) => {
      this.carsImages = data.data;
    });
  }
}
