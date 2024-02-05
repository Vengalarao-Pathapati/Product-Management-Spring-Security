import { PlatformLocation } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { files } from '../files';


import { AuthenticationService } from '../login/auth.service';
import { products } from '../products';
import { Productservice } from '../productservice.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products1 = new products();

  products: products[];
  fies1=new files();
  file:files[];
  

  selectedFiles: FileList;
	currentFile: File;
  msg: {};

  opened=false;

  
  
  message:string;
  isLoggedIn = false;
  constructor(private productService: Productservice,
    private router:Router,
    private authenticationService: AuthenticationService,
    ) { 
       
      
    }

  ngOnInit() {

   

    window.history.forward();
    function noBack() {
        window.history.forward();
    }
 
      
  this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('Login ->' + this.isLoggedIn);

    if(this.isLoggedIn==false){
      
      this.router.navigate(['/unknownuser'])
    } 
    this.getProducts();
    //console.log("HelloWorldComponent");
    //this.helloWorldService.helloWorldService().subscribe( (result) => {
     // this.message = result.content;
   // });

  }
  getProducts(){
    this.productService.getProductList().subscribe(data => {
      this.products=data;
    })
  }

  updateProduct(file_id:String){
    this.router.navigate(['/updateproduct',file_id]);

  }
  addproduct(){
    this.router.navigate(['/addproduct'])
  }
   

  deleteProduct(file_id:String){
   var result= confirm("Are you sure want to delete?");
    if(result)
    {
      this.productService.deleteProduct(file_id).subscribe(data=>{
        console.log(data);
        this.getProducts();
        alert("Your product is deleted successfully")

    })
  }else{
    return;
  }
}
  //logout(){
   // this.router.navigate(['/login'])
 // }

  handleLogout() {
    this.authenticationService.logout();
    //this.router.navigate(['/logout'])
     
  }

  reload(){

    if (window.performance) {
      console.info("window.performance works fine on this browser");
    }
    console.info(performance.navigation.type);
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
      console.info( "This page is reloaded" );
      this.handleLogout();
    } else {
      console.info( "This page is not reloaded");
    }
    
  }
  productlist(){
    this.router.navigate(['/productlist'])
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
 

