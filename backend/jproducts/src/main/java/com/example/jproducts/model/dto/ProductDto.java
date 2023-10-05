package com.example.jproducts.model.dto;

import com.example.jproducts.model.Product;

public class ProductDto {

    private Integer productId;

    private String productName;

    private String productCategory;

    private Integer quantity;

    private Integer unitPrice;

    private String imgLink;

    private String description;

    public ProductDto() {
    }

    public ProductDto(Product product) {
        this.productId = product.getProductId();
        this.productName = product.getProductName();
        this.productCategory = product.getProductCategory();
        this.quantity = product.getQuantity();
        this.unitPrice = product.getUnitPrice();
        this.imgLink = product.getImgLink();
        this.description = product.getDescription();
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(Integer unitPrice) {
        this.unitPrice = unitPrice;
    }

    public String getImgLink() {
        return imgLink;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
