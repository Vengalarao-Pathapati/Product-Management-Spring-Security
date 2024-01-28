package com.example.Product.Management.controller;
import com.example.Product.Management.model.ProductModel;
import com.example.Product.Management.service.ProductService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
//@RequestMapping("/api/v1")
//@Controller
public class BasicAuthController {
	/*@Autowired
	ProductService productService;
	

	@GetMapping("/products")
	private List<ProductModel> getAllProductModel()
	{
		return productService.getAllProductModel();
		
	}*/
	@GetMapping("/basicauth")
	public AuthenticationBean helloWorldBean() {
	return new AuthenticationBean("You are authenticated");
	}
	
	


}