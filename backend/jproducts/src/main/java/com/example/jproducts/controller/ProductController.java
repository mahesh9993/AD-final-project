package com.example.jproducts.controller;

import com.example.jproducts.model.dto.ProductDto;
import com.example.jproducts.model.dto.SearchRQ;
import com.example.jproducts.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/getAllProducts", method = RequestMethod.GET)
    public ResponseEntity<List<ProductDto>> getAllProducts(){

        List<ProductDto> productDtoList = this.productService.getAllProducts();

        return new ResponseEntity<>(productDtoList, HttpStatus.OK);
    }


    @RequestMapping(value = "/getProductsByCategory/{category}",method = RequestMethod.GET)
    public ResponseEntity<List<ProductDto>> getProductsByCategory(@PathVariable String category){

       List<ProductDto> productDtoList = this.productService.getProductsByCategory(category);

       return new ResponseEntity<>(productDtoList,HttpStatus.OK);
    }

    @RequestMapping(value = "/getProductById/{productId}",method = RequestMethod.GET)
    public ResponseEntity<ProductDto> getProductById (@PathVariable Integer productId){
        ProductDto productDto = this.productService.getProductById(productId);

        return new ResponseEntity<>(productDto,HttpStatus.OK);
    }

    @RequestMapping(value = "/getProductsWithSearch",method = RequestMethod.POST)
    public ResponseEntity<List<ProductDto>> getProductsWithSearch(@RequestBody SearchRQ searchRQ){
        List<ProductDto> productDtos = this.productService.getProductsWithSearch(searchRQ);

        return new ResponseEntity<>(productDtos,HttpStatus.OK);
    }

    @RequestMapping(value = "/saveAndUpdateProduct", method = RequestMethod.POST)
    public ResponseEntity<ProductDto> saveAndUpdateProduct(@RequestBody ProductDto productDto){
        ProductDto updatedProduct = this.productService.saveAndUpdateProduct(productDto);

        return new ResponseEntity<>(updatedProduct,HttpStatus.OK);
    }

}
