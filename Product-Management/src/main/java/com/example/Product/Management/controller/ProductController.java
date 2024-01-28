package com.example.Product.Management.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.Product.Management.model.ProductModel;
import com.example.Product.Management.repository.ProductRepository;
import com.example.Product.Management.service.ProductService;


 

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	
	@GetMapping("/products")
	private List<ProductModel> getAllProductModel()
	{
		return productService.getAllProductModel();
		
	}
	@GetMapping("/products/{file_id}")
	 
	public ResponseEntity<Map<String,Boolean>>getProduct(@PathVariable String file_id){
		try {
			ProductModel product1 = productService.getProductModelById(file_id);
		
		Map<String,Boolean> response=new HashMap<>();
		//response.put("deleted", Boolean.TRUE);
		return new ResponseEntity(product1, HttpStatus.OK);
		//return ResponseEntity.ok(response);

	}catch(Exception e){
		System.out.println("=============id "+file_id+" details are not found in the database=============");
		 
		//return new ResponseEntity<ProductModel>(HttpStatus.NOT_FOUND);
		Map<String,Boolean> response=new HashMap<>();
		response.put(" id "+file_id+" details are not found in the database", Boolean.FALSE);
		return ResponseEntity.ok(response);
		
	}
		
	}
	 
	
	@DeleteMapping("/products/{file_id}")
	 
	public ResponseEntity<Map<String,Boolean>>deleteProduct(@PathVariable String file_id){
			try {
				ProductModel product1 = productService.delete(file_id);
			
			Map<String,Boolean> response=new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);

		}catch(Exception e){
			System.out.println("=============Unable to delete id "+file_id+" since it is not found in the database=============");
			 
			//return new ResponseEntity<ProductModel>(HttpStatus.NOT_FOUND);
			Map<String,Boolean> response=new HashMap<>();
			response.put(" Unable to delete id "+file_id+" since it is not found in the database", Boolean.FALSE);
			return ResponseEntity.ok(response);
			
		}
			
		}
	 
	@PostMapping("/addproduct")
	private String saveProduct(@RequestBody ProductModel products)
	{
		
		productService.saveOrUpdate(products);
		return products.getFile_id();
	}
	@PutMapping("/products/{file_id}")
	 
		public ResponseEntity update(@PathVariable String file_id,@RequestBody ProductModel products)
		{
		try {
		ProductModel existProduct=productService.getProductModelById(file_id);
		productService.saveOrUpdate(products);

		System.out.println("Update success");
		return new ResponseEntity<ProductModel>(existProduct,HttpStatus.OK);

		}catch(Exception e) {
		System.out.println("Update not success");
		//return (ResponseEntity) ResponseEntity.notFound();
		return new ResponseEntity<ProductModel>(HttpStatus.NOT_FOUND);

		}
		}
	
	 
	
	 
		
	
}
	 


