import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {any} from 'codelyzer/util/function';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  getall: any;

  constructor(private autsrv: AuthService, public loadingController: LoadingController) { }
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
    this.autsrv.getallnotification().subscribe((data: any) => {
      console.log(data);
      this.getall = data;
      loadingElement.dismiss();
    });
  }

}
