import { Component, OnInit } from '@angular/core';
import {CompanyCarService} from '../../service/company-car.service';

@Component({
  selector: 'app-company-car',
  templateUrl: './company-car.component.html',
  styleUrls: ['./company-car.component.css']
})
export class CompanyCarComponent implements OnInit {
  items: any;

  constructor(private companyCarService: CompanyCarService) {
    this.getAll();
  }

  ngOnInit() {
  }

  getAll() {
    this.companyCarService.getAll().subscribe((response) => {
      this.items = response;
    });
  }

}
