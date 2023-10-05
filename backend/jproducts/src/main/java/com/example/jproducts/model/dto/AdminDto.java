package com.example.jproducts.model.dto;

import com.example.jproducts.model.Admin;

public class AdminDto {

    private Integer adminId;

    private String userName;

    private String password;

    public AdminDto() {
    }

    public AdminDto(Admin admin) {
        this.adminId = admin.getAdminId();
        this.userName = admin.getUserName();
        this.password = admin.getPassword();
    }

    public Integer getAdminId() {
        return adminId;
    }

    public void setAdminId(Integer adminId) {
        this.adminId = adminId;
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
