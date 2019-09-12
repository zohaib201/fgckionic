(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"bc-img\">\n  <div></div>\n  <br><br><br>\n  <br><br>\n  <div class=\"container\" padding=\"\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <img src=\"../../assets/img/fgck-logo.png\" alt=\"\" height=\"150\" style=\"display: block;margin: auto;margin-top: -50px\">\n        <div>\n          <br>\n          <div padding=\"\">\n            <form class=\"form-signin\">\n              <div class=\"form-label-group cus\">\n                <span style=\"position: absolute;margin-top: 9px;margin-left: 15px\">\n                  <ion-icon name=\"person\" style=\"color:#026350;font-size: 25px\"></ion-icon>\n                </span>\n                <input type=\"text\" id=\"inpu\" class=\"form-control customc\" placeholder=\"Name\" [(ngModel)]=\"data.name\" required name=\"em\">\n              </div>\n              <div class=\"form-label-group cus\">\n                <span style=\"position: absolute;margin-top: 9px;margin-left: 15px\">\n                  <ion-icon name=\"mail\" style=\"color:#026350;font-size: 25px\"></ion-icon>\n                </span>\n                <input type=\"email\" id=\"inputPassword\" class=\"form-control customc\" placeholder=\"Email\" [(ngModel)]=\"data.email\"  required  name=\"pass\">\n              </div>\n\n\n\n              <div class=\"form-label-group cus\">\n                <span style=\"position: absolute;margin-top: 9px;margin-left: 15px\">\n                  <ion-icon name=\"lock\" style=\"color:#026350;font-size: 25px\"></ion-icon>\n                </span>\n                <input type=\"password\" id=\"inpumail\" class=\"form-control customc\" placeholder=\"Password\"  [(ngModel)]=\"data.password\" required name=\"em\">\n              </div>\n\n\n\n              <div class=\"form-label-group cus\">\n                <span style=\"position: absolute;margin-top: 9px;margin-left: 15px\">\n                  <ion-icon name=\"call\" style=\"color:#026350;font-size: 25px\"></ion-icon>\n                </span>\n                <input type=\"number\" id=\"inputEmail\" class=\"form-control customc\" placeholder=\"Phone\"  [(ngModel)]=\"data.phno\" required name=\"em\">\n              </div>\n\n\n\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase fcs\" style=\"background-color: #026350;padding: 13px !important;\" type=\"submit\" (click)=\"submit()\">SIGNUP</button>\n            </form>\n            <p style=\"margin-top: 10px;text-align: center\" routerLink=\"/login\" style=\"outline: none;text-align: center;\n            margin: 10px 0px 0px 0px;color: white\"> <b>Back</b> </p>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem; }\n\n.bc-img {\n  --background: url('fn.png')0 0/100% 760px no-repeat;\n  background-size: cover !important;\n  width: 100%;\n  background-position: center center; }\n\n@media screen and (min-height: 760px) {\n  .bc-img {\n    --background: url('fn.png')0 0/100% 900px no-repeat;\n    background-size: cover !important;\n    width: 100%;\n    background-attachment: fixed;\n    background-position: center center; } }\n\n.card-signin {\n  border: 0;\n  border-radius: 1rem; }\n\n.card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.card-signin .card-body {\n  padding: 2rem; }\n\n.form-signin {\n  width: 100%; }\n\n.form-signin .btn {\n  font-size: 70%;\n  border-radius: 5rem;\n  letter-spacing: .1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group input {\n  border-radius: 2rem;\n  height: 45px; }\n\n.btn-google {\n  color: white;\n  background-color: #645d92; }\n\n.btn-facebook {\n  color: white;\n  background-color: #3b5998; }\n\n.mg {\n  margin-bottom: 10px; }\n\nspan {\n  position: absolute;\n  margin-left: 5px;\n  height: 25px;\n  display: flex;\n  align-items: center; }\n\ninput {\n  padding-left: 47px;\n  height: 20px; }\n\n.customc {\n  height: 40px;\n  border-radius: 20px; }\n\ninput::-webkit-input-placeholder {\n  padding-left: 1px; }\n\ninput::-moz-placeholder {\n  padding-left: 1px; }\n\ninput:-ms-input-placeholder {\n  padding-left: 1px; }\n\ninput::-ms-input-placeholder {\n  padding-left: 1px; }\n\ninput::placeholder {\n  padding-left: 1px; }\n\ninput[_ngcontent-c0] {\n  padding-left: 47px !important; }\n\n.cus {\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxwcm9qZWN0c1xcRkdDX2lvbmljL3NyY1xcYXBwXFxzaWdudXBcXHNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBa0I7RUFDbEIseUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsbURBQWE7RUFDYixpQ0FBaUM7RUFFakMsV0FBVztFQUVYLGtDQUFrQyxFQUFBOztBQUVwQztFQUNFO0lBQ0UsbURBQWE7SUFDYixpQ0FBaUM7SUFFakMsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixrQ0FBa0MsRUFBQSxFQUNuQzs7QUFHSDtFQUNFLFNBQVM7RUFDVCxtQkFBbUIsRUFBQTs7QUFJckI7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUVFLG1CQUFtQjtFQUNuQixZQUFhLEVBQUE7O0FBRWY7RUFDRSxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGlCQUFnQixFQUFBOztBQURsQjtFQUNFLGlCQUFnQixFQUFBOztBQURsQjtFQUNFLGlCQUFnQixFQUFBOztBQURsQjtFQUNFLGlCQUFnQixFQUFBOztBQURsQjtFQUNFLGlCQUFnQixFQUFBOztBQUVsQjtFQUNFLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcclxuICAtLWlucHV0LXBhZGRpbmcteTogLjc1cmVtO1xyXG59XHJcbi5iYy1pbWd7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2ZuLnBuZ1wiKTAgMC8xMDAlIDc2MHB4IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLy9oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSB7XHJcbiAgLmJjLWltZ3tcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9mbi5wbmdcIikwIDAvMTAwJSA5MDBweCBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICAvL2hlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1zaWduaW4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIC8vYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmJ0biB7XHJcbiAgZm9udC1zaXplOiA3MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dCB7XHJcbiAgLy9oZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBoZWlnaHQ6IDQ1cHggO1xyXG59XHJcbi5idG4tZ29vZ2xlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NWQ5MjtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbn1cclxuXHJcbi5tZ3tcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5zcGFue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW5wdXR7XHJcbiAgcGFkZGluZy1sZWZ0OiA0N3B4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG4uY3VzdG9tY3tcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIHBhZGRpbmctbGVmdDoxcHg7XHJcbn1cclxuaW5wdXRbX25nY29udGVudC1jMF0ge1xyXG4gIHBhZGRpbmctbGVmdDogNDdweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");








