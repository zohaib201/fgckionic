import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-prayerwall',
  templateUrl: './prayerwall.page.html',
  styleUrls: ['./prayerwall.page.scss'],
})
export class PrayerwallPage implements OnInit {
  prayer: any;
  constructor(private  authSrv: AuthService, public loadingController: LoadingController) { }

  ngOnInit() {

  }
    async ionViewDidEnter() {
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
        this.authSrv.getallprayer().subscribe(((data: any) => {
            this.prayer = data;
            loadingElement.dismiss();
            console.log(this.prayer);
        }));
    }
}
