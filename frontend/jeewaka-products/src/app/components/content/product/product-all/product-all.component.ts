import { Component } from '@angular/core';
import {ProductService} from "../../../../services/product-services/product.service";

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.css']
})
export class ProductAllComponent {

  products: any = [] /*dto list from products*/


  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.productService.getProducts().subscribe((products)=>{
      //console.log("products",products);
      this.products = products;

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
