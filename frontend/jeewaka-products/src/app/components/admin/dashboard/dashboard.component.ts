import { Component } from '@angular/core';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  faRightFromBracket = faRightFromBracket;

  loggedAdmin = sessionStorage.getItem("adminId");

  constructor(private router: Router){}

  onLogoutBtn(){
    sessionStorage.removeItem("adminId");
    this.router.navigate(['/admin']);
  }

}
