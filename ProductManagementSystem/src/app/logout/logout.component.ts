import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})


export class LogoutComponent implements OnInit {
  isLoggedIn=false;
  

  constructor(private router:Router,private authenticationService: AuthenticationService,
    ) { }

  ngOnInit() {

    window.history.forward();
    function noBack() {
        window.history.forward();
    }
  }

  login(){
    this.router.navigate(['/login'])
  }

}
