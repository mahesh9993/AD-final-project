import { Component } from '@angular/core';
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons'
import {CartService} from "../../../services/product-services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  faDeleteLeft = faDeleteLeft;
  products:any = [];
  grandTotal = 0;

  constructor(private cartService: CartService,
              private router: Router){}

  ngOnInit():void{
    this.cartService.getCartItems().subscribe((response:any)=>{
      this.products = response;
      this.grandTotal = this.cartService.grandTotal();
      // console.log(response)
    });

    this.cartService.checkoutRes.subscribe((res)=>{
      if (res != null){
        alert("Orders successfully placed");
        this.cartService.emptyCart();
      }
    })

  }

  onRemoveItem(product:any){
    // console.log(product);
    this.cartService.removeItem(product);
  }

  onEmptyCart(){
    this.cartService.emptyCart();
  }

  onCheckout(){
    if (sessionStorage.getItem("loggedUser")!= null){
      // console.log("logged")
      this.cartService.checkout();
    } else {
      // console.log("notLogged")
      alert("Please login or signup to continue");
      this.router.navigate(['/login']);
    }
  }
}
