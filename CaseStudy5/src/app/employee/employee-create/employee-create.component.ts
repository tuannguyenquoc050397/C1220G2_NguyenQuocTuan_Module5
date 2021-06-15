import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employeeFormGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    idEmployee: new FormControl('', [Validators.pattern('^NV-[\\d]{4}$'), Validators.required]),
    name: new FormControl(),
    idCard: new FormControl('', [Validators.pattern('^[0-9]{9}$'), Validators.required]),
    dateOfBirth: new FormControl(),
    phone: new FormControl('',
      [Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[\\d]{7}$'), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    address: new FormControl(),
    salary: new FormControl(Validators.min(1)),
    division: new FormControl(),
    position: new FormControl(),
    educationDegree: new FormControl(),
  });

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const employee = this.employeeFormGroup.value;
    this.employeeService.save(employee).subscribe(() => {
    }, e => {

    }, () =>{
      this.router.navigateByUrl('/list');
    });
  }
}
