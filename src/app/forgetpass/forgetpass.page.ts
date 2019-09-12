import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {EntercodePage} from '../entercode/entercode.page';
import {LoadingController, NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.page.html',
  styleUrls: ['./forgetpass.page.scss'],
})
export class ForgetpassPage implements OnInit {
  data = {email: ''};

  constructor(public auth: AuthService, public router: Router, public loadingController: LoadingController,
              public toastController: ToastController) { }

  ngOnInit() {
  }
  async forgotpass() {
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
    const toast = await this.toastController.create({
      message: 'Invalid Email. Please enter correct email.',
      duration: 1400
    });
    const toast2 = await this.toastController.create({
      message: 'Please enter your email',
      duration: 1400
    });
    console.log(this.data.email);
    this.auth.forgetemail(this.data).subscribe((data: any) => {
      if (this.data.email === '') {
        toast2.present();
        loadingElement.dismiss();
      } else if (data.message === 'success') {
        console.log('your email has sent successfully');
        this.router.navigateByUrl('/entercode');
        loadingElement.dismiss();
      } else {
        console.log('Invalid Email. Please enter correct email.');
        toast.present();
        loadingElement.dismiss();
      }
    });
  }
}
