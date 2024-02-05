import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    ) {  }

  ngOnInit() {

    window.history.forward();
    function noBack() {
        window.history.forward();
    }
    
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/dashboard']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }

  handleLogout() {
    this.authenticationService.logout();
     
  }

  hash(){
    
    //this.location.onPopState(()=>{
      //var result= window.confirm("You will be loggedout from your account")
      //this.handleLogout();
      //alert("u will be logged out");
       
       
    //})
  }

 
}
