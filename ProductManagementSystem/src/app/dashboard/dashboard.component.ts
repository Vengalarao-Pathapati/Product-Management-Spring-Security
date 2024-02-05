import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn=false;
  opened=false;

  constructor(private router:Router,
    private authenticationService:AuthenticationService) { }

  ngOnInit(): void {

    window.history.forward();
    function noBack() {
        window.history.forward();
    }

    console.log(this.authenticationService.username)
 
      
  this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('Login ->' + this.isLoggedIn);

    if(this.isLoggedIn==false){
      
      this.router.navigate(['/unknownuser'])
    } 
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
