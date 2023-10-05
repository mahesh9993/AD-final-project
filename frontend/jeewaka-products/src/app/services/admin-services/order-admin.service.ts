import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderAdminService implements Resolve<any>{

  orders = new Subject();
  completedOrder = new Subject();

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any {
    this.getAllOrders("incomplete")
  }

  getAllOrders(status:any){
    this.httpClient.get(`http://localhost:8080/order/getOrdersByStatus/${status}`).subscribe((orders)=>{
      // console.log("orders",orders)
      this.orders.next(orders)
    });
  }

  completeOrder(order:any){
    this.httpClient.post('http://localhost:8080/order/completeOrder',order).subscribe((res)=>{
      // console.log(res)
      this.completedOrder.next(res)
    });
  }

  getOrdersWithSearch(searchRQ:any){
    this.httpClient.post('http://localhost:8080/order/getOrdersWithSearch',searchRQ).subscribe((result)=>{
      // console.log(result)
      this.orders.next(result)
    });
  }
}
