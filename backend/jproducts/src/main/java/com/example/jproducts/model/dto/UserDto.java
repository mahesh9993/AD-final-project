package com.example.jproducts.model.dto;

import com.example.jproducts.model.User;

import java.util.Date;

public class UserDto {

    private Integer userId;

    private String userName;

    private String password;

    private String firstName;

    private String lastName;

    private String address;

    private String gender;

    private String contact;

    private String district;

    public UserDto() {
    }

    public UserDto(User user) {
        this.userId = user.getUserId();
        this.userName = user.getUserName();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.address = user.getAddress();
        this.gender = user.getGender();
        this.contact = user.getContact();
        this.district = user.getDistrict();
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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }


    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }
}
