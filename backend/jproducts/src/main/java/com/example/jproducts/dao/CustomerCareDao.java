package com.example.jproducts.dao;

import com.example.jproducts.model.CustomerCare;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerCareDao extends JpaRepository<CustomerCare,Integer> {

    List<CustomerCare> findAllByStatus (String status);
    CustomerCare findByCommentId (Integer id);
}
