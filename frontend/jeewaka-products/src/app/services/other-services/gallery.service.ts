import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GalleryService implements Resolve<any>{

  imgsList = new Subject()

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<any> | Promise<any> | any {

    this.getAllImages()
  }

  getAllImages(){
    this.httpClient.get('http://localhost:8080/gallery/getAllImages').subscribe((imgs)=>{
      // console.log(imgs)
      this.imgsList.next(imgs);
    })
  }
}
