import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { Product } from '../models/product';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('ProductService', () => {
 let productService: ProductService,
     httpTestingController: HttpTestingController;


 beforeEach( () => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [ProductService]
   });
   productService = TestBed.get(ProductService);
   httpTestingController = TestBed.get(HttpTestingController);
 });

 afterEach(() => {
  httpTestingController.verify();
 });


    it('should retrieve get from the api', () => {
      const dummyProduts: Product[] = [{
        'Id': 1,
        'ProductName': 'Galaxy S3',
        'ModelCode': 'SM-S8ABCD13',
        'SerialNumber': 'SN00000001'
    },
    {
        'Id': 2,
        'ProductName': 'Galaxy S7',
        'ModelCode': 'SM-S8ABCD17',
        'SerialNumber': 'SN00000002'
    },
    {
        'Id': 3,
        'ProductName': 'Galaxy S8',
        'ModelCode': 'SM-S8ABCD18',
        'SerialNumber': 'SN00000003'
    }];
    productService.getAll().subscribe(prod => { expect(prod.lenght).toBe(3);
    });
    const request = httpTestingController.expectOne(environment.getproductsURL);
    expect(request.request.method).toBe('GET');
    request.flush(dummyProduts);

  });
});
