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
  idDelete: number;
  nameDelete: string;

  constructor(private serviceService: ServiceService) {
  }

  ngOnInit(): void {
    this.loadList();
  }

  passData(id: number, name: string) {
    this.idDelete =id;
    this.nameDelete = name;
  }
  deleteById(id: number){
    this.serviceService.deleteById(Number(id)).subscribe();
    this.loadList();  }

  loadList() {
    this.serviceService.findAll().subscribe((data) => {
      this.services = data;
    });
  }
}
