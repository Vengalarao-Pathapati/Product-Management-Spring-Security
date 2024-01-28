package com.example.Product.Management.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.Product.Management.repository.LoginRepository;


import com.example.Product.Management.model.*;




//@Service
//public class LoginService implements UserDetailsService {
	
	//@Autowired
	//LoginRepository LoginRepository;
	
	/*public LoginService(LoginRepository LoginRepository) {
		super();
		this.LoginRepository = LoginRepository;
	}
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	
		LoginModel user = LoginRepository.findByEmailid(username);
		if(user == null) {
			throw new UsernameNotFoundException("Invalid username or password.");
		}
		//return new org.springframework.security.core.userdetails.User(user.getEmailid(), user.getPassword(), null);		
		return new MyUserDetails(username);
	}*/
	 /*@Override
	    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
	        Optional<User> user = LoginRepository.findByUserName(userName);

	        user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + userName));

	        return user.map(MyUserDetails::new).get();
	    }*/
	 
	 

	
	
 

//}
