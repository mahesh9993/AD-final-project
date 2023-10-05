package com.example.jproducts.controller;

import com.example.jproducts.model.dto.CommentDto;
import com.example.jproducts.service.CustomerCareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/customerCare")
public class CustomerCareController {

    @Autowired
    private CustomerCareService customerCareService;

    @RequestMapping(value = "/addComment",method = RequestMethod.POST)
    public ResponseEntity<CommentDto> addComment(@RequestBody CommentDto commentDto){
        CommentDto comment = this.customerCareService.addComment(commentDto);

        return new ResponseEntity<>(comment, HttpStatus.OK);
    }

    @RequestMapping(value = "/getCommentsByStatus/{status}", method = RequestMethod.GET)
    public ResponseEntity<List<CommentDto>>getCommentsByStatus(@PathVariable String status){
        List<CommentDto> commentDtoList = this.customerCareService.getCommentsByStatus(status);

        return new ResponseEntity<>(commentDtoList,HttpStatus.OK);
    }

    @RequestMapping(value = "/getCommentById/{id}",method = RequestMethod.GET)
    public ResponseEntity<CommentDto>getCommentById(@PathVariable Integer id){
        CommentDto commentDto = this.customerCareService.getCommentById(id);

        return new ResponseEntity<>(commentDto,HttpStatus.OK);
    }

    @RequestMapping(value = "/editCommentStatus", method = RequestMethod.POST)
    public ResponseEntity<CommentDto>editCommentStatus(@RequestBody CommentDto comment){
        CommentDto updatedComment = this.customerCareService.editCommentStatus(comment);

        return new ResponseEntity<>(updatedComment,HttpStatus.OK);
    }
}
