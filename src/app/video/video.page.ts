import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment.prod';
import { NavController, LoadingController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  videoarr: any;
  url = environment.baseurl;
  constructor(private AuthSrv: AuthService , public loadingController: LoadingController) { }

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
    this.AuthSrv.videoget().subscribe((data: any) => {
      this.videoarr  =  data;
      loadingElement.dismiss();
      console.log(this.videoarr);
    });
  }

}
