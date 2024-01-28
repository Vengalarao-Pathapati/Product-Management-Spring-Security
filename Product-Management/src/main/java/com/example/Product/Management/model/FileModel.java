package com.example.Product.Management.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;



@Entity
@Table(name = "filedetails")
public class FileModel {
	@Id
	 
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String file_id;
	
	public String getFile_id() {
		return file_id;
	}

	public void setFile_id(String file_id) {
		this.file_id = file_id;
	}

	private String fileName;
	
	

	private String fileType;

	@Lob
	private byte[] data;
	
	public FileModel() {
		
	}
	
	public FileModel(String file_id, String fileName, String fileType, byte[] data) {
		super();
		this.file_id = file_id;
		this.fileName = fileName;
		this.fileType = fileType;
		this.data = data;
	}
	 
	 

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	
	

}
