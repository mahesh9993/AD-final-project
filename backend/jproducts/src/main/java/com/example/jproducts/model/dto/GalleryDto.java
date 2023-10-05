package com.example.jproducts.model.dto;

import com.example.jproducts.model.Gallery;

public class GalleryDto {

    private Integer slotId;

    private String subject;

    private String description;

    private String imgLink;

    public GalleryDto() {
    }

    public GalleryDto(Gallery gallery) {
        this.slotId = gallery.getSlotId();
        this.subject = gallery.getSubject();
        this.description = gallery.getDescription();
        this.imgLink = gallery.getImgLink();
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
