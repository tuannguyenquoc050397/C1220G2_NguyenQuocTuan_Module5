import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerFormGroup: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    idCustomer: new FormControl('', [Validators.pattern('^KH-[\\d]{4}$'), Validators.required]),
    name: new FormControl(),
    idCard: new FormControl('', [Validators.pattern('^[0-9]{9}$'), Validators.required]),
    dateOfBirth: new FormControl(),
    phone: new FormControl('',
      [Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[\\d]{7}$'), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    address: new FormControl(),
    typeCustomer: new FormGroup(
      {
        name: new FormControl()
      }, this.isEmpty
    ),
  });

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const customer = this.customerFormGroup.value;
    this.customerService.save(customer).subscribe(() => {
    }, e => {

    }, () =>{
      this.router.navigateByUrl('/list');
    });
  }


  isEmpty(c: AbstractControl) {
    const v = c.value;
    return (v.name !== '') ?
      null : {
        isemptycode: true
      };
  }
}
