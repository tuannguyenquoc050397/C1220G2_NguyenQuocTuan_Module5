import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Product} from '../../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl('', [ Validators.required]),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });
  products: Product[];

  constructor(private productService: ProductService,
              private router: Router) {
    this.products = this.productService.getAll();

  }


  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    if (this.checkIdProductCreate(Number(product.id))){
      alert("id duplicate");
    }else {
      this.productService.saveProduct(product);
      this.productForm.reset();
      this.router.navigateByUrl('/product/list');
    }

  }

  checkIdProductCreate(id:number): boolean{
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return true;
      }
    }
    return false;
  }

}
