import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {TypeCustomer} from '../model/type-customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  typeCustomer: TypeCustomer[] = [
    {
      id: '1',
      name: 'diamond'
    },
    {
      id: '2',
      name: 'platinum'
    },
    {
      id: '3',
      name: 'gold'
    }
  ];
  customers: Customer[];

  URL: string = 'http://localhost:3000/customerList';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL);
  }

  save(customer: Customer): Observable<void> {
    let typeCustomerCreate = customer.typeCustomer.name;
    for (let i = 0; i < this.typeCustomer.length; i++) {
      if (this.typeCustomer[i].name == typeCustomerCreate) {
        customer.typeCustomer = this.typeCustomer[i];
        break;
      }
    }
    return this.http.post<void>(this.URL, customer);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.URL + '/' + id);
  }

  findById(id: number): Observable<Customer>{
    return this.http.get<Customer>(this.URL + '/'+ id);

  }
  update(customer: Customer): Observable<void> {
    let typeCustomerCreate = customer.typeCustomer.name;
    for (let i = 0; i < this.typeCustomer.length; i++) {
      if (this.typeCustomer[i].name == typeCustomerCreate) {
        customer.typeCustomer = this.typeCustomer[i];
        break;
      }
    }
      return this.http.put<void>(this.URL + '/' + customer.id, customer);
  }

}
