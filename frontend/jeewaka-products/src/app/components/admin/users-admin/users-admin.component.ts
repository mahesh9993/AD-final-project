import { Component } from '@angular/core';
import {UserAdminService} from "../../../services/admin-services/user-admin.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent {

  users:any = [];
  searchForm: FormGroup;

  constructor(private userAdminService: UserAdminService,
              private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.userAdminService.users.subscribe((users)=>{
      this.users = users
    });

    this.searchForm = this.formBuilder.group({
      searchInput:['',Validators.required]
    });
  }

  onAdUserSearchBtn(){
    let searchRQ = this.searchForm.getRawValue();
    console.log(searchRQ);
    this.userAdminService.getUsersWithSearch(searchRQ);
  }
}
