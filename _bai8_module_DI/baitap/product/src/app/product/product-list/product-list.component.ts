import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  this.getAll();
  }

  getAll(){
    this.products = this.productService.getAll();
  }

  deleteById(id: number) {
    this.productService.deleteById(Number(id));
    this.router.navigateByUrl("/product/list");
  }
}
