export class ProductDto {

  productId;
  productName;
  productCategory;
  quantity;
  unitPrice;

  constructor(product?:any){
    product = product || {};
    this.productId = product.productId || null;
    this.productName = product.productName || '';
    this.productCategory = product.productCategory ||'';
    this.quantity = product.quantity || null;
    this.unitPrice = product.unitPrice || null;
  }

}
