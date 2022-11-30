import { CarsService } from './cars.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number) {
        const car = this.carsService.findOneById(id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);

        return car;
    }

    @Post()
    createCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
        return body;
    }

    @Patch(':id')
    updateCar(@Body() body: any) {
        return body;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return {
            method: 'delete',
            id,
        };
    }
}
