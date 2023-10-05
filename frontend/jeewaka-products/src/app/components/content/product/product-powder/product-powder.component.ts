import { Component } from '@angular/core';
import {ProductService} from "../../../../services/product-services/product.service";

@Component({
  selector: 'app-product-powder',
  templateUrl: './product-powder.component.html',
  styleUrls: ['./product-powder.component.css']
})
export class ProductPowderComponent {

  products: any = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.productService.getProductsByCategory("Powder").subscribe((products)=>{
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
