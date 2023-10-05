import { Component } from '@angular/core';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {GalleryControlService} from "../../../../services/admin-services/gallery-control.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gallery-admin',
  templateUrl: './gallery-admin.component.html',
  styleUrls: ['./gallery-admin.component.css']
})
export class GalleryAdminComponent {

  gallery:any = [];
  faDeleteLeft = faTrash;

  constructor(private galleryControlService: GalleryControlService,
              private router: Router){}

  ngOnInit():void{
    this.galleryControlService.gallery.subscribe((data)=>{
      this.gallery = data
    });
  }

  onAddNewBtn(){
    this.router.navigate(['/dashboard-menu/addToGallery']);
  }

  onDeleteBtn(image:any){
   let res = this.galleryControlService.deleteFromGallery(image.slotId);
   if (res){
     alert("Gallery Item Deleted");
     location.reload();
   }
  }

}
