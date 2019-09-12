import { Component, OnInit } from '@angular/core';
import {LoadingController, ToastController} from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.page.html',
  styleUrls: ['./updatepassword.page.scss'],
})
export class UpdatepasswordPage implements OnInit {

  resetpassword = { oldPassword: '', newPassword: '' };
  ID: any;
  constructor(private toastController: ToastController, private authSrv: AuthService , private Router: Router, private  loadingController: LoadingController) { }

  ngOnInit() {
  }

async password() {
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
   this.ID  = JSON.parse(localStorage.getItem('id'));
    console.log(this.ID );
    const current = await this.toastController.create({
      message: 'Innvalid current password',
      duration: 2000
    });

    const success = await this.toastController.create({
      message: 'Password Update successfully',
      duration: 2500
    });

    const fillallfields = await this.toastController.create({
      message: 'Please fill all the fields',
      duration: 2000
    });
    if (this.resetpassword.oldPassword === "" || this.resetpassword.newPassword === "") {
      fillallfields.present();
        loadingElement.dismiss();
    } else {
      this.authSrv.Updatepassword(this.ID, this.resetpassword).subscribe((data: any) => {
        if (data.message === "NotOk") {
          current.present();
            loadingElement.dismiss();
        } else if(data.message === "OK"){
          success.present();
          this.resetpassword.oldPassword = '';
          this.resetpassword.newPassword = '';
          this.Router.navigateByUrl('/login');
          localStorage.clear();
            loadingElement.dismiss();
        }
      });
    }
  }
}
