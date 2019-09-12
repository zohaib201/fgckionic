import { Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Platform, LoadingController, MenuController } from '@ionic/angular';
import {AuthService} from '../services/auth.service';
import {environment} from '../../environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {
    backButtonSubscription;
    // for storing the returned subscription
    images: any;
    url = environment.baseurl;
    guest: any;

  constructor(private route: Router ,
              private menuCtrl: MenuController,
              private platform: Platform,
              public AuthSrv: AuthService,
              public loadingController: LoadingController) {

      setInterval(() => {
          this.guest  =  localStorage.getItem('guest');
      }, 500);
   }

   ionViewWillEnter() {
    setInterval(() => {
      this.menuCtrl.enable(true);
  }, 500);
  }
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
      this.AuthSrv.allimg().subscribe((data: any) => {
          console.log('success');
          this.images = data;
          console.log(this.images);
          loadingElement.dismiss();
      });
  }
    ngAfterViewInit() {
        this.platform.backButton.subscribe();
        this.backButtonSubscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
    }
    ngOnDestroy() {
        this.platform.backButton.subscribe();
        this.backButtonSubscription.unsubscribe();
    }
    ionViewDidLeave() {
        this.platform.backButton.subscribe();
        this.backButtonSubscription.unsubscribe();
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribe();
        this.backButtonSubscription.unsubscribe();
        this.platform.backButton.subscribe();
        this.backButtonSubscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
    }
    open() {
      this.menuCtrl.open();
    }
}
