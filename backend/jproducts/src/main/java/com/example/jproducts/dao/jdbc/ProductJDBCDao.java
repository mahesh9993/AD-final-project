package com.example.jproducts.dao.jdbc;

import com.example.jproducts.model.dto.ProductDto;
import com.example.jproducts.model.dto.SearchRQ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Repository
public class ProductJDBCDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<ProductDto> getProductsWithSearch(SearchRQ searchRQ){
        List<ProductDto> result = new ArrayList<>();
        Map<String,Object> params = new HashMap<>();

        StringBuilder sql = new StringBuilder();

        sql.append("select                             \n");
        sql.append("	p.PRODUCT_ID ,                 \n");
        sql.append("	p.PRODUCT_NAME ,               \n");
        sql.append("	p.IMAGE_LINK  ,                \n");
        sql.append("	p.PRODUCT_CATEGORY ,           \n");
        sql.append("	p.QUANTITY ,                   \n");
        sql.append("	p.UNIT_PRICE                   \n");
        sql.append("from                               \n");
        sql.append("	product p                      \n");

        if (searchRQ.getSearchInput()!=null){
            sql.append("where                              \n");
            sql.append("	p.PRODUCT_NAME like '%"+searchRQ.getSearchInput()+"%';   \n");
        }

        return namedParameterJdbcTemplate.query(sql.toString(), params, new ResultSetExtractor<List<ProductDto>>() {
            @Override
            public List<ProductDto> extractData(ResultSet rs) throws SQLException, DataAccessException {
                while (rs.next()){
                    ProductDto productDto = new ProductDto();
                    productDto.setProductId(rs.getInt("PRODUCT_ID"));
                    productDto.setProductName(rs.getString("PRODUCT_NAME"));
                    productDto.setImgLink(rs.getString("IMAGE_LINK"));
                    productDto.setProductCategory(rs.getString("PRODUCT_CATEGORY"));
                    productDto.setQuantity(rs.getInt("QUANTITY"));
                    productDto.setUnitPrice(rs.getInt("UNIT_PRICE"));

                    result.add(productDto);
                }
                return result;
            }
        });
    }
}
