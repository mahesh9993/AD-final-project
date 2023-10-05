import { Component } from '@angular/core';
import {OrderService} from "../../../../services/product-services/order.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {OrderDto} from "./dto/orderDto";
import {Subscription} from "rxjs";
import {UserDto} from "./dto/userDto";
import {CartService} from "../../../../services/product-services/cart.service";
import {CartItem} from "../../cart/dto/cart-item";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  total = 0;
  quantity = 0;
  product:any;
  orderNow:String = "show";
  orderForm:FormGroup;
  userSubscription = new Subscription();
  orderDetails = new OrderDto();
  user = new UserDto();
  productId = Number(sessionStorage.getItem("productId"));

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder,
              private cartService: CartService){}

  ngOnInit():void{
    this.orderService.product.subscribe((product)=>{
      // console.log("p",product)
      this.product = product

    })

    this.userSubscription = this.orderService.user.subscribe((user)=>{
      // console.log("user",user)
      this.user = new UserDto(user);
    })



  }

  ngOnDestroy():void{
    this.userSubscription.unsubscribe();

  }


  totalPrice(value:any){
    // console.log("click",value);
    let uPrice = this.product.unitPrice;
    let total = 0;
    let quantity = 0;

    if(value == 1){
      total = 1* uPrice,
      quantity = 100
    }else if (value == 2) {
      total = 2.5* uPrice,
      quantity = 250
    }else if (value == 3) {
      total = 5* uPrice,
      quantity = 500
    }else if (value == 4) {
      total = 10* uPrice,
      quantity = 1000
    }else if (value == 5) {
      total = 20* uPrice,
      quantity = 2000
    }

    this.total = total;
    this.quantity = quantity;
  }

  onOrderNow(){
    this.orderForm = this.createOrderForm();

    let loggedUser = sessionStorage.getItem("loggedUser")

    if (this.total != 0) {
      if (loggedUser != null){
        this.orderNow ="hide";
      }else {
        alert("Please login to order!"),
          this.router.navigate(['/login'])
      }
    }else {
      alert("Please add a quantity yo need");
    }
  }

  createOrderForm(){
    return this.formBuilder.group({
      userId: [this.user.userId],
      productId:[this.productId],
      quantity:[this.quantity],
      amount:[this.total],
      status:['incomplete'],
      deliveryAddress:[this.user.address]
    });
  }

  onOrderConfirm(){
    // console.log("click");
    let orderDetails = new OrderDto(this.orderForm.getRawValue());
    // console.log("od",orderDetails);

    this.orderService.addOrder(orderDetails);

    alert("order successfully placed");

    this.router.navigate(['/product']);


  }

  onAddToCart(product:any){

    this.orderForm = this.createOrderForm();


    if (this.total != 0) {
      let addToCartDetail = this.orderForm.getRawValue();
      // console.log(addToCartDetail);

      let cartItemDto = new CartItem(product,addToCartDetail);

      this.cartService.addToCart(cartItemDto);
      alert("Item successfully added to the cart")
    }else {
      alert("Please add a quantity yo need");
    }

  }

}
