package com.example.jproducts.service;

import com.example.jproducts.dao.CustomerCareDao;
import com.example.jproducts.model.CustomerCare;
import com.example.jproducts.model.dto.CommentDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerCareService {

    @Autowired
    private CustomerCareDao customerCareDao;

    public CommentDto addComment(CommentDto commentDto){
        CustomerCare customerCare = new CustomerCare();

        customerCare.setEmail(commentDto.getEmail());
        customerCare.setSubject(commentDto.getSubject());
        customerCare.setMessage(commentDto.getMessage());

        this.customerCareDao.saveAndFlush(customerCare);

        return new CommentDto(customerCare);
    }

    public List<CommentDto> getCommentsByStatus(String status){
        List<CustomerCare> customerCareList = this.customerCareDao.findAllByStatus(status);

        List<CommentDto> commentDtoList = new ArrayList<>();

        for (CustomerCare customerCare : customerCareList){

            CommentDto commentDto = new CommentDto(customerCare);

            commentDtoList.add(commentDto);
        }

        return commentDtoList;
    }

    public CommentDto getCommentById(Integer id){
        CustomerCare customerCare = this.customerCareDao.findByCommentId(id);

        CommentDto commentDto = new CommentDto(customerCare);

        return commentDto;
    }

    public CommentDto editCommentStatus(CommentDto commentDto){
        CustomerCare customerCare = this.customerCareDao.findByCommentId(commentDto.getCommentId());

        customerCare.setStatus(commentDto.getStatus());

        this.customerCareDao.saveAndFlush(customerCare);

        CommentDto updatedComment = new CommentDto(customerCare);

        return updatedComment;
    }
}
