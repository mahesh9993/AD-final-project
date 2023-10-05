package com.example.jproducts.dao;

import com.example.jproducts.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDao extends JpaRepository<Order,Integer> {

    List<Order> findAllByStatus (String status);
    Order findByOrderId (Integer orderId);
}
