import { Component } from '@angular/core';
import {SaleAdminService} from "../../../services/admin-services/sale-admin.service";
import {faUndo} from "@fortawesome/free-solid-svg-icons"
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sales-admin',
  templateUrl: './sales-admin.component.html',
  styleUrls: ['./sales-admin.component.css']
})
export class SalesAdminComponent {

  sales:any = [];
  faUndo = faUndo;
  searchForm: FormGroup;


  constructor(private saleAdminService: SaleAdminService,
              private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.saleAdminService.sales.subscribe((res:any)=>{
      this.sales = res
    });

    this.saleAdminService.undo.subscribe((res:any)=>{
      if (res.status == "incomplete"){
        alert("Undo sales successful");
        location.reload();
      }
    });

    this.searchForm = this.formBuilder.group({
      searchInput:['',Validators.required],
      orderStatus:['complete']
    });
  }

  onUndo(sale:any){
    // console.log("click",sale);
    sale.status = "incomplete";
    this.saleAdminService.undoOrder(sale);

  }

  onAdSaleSearchBtn(){
    let searchRQ = this.searchForm.getRawValue();

    this.saleAdminService.getOrdersWithSearch(searchRQ);

  }
}
