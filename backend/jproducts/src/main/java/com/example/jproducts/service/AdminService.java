package com.example.jproducts.service;

import com.example.jproducts.dao.AdminDao;
import com.example.jproducts.model.Admin;
import com.example.jproducts.model.dto.AdminDto;
import com.example.jproducts.model.dto.LoginRQ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private AdminDao adminDao;

    public AdminDto getAdmin(LoginRQ loginRQ){
        Admin admin = this.adminDao.findByUserNameAndPassword(loginRQ.getUserName(),loginRQ.getPassword());

        AdminDto loggedAdmin = null;

        if (admin != null){
            loggedAdmin = new AdminDto(admin);
        }

        return loggedAdmin;
    }
}
