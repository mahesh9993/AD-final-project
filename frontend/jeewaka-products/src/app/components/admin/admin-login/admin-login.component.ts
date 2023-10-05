import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminAuthService} from "../../../services/admin-services/admin-auth.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  admin = sessionStorage.getItem("admin");
  adminLoginForm:FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private adminAuthService: AdminAuthService){}

  ngOnInit():void{
    if (this.admin!="yes"){
      sessionStorage.setItem("admin","yes");
      sessionStorage.removeItem("user");
      location.reload();
    }

    this.adminLoginForm = this.createForm();

    this.adminAuthService.loginRQ.subscribe((data:any)=>{
      if (data != null){
        sessionStorage.setItem("adminId",data.adminId);
        this.router.navigate(['/dashboard']);
      } else {
        alert("Login Fail!");
      }
    });
  }

  onUserBtn(){
    sessionStorage.removeItem("admin");
    this.router.navigate(['']);
  }

  createForm(){
    return this.formBuilder.group({
      userName:['',Validators.required],
      password: ['',Validators.required]
    });
  }

  onAdminLoginBtn(){
    let loginRQ = this.adminLoginForm.getRawValue();
    // console.log(loginRQ);
    this.adminAuthService.AdminAuth(loginRQ);
  }

}
