export class CartItem {
  userId;
  productId;
  productName;
  quantity;
  amount;
  deliveryAddress;
  imgLink;
  description;

  constructor(detail1?:any,detail2 ?: any){
    detail1 = detail1 || {};
    detail2 = detail2 || {};
    this.userId = Number(sessionStorage.getItem("loggedUser"))||null;
    this.productId = detail1.productId || null;
    this.productName = detail1.productName || '';
    this.quantity = detail2.quantity || null;
    this.amount = detail2.amount || null;
    this.deliveryAddress = detail2.deliveryAddress || null;
    this.imgLink = detail1.imgLink|| null;
    this.description = detail1.description||null;
  }
}
