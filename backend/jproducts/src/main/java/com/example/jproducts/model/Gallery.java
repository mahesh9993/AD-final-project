package com.example.jproducts.model;

import javax.persistence.*;

@Entity
@Table(name = "gallery")
public class Gallery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SLOT_ID")
    private Integer slotId;

    @Column(name = "SUBJECT")
    private String subject;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "IMG_LINK")
    private String imgLink;

    public Gallery() {
    }

    public Gallery(Integer slotId, String subject, String description, String imgLink) {
        this.slotId = slotId;
        this.subject = subject;
        this.description = description;
        this.imgLink = imgLink;
    }

    public Integer getSlotId() {
        return slotId;
    }

    public void setSlotId(Integer slotId) {
        this.slotId = slotId;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImgLink() {
        return imgLink;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }
}
