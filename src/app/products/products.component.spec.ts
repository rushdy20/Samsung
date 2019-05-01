import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';


import { ProductsComponent } from './products.component';

import { ProductService } from '../service/product.service';
import { HttpClientService } from '../service/http-client.service';
import { Product } from '../models/product';

describe('ProductsComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
     providers: [ProductService, HttpClientService]
    });
    });
  });

