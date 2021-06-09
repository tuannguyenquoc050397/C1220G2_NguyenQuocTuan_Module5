import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {min} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('tuan@gmail.com', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', Validators.minLength(6)),
        confirmPassword: new FormControl('')
      }, this.comparePassword),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.min(18), Validators.required]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.pattern('[0-9]{10}'))
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.registerForm.value);
  }

  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirmPassword) ?
      null : {
        passwordnotmacth: true
      };
  }
}
