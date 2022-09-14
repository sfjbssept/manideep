package com.product.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@GetMapping("/getproduct/{id}")
	Optional<Product> getProductById(@PathVariable Integer id){
		Optional<Product> product = productService.getProduct(id);
		return product;
	} 

	@PutMapping("/update/{id}")
	public ResponseEntity<Product> updateSpecificProductDetail(@PathVariable("id") Integer Id , @RequestBody Product product){
		return new ResponseEntity<Product>(productService.updateProduct(product, Id) , HttpStatus.OK) ;
	}
	
	@DeleteMapping("delete/{id}")
	public ResponseEntity<Product> deleteProductById(@PathVariable Integer id){
		ResponseEntity<Product> responseEntity = new ResponseEntity<Product>(HttpStatus.OK);
		try {
			productService.deleteById(id);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity = new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
		}
		return responseEntity;
	}
	
	@DeleteMapping("/deleteallproducts")
	public String deleteAllProducts(){
		return productService.deleteAll();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
