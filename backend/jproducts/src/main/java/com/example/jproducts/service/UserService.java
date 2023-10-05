package com.example.jproducts.service;

import com.example.jproducts.dao.UserDao;
import com.example.jproducts.model.User;
import com.example.jproducts.model.dto.LoginRQ;
import com.example.jproducts.model.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired UserDao userDao;

    public void saveAndUpdate(UserDto userDto){
        User exUser = null;

        if (userDto.getUserId()!= null){
            exUser = userDao.findByUserId(userDto.getUserId());
        }else {
            exUser= new User();
        }


        exUser.setUserName(userDto.getUserName());
        if (userDto.getPassword()!= ""){
            exUser.setPassword(userDto.getPassword());
        }
        exUser.setFirstName(userDto.getFirstName());
        exUser.setLastName(userDto.getLastName());
        exUser.setAddress(userDto.getAddress());
        exUser.setGender(userDto.getGender());
        exUser.setContact(userDto.getContact());
        exUser.setDistrict(userDto.getDistrict());


        userDao.saveAndFlush(exUser);

    }

    public LoginRQ getLoggedUser(LoginRQ loginRQ){

        User user = this.userDao.findByUserNameAndPassword(loginRQ.getUserName(),loginRQ.getPassword());

        LoginRQ loginRQ1 = null;

        if (user != null) {
            loginRQ1 = new LoginRQ(user);
        }

        return loginRQ1;
    }


    public Boolean userNameValidator(UserDto userDto){
        User user = null;
        boolean validator = false;

        user = this.userDao.findByUserName(userDto.getUserName());

        if (user != null){
            validator = true;
        }

        return validator;
    }

    public UserDto getUserById(Integer userId){
        User user = this.userDao.findByUserId(userId);
        return new UserDto(user);
    }

    public List<UserDto> getAllUsers(){
        List<User> users = this.userDao.findAll();

        List<UserDto> userDtoList = new ArrayList<>();

        for (User user : users){

            UserDto userDto = new UserDto(user);

            userDtoList.add(userDto);

        }
        return userDtoList;
    }

}
