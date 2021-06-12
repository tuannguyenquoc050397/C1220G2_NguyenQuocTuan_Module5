import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../employee.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  idDelete: string;
  nameDelete: string;

  constructor(private employeeService: EmployeeService) {
    this.employees=this.employeeService.findAll();
  }

  ngOnInit(): void {
  }

  passData(id: string, name: string) {
    this.idDelete =id;
    this.nameDelete = name;
  }
  deleteById(id: string){
    this.employeeService.deleteById(id);
  }
}
