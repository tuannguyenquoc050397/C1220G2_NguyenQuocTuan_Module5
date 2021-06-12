import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../contract.service';
import {CustomerService} from '../../customer/customer.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  customers: Customer[];

  contractForm: FormGroup = new FormGroup({
    id: new FormControl(),
    start_date: new FormControl(),
    end_date: new FormControl(),
    deposit: new FormControl(),
    customer: new FormGroup(
      {
        id: new FormControl(),
        name: new FormControl()
      }, this.isEmpty
    ),
  });
  constructor(private contractService: ContractService,
              private customerService: CustomerService) {
    this.customerService.findAll();
  }

  ngOnInit(): void {
  }
  isEmpty(c: AbstractControl) {
    const v = c.value;
    return (v.name !== '') ?
      null : {
        isemptycode: true
      };
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.save(contract)
  }
}
