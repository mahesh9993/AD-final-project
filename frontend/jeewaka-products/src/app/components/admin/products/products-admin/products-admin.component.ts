import { Component } from '@angular/core';
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {ProductAdminService} from "../../../../services/admin-services/product-admin.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent {

  faEdit = faEdit;
  searchForm : FormGroup;
  products:any = [];

  constructor(private productAdminService: ProductAdminService,
              private router: Router,
              private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.productAdminService.products.subscribe((res:any)=>{
      this.products = res
    });

    this.searchForm = this.formBuilder.group({
      searchInput:['',Validators.required]
    });
  }

  addEditProduct(product:any){
    // console.log("click",product);

    if (product != null){
      sessionStorage.setItem("editProductId",product.productId);
    }else {
      sessionStorage.removeItem("editProductId");
    }

    this.router.navigate(['/dashboard-menu/addEditProduct']);
  }

  onAdProductSrcBtn(){
    let searchRQ = this.searchForm.getRawValue();
    // console.log(searchRQ);
    this.productAdminService.getProductsWithSearch(searchRQ);

  }

}
