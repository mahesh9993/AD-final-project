import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddEditProductService implements Resolve<any>{

  product = new BehaviorSubject({});
  updatedProduct = new Subject();

  constructor(private httpClient: HttpClient) { }

  resolve():Observable<any> | Promise<any> | any {
    this.getProductById();
  }

  getProductById(){
    let productId = sessionStorage.getItem("editProductId");
    // console.log(productId);
  if (productId != null) {
    this.httpClient.get(`http://localhost:8080/product/getProductById/${productId}`).subscribe((product)=>{
      // console.log(product)
      this.product.next(product)
    });
  }else {
    this.product.next({});
  }
  }

  saveAndUpdateProduct(data:any){
    this.httpClient.post('http://localhost:8080/product/saveAndUpdateProduct',data).subscribe((product)=>{
      this.updatedProduct.next(product)
    });
  }

}
