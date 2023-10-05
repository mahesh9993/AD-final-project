package com.example.jproducts.model.dto;

public class SearchRQ {

    private String searchInput;
    private String orderStatus;

    public String getSearchInput() {
        return searchInput;
    }

    public void setSearchInput(String searchInput) {
        this.searchInput = searchInput;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }
}
