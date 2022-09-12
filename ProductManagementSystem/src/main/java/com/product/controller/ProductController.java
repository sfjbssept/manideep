package com.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.product.Entity.Product;
import com.product.Services.IProductService;

@RestController
public class ProductController {
	//CRUD C => create , R => Read , U => Update , D => Delete
	
	@Autowired
	IProductService productService;
	
	@PostMapping("/addproduct")
	Integer addSingleProduct(@RequestBody Product product) {
		System.out.println(product);
		Integer id = productService.addProduct(product);
		System.out.println(id);
		return id; 
	}
	
	@GetMapping("/getAllProducts")
	List<Product> getAllProductDetails(){
		return productService.getAllProducts();
	}
	
	
}
