import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment.prod';
import {ActivatedRoute} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  constructor(private AuthSrv: AuthService, public loadingController: LoadingController) { }
  devotional: any;
  url = environment.baseurl;
  async ngOnInit() {
    // this is the loading module code
    const loading = await this.loadingController.create({
      spinner: null,
      message: 'Loading',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    const loadingController = document.querySelector('ion-loading-controller');
    await loadingController.componentOnReady();

    const loadingElement = await loadingController.create({
      message: 'Please wait...',
      spinner: 'crescent'
    });
    await loadingElement.present();
    // loading module code ends here
    this.AuthSrv.devotionalgetall().subscribe((data: any) =>{
    this.devotional = data;
      loadingElement.dismiss();
    console.log(this.devotional);
    });
  }

}
