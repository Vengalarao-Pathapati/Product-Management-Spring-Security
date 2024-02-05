import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { files } from './files';
import { AuthenticationService } from './login/auth.service';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})


export class Productservice {
  private baseURL="http://localhost:8080/products";
  isLoggedIn=false ;
  
  
  
  

  constructor(private _http:HttpClient,
    private router:Router,
    private authenticationService: AuthenticationService,) { }

    uploadFile(file: File): Observable<HttpEvent<{}>> {
      const formdata: FormData = new FormData();
      formdata.append('file', file);
      //var xhr = new XMLHttpRequest();
     //xhr.open("POST", "http://localhost:8080/uploadfile");
      const req = new HttpRequest('POST', `http://localhost:8080/uploadfile`, formdata, {
        reportProgress: true,
        responseType: 'text',

        

        
    }
    
    );
   /* xhr.onload = function() {
      console.log(xhr.responseText);
    var response = JSON.parse(xhr.responseText);
    if(response.status == 200) {
      document.getElementById("demo").innerHTML=response.fileDownloadUri;

         
    } else {
        document.getElementById("demo").innerHTML="<p>error</p>"
    }
    
    
      
      
      
  }

  xhr.send(formdata);*/
    
  
    return this._http.request(req);    
      
     
     }
      
     
  getProductList():Observable<products[]>{
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('Login ->' + this.isLoggedIn);
    if(this.isLoggedIn==false){
      this.router.navigate(['/unknownuser'])
    } else{
      
      return this._http.get<products[]>(`${this.baseURL}`);
     

    }
    

    
  }
  addproduct(product: products):Observable<Object>{
      return this._http.post(`http://localhost:8080/addproduct`,product,{ responseType: 'text' });
      
    
  }
  addfile(product: products):Observable<Object>{
    return this._http.post(`http://localhost:8080/uploadfile`,product);
   
  }
  getProductById(file_id:String):Observable<products>{
    return this._http.get<products>(`${this.baseURL}/${file_id}`);

  }
   
  updateProduct(file_id:String,product:products):Observable<object>{
    return this._http.put(`${this.baseURL}/${file_id}`,product)
  }
  deleteProduct(file_id:String):Observable<object>{
    return this._http.delete(`${this.baseURL}/${file_id}`);
  }

  /*file(file:File): Observable<HttpEvent<{}>>{
    var demo = document.querySelector('#demo');
  
    
      var formData = new FormData();
      formData.append("file", file);
  
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:8080/uploadFile");
  
      xhr.onload = function() {
          console.log(xhr.responseText);
          var response = JSON.parse(xhr.responseText);
          if(xhr.status == 200) {
              //singleFileUploadError.style.display = "none";
              demo.innerHTML = "<p>File Uploaded Successfully.</p><p>DownloadUrl : <a href='" + response.fileDownloadUri + "' target='_blank'>" + response.fileDownloadUri + "</a></p>";
              //singleFileUploadSuccess.style.display = "block";
          } else {
            return;
              //demo.style.display = "none";
             // singleFileUploadError.innerHTML = (response && response.message) || "Some Error Occurred";
          }
      }
  
      xhr.send(formData);
      return
  
  
  }*/
   
   
}
