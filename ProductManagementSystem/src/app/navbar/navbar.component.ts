import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';
//import { SidebarComponent} from '@syncfusion/ej2-angular-navigations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn=false;
  opened=false;

  constructor(private authenticationService:AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('Login ->' + this.isLoggedIn);
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
  productlist(){
    this.router.navigate(['/productlist'])
  }
  addproduct(){
    this.router.navigate(['/addproduct'])
  }

  //@ViewChild('sidebar') sidebar: SidebarComponent;
public onCreated(args: any) {
    // this.sidebar.element.style.visibility = '';
  
}

}
