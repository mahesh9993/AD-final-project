import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}

  ngOnInit():void{
    if (sessionStorage.getItem("user")!="yes"){
      sessionStorage.setItem("user","yes");
      location.reload();
    }
  }

  onShopNowBtn(){
    let loggedUser = sessionStorage.getItem("loggedUser");

    if(loggedUser != null){
      this.router.navigate(['/product'])
    }else {
      this.router.navigate(['/login'])
    }
  }

}
