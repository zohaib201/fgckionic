import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  showList: boolean = false;
  searchQuery: string = '';
  items  = [];
  data = [];
  url = environment.baseurl;
  arr: any;
  constructor(private authsrv: AuthService , private router: Router, public loadingController: LoadingController) {
    // this.initializeItems();
    this.myapi();
  }
  async myapi() {
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
    this.authsrv.getallapprove().subscribe(data => {
       this.arr = data;
       this.arr.forEach(item => {
           this.data.push({id: item.id , name: item.name});
           loadingElement.dismiss();
      });
    });
  }
  keyword = 'name';
  selectEvent(item) {
      let id  = item.id;
      console.log(id);
      console.log(item);
      this.router.navigate(['/single-member/' + id]);
    }
    onChangeSearch(val: string) {
      // fetch remote data from here
      // And reassign the 'data' which is binded to 'data' property.
    }
    onFocused(e) {
      // do something when input is focused
    }
  initializeItems() {
  }

  getItems(ev: any) {
     this.initializeItems();
     this.myapi();
     let val = ev.target.value;
     if (val && val.trim() != '') {
       this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
       this.showList = true;
    } else {
       this.showList = false;
    }
    console.log(this.items);

  }
  ngOnInit() {
  }

}
