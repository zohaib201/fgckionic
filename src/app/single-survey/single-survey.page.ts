import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-single-survey',
  templateUrl: './single-survey.page.html',
  styleUrls: ['./single-survey.page.scss'],
})
export class SingleSurveyPage implements OnInit {

  constructor(private routr: ActivatedRoute, private srv: AuthService , private router: Router ,public toastController: ToastController, public alertController: AlertController) { }
  id: any;
  name: any;
  questionid: any;
  send = {radioId: '', memberFromAppId: '' , questionId: ''};
  data = [];
  ngOnInit() {

  }
  ionViewWillEnter() {
    this.id = this.routr.snapshot.params['id'];
    this.srv.getsinglesurvey(this.id).subscribe((data: any) => {
      this.data = data.radios;
       this.name = data.statement;
     })
  }
  async onchangeradio(event) {

      
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
      const toast = await this.toastController.create({
          message: 'survey save successfull.',
          duration: 1800
      });

      const secondtime = await this.toastController.create({
          message: 'You are not allowed to submit second time.',
          duration: 1800
      });

    let id  = event.detail.value;
    let  mid = localStorage.getItem('id');

    this.send.radioId = id;
    this.send.questionId = this.id;
    this.send.memberFromAppId = mid;
    console.log(this.send);

    this.srv.answer(this.send).subscribe((data: any) => {
      console.log(data);
        if (data.message === 'You are not allowed to submit second time') {
            secondtime.present();
            this.router.navigate(['/home']);
        } else {
            toast.present();
            this.router.navigate(['/home']);
        }
     });

   }

}
