(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{mH0F:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=u("mrSG"),o=u("ZZ/e"),i=u("lGQG"),a=u("YCZo"),r=function(){function n(n,l,u,t,e,o,i,a){this.loginsrv=n,this.route=l,this.nav=u,this.loadingController=t,this.menuCtrl=e,this.toastController=o,this.alertController=i,this.fcm=a,this.data={name:"",email:"",password:"",phno:"",notificationToken:""},this.invaliddata=!1,this.emptyField=!1,this.inValidcredentials=!1,this.menuCtrl.enable(!1)}return n.prototype.ngOnInit=function(){},n.prototype.presentAlertConfirm=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Congarulation!",message:"You  <strong> registered </strong> Successfully. But not approved by Admin.",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(n){console.log("Confirm Cancel: blah")}},{text:"Okay",handler:function(){console.log("Confirm Okay")}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},n.prototype.submit=function(){return e.b(this,void 0,void 0,function(){var n,l,u,t,o=this;return e.e(this,function(e){switch(e.label){case 0:return this.fcm.getToken().then(function(n){o.data.notificationToken=n,console.log(o.data)}),[4,this.loadingController.create({spinner:null,message:"Loading",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return e.sent(),[4,(n=document.querySelector("ion-loading-controller")).componentOnReady()];case 2:return e.sent(),[4,n.create({message:"Please wait...",spinner:"crescent"})];case 3:return[4,(l=e.sent()).present()];case 4:return e.sent(),[4,this.toastController.create({message:"Please fill all the fields",duration:3500})];case 5:return u=e.sent(),[4,this.toastController.create({message:"Email already exist.",duration:3500})];case 6:return t=e.sent(),[4,this.toastController.create({message:"You are registered successfully. But you are not approved by admin.",duration:3500})];case 7:return e.sent(),""===this.data.name||""===this.data.email||""===this.data.password||""===this.data.phno?(l.dismiss(),u.present()):(this.emptyField=!1,this.loginsrv.signup(this.data).subscribe(function(n){"Email is already taken! Please choose another one"===n.message?(t.present(),l.dismiss()):(l.dismiss(),o.presentAlertConfirm(),o.route.navigateByUrl("/login"),o.data.name="",o.data.email="",o.data.password="",o.data.phno="")})),[2]}})})},n}(),s=function(){return function(){}}(),c=u("pMnS"),d=u("oBZk"),p=u("gIcY"),g=u("ZYCi"),b=u("Ip0R"),m=t.nb({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{--input-padding-x:1.5rem;--input-padding-y:.75rem}.card-signin[_ngcontent-%COMP%]{border:0;border-radius:1rem}.card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:2rem;font-weight:300;font-size:1.5rem}.card-signin[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:2rem}.form-signin[_ngcontent-%COMP%]{width:100%}.form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:70%;border-radius:5rem;letter-spacing:.1rem;font-weight:700;padding:1rem;transition:all .2s}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:2rem;height:45px}.btn-google[_ngcontent-%COMP%]{color:#fff;background-color:#645d92}.btn-facebook[_ngcontent-%COMP%]{color:#fff;background-color:#3b5998}.mg[_ngcontent-%COMP%]{margin-bottom:10px}span[_ngcontent-%COMP%]{position:absolute;margin-left:5px;height:25px;display:flex;align-items:center}input[_ngcontent-%COMP%]{padding-left:47px;height:20px}.customc[_ngcontent-%COMP%]{height:40px;border-radius:20px}input[_ngcontent-%COMP%]::-webkit-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::-moz-placeholder{padding-left:1px}input[_ngcontent-%COMP%]:-ms-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::-ms-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::placeholder{padding-left:1px}input[_ngcontent-c0][_ngcontent-%COMP%]{padding-left:47px!important}.cus[_ngcontent-%COMP%]{margin-bottom:12px}"]],data:{}});function h(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,70,"ion-content",[["padding",""]],null,null,null,d.E,d.h)),t.ob(1,49152,null,0,o.s,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.pb(3,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.pb(4,0,null,0,66,"div",[["class","container"],["style","margin-top: 15% !important;"]],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,65,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.pb(6,0,null,null,64,"div",[["class","col-sm-9 col-md-7 col-lg-5 mx-auto"]],null,null,null,null,null)),(n()(),t.pb(7,0,null,null,0,"img",[["alt",""],["height","150"],["src","../../assets/img/fgc.jpeg"],["style","display: block;margin: auto;margin-top: -50px"]],null,null,null,null,null)),(n()(),t.pb(8,0,null,null,62,"div",[["class","card card-signin"]],null,null,null,null,null)),(n()(),t.pb(9,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(10,0,null,null,60,"div",[],null,null,null,null,null)),(n()(),t.pb(11,0,null,null,54,"form",[["class","form-signin"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==t.zb(n,13).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.zb(n,13).onReset()&&e),e},null,null)),t.ob(12,16384,null,0,p.n,[],null,null),t.ob(13,4210688,null,0,p.j,[[8,null],[8,null]],null,null),t.Db(2048,null,p.b,null,[p.j]),t.ob(15,16384,null,0,p.i,[[4,p.b]],null,null),(n()(),t.pb(16,0,null,null,11,"div",[["class","form-label-group cus"]],null,null,null,null,null)),(n()(),t.pb(17,0,null,null,2,"span",[["style","position: absolute;margin-top: 9px;margin-left: 15px"]],null,null,null,null,null)),(n()(),t.pb(18,0,null,null,1,"ion-icon",[["name","person"],["style","color:#026350;font-size: 25px"]],null,null,null,d.H,d.k)),t.ob(19,49152,null,0,o.A,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.pb(20,0,null,null,7,"input",[["class","form-control customc"],["id","inpu"],["name","em"],["placeholder","Name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0,o=n.component;return"input"===l&&(e=!1!==t.zb(n,21)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,21).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,21)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,21)._compositionEnd(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.data.name=u)&&e),e},null,null)),t.ob(21,16384,null,0,p.c,[t.D,t.k,[2,p.a]],null,null),t.ob(22,16384,null,0,p.l,[],{required:[0,"required"]},null),t.Db(1024,null,p.e,function(n){return[n]},[p.l]),t.Db(1024,null,p.f,function(n){return[n]},[p.c]),t.ob(25,671744,null,0,p.k,[[2,p.b],[6,p.e],[8,null],[6,p.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Db(2048,null,p.g,null,[p.k]),t.ob(27,16384,null,0,p.h,[[4,p.g]],null,null),(n()(),t.pb(28,0,null,null,11,"div",[["class","form-label-group cus"]],null,null,null,null,null)),(n()(),t.pb(29,0,null,null,2,"span",[["style","position: absolute;margin-top: 9px;margin-left: 15px"]],null,null,null,null,null)),(n()(),t.pb(30,0,null,null,1,"ion-icon",[["name","mail"],["style","color:#026350;font-size: 25px"]],null,null,null,d.H,d.k)),t.ob(31,49152,null,0,o.A,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.pb(32,0,null,null,7,"input",[["class","form-control customc"],["id","inputPassword"],["name","pass"],["placeholder","Email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0,o=n.component;return"input"===l&&(e=!1!==t.zb(n,33)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,33).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,33)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,33)._compositionEnd(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.data.email=u)&&e),e},null,null)),t.ob(33,16384,null,0,p.c,[t.D,t.k,[2,p.a]],null,null),t.ob(34,16384,null,0,p.l,[],{required:[0,"required"]},null),t.Db(1024,null,p.e,function(n){return[n]},[p.l]),t.Db(1024,null,p.f,function(n){return[n]},[p.c]),t.ob(37,671744,null,0,p.k,[[2,p.b],[6,p.e],[8,null],[6,p.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Db(2048,null,p.g,null,[p.k]),t.ob(39,16384,null,0,p.h,[[4,p.g]],null,null),(n()(),t.pb(40,0,null,null,11,"div",[["class","form-label-group cus"]],null,null,null,null,null)),(n()(),t.pb(41,0,null,null,2,"span",[["style","position: absolute;margin-top: 9px;margin-left: 15px"]],null,null,null,null,null)),(n()(),t.pb(42,0,null,null,1,"ion-icon",[["name","lock"],["style","color:#026350;font-size: 25px"]],null,null,null,d.H,d.k)),t.ob(43,49152,null,0,o.A,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.pb(44,0,null,null,7,"input",[["class","form-control customc"],["id","inpumail"],["name","em"],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0,o=n.component;return"input"===l&&(e=!1!==t.zb(n,45)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,45).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,45)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,45)._compositionEnd(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.data.password=u)&&e),e},null,null)),t.ob(45,16384,null,0,p.c,[t.D,t.k,[2,p.a]],null,null),t.ob(46,16384,null,0,p.l,[],{required:[0,"required"]},null),t.Db(1024,null,p.e,function(n){return[n]},[p.l]),t.Db(1024,null,p.f,function(n){return[n]},[p.c]),t.ob(49,671744,null,0,p.k,[[2,p.b],[6,p.e],[8,null],[6,p.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Db(2048,null,p.g,null,[p.k]),t.ob(51,16384,null,0,p.h,[[4,p.g]],null,null),(n()(),t.pb(52,0,null,null,11,"div",[["class","form-label-group cus"]],null,null,null,null,null)),(n()(),t.pb(53,0,null,null,2,"span",[["style","position: absolute;margin-top: 9px;margin-left: 15px"]],null,null,null,null,null)),(n()(),t.pb(54,0,null,null,1,"ion-icon",[["name","call"],["style","color:#026350;font-size: 25px"]],null,null,null,d.H,d.k)),t.ob(55,49152,null,0,o.A,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.pb(56,0,null,null,7,"input",[["class","form-control customc"],["id","inputEmail"],["name","em"],["placeholder","Phone"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0,o=n.component;return"input"===l&&(e=!1!==t.zb(n,57)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.zb(n,57).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.zb(n,57)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.zb(n,57)._compositionEnd(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.data.phno=u)&&e),e},null,null)),t.ob(57,16384,null,0,p.c,[t.D,t.k,[2,p.a]],null,null),t.ob(58,16384,null,0,p.l,[],{required:[0,"required"]},null),t.Db(1024,null,p.e,function(n){return[n]},[p.l]),t.Db(1024,null,p.f,function(n){return[n]},[p.c]),t.ob(61,671744,null,0,p.k,[[2,p.b],[6,p.e],[8,null],[6,p.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Db(2048,null,p.g,null,[p.k]),t.ob(63,16384,null,0,p.h,[[4,p.g]],null,null),(n()(),t.pb(64,0,null,null,1,"button",[["class","btn btn-lg btn-primary btn-block text-uppercase fcs"],["style","background-color: #026350"],["type","submit"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.submit()&&t),t},null,null)),(n()(),t.Gb(-1,null,["SIGNUP"])),(n()(),t.pb(66,0,null,null,4,"p",[["routerLink","/login"],["style","outline: none;text-align: center;\n            margin: 10px 0px 0px 0px;"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.zb(n,67).onClick()&&e),"click"===l&&(e=!1!==t.zb(n,68).onClick(u)&&e),e},null,null)),t.ob(67,16384,null,0,g.n,[g.m,g.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.ob(68,737280,null,0,o.Jb,[b.h,o.Gb,t.k,g.m,[2,g.n]],null,null),(n()(),t.pb(69,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Back"]))],function(n,l){var u=l.component;n(l,19,0,"person"),n(l,22,0,""),n(l,25,0,"em",u.data.name),n(l,31,0,"mail"),n(l,34,0,""),n(l,37,0,"pass",u.data.email),n(l,43,0,"lock"),n(l,46,0,""),n(l,49,0,"em",u.data.password),n(l,55,0,"call"),n(l,58,0,""),n(l,61,0,"em",u.data.phno),n(l,67,0,"/login"),n(l,68,0)},function(n,l){n(l,11,0,t.zb(l,15).ngClassUntouched,t.zb(l,15).ngClassTouched,t.zb(l,15).ngClassPristine,t.zb(l,15).ngClassDirty,t.zb(l,15).ngClassValid,t.zb(l,15).ngClassInvalid,t.zb(l,15).ngClassPending),n(l,20,0,t.zb(l,22).required?"":null,t.zb(l,27).ngClassUntouched,t.zb(l,27).ngClassTouched,t.zb(l,27).ngClassPristine,t.zb(l,27).ngClassDirty,t.zb(l,27).ngClassValid,t.zb(l,27).ngClassInvalid,t.zb(l,27).ngClassPending),n(l,32,0,t.zb(l,34).required?"":null,t.zb(l,39).ngClassUntouched,t.zb(l,39).ngClassTouched,t.zb(l,39).ngClassPristine,t.zb(l,39).ngClassDirty,t.zb(l,39).ngClassValid,t.zb(l,39).ngClassInvalid,t.zb(l,39).ngClassPending),n(l,44,0,t.zb(l,46).required?"":null,t.zb(l,51).ngClassUntouched,t.zb(l,51).ngClassTouched,t.zb(l,51).ngClassPristine,t.zb(l,51).ngClassDirty,t.zb(l,51).ngClassValid,t.zb(l,51).ngClassInvalid,t.zb(l,51).ngClassPending),n(l,56,0,t.zb(l,58).required?"":null,t.zb(l,63).ngClassUntouched,t.zb(l,63).ngClassTouched,t.zb(l,63).ngClassPristine,t.zb(l,63).ngClassDirty,t.zb(l,63).ngClassValid,t.zb(l,63).ngClassInvalid,t.zb(l,63).ngClassPending)})}function f(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"app-signup",[],null,null,null,h,m)),t.ob(1,114688,null,0,r,[i.a,g.m,o.Gb,o.Db,o.Eb,o.Mb,o.a,a.a],null,null)],function(n,l){n(l,1,0)},null)}var C=t.lb("app-signup",r,f,{},{},[]);u.d(l,"SignupPageModuleNgFactory",function(){return z});var z=t.mb(s,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[c.a,C]],[3,t.j],t.x]),t.xb(4608,b.m,b.l,[t.u,[2,b.v]]),t.xb(4608,p.o,p.o,[]),t.xb(4608,o.b,o.b,[t.z,t.g]),t.xb(4608,o.Fb,o.Fb,[o.b,t.j,t.q,b.c]),t.xb(4608,o.Ib,o.Ib,[o.b,t.j,t.q,b.c]),t.xb(1073742336,b.b,b.b,[]),t.xb(1073742336,p.m,p.m,[]),t.xb(1073742336,p.d,p.d,[]),t.xb(1073742336,o.Bb,o.Bb,[]),t.xb(1073742336,g.o,g.o,[[2,g.u],[2,g.m]]),t.xb(1073742336,s,s,[]),t.xb(1024,g.k,function(){return[[{path:"",component:r}]]},[])])})}}]);