package com.example.jproducts.service;

import com.example.jproducts.model.User;
import com.example.jproducts.model.dto.UserDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class UserServiceTest {

    @Autowired UserService userService;


//    @Test
//    void saveAndUpdate() {
//        UserDto userDto = new UserDto();
//
//        userDto.setUserId(1);
//        userDto.setUserName("mahesh@gmail.com");
//        userDto.setPassword("mahesh");
//        userDto.setFirstName("mahesh");
//        userDto.setLastName("chathuranga");
//        userDto.setAddress("matale rd, katugastota");
//        userDto.setGender("male");
//        userDto.setContact("0714253429");
//        userDto.setDistrict("kandy");
//
//        this.userService.saveAndUpdate(userDto);
//
//    }
}