package com.example.Product.Management.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.Product.Management.model.ProductModel;
import com.example.Product.Management.model.User;


@Repository

public interface LoginRepository extends JpaRepository<User,Integer>{
	//public LoginModel findByEmailidAndPassword(String emailid,String password);
	//public LoginModel findByid(String id);
	//public LoginModel findByEmailid(String emailid);
	Optional<User> findByUserName(String userName);



	//public LoginModel findByEmailidAndPassword(String emailid, String password);

}
