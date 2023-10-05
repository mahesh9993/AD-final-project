import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  loginRQ = new Subject();

  constructor(private httpClient: HttpClient) { }

  AdminAuth(loginRQ:any){
    this.httpClient.post('http://localhost:8080/admin/getAdmin',loginRQ).subscribe((data)=>{
      this.loginRQ.next(data)
    });
  }

}
