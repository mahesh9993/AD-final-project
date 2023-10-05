package com.example.jproducts.dao;

import com.example.jproducts.model.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GalleryDao extends JpaRepository<Gallery,Integer> {
}
