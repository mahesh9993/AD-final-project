package com.example.jproducts.model.dto;

import com.example.jproducts.model.CustomerCare;

public class CommentDto {

    private Integer commentId;

    private String email;

    private String subject;

    private String message;

    private String status;

    public CommentDto() {
    }

    public CommentDto(CustomerCare customerCare) {
        this.commentId = customerCare.getCommentId();
        this.email = customerCare.getEmail();
        this.subject = customerCare.getSubject();
        this.message = customerCare.getMessage();
        this.status = customerCare.getStatus();
    }

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
