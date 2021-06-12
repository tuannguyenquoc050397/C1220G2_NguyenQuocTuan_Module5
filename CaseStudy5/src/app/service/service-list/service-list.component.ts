import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import {Service} from '../../model/service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services: Service[];
  idDelete: string;
  nameDelete: string;

  constructor(private serviceService: ServiceService) {
    this.services = this.serviceService.findAll();
  }

  ngOnInit(): void {
  }

  passData(id: string, name: string) {
    this.idDelete =id;
    this.nameDelete = name;
  }
  deleteById(id: string){
    this.serviceService.deleteById(id);
  }



}
