package com.example.jproducts.controller;

import com.example.jproducts.model.dto.GalleryDto;
import com.example.jproducts.service.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/gallery")
public class GalleryController {

    @Autowired
    private GalleryService galleryService;

    @RequestMapping(value = "/getAllImages",method = RequestMethod.GET)
    public ResponseEntity<List<GalleryDto>> getAllImages(){
        List<GalleryDto> galleryDtoList = this.galleryService.getAllImages();

        return new ResponseEntity<>(galleryDtoList, HttpStatus.OK);
    }

    @RequestMapping(value = "/addNewImage", method = RequestMethod.POST)
    public ResponseEntity<GalleryDto> addNewImage(@RequestBody GalleryDto galleryDto){
        GalleryDto newSlot = this.galleryService.addToGallery(galleryDto);

        return new ResponseEntity<>(newSlot,HttpStatus.OK);
    }

    @RequestMapping(value = "/deleteItem/{id}", method = RequestMethod.GET)
    public ResponseEntity<Boolean>deleteItem(@PathVariable Integer id){
        Boolean response = this.galleryService.deleteItem(id);

        return new ResponseEntity<>(response,HttpStatus.OK);
    }
}
