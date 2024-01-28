package com.example.Product.Management.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.Product.Management.fileuploaddownload.exception.FileNotFoundException;
import com.example.Product.Management.fileuploaddownload.exception.FileStorageException;
import com.example.Product.Management.model.FileModel;
import com.example.Product.Management.model.ProductModel;
import com.example.Product.Management.repository.DatabaseFileRepository;
import com.example.Product.Management.repository.ProductRepository;


@Service
public class DatabaseFileService {

    @Autowired
    DatabaseFileRepository dbFileRepository;
    
public List<FileModel> getAllFileModel(){
		
		List<FileModel> files = new ArrayList<FileModel>();
		dbFileRepository.findAll().forEach(files1 -> files.add(files1));
		return files;
		
	}

    
     
    

    public FileModel storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
         
        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            FileModel dbFile = new FileModel(fileName,  fileName,file.getContentType(), file.getBytes());

            return dbFileRepository.save(dbFile);
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public FileModel getFile(String fileId) {
        return dbFileRepository.findById(fileId)
                .orElseThrow(() -> new FileNotFoundException("File not found with id " + fileId));
    }
    public FileModel getProductModelById(String file_id)
	{
		return dbFileRepository.findById(file_id).get();
	}
}
