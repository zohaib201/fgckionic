import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController, MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { FCM } from '@ionic-native/fcm/ngx';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  data = {
    name: '',
    email: '',
    password: '',
    phno: '',
    notificationToken: ''
  };
  invaliddata = false;
  emptyField = false;
  inValidcredentials = false;
  constructor(
    public loginsrv: AuthService,
    public route: Router,
    public nav: NavController,
    public loadingController: LoadingController,
    public menuCtrl: MenuController,
    public toastController: ToastController,
    public alertController: AlertController,
    public fcm: FCM
  ) {
    this.menuCtrl.enable(false);

  }

  ngOnInit() {
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Request Submitted! ',
      message: 'Your registration has been submitted and will be active after Admin approval.',
      buttons: [
         {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async submit() {
      // this.fcm.getToken().then(token => {
      //     this.data.notificationToken = token;
      //     console.log(this.data);
      // });


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

    const toast = await this.toastController.create({
      message: 'Please fill all the fields',
      duration: 3500
    });

    const already = await this.toastController.create({
      message: 'Email already exist.',
      duration: 3500
    });

    const login = await this.toastController.create({
      message: 'You are registered successfully. But you are not approved by admin.',
      duration: 3500
    });

    if (this.data.name === '' || this.data.email === '' || this.data.password === '' || this.data.phno === '') {
        loadingElement.dismiss();
      toast.present();
    } else {

        this.emptyField = false;

        this.loginsrv.signup(this.data).subscribe((data: any) => {
            if (data.message === "Email is already taken! Please choose another one") {
            already.present();
                loadingElement.dismiss();
          } else {
                loadingElement.dismiss();
            this.presentAlertConfirm();
            this.route.navigateByUrl('/login');
            this.data.name = '';
            this.data.email = '';
            this.data.password = '';
            this.data.phno = '';
          }
        });
    }
  }

}

