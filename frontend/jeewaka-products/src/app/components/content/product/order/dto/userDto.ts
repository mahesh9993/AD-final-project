export class UserDto {

  userId;
  address;
  contact;
  district;

  constructor(user?:any){
    user = user || {};
    this.userId = user.userId || null;
    this.address = user.address || '';
    this.contact = user.contact || '';
    this.district = user.district || '';
  }

}
