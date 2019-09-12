import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {environment} from '../../environments/environment';
import {LoadingController, MenuController, Platform} from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-single-member',
  templateUrl: './single-member.page.html',
  styleUrls: ['./single-member.page.scss'],
})
export class SingleMemberPage implements OnInit {
  id : any;
  store: any;
  url = environment.baseurl;
  cell_groupName: any;
  constructor(
    private route: ActivatedRoute ,
    private authSrv: AuthService,
    private  menucontroller: MenuController,
    public loadingController: LoadingController,
    private photoViewer: PhotoViewer,
    public platform: Platform
     ) {
  }
  // phot() {
  //   this.platform.ready().then(() => {
  //     let photoUrl = "https://www.pexels.com/photo/three-women-walking-at-shore-1589867/";
  //     var title = "View photo";
  //     var options = {
  //       share: true,
  //       close: true
  //     };
  //     this.photoViewer.show(photoUrl, title, options);
  //   });
  // }

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
      this.id = this.route.snapshot.params['mid'];
    this.authSrv.memberbyMemberFromAppID(this.id).subscribe((data: any) => {
      this.store = data;
      console.log(data.cellGroupId);
      this.authSrv.cell_group_ID(data.cellGroupId).subscribe((item: any) => {
          this.cell_groupName = item;
        loadingElement.dismiss();
          console.log(item);
      });
      console.log(data);
    });
  }
}
