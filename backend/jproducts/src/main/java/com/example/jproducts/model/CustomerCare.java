package com.example.jproducts.model;

import javax.persistence.*;

@Entity
@Table(name = "customer_help")
public class CustomerCare {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COMMENT_ID")
    private Integer commentId;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "SUBJECT")
    private String subject;

    @Column(name = "MESSAGE")
    private String message;

    @Column(name = "STATUS")
    private String status;

    public CustomerCare() {
    }

    public CustomerCare(Integer commentId, String email, String subject, String message,String status) {
        this.commentId = commentId;
        this.email = email;
        this.subject = subject;
        this.message = message;
        this.status = status;
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
