import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home',  canActivate: [AuthGuard],    loadChildren: './home/home.module#HomePageModule' },
  { path: 'fgchistory',        loadChildren: './fgchistory/fgchistory.module#FgchistoryPageModule' },
  { path: 'contactus',        loadChildren: './contactus/contactus.module#ContactusPageModule' },
  { path: 'usertype',        loadChildren: './usertype/usertype.module#UsertypePageModule' },
  { path: 'members',     loadChildren: './members/members.module#MembersPageModule' },
  { path: 'setting',  canActivate: [AuthGuard],     loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'audio',         loadChildren: './audio/audio.module#AudioPageModule' },
  { path: 'video',         loadChildren: './video/video.module#VideoPageModule' },
  { path: 'ourtiming',          loadChildren: './ourtiming/ourtiming.module#OurtimingPageModule' },
  { path: 'cellgroup',  canActivate: [AuthGuard],     loadChildren: './cellgroup/cellgroup.module#CellgroupPageModule' },
  { path: 'blog',  canActivate: [AuthGuard],      loadChildren: './blog/blog.module#BlogPageModule' },
  { path: 'prayerwall',  canActivate: [AuthGuard],     loadChildren: './prayerwall/prayerwall.module#PrayerwallPageModule' },
  { path: 'prayerrequest',  canActivate: [AuthGuard],     loadChildren: './prayerrequest/prayerrequest.module#PrayerrequestPageModule' },
  { path: 'search',  canActivate: [AuthGuard],      loadChildren: './search/search.module#SearchPageModule' },
  { path: 'searchresult',  canActivate: [AuthGuard],     loadChildren: './searchresult/searchresult.module#SearchresultPageModule' },
  { path: 'login',   loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup',       loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'single-member/:mid',  canActivate: [AuthGuard],    loadChildren: './single-member/single-member.module#SingleMemberPageModule' },
  { path: 'blog-detail/:bid',  canActivate: [AuthGuard],  loadChildren: './blog-detail/blog-detail.module#BlogDetailPageModule' },
  { path: 'updatepassword',     loadChildren: './updatepassword/updatepassword.module#UpdatepasswordPageModule' },
  { path: 'home-for-guest', loadChildren: './home-for-guest/home-for-guest.module#HomeForGuestPageModule' },
  { path: 'calender',  loadChildren: './calender/calender.module#CalenderPageModule' },
  { path: 'polls-surveys', canActivate: [AuthGuard], loadChildren: './polls-surveys/polls-surveys.module#PollsSurveysPageModule' },
  { path: 'notification',  loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'single-survey/:id', loadChildren: './single-survey/single-survey.module#SingleSurveyPageModule' },
  { path: 'financial', loadChildren: './financial/financial.module#FinancialPageModule' },
  { path: 'av', loadChildren: './av/av.module#AvPageModule' },
  { path: 'forgetpass', loadChildren: './forgetpass/forgetpass.module#ForgetpassPageModule' },
  { path: 'entercode', loadChildren: './entercode/entercode.module#EntercodePageModule' },
  { path: 'newpass/:id', loadChildren: './newpass/newpass.module#NewpassPageModule' },
  { path: 'incharge', loadChildren: './incharge/incharge.module#InchargePageModule' },
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
