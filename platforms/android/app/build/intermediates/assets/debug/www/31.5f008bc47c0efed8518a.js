(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"Mh/O":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),o=t("mrSG"),e=t("ZZ/e"),r=t("lGQG"),i=function(){function n(n,l,t,u,o){this.toastController=n,this.auth=l,this.router=t,this.activeroute=u,this.loadingController=o,this.data={reqNewPassword:"",id1:""}}return n.prototype.ngOnInit=function(){},n.prototype.forgotpass=function(){return o.b(this,void 0,void 0,function(){var n,l,t,u,e=this;return o.e(this,function(o){switch(o.label){case 0:return[4,this.loadingController.create({spinner:null,message:"Loading",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return o.sent(),[4,(n=document.querySelector("ion-loading-controller")).componentOnReady()];case 2:return o.sent(),[4,n.create({message:"Please wait...",spinner:"crescent"})];case 3:return[4,(l=o.sent()).present()];case 4:return o.sent(),t=this.data.id1=this.activeroute.snapshot.params.id,[4,this.toastController.create({message:"Please Enter correct info",duration:1400})];case 5:return u=o.sent(),""===this.data.reqNewPassword?(l.dismiss(),u.present()):this.auth.newpassword(this.data,t).subscribe(function(n){console.log(n),e.router.navigate(["/login"]),l.dismiss()}),[2]}})})},n}(),a=function(){return function(){}}(),s=t("pMnS"),c=t("oBZk"),p=t("gIcY"),b=t("ZYCi"),d=u.nb({encapsulation:0,styles:[[".bc-img[_ngcontent-%COMP%]{--background:url('fn.a2e111512154f78fbac4.png') 0 0/100% 120% no-repeat;background-size:cover!important;width:100%;background-position:center center}[_ngcontent-%COMP%]:root{--input-padding-x:1.5rem;--input-padding-y:.75rem}.card-signin[_ngcontent-%COMP%]{border:0;border-radius:1rem}.card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:2rem;font-weight:300;font-size:1.5rem}.card-signin[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:2rem}.form-signin[_ngcontent-%COMP%]{width:100%}.form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:70%;border-radius:5rem;letter-spacing:.1rem;font-weight:700;padding:1rem;transition:all .2s}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:2rem;height:45px}.btn-google[_ngcontent-%COMP%]{color:#fff;background-color:#645d92}.btn-facebook[_ngcontent-%COMP%]{color:#fff;background-color:#3b5998}.mg[_ngcontent-%COMP%]{margin-bottom:10px}input[_ngcontent-%COMP%]{padding-left:47px;height:20px}.customc[_ngcontent-%COMP%]{height:40px;border-radius:20px}input[_ngcontent-%COMP%]::-webkit-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::-moz-placeholder{padding-left:1px}input[_ngcontent-%COMP%]:-ms-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::-ms-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::placeholder{padding-left:1px}input[_ngcontent-c0][_ngcontent-%COMP%]{padding-left:47px!important}.cus[_ngcontent-%COMP%]{margin-bottom:12px}"]],data:{}});function g(n){return u.Ib(0,[(n()(),u.pb(0,0,null,null,8,"ion-header",[],null,null,null,c.G,c.j)),u.ob(1,49152,null,0,e.z,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,6,"ion-toolbar",[["color","primary"]],null,null,null,c.T,c.w)),u.ob(3,49152,null,0,e.zb,[u.h,u.k],{color:[0,"color"]},null),(n()(),u.pb(4,0,null,0,1,"ion-buttons",[["slot","start"]],null,null,null,c.z,c.c)),u.ob(5,49152,null,0,e.j,[u.h,u.k],null,null),(n()(),u.pb(6,0,null,0,2,"ion-title",[],null,null,null,c.S,c.v)),u.ob(7,49152,null,0,e.xb,[u.h,u.k],null,null),(n()(),u.Gb(-1,0,["New Password"])),(n()(),u.pb(9,0,null,null,22,"ion-content",[["class","bc-img"]],null,null,null,c.E,c.h)),u.ob(10,49152,null,0,e.s,[u.h,u.k],null,null),(n()(),u.pb(11,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),u.pb(12,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),u.pb(13,0,null,0,18,"div",[["padding",""]],null,null,null,null,null)),(n()(),u.pb(14,0,null,null,17,"div",[["padding",""]],null,null,null,null,null)),(n()(),u.pb(15,0,null,null,0,"img",[["alt",""],["height","130"],["src","../../assets/img/fgck-logo.png"],["style","display: block;margin: auto"]],null,null,null,null,null)),(n()(),u.pb(16,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.pb(17,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.pb(18,0,null,null,11,"div",[["class","form-label-group cus"]],null,null,null,null,null)),(n()(),u.pb(19,0,null,null,2,"span",[["style","position: absolute;margin-top: 9px;margin-left: 15px"]],null,null,null,null,null)),(n()(),u.pb(20,0,null,null,1,"ion-icon",[["name","lock"],["style","color:#026350;font-size: 25px"]],null,null,null,c.H,c.k)),u.ob(21,49152,null,0,e.A,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.pb(22,0,null,null,7,"input",[["class","form-control customc"],["id","inpu"],["name","em"],["placeholder","Enter your new password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var o=!0,e=n.component;return"input"===l&&(o=!1!==u.zb(n,23)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==u.zb(n,23).onTouched()&&o),"compositionstart"===l&&(o=!1!==u.zb(n,23)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u.zb(n,23)._compositionEnd(t.target.value)&&o),"ngModelChange"===l&&(o=!1!==(e.data.reqNewPassword=t)&&o),o},null,null)),u.ob(23,16384,null,0,p.c,[u.D,u.k,[2,p.a]],null,null),u.ob(24,16384,null,0,p.l,[],{required:[0,"required"]},null),u.Db(1024,null,p.e,function(n){return[n]},[p.l]),u.Db(1024,null,p.f,function(n){return[n]},[p.c]),u.ob(27,671744,null,0,p.k,[[8,null],[6,p.e],[8,null],[6,p.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Db(2048,null,p.g,null,[p.k]),u.ob(29,16384,null,0,p.h,[[4,p.g]],null,null),(n()(),u.pb(30,0,null,null,1,"button",[["class","btn btn-lg btn-primary btn-block fcs"],["style","background-color: #026350;font-size:16px !important;border-radius: 50px;padding: 13px !important;"],["type","submit"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.forgotpass()&&u),u},null,null)),(n()(),u.Gb(-1,null,["Submit"]))],function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,21,0,"lock"),n(l,24,0,""),n(l,27,0,"em",t.data.reqNewPassword)},function(n,l){n(l,22,0,u.zb(l,24).required?"":null,u.zb(l,29).ngClassUntouched,u.zb(l,29).ngClassTouched,u.zb(l,29).ngClassPristine,u.zb(l,29).ngClassDirty,u.zb(l,29).ngClassValid,u.zb(l,29).ngClassInvalid,u.zb(l,29).ngClassPending)})}function m(n){return u.Ib(0,[(n()(),u.pb(0,0,null,null,1,"app-newpass",[],null,null,null,g,d)),u.ob(1,114688,null,0,i,[e.Mb,r.a,b.m,b.a,e.Db],null,null)],function(n,l){n(l,1,0)},null)}var f=u.lb("app-newpass",i,m,{},{},[]),h=t("Ip0R");t.d(l,"NewpassPageModuleNgFactory",function(){return C});var C=u.mb(a,[],function(n){return u.wb([u.xb(512,u.j,u.bb,[[8,[s.a,f]],[3,u.j],u.x]),u.xb(4608,h.m,h.l,[u.u,[2,h.v]]),u.xb(4608,p.p,p.p,[]),u.xb(4608,e.b,e.b,[u.z,u.g]),u.xb(4608,e.Fb,e.Fb,[e.b,u.j,u.q,h.c]),u.xb(4608,e.Ib,e.Ib,[e.b,u.j,u.q,h.c]),u.xb(1073742336,h.b,h.b,[]),u.xb(1073742336,p.m,p.m,[]),u.xb(1073742336,p.d,p.d,[]),u.xb(1073742336,e.Bb,e.Bb,[]),u.xb(1073742336,b.o,b.o,[[2,b.u],[2,b.m]]),u.xb(1073742336,a,a,[]),u.xb(1024,b.k,function(){return[[{path:"",component:i}]]},[])])})}}]);