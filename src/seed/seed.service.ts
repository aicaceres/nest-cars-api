import { BrandsService } from './../brands/brands.service';
import { CarsService } from './../cars/cars.service';
import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
    constructor(
        private readonly carsService: CarsService,
        private readonly brandsServide: BrandsService,
    ) {}

    populateDb() {
        this.carsService.fillWithSeedData(CARS_SEED);
        this.brandsServide.fillWithSeedData(BRANDS_SEED);
        return 'Seed executed';
    }
}
