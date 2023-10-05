package com.example.jproducts.model;

import javax.persistence.*;

@Entity
@Table(name = "admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ADMIN_ID",nullable = false,updatable = false)
    private Integer adminId;

    @Column(name = "USERNAME")
    private String userName;

    @Column(name = "PASSWORD")
    private String password;

    public Admin() {
    }

    public Admin(Integer adminId, String userName, String password) {
        this.adminId = adminId;
        this.userName = userName;
        this.password = password;
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
