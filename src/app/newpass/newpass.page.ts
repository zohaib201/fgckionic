import { Component, OnInit } from '@angular/core';
import {LoadingController, ToastController} from '@ionic/angular';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.page.html',
  styleUrls: ['./newpass.page.scss'],
})
export class NewpassPage implements OnInit {
  data = {reqNewPassword: '', id1: ''};
  constructor(public toastController: ToastController, public auth: AuthService, public router: Router,
              private activeroute: ActivatedRoute, public loadingController: LoadingController) { }

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
    let id = this.data.id1 = this.activeroute.snapshot.params['id'];
    const toast = await this.toastController.create({
      message: 'Please Enter correct info',
      duration: 1400
    });
    // console.log(this.data.id + ' this is the message came form the ids section');
    if (this.data.reqNewPassword === '') {
      loadingElement.dismiss();
      toast.present();
    } else {
      this.auth.newpassword(this.data, id).subscribe(res  => {
        console.log(res);
        this.router.navigate(['/login']);
        loadingElement.dismiss();
      });
    }
  }
}
