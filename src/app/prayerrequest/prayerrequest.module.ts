import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrayerrequestPage } from './prayerrequest.page';

const routes: Routes = [
  {
    path: '',
    component: PrayerrequestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrayerrequestPage]
})
export class PrayerrequestPageModule {}
