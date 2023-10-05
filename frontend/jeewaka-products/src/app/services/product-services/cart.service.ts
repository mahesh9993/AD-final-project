import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {CartItem} from "../../components/content/cart/dto/cart-item";
import {CheckoutItem} from "../../components/content/cart/dto/checkout-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList:any = [];
  productList = new BehaviorSubject<any>([]);
  checkoutRes = new Subject();

  constructor(private httpClient: HttpClient) { }

  getCartItems():any{
    return this.productList.asObservable();
  }

  addToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    // console.log("cartList",this.cartItemList);
    this.grandTotal();
  }

  grandTotal(){
    let grandTotal = 0;

    this.cartItemList.map((a:any)=>{
      grandTotal += a.amount
    });
    // console.log("grandTotal",grandTotal);
    return grandTotal;
  }

  removeItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if (product.productId===a.productId){
        this.cartItemList.splice(index,1);
      }
    });

    this.grandTotal();
  }

  emptyCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  checkout(){
    let orderList:any = [];

    for (let order of this.cartItemList){
      orderList.push(new CheckoutItem(order));
    }
    console.log("orderList",orderList);

    this.httpClient.post('http://localhost:8080/order/cartCheckout',orderList).subscribe((res)=>{
      // console.log(res)
      this.checkoutRes.next(res);
    })
  }
}
