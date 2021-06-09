import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('tuan@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.minLength(6))
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.loginForm.value);
  }
}
