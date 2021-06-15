import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup;
  id: number;
  message ='';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    let product = this.productService.findById(Number(this.id));
    if (product === undefined){
      this.message = 'product ko ton tai';
    }else {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      })
    }

  }

  update(id:number){
    let productUpdate = this.productForm.value;
    this.productService.updateProduct(Number(id),productUpdate);
    this.router.navigateByUrl('');
  }

}
