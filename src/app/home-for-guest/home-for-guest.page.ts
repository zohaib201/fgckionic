import { Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { Platform, LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-for-guest',
  templateUrl: './home-for-guest.page.html',
  styleUrls: ['./home-for-guest.page.scss'],
})
export class HomeForGuestPage implements OnInit, OnDestroy, AfterViewInit {
    backButtonSubscription2;
    // for storing the returned subscription

  constructor(private route: Router , private menuCtrl: MenuController, private platform: Platform) {
    if (localStorage.getItem('guest') === null) {
      this.route.navigate(['/login']);
   }
   }
   ionViewWillEnter() {
    setInterval(() => {this.menuCtrl.enable(true);
  }, 500);
  }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.platform.backButton.subscribe();
        this.backButtonSubscription2 = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
            localStorage.clear();
        });
    }
    ngOnDestroy() {
        this.platform.backButton.subscribe();
        this.backButtonSubscription2.unsubscribe();
        localStorage.clear();
    }
    ionViewDidLeave() {
        this.platform.backButton.subscribe();
        this.backButtonSubscription2.unsubscribe();
    }

}
