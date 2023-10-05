import { Component } from '@angular/core';
import {faFacebook, faGoogle, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {AuthService} from "../../../services/user-services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user-services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  faFacebook =faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faLinkedin = faLinkedin;

  loginForm : FormGroup;
  signUpForm : FormGroup;
  loggedUser:any;

  constructor(private authService: AuthService,
              private formBuilder : FormBuilder,
              private userService: UserService,
              private router: Router){}

  ngOnInit():void{
    this.authService.loginStatus.subscribe((loginStatus)=>{
      this.loggedUser = loginStatus

      if (loginStatus != null){
        // console.log(loginStatus)
        sessionStorage.setItem("loggedUser",this.loggedUser.userId);
        alert("login Successful");
        this.router.navigate(['/product']);
      } else {
        alert("Login fail!");
      }
    });

    this.loginForm = this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    });


    this.userService.signUpStatus.subscribe((signUpStatus)=>{
      if (signUpStatus){
        alert("you are already registered!");
      } else{
        window.location.reload();
        alert("Registration successful.Please login to continue.");
      }
    });

    this.signUpForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      address:['',Validators.required],
      district:['',Validators.required],
      contact:['',Validators.required],
      gender:['',Validators.required],
      userName:['',Validators.required],
      password:['',Validators.required],
      confPassword:['',Validators.required],
      agreement:['',Validators.required]

    });
  }

  onLogin(){
    let userData = this.loginForm.getRawValue();
    // console.log("userData",userData);
      this.authService.login(userData);
  }

  onSignUp(){
    // console.log("click");

    let newUser = this.signUpForm.getRawValue();
    // console.log("nu",newUser);
    if (newUser.password == newUser.confPassword){
      // console.log("true");
      this.userService.signUp(newUser);
    }else {
      // console.log("false");
      alert("password and confirmed password is not match!");
    }
  }

}
