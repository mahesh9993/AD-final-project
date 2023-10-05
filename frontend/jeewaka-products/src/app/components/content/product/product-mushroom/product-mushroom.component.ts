import { Component } from '@angular/core';
import {ProductService} from "../../../../services/product-services/product.service";

@Component({
  selector: 'app-product-mushroom',
  templateUrl: './product-mushroom.component.html',
  styleUrls: ['./product-mushroom.component.css']
})
export class ProductMushroomComponent {

  products: any = [];


  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.productService.getProductsByCategory("Mushroom").subscribe((products)=>{
      //console.log("pp",products)
      this.products = products

    })
  }

  onProduct(product:any){
    if (product){
      sessionStorage.setItem("productId",product.productId);
    } else {
      sessionStorage.removeItem("productId")
    }
  }

}
