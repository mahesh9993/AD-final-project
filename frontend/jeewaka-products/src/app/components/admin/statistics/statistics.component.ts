import { Component } from '@angular/core';
import {StatService} from "../../../services/admin-services/stat.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  sales = 0;
  orders = 0;
  users = 0;
  products = 0;

  constructor(private statService: StatService){}

  ngOnInit():void{
    this.statService.sales.subscribe((res:any)=>{
      this.sales = res.length
    });

    this.statService.orders.subscribe((res:any)=>{
      this.orders = res.length
    });

    this.statService.users.subscribe((res:any)=>{
      this.users = res.length
    });

    this.statService.products.subscribe((res:any)=>{
      this.products = res.length
    })
  }
}
