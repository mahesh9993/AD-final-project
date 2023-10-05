package com.example.jproducts.service;

import com.example.jproducts.model.dto.OrderDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OrderServiceTest {

    @Autowired private OrderService orderService;

//    @Test
//    void completeOrder() {
//        OrderDto orderDto = new OrderDto();
//
//        orderDto.setOrderId(1);
//
//        this.orderService.completeOrder(orderDto);
//    }

//    @Test
//    void getOrdersByStatus() {
//        this.orderService.getOrdersByStatus("incomplete");
//    }

//    @Test
//    void addOrder() {
//        OrderDto orderDto = new OrderDto();
//
//        orderDto.setUserId(1);
//        orderDto.setProductId(3);
//        orderDto.setQuantity(100);
//        orderDto.setAmount(100);
//        orderDto.setStatus("incomplete");
//        orderDto.setDeliveryAddress("matale rd, katugastota");
//
//        this.orderService.addOrder(orderDto);
//    }
}