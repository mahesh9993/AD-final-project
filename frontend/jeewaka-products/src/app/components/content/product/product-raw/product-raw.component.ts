import { Component } from '@angular/core';
import {ProductService} from "../../../../services/product-services/product.service";

@Component({
  selector: 'app-product-raw',
  templateUrl: './product-raw.component.html',
  styleUrls: ['./product-raw.component.css']
})
export class ProductRawComponent {

  products: any = [];


  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.productService.getProductsByCategory("Raw").subscribe((products)=>{
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
