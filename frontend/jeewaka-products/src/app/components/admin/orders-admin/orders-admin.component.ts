import { Component } from '@angular/core';
import {OrderAdminService} from "../../../services/admin-services/order-admin.service";
import {faSquareCheck} from "@fortawesome/free-solid-svg-icons"
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css']
})
export class OrdersAdminComponent {

  searchForm: FormGroup;
  orders:any = [];
  faSquareCheck = faSquareCheck;

  constructor(private orderAdminService: OrderAdminService,
              private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.orderAdminService.orders.subscribe((res:any)=>{
      this.orders = res
    });

    this.orderAdminService.completedOrder.subscribe((res:any)=>{
      if (res.status == "complete"){
        alert("Order has been marked as a completed order");
        location.reload();
      }
    });

    this.searchForm = this.formBuilder.group({
      searchInput:['',Validators.required],
      orderStatus:['incomplete']
    });
  }

  onComplete(order:any){
    order.status = "complete";
    // console.log("click",order);
    this.orderAdminService.completeOrder(order);

  }

  onAdOrdersSearchBtn(){
    let searchRQ = this.searchForm.getRawValue();
    // console.log(searchRQ);
    this.orderAdminService.getOrdersWithSearch(searchRQ);
  }
}
