(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{oLyD:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("mrSG"),e=u("lGQG"),i=u("cxbk"),r=u("ZZ/e"),c=function(){function l(l,n){this.AuthSrv=l,this.loadingController=n,this.url=i.a.baseurl}return l.prototype.ngOnInit=function(){return o.b(this,void 0,void 0,function(){var l,n,u=this;return o.e(this,function(t){switch(t.label){case 0:return[4,this.loadingController.create({spinner:null,message:"Loading",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return t.sent(),[4,(l=document.querySelector("ion-loading-controller")).componentOnReady()];case 2:return t.sent(),[4,l.create({message:"Please wait...",spinner:"crescent"})];case 3:return[4,(n=t.sent()).present()];case 4:return t.sent(),this.AuthSrv.videoget().subscribe(function(l){u.videoarr=l,n.dismiss(),console.log(u.videoarr)}),[2]}})})},l}(),b=function(){return function(){}}(),s=u("pMnS"),a=u("oBZk"),p=u("Ip0R"),d=t.nb({encapsulation:0,styles:[["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:visited{text-decoration:none}#post[_ngcontent-%COMP%], #posts[_ngcontent-%COMP%]{width:100%;padding-top:10px;padding-left:15px;font-size:17px}"]],data:{}});function g(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,14,"ion-card",[],null,null,null,a.C,a.d)),t.ob(1,49152,null,0,r.k,[t.h,t.k],{href:[0,"href"]},null),(l()(),t.pb(2,0,null,0,11,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,8,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,7,"div",[["class","product-grid"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,1,"div",[["class","product-image"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(9,0,null,null,4,"div",[["class","product-content"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,2,"div",[["class","price"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Gb(12,null,[" ",""])),(l()(),t.pb(13,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(14,0,null,0,0,"div",[["class","price"],["style","padding: 0px 50px"]],null,null,null,null,null))],function(l,n){l(n,1,0,t.rb(1,"",n.context.$implicit.videoUrl,""))},function(l,n){l(n,8,0,n.component.url+n.context.$implicit.imageUrl);var u=null==n.context.$implicit?null:n.context.$implicit.description.substr(0,20);l(n,12,0,u)})}function v(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,2,"div",[["style","width: 100%; text-align: center; margin-top: 220px;"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Empty"]))],null,null)}function f(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,10,"ion-header",[],null,null,null,a.G,a.j)),t.ob(1,49152,null,0,r.z,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,a.T,a.w)),t.ob(3,49152,null,0,r.zb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.z,a.c)),t.ob(5,49152,null,0,r.j,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,a.L,a.p)),t.ob(7,49152,null,0,r.P,[t.h,t.k],null,null),(l()(),t.pb(8,0,null,0,2,"ion-title",[],null,null,null,a.S,a.v)),t.ob(9,49152,null,0,r.xb,[t.h,t.k],null,null),(l()(),t.Gb(-1,0,["Video"])),(l()(),t.pb(11,0,null,null,5,"ion-content",[],null,null,null,a.E,a.h)),t.ob(12,49152,null,0,r.s,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,g)),t.ob(14,278528,null,0,p.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.gb(16777216,null,0,1,null,v)),t.ob(16,16384,null,0,p.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,14,0,u.videoarr),l(n,16,0,(null==u.videoarr?null:u.videoarr.length)<=0)},null)}function h(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-video",[],null,null,null,f,d)),t.ob(1,114688,null,0,c,[e.a,r.Db],null,null)],function(l,n){l(n,1,0)},null)}var m=t.lb("app-video",c,h,{},{},[]),x=u("gIcY"),k=u("ZYCi");u.d(n,"VideoPageModuleNgFactory",function(){return w});var w=t.mb(b,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[s.a,m]],[3,t.j],t.x]),t.xb(4608,p.m,p.l,[t.u,[2,p.v]]),t.xb(4608,x.p,x.p,[]),t.xb(4608,r.b,r.b,[t.z,t.g]),t.xb(4608,r.Fb,r.Fb,[r.b,t.j,t.q,p.c]),t.xb(4608,r.Ib,r.Ib,[r.b,t.j,t.q,p.c]),t.xb(1073742336,p.b,p.b,[]),t.xb(1073742336,x.m,x.m,[]),t.xb(1073742336,x.d,x.d,[]),t.xb(1073742336,r.Bb,r.Bb,[]),t.xb(1073742336,k.o,k.o,[[2,k.u],[2,k.m]]),t.xb(1073742336,b,b,[]),t.xb(1024,k.k,function(){return[[{path:"",component:c}]]},[])])})}}]);