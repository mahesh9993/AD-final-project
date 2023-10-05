export class CheckoutItem {
  userId;
  productId;
  productName;
  quantity;
  amount;
  deliveryAddress;
  imgLink;
  description;

  constructor(order?:any){
    order = order || {};
    this.userId = Number(sessionStorage.getItem("loggedUser"))||null;
    this.productId = order.productId || null;
    this.productName = order.productName || '';
    this.quantity = order.quantity || null;
    this.amount = order.amount || null;
    this.deliveryAddress = order.deliveryAddress || null;
    this.imgLink = order.imgLink|| null;
    this.description = order.description||null;
  }
}
