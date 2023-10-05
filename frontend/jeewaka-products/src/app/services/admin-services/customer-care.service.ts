import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerCareService implements Resolve<any> {

  pendingComments = new Subject();
  respondedComments = new Subject();
  comment = new Subject();
  res = new Subject();

  constructor(private httpClient: HttpClient) { }

  resolve():Observable<any> | Promise<any> | any {
    this.getPendingComments("pending");
    this.getRespondedComments("responded");
    this.getCommentById();
  }

  getPendingComments(status:any){
    this.httpClient.get(`http://localhost:8080/customerCare/getCommentsByStatus/${status}`).subscribe((data)=>{
      this.pendingComments.next(data)
      // console.log("pending",data)
    });
  }

  getRespondedComments(status:any){
    this.httpClient.get(`http://localhost:8080/customerCare/getCommentsByStatus/${status}`).subscribe((data)=>{
      this.respondedComments.next(data)
      // console.log("Responded",data)
    });
  }

  getCommentById(){
    let id = sessionStorage.getItem("commentId");

    if (id != null){
      this.httpClient.get(`http://localhost:8080/customerCare/getCommentById/${id}`).subscribe((data)=>{
        this.comment.next(data)
        // console.log("Res",data)
      });
    }
  }

  editCommentStatus(comment:any){
    return this.httpClient.post('http://localhost:8080/customerCare/editCommentStatus',comment).subscribe((data)=>{
      // console.log(data)
      this.res.next(data)
    });
  }

}
