package com.product.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.Entity.Product;
import com.product.exception.ResourceNotFoundException;
import com.product.repo.IProductRepository;

@Service
public class ProductServiceImpl implements IProductService {

	@Autowired
	IProductRepository productRepsitory;

	@Override
	public Integer addProduct(Product product) {
		Product addProduct = productRepsitory.save(product);
		return addProduct.getId();
	}

	@Override
	public List<Product> getAllProducts() {
		return productRepsitory.findAll();
	}

	@Override
	public Optional<Product> getProduct(Integer id) {
		return productRepsitory.findById(id);
	}

	@Override
	public Product updateProduct(Product product, Integer id) {
		// checks product id exist or not.. if not throws error
		Product existingOrNot = productRepsitory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product", "Id", id));
		existingOrNot.setProductName(product.getProductName());
		existingOrNot.setProductBrand(product.getProductBrand());
		existingOrNot.setProductCategory(product.getProductCategory());
		existingOrNot.setProductPrice(product.getProductPrice());
		productRepsitory.save(existingOrNot);
		return existingOrNot;
	}

	@Override
	public void deleteById(Integer id) {
		productRepsitory.deleteById(id);		
	}

	@Override
	public String deleteAll() {
		productRepsitory.deleteAll();
		return "deleted all successfully";
	}

}
