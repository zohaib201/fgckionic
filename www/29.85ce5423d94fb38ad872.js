(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"f+ep":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=t("mrSG"),o=t("ZZ/e"),i=t("lGQG"),r=t("YCZo"),a=function(){function n(n,l,t,u,e,o,i){this.AuthSrv=n,this.route=l,this.nav=t,this.loadingController=u,this.toastController=e,this.fcm=o,this.menuCtrl=i,this.data={email:"",password:"",notificationToken:""},this.invaliddata=!1,this.emptyField=!1,this.inValidcredentials=!1,this.menuCtrl.enable(!1)}return n.prototype.send=function(){return e.b(this,void 0,void 0,function(){var n,l,t,u,o,i=this;return e.e(this,function(e){switch(e.label){case 0:return this.fcm.getToken().then(function(n){i.data.notificationToken=n,console.log(i.data)}),this.AuthSrv.updatenotification(this.data).subscribe(function(n){console.log("notification token has updated")}),[4,this.loadingController.create({spinner:null,message:"Loading",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return e.sent(),[4,(n=document.querySelector("ion-loading-controller")).componentOnReady()];case 2:return e.sent(),[4,n.create({message:"Please wait...",spinner:"crescent",duration:3e3})];case 3:return[4,(l=e.sent()).present()];case 4:return e.sent(),[4,this.toastController.create({message:"Please fill all the fields",duration:1400})];case 5:return t=e.sent(),[4,this.toastController.create({message:"Approval pending . Try later",duration:1400})];case 6:return u=e.sent(),[4,this.toastController.create({message:"Invalid credential",duration:1400})];case 7:return o=e.sent(),""===this.data.email||""===this.data.password?(t.present(),l.dismiss()):this.AuthSrv.login(this.data).subscribe(function(n){"Not Authorized"===n.message?(l.dismiss(),o.present()):"Approval Pending"===n.message?(u.present(),l.dismiss()):n.memberFromAppId?(i.route.navigateByUrl("/updatepassword"),l.dismiss(),localStorage.setItem("id",JSON.stringify(n.memberFromAppId))):i.AuthSrv.memberbyMemberFromAppID(n.memID).subscribe(function(n){console.log(n),i.fcm.getToken().then(function(n){i.data.notificationToken=n,console.log(i.data)}),i.AuthSrv.updatenotification(i.data).subscribe(function(n){console.log("notification token has updated")}),localStorage.setItem("user",JSON.stringify(n));var t=JSON.parse(localStorage.getItem("user")).id;localStorage.setItem("id",t),i.route.navigateByUrl("/home"),l.dismiss(),i.data.email="",i.data.password=""})}),[2]}})})},n.prototype.guest=function(){localStorage.setItem("guest","guest"),this.route.navigateByUrl("/home")},n.prototype.ngOnInit=function(){this.menuCtrl.enable(!1)},n.prototype.ionViewDidEnter=function(){this.menuCtrl.enable(!1)},n.prototype.ionViewWillEnter=function(){this.menuCtrl.enable(!1)},n}(),s=function(){return function(){}}(),c=t("pMnS"),p=t("oBZk"),b=t("gIcY"),d=t("ZYCi"),g=t("Ip0R"),m=u.nb({encapsulation:0,styles:[[".bc-img[_ngcontent-%COMP%]{--background:url('fn.d68af5070ee8ec2a49bf.png') 0 0/100% 120% no-repeat;background-size:cover!important;width:100%;background-position:center center}[_ngcontent-%COMP%]:root{--input-padding-x:1.5rem;--input-padding-y:.75rem}.card-signin[_ngcontent-%COMP%]{border:0;border-radius:1rem}.card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:2rem;font-weight:300;font-size:1.5rem}.card-signin[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:2rem}.form-signin[_ngcontent-%COMP%]{width:100%}.form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:70%;border-radius:5rem;letter-spacing:.1rem;font-weight:700;padding:1rem;transition:all .2s}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:2rem;height:45px}.btn-google[_ngcontent-%COMP%]{color:#fff;background-color:#645d92}.btn-facebook[_ngcontent-%COMP%]{color:#fff;background-color:#3b5998}.mg[_ngcontent-%COMP%]{margin-bottom:10px}input[_ngcontent-%COMP%]{padding-left:47px;height:20px}.customc[_ngcontent-%COMP%]{height:40px;border-radius:20px}input[_ngcontent-%COMP%]::-webkit-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::-moz-placeholder{padding-left:1px}input[_ngcontent-%COMP%]:-ms-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::-ms-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::placeholder{padding-left:1px}input[_ngcontent-c0][_ngcontent-%COMP%]{padding-left:47px!important}.cus[_ngcontent-%COMP%]{margin-bottom:12px}"]],data:{}});function f(n){return u.Ib(0,[(n()(),u.pb(0,0,null,null,56,"ion-content",[["class","bc-img"]],null,null,null,p.E,p.h)),u.ob(1,49152,null,0,o.s,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,54,"div",[["class","container"],["padding",""]],null,null,null,null,null)),(n()(),u.pb(3,0,null,null,53,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.pb(4,0,null,null,52,"div",[["class","col-sm-9 col-md-7 col-lg-5 mx-auto"]],null,null,null,null,null)),(n()(),u.pb(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.pb(6,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.pb(7,0,null,null,0,"img",[["alt",""],["height","150"],["src","../../assets/img/fgck-logo.png"],["style","display: block;margin: auto"]],null,null,null,null,null)),(n()(),u.pb(8,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.pb(9,0,null,null,47,"div",[],null,null,null,null,null)),(n()(),u.pb(10,0,null,null,46,"div",[["padding",""]],null,null,null,null,null)),(n()(),u.pb(11,0,null,null,45,"form",[["class","form-signin"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0;return"submit"===l&&(e=!1!==u.zb(n,13).onSubmit(t)&&e),"reset"===l&&(e=!1!==u.zb(n,13).onReset()&&e),e},null,null)),u.ob(12,16384,null,0,b.o,[],null,null),u.ob(13,4210688,null,0,b.j,[[8,null],[8,null]],null,null),u.Db(2048,null,b.b,null,[b.j]),u.ob(15,16384,null,0,b.i,[[4,b.b]],null,null),(n()(),u.pb(16,0,null,null,11,"div",[["class","form-label-group cus"]],null,null,null,null,null)),(n()(),u.pb(17,0,null,null,2,"span",[["style","position: absolute;margin-top: 9px;margin-left: 15px"]],null,null,null,null,null)),(n()(),u.pb(18,0,null,null,1,"ion-icon",[["name","person"],["style","color:#026350;font-size: 25px"]],null,null,null,p.H,p.k)),u.ob(19,49152,null,0,o.A,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.pb(20,0,null,null,7,"input",[["class","form-control customc"],["id","inpu"],["name","em"],["placeholder","Email / Username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0,o=n.component;return"input"===l&&(e=!1!==u.zb(n,21)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.zb(n,21).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.zb(n,21)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.zb(n,21)._compositionEnd(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.data.email=t)&&e),e},null,null)),u.ob(21,16384,null,0,b.c,[u.D,u.k,[2,b.a]],null,null),u.ob(22,16384,null,0,b.l,[],{required:[0,"required"]},null),u.Db(1024,null,b.e,function(n){return[n]},[b.l]),u.Db(1024,null,b.f,function(n){return[n]},[b.c]),u.ob(25,671744,null,0,b.k,[[2,b.b],[6,b.e],[8,null],[6,b.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Db(2048,null,b.g,null,[b.k]),u.ob(27,16384,null,0,b.h,[[4,b.g]],null,null),(n()(),u.pb(28,0,null,null,11,"div",[["class","form-label-group cus"]],null,null,null,null,null)),(n()(),u.pb(29,0,null,null,2,"span",[["style","position: absolute;margin-top: 9px;margin-left: 15px"]],null,null,null,null,null)),(n()(),u.pb(30,0,null,null,1,"ion-icon",[["name","mail"],["style","color:#026350;font-size: 25px"]],null,null,null,p.H,p.k)),u.ob(31,49152,null,0,o.A,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.pb(32,0,null,null,7,"input",[["class","form-control customc"],["id","inputPassword"],["name","pass"],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0,o=n.component;return"input"===l&&(e=!1!==u.zb(n,33)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.zb(n,33).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.zb(n,33)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.zb(n,33)._compositionEnd(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.data.password=t)&&e),e},null,null)),u.ob(33,16384,null,0,b.c,[u.D,u.k,[2,b.a]],null,null),u.ob(34,16384,null,0,b.l,[],{required:[0,"required"]},null),u.Db(1024,null,b.e,function(n){return[n]},[b.l]),u.Db(1024,null,b.f,function(n){return[n]},[b.c]),u.ob(37,671744,null,0,b.k,[[2,b.b],[6,b.e],[8,null],[6,b.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Db(2048,null,b.g,null,[b.k]),u.ob(39,16384,null,0,b.h,[[4,b.g]],null,null),(n()(),u.pb(40,0,null,null,1,"button",[["class","btn btn-lg btn-primary btn-block text-uppercase fcs"],["style","background-color: #026350;padding: 13px !important;"],["type","submit"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.send()&&u),u},null,null)),(n()(),u.Gb(-1,null,["LOGIN"])),(n()(),u.pb(42,0,null,null,4,"p",[["class","fcs text-center"],["routerLink","/forgetpass"],["style","margin-top: 10px;font-size: 16px;color:white;"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.zb(n,43).onClick()&&e),"click"===l&&(e=!1!==u.zb(n,44).onClick(t)&&e),e},null,null)),u.ob(43,16384,null,0,d.n,[d.m,d.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.ob(44,737280,null,0,o.Jb,[g.h,o.Gb,u.k,d.m,[2,d.n]],null,null),(n()(),u.pb(45,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),u.Gb(-1,null,["Forgot Password ?"])),(n()(),u.pb(47,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.pb(48,0,null,null,2,"p",[["class","fcs text-center"],["style","margin-top: -7px !important;margin-bottom: 5px;\n              font-size: 16px;color:#026350;"]],null,null,null,null,null)),(n()(),u.pb(49,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),u.Gb(-1,null,["Don't have an account ?"])),(n()(),u.pb(51,0,null,null,3,"button",[["class","btn btn-lg btn-primary btn-block text-uppercase fcs"],["routerLink","/signup"],["style","background-color: #026350;outline: none;padding: 13px !important;"],["type","submit"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.zb(n,52).onClick()&&e),"click"===l&&(e=!1!==u.zb(n,53).onClick(t)&&e),e},null,null)),u.ob(52,16384,null,0,d.n,[d.m,d.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.ob(53,737280,null,0,o.Jb,[g.h,o.Gb,u.k,d.m,[2,d.n]],null,null),(n()(),u.Gb(-1,null,["SIGNUP NOW"])),(n()(),u.pb(55,0,null,null,1,"button",[["class","btn btn-lg btn-primary btn-block text-uppercase fcs"],["style","background-color: #026350;padding: 13px !important;"],["type","submit"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.guest()&&u),u},null,null)),(n()(),u.Gb(-1,null,["CONTINUE AS GUEST"]))],function(n,l){var t=l.component;n(l,19,0,"person"),n(l,22,0,""),n(l,25,0,"em",t.data.email),n(l,31,0,"mail"),n(l,34,0,""),n(l,37,0,"pass",t.data.password),n(l,43,0,"/forgetpass"),n(l,44,0),n(l,52,0,"/signup"),n(l,53,0)},function(n,l){n(l,11,0,u.zb(l,15).ngClassUntouched,u.zb(l,15).ngClassTouched,u.zb(l,15).ngClassPristine,u.zb(l,15).ngClassDirty,u.zb(l,15).ngClassValid,u.zb(l,15).ngClassInvalid,u.zb(l,15).ngClassPending),n(l,20,0,u.zb(l,22).required?"":null,u.zb(l,27).ngClassUntouched,u.zb(l,27).ngClassTouched,u.zb(l,27).ngClassPristine,u.zb(l,27).ngClassDirty,u.zb(l,27).ngClassValid,u.zb(l,27).ngClassInvalid,u.zb(l,27).ngClassPending),n(l,32,0,u.zb(l,34).required?"":null,u.zb(l,39).ngClassUntouched,u.zb(l,39).ngClassTouched,u.zb(l,39).ngClassPristine,u.zb(l,39).ngClassDirty,u.zb(l,39).ngClassValid,u.zb(l,39).ngClassInvalid,u.zb(l,39).ngClassPending)})}function h(n){return u.Ib(0,[(n()(),u.pb(0,0,null,null,1,"app-login",[],null,null,null,f,m)),u.ob(1,114688,null,0,a,[i.a,d.m,o.Gb,o.Db,o.Mb,r.a,o.Eb],null,null)],function(n,l){n(l,1,0)},null)}var C=u.lb("app-login",a,h,{},{},[]);t.d(l,"LoginPageModuleNgFactory",function(){return k});var k=u.mb(s,[],function(n){return u.wb([u.xb(512,u.j,u.bb,[[8,[c.a,C]],[3,u.j],u.x]),u.xb(4608,g.m,g.l,[u.u,[2,g.v]]),u.xb(4608,b.p,b.p,[]),u.xb(4608,o.b,o.b,[u.z,u.g]),u.xb(4608,o.Fb,o.Fb,[o.b,u.j,u.q,g.c]),u.xb(4608,o.Ib,o.Ib,[o.b,u.j,u.q,g.c]),u.xb(1073742336,g.b,g.b,[]),u.xb(1073742336,b.m,b.m,[]),u.xb(1073742336,b.d,b.d,[]),u.xb(1073742336,o.Bb,o.Bb,[]),u.xb(1073742336,d.o,d.o,[[2,d.u],[2,d.m]]),u.xb(1073742336,s,s,[]),u.xb(1024,d.k,function(){return[[{path:"",component:a}]]},[])])})}}]);