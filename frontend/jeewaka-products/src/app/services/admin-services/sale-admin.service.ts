import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Observable} from "rxjs";
import {Resolve} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SaleAdminService implements Resolve<any>{

  sales = new Subject();
  undo = new Subject();

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any {
    this.getAllOrders("complete");
  }

  getAllOrders(status:any){
    this.httpClient.get(`http://localhost:8080/order/getOrdersByStatus/${status}`).subscribe((orders)=>{
      // console.log("orders",orders)
      this.sales.next(orders)
    });
  }

  undoOrder(sale:any){
    this.httpClient.post('http://localhost:8080/order/completeOrder',sale).subscribe((res)=>{
      // console.log(res)
      this.undo.next(res)
    });
  }

  getOrdersWithSearch(searchRQ:any){
    this.httpClient.post('http://localhost:8080/order/getOrdersWithSearch',searchRQ).subscribe((result)=>{
      // console.log(result)
      this.sales.next(result)
    });
  }
}
