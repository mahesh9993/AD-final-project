import { Component } from '@angular/core';
import {CustomerCareService} from "../../../../services/admin-services/customer-care.service";
import {Router} from "@angular/router";
import {faUndo} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-customer-care',
  templateUrl: './customer-care.component.html',
  styleUrls: ['./customer-care.component.css']
})
export class CustomerCareComponent {

  pendingComments:any = [];
  respondedComments:any = [];

  faUndo = faUndo;

  constructor(private customerCareService: CustomerCareService,
              private router: Router){}

  ngOnInit():void{
    this.customerCareService.pendingComments.subscribe((data)=>{
      this.pendingComments = data
    });

    this.customerCareService.respondedComments.subscribe((data)=>{
      this.respondedComments = data
    });

    this.customerCareService.res.subscribe((res:any)=>{
      if (res.status == "pending"){
        alert("Comment Undo Successful");
        location.reload();
      }
    });
  }

  OnSelectComment(comment:any){
    sessionStorage.setItem("commentId",comment.commentId);

    this.router.navigate(['/dashboard-menu/customer-comment']);
  }

  onUndoBtn(data:any){
    let comment = data;
    comment.status = "pending";
    this.customerCareService.editCommentStatus(comment);
  }

}
