import {TypeCar} from './type-car.enum';
import {Fuel} from './fuel.enum';

export class Car {
  id?: string;
  brandCar: string;
  modelCar: string;
  typeCar: TypeCar;
  carMileage: number;
  transmission: boolean;
  yearCar: string;
  door: number;
  fuel: Fuel;
}
