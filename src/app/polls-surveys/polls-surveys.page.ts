import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-polls-surveys',
  templateUrl: './polls-surveys.page.html',
  styleUrls: ['./polls-surveys.page.scss'],
})
export class PollsSurveysPage implements OnInit {
  all: any;
  number: any;
  constructor(private srv: AuthService , private route: Router) { }

  ngOnInit() {
    this.srv.getallquestion().subscribe((data: any) => {
      console.log(data);
      this.all = data;
      console.log(this.all);
    });

  }
  onchangeradio(event){
    console.log(event.detail.value)
    let id  = event.detail.value;
     this.route.navigate(['single-survey/' + id]);

    
  }
}
