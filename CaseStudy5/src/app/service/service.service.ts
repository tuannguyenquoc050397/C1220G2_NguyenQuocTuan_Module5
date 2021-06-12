import {Injectable} from '@angular/core';
import {Service} from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  services: Service[] = [
    {
      id: '1',
      name: 'service1',
      area: '50',
      floor: '1',
      maxPeople: '5',
      rent: '500',
      typeRent: 'day',
      status: 'on'
    },
    {
      id: '2',
      name: 'service2',
      area: '70',
      floor: '2',
      maxPeople: '10',
      rent: '800',
      typeRent: 'week',
      status: 'off'
    },
    {
      id: '3',
      name: 'service3',
      area: '60',
      floor: '3',
      maxPeople: '8',
      rent: '700',
      typeRent: 'month',
      status: 'on'
    },
    {
      id: '4',
      name: 'service4',
      area: '40',
      floor: '2',
      maxPeople: '6',
      rent: '600',
      typeRent: 'day',
      status: 'off'
    }
  ];

  constructor() {
  }

  findAll(){
    return this.services;
  }
  save(service: Service){
    this.services.push(service)
  }
  deleteById(id: string) {
    for (let i = 0; i < this.services.length; i++) {
      if (this.services[i].id === id) {
        this.services.splice(i, 1);
      }
    }
  }
}
