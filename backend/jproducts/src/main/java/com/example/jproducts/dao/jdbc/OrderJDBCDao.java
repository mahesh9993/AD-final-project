package com.example.jproducts.dao.jdbc;

import com.example.jproducts.model.dto.OrderDto;
import com.example.jproducts.model.dto.SearchRQ;
import org.springframework.beans.factory.annotation.Autowired;
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
public class OrderJDBCDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<OrderDto> OrdersWithSearch(SearchRQ searchRQ){
        List<OrderDto> result = new ArrayList<>();
        Map<String,Object> params = new HashMap<>();

        StringBuilder sql = new StringBuilder();

        sql.append("select                         \n");
        sql.append("	o.ORDER_ID ,               \n");
        sql.append("	o.USER_ID ,                \n");
        sql.append("	o.PRODUCT_ID ,             \n");
        sql.append("	o.QUANTITY ,               \n");
        sql.append("	o.AMOUNT ,                 \n");
        sql.append("	o.DELIVERY_ADDRESS         \n");
        sql.append("from                           \n");
        sql.append("	orders o                   \n");

        if (searchRQ.getSearchInput()!=null){
            sql.append("where                          \n");
            if (searchRQ.getOrderStatus() != "complete"){
                sql.append("	o.STATUS = 'incomplete'    \n");
                sql.append("	and    \n");
            }else {
                sql.append("	o.STATUS = 'complete'    \n");
                sql.append("	and    \n");
            }
            sql.append("	o.ORDER_ID like '%"+searchRQ.getSearchInput()+"%';   \n");
        }

        return namedParameterJdbcTemplate.query(sql.toString(), params, new ResultSetExtractor<List<OrderDto>>() {
            @Override
            public List<OrderDto> extractData(ResultSet rs) throws SQLException, DataAccessException {
                while (rs.next()){
                    OrderDto orderDto = new OrderDto();
                    orderDto.setOrderId(rs.getInt("ORDER_ID"));
                    orderDto.setUserId(rs.getInt("USER_ID"));
                    orderDto.setProductId(rs.getInt("PRODUCT_ID"));
                    orderDto.setQuantity(rs.getInt("QUANTITY"));
                    orderDto.setAmount(rs.getInt("AMOUNT"));
                    orderDto.setDeliveryAddress(rs.getString("DELIVERY_ADDRESS"));


                    result.add(orderDto);
                }
                return result;
            }
        });
    }
}