var SignupPage = /** @class */ (function () {
    function SignupPage(loginsrv, route, nav, loadingController, menuCtrl, toastController, alertController, fcm) {
        this.loginsrv = loginsrv;
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.toastController = toastController;
        this.alertController = alertController;
        this.fcm = fcm;
        this.data = {
            name: '',
            email: '',
            password: '',
            phno: '',
            notificationToken: ''
        };
        this.invaliddata = false;
        this.emptyField = false;
        this.inValidcredentials = false;
        this.menuCtrl.enable(false);
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Request Submitted! ',
                            message: 'Your registration has been submitted and will be active after Admin approval.',
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, loadingController, loadingElement, toast, already, login;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
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
                                spinner: 'crescent'
                            })];
                    case 3:
                        loadingElement = _a.sent();
                        return [4 /*yield*/, loadingElement.present()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please fill all the fields',
                                duration: 3500
                            })];
                    case 5:
                        toast = _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Email already exist.',
                                duration: 3500
                            })];
                    case 6:
                        already = _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'You are registered successfully. But you are not approved by admin.',
                                duration: 3500
                            })];
                    case 7:
                        login = _a.sent();
                        if (this.data.name === '' || this.data.email === '' || this.data.password === '' || this.data.phno === '') {
                            loadingElement.dismiss();
                            toast.present();
                        }
                        else {
                            this.emptyField = false;
                            this.loginsrv.signup(this.data).subscribe(function (data) {
                                if (data.message === "Email is already taken! Please choose another one") {
                                    already.present();
                                    loadingElement.dismiss();
                                }
                                else {
                                    loadingElement.dismiss();
                                    _this.presentAlertConfirm();
                                    _this.route.navigateByUrl('/login');
                                    _this.data.name = '';
                                    _this.data.email = '';
                                    _this.data.password = '';
                                    _this.data.phno = '';
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__["FCM"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map