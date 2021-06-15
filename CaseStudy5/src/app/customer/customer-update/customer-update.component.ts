import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../../model/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customer: Customer;
  private id: number;
  customerFormGroup: FormGroup;

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.customerFormGroup= new FormGroup({
      id: new FormControl(''),
      idCustomer: new FormControl(),
      name: new FormControl(),
      idCard: new FormControl(''),
      dateOfBirth: new FormControl(),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(),
      typeCustomer: new FormGroup(
        {
          name: new FormControl()
        }
      ),
    });
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.customerService.findById(this.id).subscribe(value => {
      this.customer = value;
    }, error => {

    }, ()=>{
      this.customerFormGroup = new FormGroup({
        id: new FormControl(this.customer.id),
        idCustomer: new FormControl(this.customer.idCustomer),
        name: new FormControl(this.customer.name),
        idCard: new FormControl(this.customer.idCard),
        dateOfBirth: new FormControl(this.customer.dateOfBirth),
        phone: new FormControl(this.customer.phone),
        email: new FormControl(this.customer.phone),
        address: new FormControl(this.customer.address),
        typeCustomer: new FormGroup(
          {
            name: new FormControl(this.customer.typeCustomer.name)
          }
        ),
      });
    });
  }
  updateCustomer(): void {
    let customerObj: Customer = Object.assign({}, this.customerFormGroup.value);
    this.customerService.update(customerObj).subscribe(value => {

    }, error => {

    }, () => {
      this.router.navigateByUrl('/list');
    });
  }

}
