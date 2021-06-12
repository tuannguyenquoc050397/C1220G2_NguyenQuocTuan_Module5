import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {TypeCustomer} from '../model/type-customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  typeCustomer: TypeCustomer[]=[
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
  customers: Customer[] = [
    {
      id: '1',
      name: 'Nguyen A',
      dateOfBirth: '05/06/2021',
      idCard: '145141451',
      phone: '090451458',
      email: 'a@gmail.com',
      address: 'Da Nang',
      typeCustomer: this.typeCustomer[2]
    },
    {
      id: '2',
      name: 'Nguyen B',
      dateOfBirth: '06/06/2021',
      idCard: '145141521',
      phone: '090451451',
      email: 'b@gmail.com',
      address: 'Ha Noi',
      typeCustomer: this.typeCustomer[1]
    },
    {
      id: '3',
      name: 'Nguyen C',
      dateOfBirth: '12/06/2021',
      idCard: '145141452',
      phone: '090451452',
      email: 'c@gmail.com',
      address: 'Da Nang',
      typeCustomer: {
        id: '3',
        name: 'gold'
      }
    },
    {
      id: '4',
      name: 'Nguyen D',
      dateOfBirth: '14/06/2021',
      idCard: '145141455',
      phone: '090451423',
      email: 'c@gmail.com',
      address: 'Hue',
      typeCustomer: {
        id: '1',
        name: 'diamond'
      }
    }
  ];

  constructor() {
  }

  findAll(): Customer[] {
    return this.customers;
  }

  save(customer: Customer) {
    let typeCustomerCreate = customer.typeCustomer.name;
    for (let i = 0; i< this.typeCustomer.length; i++){
      if (this.typeCustomer[i].name == typeCustomerCreate){
          customer.typeCustomer = this.typeCustomer[i];
          break;
      }
    }
    return this.customers.push(customer);
  }

  deleteById(id: string) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        this.customers.splice(i, 1);
        break;
      }
    }
  }

}
