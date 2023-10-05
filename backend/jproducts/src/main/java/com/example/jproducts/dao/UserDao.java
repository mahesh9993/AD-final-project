package com.example.jproducts.dao;

import com.example.jproducts.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User,Integer> {

    User findByUserId (Integer userId);
    User findByUserNameAndPassword (String userName,String password);
    User findByUserName (String userName);
}
