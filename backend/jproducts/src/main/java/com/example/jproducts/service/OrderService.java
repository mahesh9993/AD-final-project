package com.example.jproducts.service;

import com.example.jproducts.dao.OrderDao;
import com.example.jproducts.dao.ProductDao;
import com.example.jproducts.dao.UserDao;
import com.example.jproducts.dao.jdbc.OrderJDBCDao;
import com.example.jproducts.model.Order;
import com.example.jproducts.model.dto.OrderDto;
import com.example.jproducts.model.dto.SearchRQ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    @Autowired private OrderDao orderDao;
    @Autowired private UserDao userDao;
    @Autowired private ProductDao productDao;
    @Autowired
    private OrderJDBCDao orderJDBCDao;

    public OrderDto addOrder(OrderDto orderDto){
        Order newOrder = new Order();

        newOrder.setUser(this.userDao.findByUserId(orderDto.getUserId()));
        newOrder.setProduct(this.productDao.findByProductId(orderDto.getProductId()));
        newOrder.setQuantity(orderDto.getQuantity());
        newOrder.setAmount(orderDto.getAmount());
        newOrder.setStatus(orderDto.getStatus());
        newOrder.setDeliveryAddress(orderDto.getDeliveryAddress());

        this.orderDao.saveAndFlush(newOrder);

        return new OrderDto(newOrder);

    }

    public List<OrderDto> cartCheckout(List<OrderDto> orderDtos){
        List<OrderDto> orderList = new ArrayList<>();

        for (OrderDto orderDto : orderDtos){
            Order order = new Order();

            order.setUser(this.userDao.findByUserId(orderDto.getUserId()));
            order.setProduct(this.productDao.findByProductId(orderDto.getProductId()));
            order.setQuantity(orderDto.getQuantity());
            order.setAmount(orderDto.getAmount());
            order.setStatus("incomplete");
            order.setDeliveryAddress(orderDto.getDeliveryAddress());

            this.orderDao.saveAndFlush(order);

            orderList.add(new OrderDto(order));

        }
        return orderList;
    }

    public List<OrderDto> getOrdersByStatus(String status){
       List<Order> orders = this.orderDao.findAllByStatus(status);

       List<OrderDto> orderDtoList = new ArrayList<>();

       for (Order order : orders){

           OrderDto orderDto = new OrderDto(order);

           orderDtoList.add(orderDto);
       }

       return orderDtoList;
    }

    public OrderDto completeOrder(OrderDto orderDto){
        Order order = this.orderDao.findByOrderId(orderDto.getOrderId());

        order.setStatus(orderDto.getStatus());

        this.orderDao.saveAndFlush(order);

        OrderDto dto = new OrderDto(order);

        return dto;
    }

    public List<OrderDto> OrdersWithSearch (SearchRQ searchRQ){
        List<OrderDto> orderDtoList = this.orderJDBCDao.OrdersWithSearch(searchRQ);
        List<OrderDto> result = new ArrayList<>();

        for (OrderDto orderDto : orderDtoList){
            Order order = new Order();

            order.setOrderId(orderDto.getOrderId());
            order.setUser(this.userDao.findByUserId(orderDto.getUserId()));
            order.setProduct(this.productDao.findByProductId(orderDto.getProductId()));
            order.setQuantity(orderDto.getQuantity());
            order.setAmount(orderDto.getAmount());
            order.setDeliveryAddress(orderDto.getDeliveryAddress());

            result.add(new OrderDto(order));
        }
        return result;
    }
}
