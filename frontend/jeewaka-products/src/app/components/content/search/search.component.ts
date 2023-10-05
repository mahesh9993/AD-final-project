import { Component } from '@angular/core';
import {ProductSearchService} from "../../../services/product-services/product-search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  products:any = [];

  constructor(private productSearchService: ProductSearchService){}

  ngOnInit():void{
    this.productSearchService.products.subscribe((products:any)=>{
      this.products = products
      // console.log(this.products)
    });
  }

  onSearchItem(productId:any){
    // console.log(productId);
    sessionStorage.setItem("productId",productId);
  }
}
