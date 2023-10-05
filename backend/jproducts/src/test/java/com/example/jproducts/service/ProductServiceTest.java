package com.example.jproducts.service;

import com.example.jproducts.model.Product;
import com.example.jproducts.model.dto.SearchRQ;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ProductServiceTest {

    @Autowired ProductService productService;

//    @Test
//    void getProductsWithSearch() {
//        SearchRQ searchRQ = new SearchRQ();
//        searchRQ.setProductName("inn");
//
//        this.productService.getProductsWithSearch(searchRQ);
//    }

//    @Test
//    void getProductById() {
//        this.productService.getProductById(1);
//    }
//
//    @Test
//    void getAllProducts() {
//        this.productService.getAllProducts();
//    }

//    @Test
//    void getRawProducts() {
//        this.productService.getRawProducts("Raw");
//    }

}