import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../service/product.service';

import { ActivatedRoute } from '@angular/router';
import { Product } from './../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  products: Product[] = [];
  constructor(route: ActivatedRoute,
    private productService: ProductService) {
    this.productService.getAll().subscribe( prods => this.products = prods);
     }

}





