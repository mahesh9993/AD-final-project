package com.example.jproducts.model.dto;

import com.example.jproducts.model.Order;

import java.util.Date;

public class OrderDto {

    private Integer orderId;

    private Integer userId;

    private Integer productId;

    private String productName;

    private Integer quantity;

    private Integer amount;

    private String status;

    private String deliveryAddress;

    public OrderDto() {
    }

    public OrderDto(Order order) {
        this.orderId = order.getOrderId();

        if(order.getUser()!= null) {
            this.userId = order.getUser().getUserId();
        }

        if (order.getProduct()!=null) {
            this.productId = order.getProduct().getProductId();
            this.productName = order.getProduct().getProductName();
        }

        this.quantity = order.getQuantity();
        this.amount = order.getAmount();
        this.deliveryAddress = order.getDeliveryAddress();
        this.status = order.getStatus();
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
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

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
