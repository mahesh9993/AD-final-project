package com.example.jproducts.dao;

import com.example.jproducts.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminDao extends JpaRepository<Admin,Integer> {

    Admin findByUserNameAndPassword (String userName,String password);
}
