import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {NavController, LoadingController, MenuController, ToastController, AlertController} from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoggedIn: any;
  users: any;
  user: any;
  constructor(
    public AuthSrv: AuthService,
    public route: Router,
    public nav: NavController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public fcm: FCM,
    public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }


  data = {
    email: '',
    password: '',
    notificationToken: ''
  };

  invaliddata = false;
  emptyField = false;
  inValidcredentials = false;



  async send() {
    this.fcm.getToken().then(token => {
      this.data.notificationToken = token;
      console.log(this.data);
    });

    this.AuthSrv.updatenotification(this.data).subscribe(res => {
      console.log('notification token has updated');
    });
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
      duration: 3000
    });
    await loadingElement.present();
    const toast = await this.toastController.create({
      message: 'Please fill all the fields',
      duration: 1400
    });
    const pending = await this.toastController.create({
      message: 'Approval pending . Try later',
      duration: 1400
    });
    const invalid = await this.toastController.create({
      message: 'Invalid credential',
      duration: 1400
    });

    if (this.data.email === '' || this.data.password === '') {

      toast.present();
      loadingElement.dismiss();

    } else {
      this.AuthSrv.login(this.data).subscribe((data: any) => {
        // console.log(data);
        if (data.message === "Not Authorized") {

          loadingElement.dismiss();
          invalid.present();

        } else if (data.message === "Approval Pending") {

          pending.present();
          loadingElement.dismiss();

        }
        else if (data.memberFromAppId) {

          this.route.navigateByUrl('/updatepassword');
          loadingElement.dismiss();
          localStorage.setItem('id', JSON.stringify(data.memberFromAppId));

        } else {
          this.AuthSrv.memberbyMemberFromAppID(data.memID).subscribe((item: any) => {
            console.log(item);
              this.fcm.getToken().then(token => {
                  this.data.notificationToken = token;
                  console.log(this.data);
              });
            this.AuthSrv.updatenotification(this.data).subscribe(res => {
              console.log('notification token has updated');
            });
            localStorage.setItem('user', JSON.stringify(item));
            let id = JSON.parse(localStorage.getItem('user')).id;
            localStorage.setItem('id', id);
            this.route.navigateByUrl('/home');
            loadingElement.dismiss();
            this.data.email = '';
            this.data.password = '';
          });
        }
      });
    }
  }
  guest() {
    localStorage.setItem('guest', "guest");
    this.route.navigateByUrl('/home');
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
   }

  ionViewDidEnter() {
     this.menuCtrl.enable(false);
  }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
}
