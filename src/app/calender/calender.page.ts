import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {LoadingController} from '@ionic/angular';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {

  constructor(private AuthSrv: AuthService, public loadingController: LoadingController) { }
  showevent: any;
  myevents = [];
   ngOnInit() {
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    console.log(d);

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year , month , day].join('-');
  }
  desc : any;
  title: any;
  async dateSelected(event) {
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
   let ev  = this.formatDate(event);
      console.log(ev + 'console from ev');

      let check = true;
   this.AuthSrv.All_event().subscribe((data: any) => {
       console.log(data);
       this.myevents = [];
       loadingElement.dismiss();
       data.forEach(element => {
           console.log(element.date);

           if (element.date === ev) {
          check = false;
               this.myevents.push(element);
        }
      });
       if (check === false) {
        this.showevent = true;
      } else {
        this.showevent = false;
      }
    });
   // console.log(this.myevents)
  }
}
