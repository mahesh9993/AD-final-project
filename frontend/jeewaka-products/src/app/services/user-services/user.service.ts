import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  signUpStatus = new Subject();

  constructor(private httpClient: HttpClient) { }

  signUp(newUser: any){
    // console.log("newUser",newUser);
    this.httpClient.post('http://localhost:8080/user/userRegistration',newUser).subscribe((validator)=>{
      // console.log("validator",validator)
      this.signUpStatus.next(validator)
    });
  }
}
