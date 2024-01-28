package com.example.Product.Management.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.Product.Management.fileuploaddownload.payload.Response;
import com.example.Product.Management.model.FileModel;
import com.example.Product.Management.model.ProductModel;
import com.example.Product.Management.service.DatabaseFileService;
 
@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class FileUploadController {

    @Autowired
    private DatabaseFileService fileStorageService;
    
    @GetMapping("/files")
	private List<FileModel> getAllFileModel()
	{
		return fileStorageService.getAllFileModel();
		
	}

    @PostMapping("/uploadfile")
    public String uploadFile(@RequestParam("file") MultipartFile file,FileModel filemodel) {
    	FileModel fileName = fileStorageService.storeFile(file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName.getFile_id())
                .toUriString();

        /*return new Response(fileName.getFileName(), fileDownloadUri,
                file.getContentType(), file.getSize(),filemodel.getFile_id());*/
       // return new FileModel(fileName.getFile_id(), fileDownloadUri, fileDownloadUri, null);
        
        return fileName.getFile_id();
        
    }
    @GetMapping("/file/{file_id}")
	 
	public ResponseEntity<Map<String,Boolean>>getProduct(@PathVariable String file_id){
		try {
			FileModel product1 = fileStorageService.getProductModelById(file_id);
		
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

    /*@PostMapping("/uploadMultipleFiles")
    public List<Response> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files,ProductModel products) {
        return Arrays.asList(files,products)
                .stream()
                .map(file -> uploadFile(file))
                .collect(Collectors.toList());
    }*/
}
}
