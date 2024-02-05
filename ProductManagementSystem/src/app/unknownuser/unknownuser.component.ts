import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unknownuser',
  templateUrl: './unknownuser.component.html',
  styleUrls: ['./unknownuser.component.css']
})
export class UnknownuserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }

}
