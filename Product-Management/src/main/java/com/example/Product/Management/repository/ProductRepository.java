package com.example.Product.Management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Product.Management.model.ProductModel;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, String>  {


	
	
	 
	/*@Modifying
	@Query(value = "DELETE FROM ProductModel e WHERE e.id = :id")
	int deleteByName(@Param("id") String id);*/

}
