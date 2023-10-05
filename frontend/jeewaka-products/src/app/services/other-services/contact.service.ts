import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  res = new Subject();

  constructor(private httpClient: HttpClient) { }

  addComment(comment:any){
    this.httpClient.post('http://localhost:8080/customerCare/addComment',comment).subscribe((res)=>{
      // console.log(res)
      this.res.next(res)
    });
  }
}
