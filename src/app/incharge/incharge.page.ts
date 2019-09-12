import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {environment} from '../../environments/environment.prod';

@Component({
  selector: 'app-incharge',
  templateUrl: './incharge.page.html',
  styleUrls: ['./incharge.page.scss'],
})
export class InchargePage implements OnInit {
  incharge: any;
  url = environment.baseurl;

  constructor(public auth: AuthService, public loadingController: LoadingController) { }
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
    this.auth.all().subscribe((data: any) => {
      console.log('success');
      this.incharge = data;
      console.log(this.incharge);
      loadingElement.dismiss();
    });
  }

}
