import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../../services/other-services/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private contactService: ContactService){}

  ngOnInit():void{

    this.contactService.res.subscribe((res:any)=>{
      // console.log(res);
      if (res.commentId != null){
        alert("Your message has been submitted");
        this.contactForm.reset();
      }
    });

    this.contactForm = this.formBuilder.group({
      email:['',Validators.required],
      subject:['',Validators.required],
      message:['',Validators.required]
    });

  }

  onSubmit(){
    // console.log("click");
    let customerComment = this.contactForm.getRawValue();
    // console.log(customerComment);
    if (customerComment.email != ""){
      this.contactService.addComment(customerComment);
    }else {
      alert("Please enter a valid email");
    }

  }

}
