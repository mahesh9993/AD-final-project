package com.example.jproducts.model;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_ID",nullable = false,updatable = false)
    private Integer productId;

    @Column(name = "PRODUCT_NAME")
    private String productName;

    @Column(name = "PRODUCT_CATEGORY")
    private String productCategory;

    @Column(name = "QUANTITY")
    private Integer quantity;

    @Column(name = "UNIT_PRICE")
    private Integer unitPrice;

    @Column(name = "IMAGE_LINK")
    private String imgLink;

    @Column(name = "DESCRIPTION")
    private String description;

    public Product() {
    }

    public Product(Integer productId, String productName,String productCategory, Integer quantity, Integer unitPrice,
                   String imgLink, String description) {
        this.productId = productId;
        this.productName = productName;
        this.productCategory = productCategory;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.imgLink = imgLink;
        this.description = description;
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
