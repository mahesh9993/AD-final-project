import { Component } from '@angular/core';
import {faUser,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {CartService} from "../../services/product-services/cart.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductSearchService} from "../../services/product-services/product-search.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faUser = faUser;
  faCartShopping = faCartShopping;
  cartItems:number = 0;
  searchForm: FormGroup;

  constructor(private router:Router,
              private cartService: CartService,
              private formBuilder: FormBuilder,
              private productSearchService: ProductSearchService) {}



  ngOnInit():void{
    this.cartService.getCartItems().subscribe((response:any)=>{
      // console.log(response)
      this.cartItems = response.length
    });

    this.searchForm = this.formBuilder.group({
      searchInput:['',Validators.required]
    });
  }


  onUserBtn(){
    let loggedUser = sessionStorage.getItem("loggedUser");

    if (loggedUser!=null){
      this.router.navigate(['/profile'])
    }else {
      this.router.navigate(['/login'])
    }
  }

  onSearchBtn(){
    let searchRQ = this.searchForm.getRawValue();
    // console.log(searchRQ);
    this.productSearchService.productSearch(searchRQ);
    this.router.navigate(['/search']);

  }
}
