package com.lambda.repo;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.stereotype.Repository;

import com.lambda.entity.Order;

@Repository
public class OrderRepo {
	public List<Order> buildOrders(){
		return Stream.of(
				new Order(100, "samsung", 10000 , 3),
				new Order(101, "Nokia", 50000 , 5),
				new Order(102, "TV LG", 500000 , 1)
				).collect(Collectors.toList());
	}

}
