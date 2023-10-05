package com.example.jproducts.model.dto;

import com.example.jproducts.model.Admin;
import com.example.jproducts.model.User;

public class LoginRQ {

    private Integer userId;

    private String userName;

    private String password;

    public LoginRQ() {
    }

    public LoginRQ(User user) {
        this.userId = user.getUserId();
        this.userName = user.getUserName();
        this.password = user.getPassword();
    }


    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
