// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-blog-detail',
//   templateUrl: './blog-detail.page.html',
//   styleUrls: ['./blog-detail.page.scss'],
// })
// export class BlogDetailPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage implements OnInit {
  constructor(private AuthSrv: AuthService , private activatedroute: ActivatedRoute) { }
  devotional: any;
  url = environment.baseurl;
  ngOnInit() {
    let id = this.activatedroute.snapshot.params.bid;
    this.AuthSrv.devotionalsingle(id).subscribe((data: any) =>{
    this.devotional = data;
    console.log(this.devotional);
    })
  }
}
