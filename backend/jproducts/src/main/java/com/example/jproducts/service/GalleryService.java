package com.example.jproducts.service;

import com.example.jproducts.dao.GalleryDao;
import com.example.jproducts.model.Gallery;
import com.example.jproducts.model.dto.GalleryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GalleryService {

    @Autowired
    private GalleryDao galleryDao;

    public List<GalleryDto> getAllImages(){
        List<Gallery> galleryList = this.galleryDao.findAll();

        List<GalleryDto> galleryDtoList = new ArrayList<>();

        for (Gallery gallery : galleryList){

            galleryDtoList.add(new GalleryDto(gallery));
        }

        return galleryDtoList;
    }

    public GalleryDto addToGallery(GalleryDto galleryDto){
        Gallery gallery = new Gallery();

        gallery.setSubject(galleryDto.getSubject());
        gallery.setImgLink(galleryDto.getImgLink());
        gallery.setDescription(galleryDto.getDescription());

        this.galleryDao.saveAndFlush(gallery);

        GalleryDto newSlot = new GalleryDto(gallery);

        return newSlot;
    }

    public Boolean deleteItem(Integer id){
        this.galleryDao.deleteById(id);

        Boolean response = true;

        return response;
    }
}
