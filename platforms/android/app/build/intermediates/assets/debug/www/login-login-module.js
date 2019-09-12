(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"bc-img\">\n  <div class=\"container\" padding=\"\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <br><br>\n        <img src=\"../../assets/img/fgck-logo.png\" alt=\"\" height=\"150\" style=\"display: block;margin: auto\">\n<!--        <p style=\"text-align: center;color: white\"><b>FGC Connect</b></p>-->\n        <br>\n        <div>\n          <div padding=\"\">\n            <form class=\"form-signin\">\n              <div class=\"form-label-group cus\">\n                <span style=\"position: absolute;margin-top: 9px;margin-left: 15px\">\n                  <ion-icon name=\"person\" style=\"color:#026350;font-size: 25px\"></ion-icon>\n                </span>\n                <input type=\"text\" id=\"inpu\" class=\"form-control customc\" placeholder=\"Email / Username\" [(ngModel)]=\"data.email\" required name=\"em\">\n              </div>\n              <div class=\"form-label-group cus\">\n                <span style=\"position: absolute;margin-top: 9px;margin-left: 15px\">\n                  <ion-icon name=\"mail\" style=\"color:#026350;font-size: 25px\"></ion-icon>\n                </span>\n                <input type=\"password\" id=\"inputPassword\" class=\"form-control customc\" placeholder=\"Password\" [(ngModel)]=\"data.password\"  required  name=\"pass\">\n              </div>\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase fcs\" style=\"background-color: #026350;padding: 13px !important;\" type=\"submit\"  (click)=\"send()\">LOGIN</button>\n              <p class=\"fcs text-center\" style=\"margin-top: 10px;font-size: 16px;color:white;\" routerLink=\"/forgetpass\"><b>Forgot Password ?</b></p>\n              <br>\n              <p class=\"fcs text-center\" style=\"margin-top: -7px !important;margin-bottom: 5px;\n              font-size: 16px;color: black;\"><b>Don't have an account ?</b></p>\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase fcs\" style=\"background-color: #026350;outline: none;padding: 13px !important;\" type=\"submit\"  routerLink=\"/signup\">SIGNUP NOW</button>\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase fcs\" style=\"background-color: #026350;padding: 13px !important;\" type=\"submit\"  (click)=\"guest()\">CONTINUE AS GUEST</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem; }\n\n.bc-img {\n  --background: url('fn.png')0 0/100% 760px no-repeat;\n  background-size: cover !important;\n  width: 100%;\n  background-attachment: fixed;\n  background-position: center center; }\n\n@media screen and (min-height: 760px) {\n  .bc-img {\n    --background: url('fn.png')0 0/100% 900px no-repeat;\n    background-size: cover !important;\n    width: 100%;\n    background-attachment: fixed;\n    background-position: center center; } }\n\n.card-signin {\n  border: 0;\n  border-radius: 1rem; }\n\n.card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.card-signin .card-body {\n  padding: 2rem; }\n\n.form-signin {\n  width: 100%; }\n\n.form-signin .btn {\n  font-size: 70%;\n  border-radius: 5rem;\n  letter-spacing: .1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group input {\n  border-radius: 2rem;\n  height: 45px; }\n\n.btn-google {\n  color: white;\n  background-color: #645d92; }\n\n.btn-facebook {\n  color: white;\n  background-color: #3b5998; }\n\n:root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem; }\n\n.card-signin {\n  border: 0;\n  border-radius: 1rem; }\n\n.card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.card-signin .card-body {\n  padding: 2rem; }\n\n.form-signin {\n  width: 100%; }\n\n.form-signin .btn {\n  font-size: 70%;\n  border-radius: 5rem;\n  letter-spacing: .1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group input {\n  border-radius: 2rem;\n  height: 45px; }\n\n.btn-google {\n  color: white;\n  background-color: #645d92; }\n\n.btn-facebook {\n  color: white;\n  background-color: #3b5998; }\n\n.mg {\n  margin-bottom: 10px; }\n\ninput {\n  padding-left: 47px;\n  height: 20px; }\n\n.customc {\n  height: 40px;\n  border-radius: 20px; }\n\ninput::-webkit-input-placeholder {\n  padding-left: 1px; }\n\ninput::-moz-placeholder {\n  padding-left: 1px; }\n\ninput:-ms-input-placeholder {\n  padding-left: 1px; }\n\ninput::-ms-input-placeholder {\n  padding-left: 1px; }\n\ninput::placeholder {\n  padding-left: 1px; }\n\ninput[_ngcontent-c0] {\n  padding-left: 47px !important; }\n\n.cus {\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXHByb2plY3RzXFxGR0NfaW9uaWMvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBa0I7RUFDbEIseUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsbURBQWE7RUFDYixpQ0FBaUM7RUFFakMsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFFcEM7RUFDRTtJQUNFLG1EQUFhO0lBQ2IsaUNBQWlDO0lBRWpDLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsa0NBQWtDLEVBQUEsRUFDbkM7O0FBRUg7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFFRSxtQkFBbUI7RUFDbkIsWUFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBa0I7RUFDbEIseUJBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsU0FBUztFQUNULG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBRUUsbUJBQW1CO0VBQ25CLFlBQWEsRUFBQTs7QUFFZjtFQUNFLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFEbEI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFEbEI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFEbEI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFEbEI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gIC0taW5wdXQtcGFkZGluZy15OiAuNzVyZW07XHJcbn1cclxuLmJjLWltZ3tcclxuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvZm4ucG5nXCIpMCAwLzEwMCUgNzYwcHggbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAvL2hlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSB7XHJcbiAgLmJjLWltZ3tcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9mbi5wbmdcIikwIDAvMTAwJSA5MDBweCBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICAvL2hlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgLy9ib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuYnRuIHtcclxuICBmb250LXNpemU6IDcwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0IHtcclxuICAvL2hlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGhlaWdodDogNDVweCA7XHJcblxyXG59XHJcbi5idG4tZ29vZ2xlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NWQ5MjtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbn1cclxuOnJvb3Qge1xyXG4gIC0taW5wdXQtcGFkZGluZy14OiAxLjVyZW07XHJcbiAgLS1pbnB1dC1wYWRkaW5nLXk6IC43NXJlbTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAvL2JveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiAuY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4gLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5idG4ge1xyXG4gIGZvbnQtc2l6ZTogNzAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQge1xyXG4gIC8vaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgaGVpZ2h0OiA0NXB4IDtcclxufVxyXG4uYnRuLWdvb2dsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDVkOTI7XHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG59XHJcblxyXG4ubWd7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgcGFkZGluZy1sZWZ0OiA0N3B4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG4uY3VzdG9tY3tcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIHBhZGRpbmctbGVmdDoxcHg7XHJcbn1cclxuaW5wdXRbX25nY29udGVudC1jMF0ge1xyXG4gIHBhZGRpbmctbGVmdDogNDdweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(AuthSrv, route, nav, loadingController, toastController, fcm, menuCtrl) {
        this.AuthSrv = AuthSrv;
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.fcm = fcm;
        this.menuCtrl = menuCtrl;
        this.data = {
            email: '',
            password: '',
            notificationToken: ''
        };
        this.invaliddata = false;
        this.emptyField = false;
        this.inValidcredentials = false;
        this.menuCtrl.enable(false);
    }
    LoginPage.prototype.send = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, loadingController, loadingElement, toast, pending, invalid;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fcm.getToken().then(function (token) {
                            _this.data.notificationToken = token;
                            console.log(_this.data);
                        });
                        this.AuthSrv.updatenotification(this.data).subscribe(function (res) {
                            console.log('notification token has updated');
                        });
                        return [4 /*yield*/, this.loadingController.create({
                                spinner: null,
                                message: 'Loading',
                                translucent: true,
                                cssClass: 'custom-class custom-loading'
                            })];
                    case 1:
                        loading = _a.sent();
                        loadingController = document.querySelector('ion-loading-controller');
                        return [4 /*yield*/, loadingController.componentOnReady()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, loadingController.create({
                                message: 'Please wait...',
                                spinner: 'crescent',
                                duration: 3000
                            })];
                    case 3:
                        loadingElement = _a.sent();
                        return [4 /*yield*/, loadingElement.present()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please fill all the fields',
                                duration: 1400
                            })];
                    case 5:
                        toast = _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Approval pending . Try later',
                                duration: 1400
                            })];
                    case 6:
                        pending = _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Invalid credential',
                                duration: 1400
                            })];
                    case 7:
                        invalid = _a.sent();
                        if (this.data.email === '' || this.data.password === '') {
                            toast.present();
                            loadingElement.dismiss();
                        }
                        else {
                            this.AuthSrv.login(this.data).subscribe(function (data) {
                                // console.log(data);
                                if (data.message === "Not Authorized") {
                                    loadingElement.dismiss();
                                    invalid.present();
                                }
                                else if (data.message === "Approval Pending") {
                                    pending.present();
                                    loadingElement.dismiss();
                                }
                                else if (data.memberFromAppId) {
                                    _this.route.navigateByUrl('/updatepassword');
                                    loadingElement.dismiss();
                                    localStorage.setItem('id', JSON.stringify(data.memberFromAppId));
                                }
                                else {
                                    _this.AuthSrv.memberbyMemberFromAppID(data.memID).subscribe(function (item) {
                                        console.log(item);
                                        _this.fcm.getToken().then(function (token) {
                                            _this.data.notificationToken = token;
                                            console.log(_this.data);
                                        });
                                        _this.AuthSrv.updatenotification(_this.data).subscribe(function (res) {
                                            console.log('notification token has updated');
                                        });
                                        localStorage.setItem('user', JSON.stringify(item));
                                        var id = JSON.parse(localStorage.getItem('user')).id;
                                        localStorage.setItem('id', id);
                                        _this.route.navigateByUrl('/home');
                                        loadingElement.dismiss();
                                        _this.data.email = '';
                                        _this.data.password = '';
                                    });
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.guest = function () {
        localStorage.setItem('guest', "guest");
        this.route.navigateByUrl('/home');
    };
    LoginPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__["FCM"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map