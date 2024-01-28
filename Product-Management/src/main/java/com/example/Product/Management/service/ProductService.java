package com.example.Product.Management.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.Product.Management.model.ProductModel;
import com.example.Product.Management.repository.ProductRepository;
import org.springframework.util.StringUtils;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;
	
	 
	
	
	public List<ProductModel> getAllProductModel(){
		
		List<ProductModel> products = new ArrayList<ProductModel>();
		productRepository.findAll().forEach(products1 -> products.add(products1));
		return products;
		
	}
	public ProductModel getProductModelById(String file_id)
	{
		return productRepository.findById(file_id).get();
	}
	public ProductModel saveOrUpdate(ProductModel products)
	{
		productRepository.save(products);
		return products;
	}
	public ProductModel delete(String file_id)
	{
		productRepository.deleteById(file_id);
		return null;
	
		
	}
	public ProductModel update(ProductModel products,int file_id)
	{
		return productRepository.save(products);
	}

}
