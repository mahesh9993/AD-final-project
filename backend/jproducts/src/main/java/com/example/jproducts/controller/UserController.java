package com.example.jproducts.controller;

import com.example.jproducts.model.User;
import com.example.jproducts.model.dto.LoginRQ;
import com.example.jproducts.model.dto.UserDto;
import com.example.jproducts.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/getLoggedUser",method = RequestMethod.POST)
    public ResponseEntity<LoginRQ> getLoggedUser(@RequestBody LoginRQ loginRQ){

        LoginRQ loginRQ1 = this.userService.getLoggedUser(loginRQ);

        return new ResponseEntity<>(loginRQ1, HttpStatus.OK);
    }

    @RequestMapping(value = "/userRegistration",method = RequestMethod.POST)
    public ResponseEntity<Boolean> userRegistration(@RequestBody UserDto userDto){
        boolean validator;

        validator = this.userService.userNameValidator(userDto);

        if (!validator){

            this.userService.saveAndUpdate(userDto);
        }

        return new ResponseEntity<>(validator,HttpStatus.OK);
    }

    @RequestMapping(value = "/getUserById/{userId}",method = RequestMethod.GET)
    public ResponseEntity<UserDto> getUserById(@PathVariable Integer userId){

        UserDto userDto = this.userService.getUserById(userId);

        return new ResponseEntity<>(userDto,HttpStatus.OK);
    }

    @RequestMapping(value = "/editUser",method = RequestMethod.POST)
    public ResponseEntity<Boolean> editUser(@RequestBody UserDto userDto){
        boolean response = true;

        this.userService.saveAndUpdate(userDto);

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @RequestMapping(value = "/getAllUsers",method = RequestMethod.GET)
    public ResponseEntity<List<UserDto>> getAllUsers(){
        List<UserDto> userDtoList = this.userService.getAllUsers();

        return new ResponseEntity<>(userDtoList,HttpStatus.OK);
    }

    @RequestMapping(value = "/getUserWithSearch/{userId}",method = RequestMethod.GET)
    public ResponseEntity<List<UserDto>> getUserWithSearch(@PathVariable Integer userId){
        List<UserDto> userDtoList = new ArrayList<>();
        UserDto userDto = this.userService.getUserById(userId);

        userDtoList.add(userDto);

        return new ResponseEntity<>(userDtoList,HttpStatus.OK);
    }

}
