import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements Resolve<any>{

  user = new BehaviorSubject({});
  response = new Subject();

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any{
    this.getUserById()
  }


  getUserById(){
    let userId = sessionStorage.getItem("loggedUser");

    this.httpClient.get(`http://localhost:8080/user/getUserById/${userId}`).subscribe((userDto)=>{
      // console.log(userDto)
      this.user.next(userDto)
    })
  }

  editUser(user:any){
    // console.log(user);
    this.httpClient.post('http://localhost:8080/user/editUser',user).subscribe((response)=>{
      // console.log(response)
      this.response.next(response)
    })
  }
}
