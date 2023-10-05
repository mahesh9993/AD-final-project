export class UserDto {
  userId;
  userName;
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
    this.firstName = user.firstName||'';
    this.lastName = user.lastName||'';
    this.gender = user.gender||'';
    this.address = user.address || '';
    this.contact = user.contact || '';
    this.district = user.district || '';

  }
}
