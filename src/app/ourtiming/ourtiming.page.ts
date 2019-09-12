import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {LoadingController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-ourtiming',
  templateUrl: './ourtiming.page.html',
  styleUrls: ['./ourtiming.page.scss'],
})
export class OurtimingPage implements OnInit {
  public Events: any = [];
  constructor(private AuthSrv: AuthService,
              public loadingController: LoadingController) { }

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
    this.AuthSrv.All_event().subscribe(data => {
    this.Events = data;
    console.log(this.Events);
      loadingElement.dismiss();
    });
  }
}
