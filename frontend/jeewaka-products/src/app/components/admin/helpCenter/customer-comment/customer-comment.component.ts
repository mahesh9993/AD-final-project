import { Component } from '@angular/core';
import {CustomerCareService} from "../../../../services/admin-services/customer-care.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-comment',
  templateUrl: './customer-comment.component.html',
  styleUrls: ['./customer-comment.component.css']
})
export class CustomerCommentComponent {

  comment:any;

  constructor(private customerCareService: CustomerCareService,
              private router: Router){}

  ngOnInit():void{
    this.customerCareService.comment.subscribe((data)=>{
      this.comment = data
    });

    this.customerCareService.res.subscribe((res:any)=>{
      if (res.status == "responded"){
        alert("Comment Marked as Responded");
        this.router.navigate(['/dashboard-menu/ad-customerCare']);
      }
    });
  }

  onRespondedBtn(){
    let comment = this.comment;
    comment.status = "responded";
    this.customerCareService.editCommentStatus(comment);
  }

}
