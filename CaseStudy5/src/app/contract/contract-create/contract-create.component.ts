import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../contract.service';
import {CustomerService} from '../../customer/customer.service';
import {Customer} from '../../model/customer';
import {ServiceService} from '../../service/service.service';
import {EmployeeService} from '../../employee/employee.service';
import {Service} from '../../model/service';
import {Router} from '@angular/router';
import {Contract} from '../../model/contract';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  customers: Customer[];
  services: Service[];
  employees: Employee[];

  contractForm: FormGroup = new FormGroup({
    id: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    deposit: new FormControl(),
    customer: new FormGroup(
      {
        id: new FormControl(),
        name: new FormControl()
      }
    ),
    service: new FormGroup(
      {
        id: new FormControl(),
        name: new FormControl()
      }
    ),
    employee: new FormGroup(
      {
        id: new FormControl(),
        name: new FormControl()
      }
    ),
  });

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private serviceService: ServiceService,
              private employeeService: EmployeeService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.customerService.findAll().subscribe((data) => {
      this.customers = data;
    });
    this.employeeService.findAll().subscribe((data) => {
      this.employees = data;
    });
    this.serviceService.findAll().subscribe((data) => {
      this.services = data;
    });  }

  // isEmpty(c: AbstractControl) {
  //   const v = c.value;
  //   return (v.name !== '') ?
  //     null : {
  //       isemptycode: true
  //     };
  // }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.save(contract);
    this.router.navigateByUrl('/contract/list');
  }

  click() {
     let contract: Contract[] =[];
     contract.push(this.contractService.findAll()[0]);
  }

}
