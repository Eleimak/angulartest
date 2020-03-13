export class HttpString {
  companyCar: string;
  customer: string;
  rentCar: string;
  returnRentCar: string;

  constructor() {
    this.companyCar = 'https://rentalscarangular.herokuapp.com/api/company';
    this.customer = 'https://rentalscarangular.herokuapp.com/api/customer';
    this.rentCar = 'https://rentalscarangular.herokuapp.com/api/rentcar';
    this.returnRentCar = 'https://rentalscarangular.herokuapp.com/api/return';
  }
}
