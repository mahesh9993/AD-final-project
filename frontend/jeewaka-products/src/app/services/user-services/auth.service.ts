import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus = new Subject();

  constructor(private httpClient: HttpClient) { }

  login(userData: any){
    // console.log("ud",userData)
    this.httpClient.post('http://localhost:8080/user/getLoggedUser',userData).subscribe((loggedUser)=>{
        // console.log("lu",loggedUser)
        this.loginStatus.next(loggedUser)
    });
  }
}
