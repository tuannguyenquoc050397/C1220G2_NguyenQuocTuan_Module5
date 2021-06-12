import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';
import {Customer} from '../model/customer';
import {Employee} from '../model/employee';
import {Service} from '../model/service';
import {CustomerService} from '../customer/customer.service';
import {EmployeeService} from '../employee/employee.service';
import {ServiceService} from '../service/service.service';

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
      startDate: '01/02/2000',
      endDate: '04/02/2000',
      customer: this.customerService.findAll()[0],
      employee: this.employeeService.findAll()[0],
      service: this.serviceService.findAll()[0],
      deposit: '500',
    },
    {
      id: '2',
      startDate: '01/02/2001',
      endDate: '04/02/2001',
      customer: this.customerService.findAll()[1],
      employee: this.employeeService.findAll()[1],
      service: this.serviceService.findAll()[1],
      deposit: '500',
    },
    {
      id: '3',
      startDate: '01/02/2003',
      endDate: '04/02/2003',
      customer: this.customerService.findAll()[2],
      employee: this.employeeService.findAll()[2],
      service: this.serviceService.findAll()[2],
      deposit: '1000',
    },
    {
      id: '4',
      startDate: '01/02/2004',
      endDate: '04/02/2004',
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
    this.customers = this.customerService.findAll();
    this.employees = this.employeeService.findAll();
    this.services = this.serviceService.findAll();
  }

  findAll(){
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
    for (let i = 0; i< this.customers.length; i++){
      if (this.customers[i].id == contract.customer.id){
        contract.customer = this.customers[i];
        break;
      }
    }
    return this.contracts.push(contract);
  }


}
