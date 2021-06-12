import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
  serviceFormGroup: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.pattern('^DV-[\\d]{4}$'), Validators.required]),
    name: new FormControl(),
    area: new FormControl('',Validators.min(1)),
    floor: new FormControl('',Validators.min(1)),
    rent: new FormControl('',Validators.min(1)),
    maxPeople: new FormControl('',Validators.min(1)),
    typeRent: new FormControl(),
    status: new FormControl()
  });

  constructor(private serviceService: ServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const employee = this.serviceFormGroup.value;
    this.serviceService.save(employee);
    this.router.navigateByUrl('/service/list');
  }

}
