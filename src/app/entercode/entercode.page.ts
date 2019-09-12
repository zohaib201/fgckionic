import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-entercode',
  templateUrl: './entercode.page.html',
  styleUrls: ['./entercode.page.scss'],
})
export class EntercodePage implements OnInit {
  data = {vCode: ''};
  responce: any;

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
      message: 'Please Enter the correct code',
      duration: 1400
    });
    console.log(this.data.vCode);
    this.auth.code(this.data).subscribe((res: any ) => {
      console.log(res);
      this.responce = res;
      console.log(this.responce.id);
      let id = this.responce.id;
      console.log('message log');
      console.log(this.responce.message);
      if (this.responce.message === 'success') {
        this.router.navigate(['/newpass/' + id]);
        loadingElement.dismiss();
      } else if (this.responce.message === 'false') {
        console.log('toast presented');
        toast.present();
        loadingElement.dismiss();
      }
    });
  }

}
