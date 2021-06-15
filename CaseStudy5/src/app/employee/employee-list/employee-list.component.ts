import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  idDelete: number;
  nameDelete: string;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.loadList();
  }

  passData(id: number, name: string) {
    this.idDelete =id;
    this.nameDelete = name;
  }
  deleteById(id: number){
    this.employeeService.deleteById(Number(id)).subscribe();
    this.loadList();  }

  loadList() {
    this.employeeService.findAll().subscribe((data) => {
      this.employees = data;
    });
  }
}
