import {Injectable} from '@angular/core';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: '1',
      name: 'Tran A',
      dateOfBirth: '01/02/2002',
      idCard: '123123123',
      phone: '0906123123',
      email: 'ta@gmail.com',
      address: 'Da Nang',
      salary: '1000',
      position: 'position1',
      educationDegree: 'edu1',
      division: 'division1'
    },
    {
      id: '2',
      name: 'Tran B',
      dateOfBirth: '11/02/2002',
      idCard: '123123121',
      phone: '0906123121',
      email: 'tb@gmail.com',
      address: 'Hue',
      salary: '1100',
      position: 'position2',
      educationDegree: 'edu2',
      division: 'division2'
    },
    {
      id: '3',
      name: 'Tran C',
      dateOfBirth: '05/02/2002',
      idCard: '123123923',
      phone: '0906123323',
      email: 'tc@gmail.com',
      address: 'Ha Noi',
      salary: '2000',
      position: 'position3',
      educationDegree: 'edu3',
      division: 'division1'
    },
    {
      id: '4',
      name: 'Tran D',
      dateOfBirth: '09/02/2002',
      idCard: '123123129',
      phone: '0906123120',
      email: 'td@gmail.com',
      address: 'Da Nang',
      salary: '5000',
      position: 'position2',
      educationDegree: 'edu3',
      division: 'division1'
    },
  ];

  constructor() {
  }

  findAll(){
    return this.employees;
  }
  deleteById(id: string) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id === id) {
        this.employees.splice(i, 1);
      }
    }
  }
  save(employee: Employee){
    this.employees.push(employee);
  }
}
