import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './model/customer';
import {TypeCustomer} from './model/type-customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  URL: string = 'http://localhost:3000/customerList';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL);
  }

  save(customer: Customer): Observable<void> {
    return this.http.post<void>(this.URL, customer);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.URL + '/' + id);
  }

  findById(id: number): Observable<Customer>{
    return this.http.get<Customer>(this.URL + '/'+ id);

  }
  update(customer: Customer): Observable<void> {
    return this.http.put<void>(this.URL + '/' + customer.id, customer);
  }

  findAllTypeCustomer(): Observable<TypeCustomer[]> {
    return this.http.get<TypeCustomer[]>('http://localhost:3000/typeCustomerList');
  }
}
