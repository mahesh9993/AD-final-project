export class EditUser {
  userId;
  userName;
  password;
  firstName;
  lastName;
  gender;
  address;
  contact;
  district;

  constructor(user?:any){
    user = user || {};
    this.userId = user.userId || null;
    this.userName = user.userName||'';
    this.password = user.newPassword||'';
    this.firstName = user.firstName||'';
    this.lastName = user.lastName||'';
    this.gender = user.gender||'';
    this.address = user.address || '';
    this.contact = user.contact || '';
    this.district = user.district || '';

  }
}
