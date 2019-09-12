import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment.prod';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {

  videoarr: any;
  url = environment.baseurl;
  constructor(private AuthSrv: AuthService,  public loadingController: LoadingController) { }

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
    this.AuthSrv.audioget().subscribe((data: any) => {
      this.videoarr  =  data;
      loadingElement.dismiss();
      console.log(this.videoarr);
    });
  }
}
