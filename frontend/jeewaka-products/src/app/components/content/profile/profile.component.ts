import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {faMoneyBill,faBox,faTruckFast,faComment,faEnvelope,faCreditCard,faHeadset,faHeart} from "@fortawesome/free-solid-svg-icons"
import {ProfileService} from "../../../services/user-services/profile.service";
import {UserDto} from "./dto/userDto";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  faMoneyBill = faMoneyBill;
  faBox = faBox;
  faTruckFast = faTruckFast;
  faComment =faComment;
  faEnvelope = faEnvelope;
  faCreditCard = faCreditCard;
  faHeadset = faHeadset;
  faHeart = faHeart;

  user = new UserDto();

  constructor(private router: Router,
              private profileService: ProfileService){}

  ngOnInit():void{
    this.profileService.user.subscribe((user)=>{
      this.user = new UserDto(user)
    })
  }

  onLogOut(){
    sessionStorage.removeItem("loggedUser");
    this.router.navigate(['/home']);
  }

}
