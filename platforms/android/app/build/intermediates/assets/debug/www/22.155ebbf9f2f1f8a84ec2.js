(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{FDfQ:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("mrSG"),u=t("lGQG"),r=t("ZZ/e"),i=function(){function n(n,l,t,e){this.auth=n,this.router=l,this.loadingController=t,this.toastController=e,this.data={vCode:""}}return n.prototype.ngOnInit=function(){},n.prototype.forgotpass=function(){return o.b(this,void 0,void 0,function(){var n,l,t,e=this;return o.e(this,function(o){switch(o.label){case 0:return[4,this.loadingController.create({spinner:null,message:"Loading",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return o.sent(),[4,(n=document.querySelector("ion-loading-controller")).componentOnReady()];case 2:return o.sent(),[4,n.create({message:"Please wait...",spinner:"crescent"})];case 3:return[4,(l=o.sent()).present()];case 4:return o.sent(),[4,this.toastController.create({message:"Please Enter the correct code",duration:1400})];case 5:return t=o.sent(),console.log(this.data.vCode),this.auth.code(this.data).subscribe(function(n){console.log(n),e.responce=n,console.log(e.responce.id);var o=e.responce.id;console.log("message log"),console.log(e.responce.message),"success"===e.responce.message?(e.router.navigate(["/newpass/"+o]),l.dismiss()):"false"===e.responce.message&&(console.log("toast presented"),t.present(),l.dismiss())}),[2]}})})},n}(),a=function(){return function(){}}(),c=t("pMnS"),s=t("oBZk"),p=t("gIcY"),b=t("ZYCi"),g=e.nb({encapsulation:0,styles:[[".bc-img[_ngcontent-%COMP%]{--background:url('fn.d68af5070ee8ec2a49bf.png') 0 0/100% 120% no-repeat;background-size:cover!important;width:100%;background-position:center center}[_ngcontent-%COMP%]:root{--input-padding-x:1.5rem;--input-padding-y:.75rem}.card-signin[_ngcontent-%COMP%]{border:0;border-radius:1rem}.card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:2rem;font-weight:300;font-size:1.5rem}.card-signin[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:2rem}.form-signin[_ngcontent-%COMP%]{width:100%}.form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:70%;border-radius:5rem;letter-spacing:.1rem;font-weight:700;padding:1rem;transition:all .2s}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:2rem;height:45px}.btn-google[_ngcontent-%COMP%]{color:#fff;background-color:#645d92}.btn-facebook[_ngcontent-%COMP%]{color:#fff;background-color:#3b5998}.mg[_ngcontent-%COMP%]{margin-bottom:10px}input[_ngcontent-%COMP%]{padding-left:47px;height:20px}.customc[_ngcontent-%COMP%]{height:40px;border-radius:20px}input[_ngcontent-%COMP%]::-webkit-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::-moz-placeholder{padding-left:1px}input[_ngcontent-%COMP%]:-ms-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::-ms-input-placeholder{padding-left:1px}input[_ngcontent-%COMP%]::placeholder{padding-left:1px}input[_ngcontent-c0][_ngcontent-%COMP%]{padding-left:47px!important}.cus[_ngcontent-%COMP%]{margin-bottom:12px}"]],data:{}});function d(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,8,"ion-header",[],null,null,null,s.G,s.j)),e.ob(1,49152,null,0,r.z,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,6,"ion-toolbar",[["color","primary"]],null,null,null,s.T,s.w)),e.ob(3,49152,null,0,r.zb,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.pb(4,0,null,0,1,"ion-buttons",[["slot","start"]],null,null,null,s.z,s.c)),e.ob(5,49152,null,0,r.j,[e.h,e.k],null,null),(n()(),e.pb(6,0,null,0,2,"ion-title",[],null,null,null,s.S,s.v)),e.ob(7,49152,null,0,r.xb,[e.h,e.k],null,null),(n()(),e.Gb(-1,0,["Verification Code"])),(n()(),e.pb(9,0,null,null,22,"ion-content",[["class","bc-img"]],null,null,null,s.E,s.h)),e.ob(10,49152,null,0,r.s,[e.h,e.k],null,null),(n()(),e.pb(11,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.pb(12,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.pb(13,0,null,0,18,"div",[["padding",""]],null,null,null,null,null)),(n()(),e.pb(14,0,null,null,17,"div",[["padding",""]],null,null,null,null,null)),(n()(),e.pb(15,0,null,null,0,"img",[["alt",""],["height","130"],["src","../../assets/img/fgck-logo.png"],["style","display: block;margin: auto"]],null,null,null,null,null)),(n()(),e.pb(16,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.pb(17,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.pb(18,0,null,null,11,"div",[["class","form-label-group cus"]],null,null,null,null,null)),(n()(),e.pb(19,0,null,null,2,"span",[["style","position: absolute;margin-top: 9px;margin-left: 15px"]],null,null,null,null,null)),(n()(),e.pb(20,0,null,null,1,"ion-icon",[["name","person"],["style","color:#026350;font-size: 25px"]],null,null,null,s.H,s.k)),e.ob(21,49152,null,0,r.A,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.pb(22,0,null,null,7,"input",[["class","form-control customc"],["id","inpu"],["name","em"],["placeholder","Enter Verification Code"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var o=!0,u=n.component;return"input"===l&&(o=!1!==e.zb(n,23)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==e.zb(n,23).onTouched()&&o),"compositionstart"===l&&(o=!1!==e.zb(n,23)._compositionStart()&&o),"compositionend"===l&&(o=!1!==e.zb(n,23)._compositionEnd(t.target.value)&&o),"ngModelChange"===l&&(o=!1!==(u.data.vCode=t)&&o),o},null,null)),e.ob(23,16384,null,0,p.c,[e.D,e.k,[2,p.a]],null,null),e.ob(24,16384,null,0,p.l,[],{required:[0,"required"]},null),e.Db(1024,null,p.e,function(n){return[n]},[p.l]),e.Db(1024,null,p.f,function(n){return[n]},[p.c]),e.ob(27,671744,null,0,p.k,[[8,null],[6,p.e],[8,null],[6,p.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Db(2048,null,p.g,null,[p.k]),e.ob(29,16384,null,0,p.h,[[4,p.g]],null,null),(n()(),e.pb(30,0,null,null,1,"button",[["class","btn btn-lg btn-primary btn-block fcs"],["style","background-color: #026350;border-radius: 50px;padding: 13px !important;font-size: 16px !important;"],["type","submit"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.forgotpass()&&e),e},null,null)),(n()(),e.Gb(-1,null,["SUBMIT"]))],function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,21,0,"person"),n(l,24,0,""),n(l,27,0,"em",t.data.vCode)},function(n,l){n(l,22,0,e.zb(l,24).required?"":null,e.zb(l,29).ngClassUntouched,e.zb(l,29).ngClassTouched,e.zb(l,29).ngClassPristine,e.zb(l,29).ngClassDirty,e.zb(l,29).ngClassValid,e.zb(l,29).ngClassInvalid,e.zb(l,29).ngClassPending)})}function m(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"app-entercode",[],null,null,null,d,g)),e.ob(1,114688,null,0,i,[u.a,b.m,r.Db,r.Mb],null,null)],function(n,l){n(l,1,0)},null)}var f=e.lb("app-entercode",i,m,{},{},[]),h=t("Ip0R");t.d(l,"EntercodePageModuleNgFactory",function(){return C});var C=e.mb(a,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[c.a,f]],[3,e.j],e.x]),e.xb(4608,h.m,h.l,[e.u,[2,h.v]]),e.xb(4608,p.p,p.p,[]),e.xb(4608,r.b,r.b,[e.z,e.g]),e.xb(4608,r.Fb,r.Fb,[r.b,e.j,e.q,h.c]),e.xb(4608,r.Ib,r.Ib,[r.b,e.j,e.q,h.c]),e.xb(1073742336,h.b,h.b,[]),e.xb(1073742336,p.m,p.m,[]),e.xb(1073742336,p.d,p.d,[]),e.xb(1073742336,r.Bb,r.Bb,[]),e.xb(1073742336,b.o,b.o,[[2,b.u],[2,b.m]]),e.xb(1073742336,a,a,[]),e.xb(1024,b.k,function(){return[[{path:"",component:i}]]},[])])})}}]);