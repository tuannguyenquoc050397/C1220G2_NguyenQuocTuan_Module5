import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  nameDelete: string;
  idDelete: string;

  constructor(private customerService: CustomerService,
              private router: Router) {
    this.customers = this.customerService.findAll();
  }

  ngOnInit(): void {
  }

  deleteById(id: string) {
    this.customerService.deleteById(id);
  }

  passData(idFromView: string, nameFromView: string) {
    this.nameDelete = nameFromView;
    this.idDelete = idFromView;
  }
}
