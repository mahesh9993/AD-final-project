import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService implements Resolve<any>{

  product = new Subject();
  user = new BehaviorSubject({});

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any {

    this.getProductById();
    this.getUserById();
  }

  getProductById(){
    // console.log("method works");
    let productId = sessionStorage.getItem("productId");
    // console.log("pid",productId);

    if (productId != null) {
      this.httpClient.get(`http://localhost:8080/product/getProductById/${productId}`).subscribe((product)=>{
        // console.log("product",product)
        this.product.next(product)
      })
    }

  }

  getUserById(){
    let userId = sessionStorage.getItem("loggedUser");

    this.httpClient.get(`http://localhost:8080/user/getUserById/${userId}`).subscribe((user)=>{
      // console.log("user",user)
      this.user.next(user)
    })
  }

  addOrder(newOrder:any){
    this.httpClient.post('http://localhost:8080/order/addOrder',newOrder).subscribe((orderDto)=>{
      console.log("orderDto",orderDto)
    })
  }

}
