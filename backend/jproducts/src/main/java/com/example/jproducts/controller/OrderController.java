package com.example.jproducts.controller;

import com.example.jproducts.model.dto.OrderDto;
import com.example.jproducts.model.dto.SearchRQ;
import com.example.jproducts.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired OrderService orderService;

    @RequestMapping(value = "/addOrder",method = RequestMethod.POST)
    public ResponseEntity<OrderDto> addOrder(@RequestBody OrderDto orderDto){
        OrderDto newOrder = this.orderService.addOrder(orderDto);

        return new ResponseEntity<>(newOrder, HttpStatus.OK);
    }

    @RequestMapping(value = "/cartCheckout",method = RequestMethod.POST)
    public ResponseEntity<List<OrderDto>> cartCheckout (@RequestBody List<OrderDto> orderDtoList){
        List<OrderDto> orderList = this.orderService.cartCheckout(orderDtoList);

        return new ResponseEntity<>(orderList,HttpStatus.OK);
    }

    @RequestMapping(value = "/getOrdersByStatus/{status}",method = RequestMethod.GET)
    public ResponseEntity<List<OrderDto>> getOrdersByStatus(@PathVariable String status){

        List<OrderDto> orderDtoList = this.orderService.getOrdersByStatus(status);

        return new ResponseEntity<>(orderDtoList,HttpStatus.OK);

    }

    @RequestMapping(value = "/completeOrder",method = RequestMethod.POST)
    public ResponseEntity<OrderDto> completeOrder(@RequestBody OrderDto orderDto){

        OrderDto dto = this.orderService.completeOrder(orderDto);

        return new ResponseEntity<>(dto,HttpStatus.OK);
    }

    @RequestMapping(value = "/getOrdersWithSearch",method = RequestMethod.POST)
    public ResponseEntity<List<OrderDto>> getProductsWithSearch(@RequestBody SearchRQ searchRQ){
        List<OrderDto> orderDtos = this.orderService.OrdersWithSearch(searchRQ);

        return new ResponseEntity<>(orderDtos,HttpStatus.OK);
    }
}
