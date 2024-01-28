package com.example.Product.Management.model;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;

import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Entity
@Table(name = "productdetails")
public class ProductModel {
	

	private static final boolean active = true;
	
	 @Id
	  
	private String file_id;

	public String getFile_id() {
		return file_id;
	}

	public void setFile_id(String file_id) {
		this.file_id = file_id;
	}



	@Column(name = "productname")
	
	//@Pattern(regexp = "^[a-zA-Z0-9]*$ ", message = "length must be in between 1 to 10")
	
	private String productname;

	@Column(name = "productprice")
	
	@Pattern(regexp = "^[0-9_.]{1,8}", message = "length must be in between 1 to 5")
	private String productprice;

	@Column(name = "productquality")
	
	@Pattern(regexp = "^[a-zA-Z]{1,7}||[1-5]{1}", message = "length must be in between 1 to 7")
	private String productquality;
	
	
	
	 
	 

	
	
	
	 //private Boolean active;
	 
	private boolean status=active;

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public  String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	 

	 
	@Column(name = "date")
	private String date;
	
	
	
	

	public ProductModel() {

	}
	

	public ProductModel(String productprice,String productname, String productquality,  String date, boolean status) {
		super();
		
		this.productname = productname;
		this.productprice = productprice;
		this.productquality = productquality;
		this.date=date;
		this.status=status;
		
		 
	}
	
	 
	 

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public String getProductprice() {
		return productprice;
	}

	public void setProductprice(String productprice) {
		this.productprice = productprice;
	}

	public String getProductquality() {
		return productquality;
	}

	public void setProductquality(String productquality) {
		this.productquality = productquality;
	}

	 
	 

}