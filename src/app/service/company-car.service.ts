import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CompanyCar} from '../model/company-car';
import {HttpClient} from '@angular/common/http';
import {HttpString} from './http-string';

@Injectable({
  providedIn: 'root'
})
export class CompanyCarService {

  httpString: HttpString;

  constructor(private http: HttpClient) { }

  getAll(): Observable<CompanyCar[]> {
    return this.http.get<CompanyCar[]>(this.httpString.companyCar + '/list');
  }

  add(companyCar: CompanyCar): Observable<CompanyCar> {
    return this.http.post<CompanyCar>(this.httpString.companyCar + '/create', companyCar);
  }

  delete(id: string): Observable<any> {
    return this.http.get(this.httpString.companyCar + '/delete/' + id);
  }

  update(companyCar: CompanyCar): Observable<CompanyCar> {
    return this.http.post<CompanyCar>(this.httpString.companyCar + '/update', companyCar);
  }

  get(id: number): Observable<CompanyCar> {
    return this.http.get<CompanyCar>(this.httpString.companyCar + '/get/' + id);
  }
}
