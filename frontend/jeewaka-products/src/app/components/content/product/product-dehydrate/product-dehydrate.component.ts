import { Component } from '@angular/core';
import {ProductService} from "../../../../services/product-services/product.service";

@Component({
  selector: 'app-product-dehydrate',
  templateUrl: './product-dehydrate.component.html',
  styleUrls: ['./product-dehydrate.component.css']
})
export class ProductDehydrateComponent {

  products: any = [];


  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.productService.getProductsByCategory("Dehydrate").subscribe((products)=>{
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
