import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Resolve} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GalleryControlService implements Resolve <any> {

  gallery = new Subject();
  res = new Subject();

  constructor(private httpClient: HttpClient) { }

  resolve():Observable<any> | Promise<any> | any {
    this.getGallery();
  }

  getGallery(){
    this.httpClient.get('http://localhost:8080/gallery/getAllImages').subscribe((data)=>{
      this.gallery.next(data)
      // console.log(data);
    });
  }

  addToGallery(data:any){
    this.httpClient.post('http://localhost:8080/gallery/addNewImage',data).subscribe((res)=>{
      this.res.next(res)
    });
  }

  deleteFromGallery(id:any){
    console.log(id);
    return this.httpClient.get(`http://localhost:8080/gallery/deleteItem/${id}`).subscribe();
  }

}
