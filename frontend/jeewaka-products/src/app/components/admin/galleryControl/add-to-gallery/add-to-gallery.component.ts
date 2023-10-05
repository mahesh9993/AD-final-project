import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GalleryControlService} from "../../../../services/admin-services/gallery-control.service";

@Component({
  selector: 'app-add-to-gallery',
  templateUrl: './add-to-gallery.component.html',
  styleUrls: ['./add-to-gallery.component.css']
})
export class AddToGalleryComponent {

  galleryForm:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private galleryControlService: GalleryControlService){}

  ngOnInit():void{
    this.galleryForm = this.formBuilder.group({
      slotId:['',Validators.required],
      subject:['',Validators.required],
      imgLink:['',Validators.required],
      description:['',Validators.required]
    });

    this.galleryControlService.res.subscribe((data:any)=>{
      if (data.slotId){
        alert("Gallery Details Successfully Updated")
      }
    });

  }

  onAddBtn(){
    let data = this.galleryForm.getRawValue();
    // console.log(data);
    this.galleryControlService.addToGallery(data);

  }

}
