package com.example.jproducts.controller;

import com.example.jproducts.model.dto.AdminDto;
import com.example.jproducts.model.dto.LoginRQ;
import com.example.jproducts.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping(value = "/getAdmin", method = RequestMethod.POST)
    public ResponseEntity<AdminDto> getAdmin(@RequestBody LoginRQ loginRQ){
        AdminDto adminDto = this.adminService.getAdmin(loginRQ);

        return new ResponseEntity<>(adminDto, HttpStatus.OK);
    }

}
