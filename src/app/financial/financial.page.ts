import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.page.html',
  styleUrls: ['./financial.page.scss'],
})
export class FinancialPage implements OnInit {
  all: any;
  
  constructor(private srv: AuthService) { }

  ngOnInit() {
    let id = localStorage.getItem('id');
    this.srv.getsingle(id).subscribe((data: any) => {
      this.all = data ;
      console.log(  this.all);
    })

  }

}
