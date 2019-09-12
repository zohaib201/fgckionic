import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-cellgroup',
  templateUrl: './cellgroup.page.html',
  styleUrls: ['./cellgroup.page.scss'],
})
export class CellgroupPage implements OnInit {
  cellgroups: any;
  constructor(private authSrv: AuthService, public loadingController: LoadingController) { }
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
    this.authSrv.cellgroups().subscribe((data: any) => {
    this.cellgroups = data;
      loadingElement.dismiss();
    console.log(this.cellgroups);
    });
    }
}
