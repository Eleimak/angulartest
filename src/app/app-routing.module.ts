import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyCarComponent} from './view/company-car/company-car.component';

const routes: Routes = [
  {path: 'company', component: CompanyCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
