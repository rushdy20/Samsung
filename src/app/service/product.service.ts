import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { environment } from 'src/environments/environment';
import { Product } from './../models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) { }
  getAll() { 
    return this.httpClientService.get(environment.getproductsURL);
  }

}
