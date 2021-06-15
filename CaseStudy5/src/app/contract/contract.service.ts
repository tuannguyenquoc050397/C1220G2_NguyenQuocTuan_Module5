import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';
import {Customer} from '../model/customer';
import {Service} from '../model/service';
import {CustomerService} from '../customer/customer.service';
import {EmployeeService} from '../employee/employee.service';
import {ServiceService} from '../service/service.service';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  customers: Customer[];
  employees: Employee[];
  services: Service[];
  contracts: Contract[] = [
    {
      id: '1',
      startDate: '2000-06-06',
      endDate: '2000-06-07',
      customer: this.customerService.findAll()[0],
      employee: this.employeeService.findAll()[0],
      service: this.serviceService.findAll()[0],
      deposit: '500',
    },
    {
      id: '2',
      startDate: '2001-05-04',
      endDate: '2021-07-08',
      customer: this.customerService.findAll()[0],
      employee: this.employeeService.findAll()[1],
      service: this.serviceService.findAll()[1],
      deposit: '500',
    },
    {
      id: '3',
      startDate: '2000-12-12',
      endDate: '2022-12-15',
      customer: this.customerService.findAll()[2],
      employee: this.employeeService.findAll()[2],
      service: this.serviceService.findAll()[2],
      deposit: '1000',
    },
    {
      id: '4',
      startDate: '2000-09-09',
      endDate: '2000-11-11',
      customer: this.customerService.findAll()[3],
      employee: this.employeeService.findAll()[3],
      service: this.serviceService.findAll()[3],
      deposit: '1500',
    }
  ];

  constructor(private customerService: CustomerService,
              private employeeService: EmployeeService,
              private serviceService: ServiceService
  ) {

  }

  findAll(): Contract[] {
    this.customerService.findAll().subscribe((data) => {
      this.customers = data;
    }, error => {

    }, () => {
      this.contracts[0].customer = this.customers[0];
      this.contracts[1].customer = this.customers[0];
      this.contracts[2].customer = this.customers[0];
      this.contracts[3].customer = this.customers[0];
    });
    this.employeeService.findAll().subscribe((data) => {
      this.employees = data;
    }, error => {

    }, () => {
      this.contracts[0].employee = this.employees[0];
      this.contracts[1].employee = this.employees[2];
      this.contracts[2].employee = this.employees[3];
      this.contracts[3].employee = this.employees[1];
    });
    this.serviceService.findAll().subscribe((data) => {
      this.services = data;
    }, error => {

    }, () => {
      this.contracts[0].service = this.services[0];
      this.contracts[1].service = this.services[0];
      this.contracts[2].service = this.services[0];
      this.contracts[3].service = this.services[0];
    });
    return this.contracts;
  }

  deleteById(id: string) {
    for (let i = 0; i < this.contracts.length; i++) {
      if (this.contracts[i].id === id) {
        this.contracts.splice(i, 1);
        break;
      }
    }
  }


  save(contract: Contract) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id == contract.customer.id) {
        contract.customer = this.customers[i];
        break;
      }
    }
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id == contract.employee.id) {
        contract.employee = this.employees[i];
        break;
      }
    }
    for (let i = 0; i < this.services.length; i++) {
      if (this.services[i].id == contract.service.id) {
        contract.service = this.services[i];
        break;
      }
    }
    console.log(contract);
    return this.contracts.push(contract);
  }
}
