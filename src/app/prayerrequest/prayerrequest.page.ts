import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prayerrequest',
  templateUrl: './prayerrequest.page.html',
  styleUrls: ['./prayerrequest.page.scss'],
})
export class PrayerrequestPage implements OnInit {
  data = {description: ''};
  constructor(private authSrv: AuthService, public toastController: ToastController, public loadingController: LoadingController , private route: Router) { }

  async create(){
    // const loading = await this.loadingController.create({
    //   spinner: null,
    //   message: 'Loading',
    //   translucent: true,
    //   cssClass: 'custom-class custom-loading'
    // });
    // await loading.present();
    const loading = await this.loadingController.create({
      spinner: null,
      message: 'Loading',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    const loadingController = document.querySelector('ion-loading-controller');
    await loadingController.componentOnReady();

    const toast = await this.toastController.create({
      message: 'Sorry! You can not request for prayer untill your complete data is filled by admin. Please contact admin',
      duration: 6000
    });
    const success = await this.toastController.create({
      message: 'Your prayer request has been submitted!',
      duration: 1000
    });

    let id  = localStorage.getItem('id');
      this.authSrv.prayercreate(id,this.data).subscribe((data: any) => { 
        if (data.message === "Sorry! You can not request for prayer untill your complete data is filled by admin. Please contact admin") {
          toast.present();
        } else {
          success.present(); 
          this.route.navigateByUrl('/prayerwall'); 
        }
      });
      loading.dismiss();
    }
    
  ngOnInit() {
  }
 
}
