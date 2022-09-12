package com.product.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.Entity.Product;
import com.product.repo.IProductRepository;

@Service
public class ProductServiceImpl implements IProductService{

	@Autowired
	IProductRepository  productRepsitory;
	
	@Override
	public Integer addProduct(Product product) {
		Product addProduct = productRepsitory.save(product);
		return addProduct.getId(); 
	}

	@Override
	public List<Product> getAllProducts() {
		return productRepsitory.findAll();
	}

}
