(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{mH0F:function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=u("mrSG"),o=u("ZZ/e"),i=u("lGQG"),a=u("YCZo"),r=function(){function n(n,l,u,e,t,o,i,a){this.loginsrv=n,this.route=l,this.nav=u,this.loadingController=e,this.menuCtrl=t,this.toastController=o,this.alertController=i,this.fcm=a,this.data={name:"",email:"",password:"",phno:"",notificationToken:""},this.invaliddata=!1,this.emptyField=!1,this.inValidcredentials=!1,this.menuCtrl.enable(!1)}return n.prototype.ngOnInit=function(){},n.prototype.presentAlertConfirm=function(){return t.b(this,void 0,void 0,function(){return t.e(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Request Submitted! ",message:"Your registration has been submitted and will be active after Admin approval.",buttons:[{text:"Ok",handler:function(){console.log("Confirm Okay")}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},n.prototype.submit=function(){return t.b(this,void 0,void 0,function(){var n,l,u,e,o=this;return t.e(this,function(t){switch(t.label){case 0:return[4,this.loadingController.create({spinner:null,message:"Loading",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return t.sent(),[4,(n=document.querySelector("ion-loading-controller")).componentOnReady()];case 2:return t.sent(),[4,n.create({message:"Please wait...",spinner:"crescent"})];case 3:return[4,(l=t.sent()).present()];case 4:return t.sent(),[4,this.toastController.create({message:"Please fill all the fields",duration:3500})];case 5:return u=t.sent(),[4,this.toastController.create({message:"Email already exist.",duration:3500})];case 6:return e=t.sent(),[4,this.toastController.create({message:"You are registered successfully. But you are not approved by admin.",duration:3500})];case 7:return t.sent(),""===this.data.name||""===this.data.email||""===this.data.password||""===this.data.phno?(l.dismiss(),u.present()):(this.emptyField=!1,this.loginsrv.signup(this.data).subscribe(function(n){"Email is already taken! Please choose another one"===n.message?(e.present(),l.dismiss()):(l.dismiss(),o.presentAlertConfirm(),o.route.navigateByUrl("/login"),o.data.name="",o.data.email="",o.data.password="",o.data.phno="")})),[2]}})})},n}(),s=function(){return function(){}}(),c=u("pMnS"),d=u("oBZk"),p=u("gIcY"),b=u("ZYCi"),g=u("Ip0R"),m=e.nb({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{--input-padding-x:1.5rem;--input-padding-y:.75rem}.bc-img[_ngcontent-%COMP%]{--background:url('fn.d68af5070ee8ec2a49bf.png') 0 0/100% 800px no-repeat;background-size:cover!important;width:100%;background-position:center center}.card-signin[_ngcontent-%COMP%]{border:0;border-radius:1rem}.card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:2rem;font-weight:300;font-size:1.5rem}.card-signin[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:2rem}.form-signin[_ngcontent-%COMP%]{width:100%}.form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:70%;border-radius:5rem;letter-spacing:.1rem;font-weight:700;padding:1rem;transition:all .2s}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:2rem;height:45px}.btn-google[_ngcontent-%COMP%]{color:#fff;background-color:#645d92}.btn-facebook[_ngcontent-%COMP%]{color:#fff;background-color:#3b5998}.mg[_ngcontent-%COMP%]{margin-bottom:10px}span[_ngcontent-%COMP%]{position:absolute;margin-left:5px;height:25px;display:flex;align-items:center}input[_ngcontent-%COMP%]{padding-left:47px;height:20px}.customc[_ngcontent-%COMP%]{height:40px;border-radius:20px}input[_ngcontent-%COMP%]::-webkit-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::-moz-placeholder{padding-left:1px}input[_ngcontent-%COMP%]:-ms-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::-ms-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::placeholder{padding-left:1px}input[_ngcontent-c0][_ngcontent-%COMP%]{padding-left:47px!important}.cus[_ngcontent-%COMP%]{margin-bottom:12px}"]],data:{}});function h(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,75,"ion-content",[["class","bc-img"]],null,null,null,d.E,d.h)),e.ob(1,49152,null,0,o.s,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,0,"div",[],null,null,null,null,null)),(n()(),e.pb(3,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.pb(4,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.pb(5,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.pb(6,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.pb(7,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.pb(8,0,null,0,67,"div",[["class","container"],["padding",""]],null,null,null,null,null)),(n()(),e.pb(9,0,null,null,66,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.pb(10,0,null,null,65,"div",[["class","col-sm-9 col-md-7 col-lg-5 mx-auto"]],null,null,null,null,null)),(n()(),e.pb(11,0,null,null,0,"img",[["alt",""],["height","150"],["src","../../assets/img/fgck-logo.png"],["style","display: block;margin: auto;margin-top: -50px"]],null,null,null,null,null)),(n()(),e.pb(12,0,null,null,63,"div",[],null,null,null,null,null)),(n()(),e.pb(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.pb(14,0,null,null,61,"div",[["padding",""]],null,null,null,null,null)),(n()(),e.pb(15,0,null,null,55,"form",[["class","form-signin"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0;return"submit"===l&&(t=!1!==e.zb(n,17).onSubmit(u)&&t),"reset"===l&&(t=!1!==e.zb(n,17).onReset()&&t),t},null,null)),e.ob(16,16384,null,0,p.o,[],null,null),e.ob(17,4210688,null,0,p.j,[[8,null],[8,null]],null,null),e.Db(2048,null,p.b,null,[p.j]),e.ob(19,16384,null,0,p.i,[[4,p.b]],null,null),(n()(),e.pb(20,0,null,null,11,"div",[["class","form-label-group cus"]],null,null,null,null,null)),(n()(),e.pb(21,0,null,null,2,"span",[["style","position: absolute;margin-top: 9px;margin-left: 15px"]],null,null,null,null,null)),(n()(),e.pb(22,0,null,null,1,"ion-icon",[["name","person"],["style","color:#026350;font-size: 25px"]],null,null,null,d.H,d.k)),e.ob(23,49152,null,0,o.A,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.pb(24,0,null,null,7,"input",[["class","form-control customc"],["id","inpu"],["name","em"],["placeholder","Name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,o=n.component;return"input"===l&&(t=!1!==e.zb(n,25)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==e.zb(n,25).onTouched()&&t),"compositionstart"===l&&(t=!1!==e.zb(n,25)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e.zb(n,25)._compositionEnd(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.data.name=u)&&t),t},null,null)),e.ob(25,16384,null,0,p.c,[e.D,e.k,[2,p.a]],null,null),e.ob(26,16384,null,0,p.l,[],{required:[0,"required"]},null),e.Db(1024,null,p.e,function(n){return[n]},[p.l]),e.Db(1024,null,p.f,function(n){return[n]},[p.c]),e.ob(29,671744,null,0,p.k,[[2,p.b],[6,p.e],[8,null],[6,p.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Db(2048,null,p.g,null,[p.k]),e.ob(31,16384,null,0,p.h,[[4,p.g]],null,null),(n()(),e.pb(32,0,null,null,11,"div",[["class","form-label-group cus"]],null,null,null,null,null)),(n()(),e.pb(33,0,null,null,2,"span",[["style","position: absolute;margin-top: 9px;margin-left: 15px"]],null,null,null,null,null)),(n()(),e.pb(34,0,null,null,1,"ion-icon",[["name","mail"],["style","color:#026350;font-size: 25px"]],null,null,null,d.H,d.k)),e.ob(35,49152,null,0,o.A,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.pb(36,0,null,null,7,"input",[["class","form-control customc"],["id","inputPassword"],["name","pass"],["placeholder","Email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,o=n.component;return"input"===l&&(t=!1!==e.zb(n,37)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==e.zb(n,37).onTouched()&&t),"compositionstart"===l&&(t=!1!==e.zb(n,37)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e.zb(n,37)._compositionEnd(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.data.email=u)&&t),t},null,null)),e.ob(37,16384,null,0,p.c,[e.D,e.k,[2,p.a]],null,null),e.ob(38,16384,null,0,p.l,[],{required:[0,"required"]},null),e.Db(1024,null,p.e,function(n){return[n]},[p.l]),e.Db(1024,null,p.f,function(n){return[n]},[p.c]),e.ob(41,671744,null,0,p.k,[[2,p.b],[6,p.e],[8,null],[6,p.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Db(2048,null,p.g,null,[p.k]),e.ob(43,16384,null,0,p.h,[[4,p.g]],null,null),(n()(),e.pb(44,0,null,null,11,"div",[["class","form-label-group cus"]],null,null,null,null,null)),(n()(),e.pb(45,0,null,null,2,"span",[["style","position: absolute;margin-top: 9px;margin-left: 15px"]],null,null,null,null,null)),(n()(),e.pb(46,0,null,null,1,"ion-icon",[["name","lock"],["style","color:#026350;font-size: 25px"]],null,null,null,d.H,d.k)),e.ob(47,49152,null,0,o.A,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.pb(48,0,null,null,7,"input",[["class","form-control customc"],["id","inpumail"],["name","em"],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0,o=n.component;return"input"===l&&(t=!1!==e.zb(n,49)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==e.zb(n,49).onTouched()&&t),"compositionstart"===l&&(t=!1!==e.zb(n,49)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e.zb(n,49)._compositionEnd(u.target.value)&&t),"ngModelChange"===l&&(t=!1!==(o.data.password=u)&&t),t},null,null)),e.ob(49,16384,null,0,p.c,[e.D,e.k,[2,p.a]],null,null),e.ob(50,16384,null,0,p.l,[],{required:[0,"required"]},null),e.Db(1024,null,p.e,function(n){return[n]},[p.l]),e.Db(1024,null,p.f,function(n){return[n]},[p.c]),e.ob(53,671744,null,0,p.k,[[2,p.b],[6,p.e],[8,null],[6,p.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Db(2048,null,p.g,null,[p.k]),e.ob(55,16384,null,0,p.h,[[4,p.g]],null,null),(n()(),e.pb(56,0,null,null,12,"div",[["class","form-label-group cus"]],null,null,null,null,null)),(n()(),e.pb(57,0,null,null,2,"span",[["style","position: absolute;margin-top: 9px;margin-left: 15px"]],null,null,null,null,null)),(n()(),e.pb(58,0,null,null,1,"ion-icon",[["name","call"],["style","color:#026350;font-size: 25px"]],null,null,null,d.H,d.k)),e.ob(59,49152,null,0,o.A,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.pb(60,0,null,null,8,"input",[["class","form-control customc"],["id","inputEmail"],["name","em"],["placeholder","Phone"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,u){var t=!0,o=n.component;return"input"===l&&(t=!1!==e.zb(n,61)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==e.zb(n,61).onTouched()&&t),"compositionstart"===l&&(t=!1!==e.zb(n,61)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e.zb(n,61)._compositionEnd(u.target.value)&&t),"change"===l&&(t=!1!==e.zb(n,62).onChange(u.target.value)&&t),"input"===l&&(t=!1!==e.zb(n,62).onChange(u.target.value)&&t),"blur"===l&&(t=!1!==e.zb(n,62).onTouched()&&t),"ngModelChange"===l&&(t=!1!==(o.data.phno=u)&&t),t},null,null)),e.ob(61,16384,null,0,p.c,[e.D,e.k,[2,p.a]],null,null),e.ob(62,16384,null,0,p.n,[e.D,e.k],null,null),e.ob(63,16384,null,0,p.l,[],{required:[0,"required"]},null),e.Db(1024,null,p.e,function(n){return[n]},[p.l]),e.Db(1024,null,p.f,function(n,l){return[n,l]},[p.c,p.n]),e.ob(66,671744,null,0,p.k,[[2,p.b],[6,p.e],[8,null],[6,p.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Db(2048,null,p.g,null,[p.k]),e.ob(68,16384,null,0,p.h,[[4,p.g]],null,null),(n()(),e.pb(69,0,null,null,1,"button",[["class","btn btn-lg btn-primary btn-block text-uppercase fcs"],["style","background-color: #026350;padding: 13px !important;"],["type","submit"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.submit()&&e),e},null,null)),(n()(),e.Gb(-1,null,["SIGNUP"])),(n()(),e.pb(71,0,null,null,4,"p",[["routerLink","/login"],["style","outline: none;text-align: center;\n            margin: 10px 0px 0px 0px;color: white"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==e.zb(n,72).onClick()&&t),"click"===l&&(t=!1!==e.zb(n,73).onClick(u)&&t),t},null,null)),e.ob(72,16384,null,0,b.n,[b.m,b.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.ob(73,737280,null,0,o.Jb,[g.h,o.Gb,e.k,b.m,[2,b.n]],null,null),(n()(),e.pb(74,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,["Back"]))],function(n,l){var u=l.component;n(l,23,0,"person"),n(l,26,0,""),n(l,29,0,"em",u.data.name),n(l,35,0,"mail"),n(l,38,0,""),n(l,41,0,"pass",u.data.email),n(l,47,0,"lock"),n(l,50,0,""),n(l,53,0,"em",u.data.password),n(l,59,0,"call"),n(l,63,0,""),n(l,66,0,"em",u.data.phno),n(l,72,0,"/login"),n(l,73,0)},function(n,l){n(l,15,0,e.zb(l,19).ngClassUntouched,e.zb(l,19).ngClassTouched,e.zb(l,19).ngClassPristine,e.zb(l,19).ngClassDirty,e.zb(l,19).ngClassValid,e.zb(l,19).ngClassInvalid,e.zb(l,19).ngClassPending),n(l,24,0,e.zb(l,26).required?"":null,e.zb(l,31).ngClassUntouched,e.zb(l,31).ngClassTouched,e.zb(l,31).ngClassPristine,e.zb(l,31).ngClassDirty,e.zb(l,31).ngClassValid,e.zb(l,31).ngClassInvalid,e.zb(l,31).ngClassPending),n(l,36,0,e.zb(l,38).required?"":null,e.zb(l,43).ngClassUntouched,e.zb(l,43).ngClassTouched,e.zb(l,43).ngClassPristine,e.zb(l,43).ngClassDirty,e.zb(l,43).ngClassValid,e.zb(l,43).ngClassInvalid,e.zb(l,43).ngClassPending),n(l,48,0,e.zb(l,50).required?"":null,e.zb(l,55).ngClassUntouched,e.zb(l,55).ngClassTouched,e.zb(l,55).ngClassPristine,e.zb(l,55).ngClassDirty,e.zb(l,55).ngClassValid,e.zb(l,55).ngClassInvalid,e.zb(l,55).ngClassPending),n(l,60,0,e.zb(l,63).required?"":null,e.zb(l,68).ngClassUntouched,e.zb(l,68).ngClassTouched,e.zb(l,68).ngClassPristine,e.zb(l,68).ngClassDirty,e.zb(l,68).ngClassValid,e.zb(l,68).ngClassInvalid,e.zb(l,68).ngClassPending)})}function f(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"app-signup",[],null,null,null,h,m)),e.ob(1,114688,null,0,r,[i.a,b.m,o.Gb,o.Db,o.Eb,o.Mb,o.a,a.a],null,null)],function(n,l){n(l,1,0)},null)}var C=e.lb("app-signup",r,f,{},{},[]);u.d(l,"SignupPageModuleNgFactory",function(){return z});var z=e.mb(s,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[c.a,C]],[3,e.j],e.x]),e.xb(4608,g.m,g.l,[e.u,[2,g.v]]),e.xb(4608,p.p,p.p,[]),e.xb(4608,o.b,o.b,[e.z,e.g]),e.xb(4608,o.Fb,o.Fb,[o.b,e.j,e.q,g.c]),e.xb(4608,o.Ib,o.Ib,[o.b,e.j,e.q,g.c]),e.xb(1073742336,g.b,g.b,[]),e.xb(1073742336,p.m,p.m,[]),e.xb(1073742336,p.d,p.d,[]),e.xb(1073742336,o.Bb,o.Bb,[]),e.xb(1073742336,b.o,b.o,[[2,b.u],[2,b.m]]),e.xb(1073742336,s,s,[]),e.xb(1024,b.k,function(){return[[{path:"",component:r}]]},[])])})}}]);