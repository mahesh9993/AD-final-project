import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatService implements Resolve<any>{

  sales = new Subject();
  orders  = new Subject();
  users = new Subject();
  products = new Subject();

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any {

    this.getAllSales("complete");
    this.getAllOrders("incomplete");
    this.getAllUsers();
    this.getAllProducts();
  }

  getAllSales(status:any){

    this.httpClient.get(`http://localhost:8080/order/getOrdersByStatus/${status}`).subscribe((sales)=>{
      // console.log("sales",sales)
      this.sales.next(sales)
    });

  }

getAllOrders(status:any){

  this.httpClient.get(`http://localhost:8080/order/getOrdersByStatus/${status}`).subscribe((orders)=>{
  // console.log("orders",orders)
    this.orders.next(orders)
  });

  }


  getAllUsers(){
    this.httpClient.get('http://localhost:8080/user/getAllUsers').subscribe((users)=>{
      // console.log("users",users)
      this.users.next(users)
    });
  }

  getAllProducts(){
    this.httpClient.get('http://localhost:8080/product/getAllProducts').subscribe((products)=>{
      // console.log("products",products)
      this.products.next(products)
    });
  }
}
