import { Component } from '@angular/core';
import {LoadingController, MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];
user: any;
tokenn: any;
nid: any;
guest: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menucontroller: MenuController,
    private route: Router,
    private fcm: FCM,
    public loadingController: LoadingController
  ) {
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
          // this.router.navigate([data.landing_page, data.price]);
        } else {
          console.log('Received in foreground');
          // this.router.navigate([data.landing_page, data.price]);
        }
      });

     this.initializeApp();
           setInterval(() => {
                  this.user = JSON.parse(localStorage.getItem('user'));
           }, 500);

      setInterval(() => {
         this.guest  =  localStorage.getItem('guest');
       }, 500); }
  initializeApp() {


    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
    menuclose() {
    this.menucontroller.close();
    }

 async   logout() {
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
         spinner: 'crescent',
         duration: 2000
     });
     await loadingElement.present();
    this.menucontroller.close();
       localStorage.clear();
         this.route.navigateByUrl('/login');
     loadingElement.dismiss();

    }
    logoutguest(){
        localStorage.clear();
         this.route.navigateByUrl('/login');
    }
}
