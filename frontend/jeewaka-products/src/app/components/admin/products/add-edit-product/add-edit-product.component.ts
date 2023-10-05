import { Component } from '@angular/core';
import {AddEditProductService} from "../../../../services/admin-services/add-edit-product.service";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EditProduct} from "../dto/editProduct";
import * as _ from 'underscore';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent {

  productForm:FormGroup;
  onProductChangSub = new Subscription();
  product = new EditProduct();
  formType:String;

  constructor(private addEditProductService: AddEditProductService,
              private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.onProductChangSub = this.addEditProductService.product.subscribe((product)=>{
      if (!_.isEmpty(product)) {
        this.product = new EditProduct(product);
        this.formType = "edit";
      }else {
        this.product =new EditProduct();
        this.formType = "new";
      }
      // console.log("product",this.product);

      this.productForm = this.createForm();
    });

    this.addEditProductService.updatedProduct.subscribe((product:any)=>{
      if (product.productId != null){
        alert("New details has been updated");
      }
    })

  }

  ngOnDestroy():void{
    this.onProductChangSub.unsubscribe();
  }

  createForm(){
    return this.formBuilder.group({
      productId:[this.product.productId],
      productName:[this.product.productName],
      productCategory:[this.product.productCategory],
      quantity:[this.product.quantity],
      unitPrice:[this.product.unitPrice],
      imgLink:[this.product.imgLink],
      description:[this.product.description]
    });
  }

  onAddEditBtn(){
    // console.log("click")
    let data = this.productForm.getRawValue();
    // console.log("data",data);
    this.addEditProductService.saveAndUpdateProduct(data);
  }

}
