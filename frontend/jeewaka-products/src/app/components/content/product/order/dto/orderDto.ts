export class OrderDto {

  userId;
  productId;
  quantity;
  amount;
  status;
  deliveryAddress;

  constructor(order?:any){
    order = order || {};
    this.userId = order.userId || null;
    this.productId = order.productId || null;
    this.quantity = order.quantity || null;
    this.amount = order.amount || null;
    this.status = order.status || '';
    this.deliveryAddress = order.deliveryAddress || '';
  }

}
