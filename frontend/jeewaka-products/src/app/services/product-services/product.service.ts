import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080'

  constructor(private httpClient : HttpClient) { }

  getProducts(): Observable<any>{

    return  this.httpClient.get<any>(`${this.apiUrl}/product/getAllProducts`);
  }

  getProductsByCategory(category:any){
    //console.log("ct",category);
    return this.httpClient.get(`http://localhost:8080/product/getProductsByCategory/${category}`);
  }

}
