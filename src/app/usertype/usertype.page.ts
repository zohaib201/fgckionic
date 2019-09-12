import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.page.html',
  styleUrls: ['./usertype.page.scss'],
})
export class UsertypePage implements OnInit {

  constructor(private route: Router) { 
     
  }

  ngOnInit() {
  }
  guest(){
    localStorage.setItem('guest' , "guest");
    this.route.navigateByUrl('/home-for-guest');
  }
}
