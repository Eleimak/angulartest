import {Car} from './car';

export class CompanyCar {
  id?: string;
  car: Car;
  color: string;
  costCar: number;
  licenseNumberPlates: string;
  rentalPrice: number;
  repair?: boolean;
  rent?: boolean;
}
