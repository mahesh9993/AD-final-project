import { Component } from '@angular/core';
import {GalleryService} from "../../../services/other-services/gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  imgsList:any = [];

  constructor(private galleryService: GalleryService){}

  ngOnInit():void{
    this.galleryService.imgsList.subscribe((imgsList)=>{
      this.imgsList = imgsList
    });
  }

}
