import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { files } from '../files';
import { AuthenticationService } from '../login/auth.service';
import { products } from '../products';
import { Productservice } from '../productservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  products = new products();
  files = new files();

  
  
  
  file_id:String;
  

  public fg: FormGroup;
  submitted = false;
  isLoggedIn=false;
  opened=false;


selectedFiles: FileList;
	currentFile: File;
  msg: {};
  url: string | ArrayBuffer;
  fileName=String;
  

   

  constructor(private fb: FormBuilder,private productServuce: Productservice,
    private router:Router,
    private authenticationService: AuthenticationService,private route:ActivatedRoute,)
     { }
     

  ngOnInit(): void {

    this.fg = this.fb.group({
      
      productname:['',Validators.compose([Validators.required,Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$') ])],
      productprice: ['',Validators.compose([Validators.required,Validators.pattern('^([0-9]{0,9}((.)[0-9]{0,2}))')]) ],
      productquality: ['',Validators.compose([Validators.required,Validators.pattern('[1-5]{0,1}')])],
      date:['',Validators.compose([Validators.required]) ],
      file:['',Validators.required],
      
    file_id:['',Validators.compose([Validators.required])]
    })

    window.history.forward();
    function noBack() {
        window.history.forward();
    }

    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('Login ->' + this.isLoggedIn);
    if(this.isLoggedIn==false){
      
      this.router.navigate(['/unknownuser'])
    }else{
      return;
    }
    
  }
  get f(): { [key: string]: AbstractControl } {
    return this.fg.controls;
  }
  onSubmit():void{
    this.submitted = true;
    
    if(this.fg.invalid)
    {
      console.log("unsuccess")
      //alert("Enter the product details correctly")
      return;
      
      

    }console.log(this.fg.value)
    this.productServuce.addproduct(this.products).subscribe(
     data =>{
     
      console.log(data)
      alert("Product is added successfully")
    
    this.router.navigate(["/productlist"])
     },error=>{console.log("Exception")
     alert("invalid product details")
     console.log(error)
 
   })}
   
  cancel(){
    
    this.router.navigate(['/productlist'])
  }

  

selectFile(event) {
  

  
  
  this.selectedFiles = event.target.files;
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (event: ProgressEvent) => {
      this.url = (<FileReader>event.target).result;
    }

    reader.readAsDataURL(event.target.files[0]);
  }
  this.currentFile = this.selectedFiles.item(0);
   
 

}

upload() {
  
   
  this.currentFile = this.selectedFiles.item(0);
  this.productServuce.uploadFile(this.currentFile).subscribe(response => {
  this.selectedFiles.item(0);
  console.log(response)
  
   if (response instanceof HttpResponse) {
   this.msg = response.body;
   var demo=document.querySelector('#demo')
   demo.innerHTML="<p>File id is: "+response.body+"</p>"
   
      console.log(response.body);
  

      
      
    }	  
  });    
}
 

productlist(){
  this.router.navigate(['/productlist'])
}
addproduct(){
  this.router.navigate(['/addproduct'])
}

handleLogout() {
  this.authenticationService.logout();
  //this.router.navigate(['/logout'])
   
}
dashboard(){
  this.router.navigate(['/dashboard'])
}
openNav() {
window.resizeTo(80,100);
document.getElementById("mySidenav").style.width = "250px";





}
 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


  

}
