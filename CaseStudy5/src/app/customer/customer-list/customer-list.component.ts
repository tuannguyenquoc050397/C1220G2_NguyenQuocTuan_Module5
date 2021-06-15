import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';
import {ContractService} from '../../contract/contract.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  nameDelete: string;
  idDelete: number;
  page = 1;
  pageSize =2;

  constructor(private customerService: CustomerService,
              private contractService: ContractService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.loadList();
  }

  deleteById(id: number) {
    this.customerService.deleteById(Number(id)).subscribe();
    this.loadList();
  }

  passData(idFromView: number, nameFromView: string) {
    this.nameDelete = nameFromView;
    this.idDelete = idFromView;
  }

  customersUsingService() {
    let contracts = this.contractService.findAll();
    let customersUsingService: Customer[] = [];
    let dateNow = this.getDateNow();
    let day_now = dateNow.substr(8, 2);
    let month_now = dateNow.substr(5, 2);
    let year_now = dateNow.substr(0, 4);
    let day_end: string;
    let month_end: string;
    let year_end: string;
    console.log(contracts.length);
    console.log(contracts[1]);
    for (let i = 0; i < contracts.length; i++) {
      day_end = contracts[i].endDate.substr(8, 2);
      month_end = contracts[i].endDate.substr(5, 2);
      year_end = contracts[i].endDate.substr(0, 4);
      if (year_end > year_now) {
        customersUsingService.push(contracts[i].customer);
      }
      if (year_end == year_now) {
        if (month_end > month_now) {
          customersUsingService.push(contracts[i].customer);
        }
        if (month_end == month_now) {
          if (day_end >= day_now) {
            customersUsingService.push(contracts[i].customer);
          }
        }
      }
    }
    let customersNotDuplicate: Customer[] = [];
    for (let j = 0; j < customersUsingService.length; j++) {
      if (customersNotDuplicate.indexOf(customersUsingService[j]) === -1) {
        customersNotDuplicate.push(customersUsingService[j]);
      }
    }
    this.customers = customersNotDuplicate;
    this.router.navigateByUrl('/customer/list');
  }

  getDateNow(): string {
    let today = new Date();
    let day: string;
    let month: string;
    let year: string = today.getFullYear().toString();
    if (today.getMonth().toString().length === 1) {
      month = '0' + (today.getMonth() + 1).toString();
    } else {
      month = (today.getMonth() + 1).toString();
    }
    if (today.getDate().toString().length === 1) {
      day = '0' + today.getDate().toString();
    } else {
      day = today.getDate().toString();
    }
    return year + '-' + month + '-' + day;
  }

  loadList() {
    this.customerService.findAll().subscribe((data) => {
      this.customers = data;
    });
  }
}
