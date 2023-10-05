package com.example.jproducts.service;

import com.example.jproducts.dao.ProductDao;
import com.example.jproducts.dao.jdbc.OrderJDBCDao;
import com.example.jproducts.dao.jdbc.ProductJDBCDao;
import com.example.jproducts.model.Product;
import com.example.jproducts.model.dto.OrderDto;
import com.example.jproducts.model.dto.ProductDto;
import com.example.jproducts.model.dto.SearchRQ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductDao productDao;

    @Autowired
    private ProductJDBCDao productJDBCDao;


    public List<ProductDto> getAllProducts(){
        List<Product> products = this.productDao.findAll();

        List<ProductDto> productDtoList = new ArrayList<>();

        for(Product product : products){

            ProductDto productDto = new ProductDto(product);

            productDtoList.add(productDto);

        }

        return productDtoList;
    }

    public List<ProductDto> getProductsByCategory(String productCategory){
        List<Product> products = this.productDao.findAllByProductCategory(productCategory);

        List<ProductDto> productDtoList = new ArrayList<>();

        for(Product product : products){

            ProductDto productDto = new ProductDto(product);

            productDtoList.add(productDto);

        }

        return productDtoList;
    }

    public ProductDto getProductById(Integer productId){
        Product product = this.productDao.findByProductId(productId);

        ProductDto productDto = null;

        if (product != null){
            productDto = new ProductDto(product);
        }

        return productDto;
    }

    public List<ProductDto> getProductsWithSearch(SearchRQ searchRQ){
        List<ProductDto> productDtoList = this.productJDBCDao.getProductsWithSearch(searchRQ);
        return productDtoList;
    }

    public ProductDto saveAndUpdateProduct(ProductDto productDto){
        Product exProduct = null;

        if (productDto.getProductId()!= null){
            exProduct = productDao.findByProductId(productDto.getProductId());
        }else {
            exProduct= new Product();
        }

        exProduct.setProductName(productDto.getProductName());
        exProduct.setProductCategory(productDto.getProductCategory());
        exProduct.setQuantity(productDto.getQuantity());
        exProduct.setUnitPrice(productDto.getUnitPrice());
        exProduct.setDescription(productDto.getDescription());
        exProduct.setDescription(productDto.getDescription());

        this.productDao.saveAndFlush(exProduct);

        ProductDto updatedProduct = new ProductDto(exProduct);

        return updatedProduct;

    }


}
