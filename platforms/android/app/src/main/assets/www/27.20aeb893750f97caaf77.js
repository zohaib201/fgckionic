(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{L6id:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),i=u("ZZ/e"),t=function(){function l(l,n,u){this.route=l,this.menuCtrl=n,this.platform=u}return l.prototype.ionViewWillEnter=function(){var l=this;setInterval(function(){l.menuCtrl.enable(!0)},500)},l.prototype.ngOnInit=function(){},l.prototype.ngAfterViewInit=function(){this.platform.backButton.subscribe(),this.backButtonSubscription=this.platform.backButton.subscribe(function(){navigator.app.exitApp()})},l.prototype.ngOnDestroy=function(){this.platform.backButton.subscribe(),this.backButtonSubscription.unsubscribe()},l.prototype.ionViewDidLeave=function(){this.platform.backButton.subscribe(),this.backButtonSubscription.unsubscribe()},l.prototype.ionViewDidEnter=function(){this.platform.backButton.subscribe(),this.backButtonSubscription.unsubscribe(),this.platform.backButton.subscribe(),this.backButtonSubscription=this.platform.backButton.subscribe(function(){navigator.app.exitApp()})},l}(),b=function(){return function(){}}(),r=u("pMnS"),c=u("oBZk"),e=u("ZYCi"),s=u("Ip0R"),p=o.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}[iconst][_ngcontent-%COMP%]{background-color:#026350;padding:30px;border-radius:50px;color:#fff;font-size:30px;box-shadow:-1px 3px 14px 10px rgba(0,0,0,.33)}.bc-img[_ngcontent-%COMP%]{--background:url('bc-2.a1ee46f8db37882efd1c.jpeg');background-size:cover!important;width:100%;background-position:center center!important}"]],data:{}});function a(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,c.G,c.j)),o.ob(1,49152,null,0,i.z,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[["color","primary"],["hideBackButton",""]],null,null,null,c.T,c.w)),o.ob(3,49152,null,0,i.zb,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.z,c.c)),o.ob(5,49152,null,0,i.j,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,c.L,c.p)),o.ob(7,49152,null,0,i.P,[o.h,o.k],null,null),(l()(),o.pb(8,0,null,0,2,"ion-title",[],null,null,null,c.S,c.v)),o.ob(9,49152,null,0,i.xb,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,[" Full Gospel Church "])),(l()(),o.pb(11,0,null,null,65,"ion-content",[],null,null,null,c.E,c.h)),o.ob(12,49152,null,0,i.s,[o.h,o.k],null,null),(l()(),o.pb(13,0,null,0,63,"div",[["padding",""]],null,null,null,null,null)),(l()(),o.pb(14,0,null,null,2,"ion-card",[],null,null,null,c.C,c.d)),o.ob(15,49152,null,0,i.k,[o.h,o.k],null,null),(l()(),o.pb(16,0,null,0,0,"img",[["alt",""],["src","../../assets/img/bc-2.jpeg"]],null,null,null,null,null)),(l()(),o.pb(17,0,null,null,14,"ion-card",[["class","fcs"],["routerLink","/ourtiming"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.zb(l,19).onClick()&&i),"click"===n&&(i=!1!==o.zb(l,20).onClick(u)&&i),i},c.C,c.d)),o.ob(18,49152,null,0,i.k,[o.h,o.k],null,null),o.ob(19,16384,null,0,e.n,[e.m,e.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.ob(20,737280,null,0,i.Jb,[s.h,i.Gb,o.k,e.m,[2,e.n]],null,null),(l()(),o.pb(21,0,null,0,10,"ion-grid",[],null,null,null,c.F,c.i)),o.ob(22,49152,null,0,i.y,[o.h,o.k],null,null),(l()(),o.pb(23,0,null,0,8,"ion-row",[],null,null,null,c.N,c.q)),o.ob(24,49152,null,0,i.gb,[o.h,o.k],null,null),(l()(),o.pb(25,0,null,0,2,"ion-col",[["size","3"]],null,null,null,c.D,c.g)),o.ob(26,49152,null,0,i.r,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(27,0,null,0,0,"img",[["alt",""],["src","../../assets/img/timing.png"],["style","border-radius: 50px;height: 20px;width: 20px"]],null,null,null,null,null)),(l()(),o.pb(28,0,null,0,3,"ion-col",[["size","9"]],null,null,null,c.D,c.g)),o.ob(29,49152,null,0,i.r,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(30,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Weekly Programmes"])),(l()(),o.pb(32,0,null,null,14,"ion-card",[["class","fcs"],["routerLink","/notification"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.zb(l,34).onClick()&&i),"click"===n&&(i=!1!==o.zb(l,35).onClick(u)&&i),i},c.C,c.d)),o.ob(33,49152,null,0,i.k,[o.h,o.k],null,null),o.ob(34,16384,null,0,e.n,[e.m,e.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.ob(35,737280,null,0,i.Jb,[s.h,i.Gb,o.k,e.m,[2,e.n]],null,null),(l()(),o.pb(36,0,null,0,10,"ion-grid",[],null,null,null,c.F,c.i)),o.ob(37,49152,null,0,i.y,[o.h,o.k],null,null),(l()(),o.pb(38,0,null,0,8,"ion-row",[],null,null,null,c.N,c.q)),o.ob(39,49152,null,0,i.gb,[o.h,o.k],null,null),(l()(),o.pb(40,0,null,0,2,"ion-col",[["size","3"]],null,null,null,c.D,c.g)),o.ob(41,49152,null,0,i.r,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(42,0,null,0,0,"img",[["alt",""],["src","../../assets/img/notification.png"],["style","border-radius: 50px;height: 20px;width: 20px"]],null,null,null,null,null)),(l()(),o.pb(43,0,null,0,3,"ion-col",[["size","9"]],null,null,null,c.D,c.g)),o.ob(44,49152,null,0,i.r,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(45,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Notice Board"])),(l()(),o.pb(47,0,null,null,14,"ion-card",[["class","fcs"],["routerLink","/av"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.zb(l,49).onClick()&&i),"click"===n&&(i=!1!==o.zb(l,50).onClick(u)&&i),i},c.C,c.d)),o.ob(48,49152,null,0,i.k,[o.h,o.k],null,null),o.ob(49,16384,null,0,e.n,[e.m,e.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.ob(50,737280,null,0,i.Jb,[s.h,i.Gb,o.k,e.m,[2,e.n]],null,null),(l()(),o.pb(51,0,null,0,10,"ion-grid",[],null,null,null,c.F,c.i)),o.ob(52,49152,null,0,i.y,[o.h,o.k],null,null),(l()(),o.pb(53,0,null,0,8,"ion-row",[],null,null,null,c.N,c.q)),o.ob(54,49152,null,0,i.gb,[o.h,o.k],null,null),(l()(),o.pb(55,0,null,0,2,"ion-col",[["size","3"]],null,null,null,c.D,c.g)),o.ob(56,49152,null,0,i.r,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(57,0,null,0,0,"img",[["alt",""],["src","../../assets/img/video.png"],["style","border-radius: 50px;height: 20px;width: 20px"]],null,null,null,null,null)),(l()(),o.pb(58,0,null,0,3,"ion-col",[["size","9"]],null,null,null,c.D,c.g)),o.ob(59,49152,null,0,i.r,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(60,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Video & Audio Gallery"])),(l()(),o.pb(62,0,null,null,14,"ion-card",[["class","fcs"],["routerLink","/fgchistory"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.zb(l,64).onClick()&&i),"click"===n&&(i=!1!==o.zb(l,65).onClick(u)&&i),i},c.C,c.d)),o.ob(63,49152,null,0,i.k,[o.h,o.k],null,null),o.ob(64,16384,null,0,e.n,[e.m,e.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.ob(65,737280,null,0,i.Jb,[s.h,i.Gb,o.k,e.m,[2,e.n]],null,null),(l()(),o.pb(66,0,null,0,10,"ion-grid",[],null,null,null,c.F,c.i)),o.ob(67,49152,null,0,i.y,[o.h,o.k],null,null),(l()(),o.pb(68,0,null,0,8,"ion-row",[],null,null,null,c.N,c.q)),o.ob(69,49152,null,0,i.gb,[o.h,o.k],null,null),(l()(),o.pb(70,0,null,0,2,"ion-col",[["size","3"]],null,null,null,c.D,c.g)),o.ob(71,49152,null,0,i.r,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(72,0,null,0,0,"img",[["alt",""],["src","../../assets/img/history.png"],["style","border-radius: 50px;height: 20px;width: 20px"]],null,null,null,null,null)),(l()(),o.pb(73,0,null,0,3,"ion-col",[["size","9"]],null,null,null,c.D,c.g)),o.ob(74,49152,null,0,i.r,[o.h,o.k],{size:[0,"size"]},null),(l()(),o.pb(75,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Church History"]))],function(l,n){l(n,3,0,"primary"),l(n,19,0,"/ourtiming"),l(n,20,0),l(n,26,0,"3"),l(n,29,0,"9"),l(n,34,0,"/notification"),l(n,35,0),l(n,41,0,"3"),l(n,44,0,"9"),l(n,49,0,"/av"),l(n,50,0),l(n,56,0,"3"),l(n,59,0,"9"),l(n,64,0,"/fgchistory"),l(n,65,0),l(n,71,0,"3"),l(n,74,0,"9")},null)}function k(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"app-home",[],null,null,null,a,p)),o.ob(1,4440064,null,0,t,[e.m,i.Eb,i.Hb],null,null)],function(l,n){l(n,1,0)},null)}var h=o.lb("app-home",t,k,{},{},[]),g=u("gIcY");u.d(n,"HomePageModuleNgFactory",function(){return d});var d=o.mb(b,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[r.a,h]],[3,o.j],o.x]),o.xb(4608,s.m,s.l,[o.u,[2,s.v]]),o.xb(4608,g.p,g.p,[]),o.xb(4608,i.b,i.b,[o.z,o.g]),o.xb(4608,i.Fb,i.Fb,[i.b,o.j,o.q,s.c]),o.xb(4608,i.Ib,i.Ib,[i.b,o.j,o.q,s.c]),o.xb(1073742336,s.b,s.b,[]),o.xb(1073742336,g.m,g.m,[]),o.xb(1073742336,g.d,g.d,[]),o.xb(1073742336,i.Bb,i.Bb,[]),o.xb(1073742336,e.o,e.o,[[2,e.u],[2,e.m]]),o.xb(1073742336,b,b,[]),o.xb(1024,e.k,function(){return[[{path:"",component:t}]]},[])])})}}]);