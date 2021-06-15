import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[];
  idDelete: string;
  constructor(private contractService: ContractService) {

  }

  ngOnInit(): void {
    this.contracts = this.contractService.findAll();
  }
  deleteById(id: string) {
    this.contractService.deleteById(id);
  }

  passData(idFromView: string) {
    this.idDelete = idFromView;
  }
}
