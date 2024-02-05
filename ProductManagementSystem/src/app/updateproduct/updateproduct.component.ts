import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';
import { products } from '../products';
import { Productservice } from '../productservice.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  file_id:String;
  products: products = new products();
  public fg: FormGroup;
  msg="";
  isLoggedIn=false;
  submitted = false;
  opened=false;

  constructor(private fb:FormBuilder,private productServuce: Productservice,
    private route:ActivatedRoute,
    private router:Router,
    private authenticationService: AuthenticationService,)
     {this.fg = fb.group({
      
      productname:['',Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')],
      productprice: ['',],
      productquality: ['',],
      date:['', ],
      status:['',Validators.pattern('true|false')]
    }) }
    get p() {
      return this.fg.controls;
    }

  ngOnInit(): void {
    
    window.history.forward();
    function noBack() {
        window.history.forward();
         

    }

    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('Login ->' + this.isLoggedIn);

    
    

    this.file_id = this.route.snapshot.params['id'];
    this.productServuce.getProductById(this.file_id).subscribe(data=>{
      this.products=data;
    },error=>console.log(error)
    
    );
    if(this.isLoggedIn==false){
       
      this.router.navigate(['/unknownuser'])
    }else{
      return;
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.fg.controls;
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.fg.invalid)
    {
      console.log("unsuccess")
      alert("Enter the product details correctly")
      return;
      
      

    }console.log(this.fg.value)
     
    
    this.productServuce.updateProduct(this.file_id,this.products).subscribe(
   
     data =>{ alert("Product is updated successfully")
          console.log(data)
          
    
     this.router.navigate(["/productlist"])
     },error=>{console.log("Exception")
     

     alert("invalid product details")
 
    
   }
   
      
    )
    

  }
  cancel(){
    this.router.navigate(['/productlist'])
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
