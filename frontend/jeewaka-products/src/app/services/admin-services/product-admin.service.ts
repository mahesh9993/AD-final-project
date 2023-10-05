import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductAdminService implements Resolve<any>{

  products = new Subject();

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any {
    this.getAllProducts();
  }

  getAllProducts(){
    this.httpClient.get('http://localhost:8080/product/getAllProducts').subscribe((products)=>{
      // console.log(products)
      this.products.next(products)
    });
  }

  getProductsWithSearch(searchRQ:any){
      if (searchRQ.searchInput != ''){
        this.httpClient.post('http://localhost:8080/product/getProductsWithSearch',searchRQ).subscribe((result)=>{
          // console.log(result)
          this.products.next(result)
        });
      }else {
        this.getAllProducts();
      }

  }
}
