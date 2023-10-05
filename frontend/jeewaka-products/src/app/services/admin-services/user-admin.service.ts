import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserAdminService implements Resolve<any>{

  users = new Subject();

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any {
    this.getAllUsers();
  }

  getAllUsers(){
    this.httpClient.get('http://localhost:8080/user/getAllUsers').subscribe((users)=>{
      // console.log(users)
      this.users.next(users)
    });
  }

  getUsersWithSearch(searchRQ:any){
    if (searchRQ.searchInput != ""){
      this.httpClient.get(`http://localhost:8080/user/getUserWithSearch/${searchRQ.searchInput}`).subscribe((result)=>{
        this.users.next(result)
      });
    } else {
      this.getAllUsers();
    }

  }
}
