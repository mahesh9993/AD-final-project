import { Component } from '@angular/core';
import {ProfileService} from "../../../services/user-services/profile.service";
import {UserDto} from "./dto/UserDto";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EditUser} from "./dto/EditUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  user = new UserDto();
  editedUser = new EditUser();
  editUserForm:FormGroup;

  constructor(private profileService: ProfileService,
              private formBuilder: FormBuilder,
              private router: Router){}

  ngOnInit():void{
    this.profileService.user.subscribe((user)=>{
      // console.log(user)
      this.user = new UserDto(user)

    });

    this.editUserForm = this.createEditUserForm();

    this.profileService.response.subscribe((response)=>{
      if (response = true){
        alert("Profile Updated");
        this.router.navigate(['/profile']);

      }
    });
  }

  createEditUserForm(){
    return this.formBuilder.group({
      userId:[this.user.userId],
      firstName:[this.user.firstName],
      lastName:[this.user.lastName],
      userName:[this.user.userName],
      contact:[this.user.contact],
      gender:[this.user.gender],
      newPassword:[''],
      confirmPassword:[''],
      address:[this.user.address],
      district:[this.user.district]
    });
  }

  onSaveBtn(){
    let user = this.editUserForm.getRawValue();
    //console.log(user);

    if (user.newPassword == user.confirmPassword){
      // console.log(user);
      this.editedUser = new EditUser(user)
      this.profileService.editUser(this.editedUser);
    }else {
      alert("passwords does not match");
    }


  }

}
