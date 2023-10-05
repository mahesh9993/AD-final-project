import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  products = new Subject();

  constructor(private httpClient: HttpClient) { }

  productSearch(searchRQ:any){
    this.httpClient.post('http://localhost:8080/product/getProductsWithSearch',searchRQ)
      .subscribe((productList)=>{
      // console.log(productList);
        this.products.next(productList)
        // console.log(this.products)
    });
  }

}
