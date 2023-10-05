package com.example.jproducts.dao;

import com.example.jproducts.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductDao extends JpaRepository<Product,Integer> {

    List<Product> findAllByProductCategory (String productCategory);
    Product findByProductId (Integer productId);
}
