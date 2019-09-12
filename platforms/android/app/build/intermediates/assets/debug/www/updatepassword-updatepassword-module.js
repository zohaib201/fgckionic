(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updatepassword-updatepassword-module"],{

/***/ "./src/app/updatepassword/updatepassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/updatepassword/updatepassword.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdatepasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatepasswordPageModule", function() { return UpdatepasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updatepassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updatepassword.page */ "./src/app/updatepassword/updatepassword.page.ts");







var routes = [
    {
        path: '',
        component: _updatepassword_page__WEBPACK_IMPORTED_MODULE_6__["UpdatepasswordPage"]
    }
];
var UpdatepasswordPageModule = /** @class */ (function () {
    function UpdatepasswordPageModule() {
    }
    UpdatepasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updatepassword_page__WEBPACK_IMPORTED_MODULE_6__["UpdatepasswordPage"]]
        })
    ], UpdatepasswordPageModule);
    return UpdatepasswordPageModule;
}());



/***/ }),

/***/ "./src/app/updatepassword/updatepassword.page.html":
/*!*********************************************************!*\
  !*** ./src/app/updatepassword/updatepassword.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <!--<ion-menu-button></ion-menu-button>-->\n    </ion-buttons>\n    <ion-title>Update Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"\">\n  <br>\n  <img src=\"../../assets/img/fgc.jpeg\" alt=\"\" height=\"130\" style=\"display: block;margin: auto\">\n  <br><br>\n <div padding=\"\">\n   <div padding=\"\">\n     <div class=\"form-label-group cus\">\n    <span style=\"position: absolute;margin-top: 9px;margin-left: 15px\">\n      <ion-icon name=\"lock\" style=\"color:#026350;font-size: 25px\"></ion-icon>\n    </span>\n       <input type=\"password\" id=\"inpu\" class=\"form-control customc\"\n              [(ngModel)]=\"resetpassword.oldPassword\" placeholder=\"Old Password\" required name=\"em\">\n     </div>\n\n     <div class=\"form-label-group cus\">\n    <span style=\"position: absolute;margin-top: 9px;margin-left: 15px\">\n      <ion-icon name=\"lock\" style=\"color:#026350;font-size: 25px\"></ion-icon>\n    </span>\n       <input type=\"password\" id=\"inputPassword\" class=\"form-control customc\"\n              [(ngModel)]=\"resetpassword.newPassword\" placeholder=\"New Password\" required\n              name=\"pass\">\n     </div>\n\n     <button class=\"btn btn-lg btn-primary btn-block   fcs\" (click)=\"password()\"\n             style=\"background-color: #026350;font-size:15px;border-radius: 50px;padding: 13px\"\n             type=\"submit\">Change Password</button>\n   </div>\n </div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/updatepassword/updatepassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/updatepassword/updatepassword.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem; }\n\n.card-signin {\n  border: 0;\n  border-radius: 1rem; }\n\n.card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.card-signin .card-body {\n  padding: 2rem; }\n\n.form-signin {\n  width: 100%; }\n\n.form-signin .btn {\n  font-size: 70%;\n  border-radius: 5rem;\n  letter-spacing: .1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group input {\n  border-radius: 2rem;\n  height: 45px; }\n\n.btn-google {\n  color: white;\n  background-color: #645d92; }\n\n.btn-facebook {\n  color: white;\n  background-color: #3b5998; }\n\n:root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem; }\n\n.card-signin {\n  border: 0;\n  border-radius: 1rem; }\n\n.card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.card-signin .card-body {\n  padding: 2rem; }\n\n.form-signin {\n  width: 100%; }\n\n.form-signin .btn {\n  font-size: 70%;\n  border-radius: 5rem;\n  letter-spacing: .1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group input {\n  border-radius: 2rem;\n  height: 45px; }\n\n.btn-google {\n  color: white;\n  background-color: #645d92; }\n\n.btn-facebook {\n  color: white;\n  background-color: #3b5998; }\n\n.mg {\n  margin-bottom: 10px; }\n\ninput {\n  padding-left: 47px;\n  height: 20px; }\n\n.customc {\n  height: 40px;\n  border-radius: 20px; }\n\ninput::-webkit-input-placeholder {\n  padding-left: 1px; }\n\ninput::-moz-placeholder {\n  padding-left: 1px; }\n\ninput:-ms-input-placeholder {\n  padding-left: 1px; }\n\ninput::-ms-input-placeholder {\n  padding-left: 1px; }\n\ninput::placeholder {\n  padding-left: 1px; }\n\ninput[_ngcontent-c0] {\n  padding-left: 47px !important; }\n\n.cus {\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlcGFzc3dvcmQvQzpcXHByb2plY3RzXFxGR0NfaW9uaWMvc3JjXFxhcHBcXHVwZGF0ZXBhc3N3b3JkXFx1cGRhdGVwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBa0I7RUFDbEIseUJBQWtCLEVBQUE7O0FBR2xCO0VBQ0EsU0FBUztFQUNULG1CQUFtQixFQUFBOztBQUluQjtFQUNBLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR2pCO0VBQ0EsYUFBYSxFQUFBOztBQUdiO0VBQ0EsV0FBVyxFQUFBOztBQUdYO0VBQ0EsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0IsRUFBQTs7QUFHcEI7RUFDQSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR25CO0VBRUEsbUJBQW1CO0VBQ25CLFlBQWEsRUFBQTs7QUFHYjtFQUNBLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHekI7RUFDQSxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRXpCO0VBQ0EseUJBQWtCO0VBQ2xCLHlCQUFrQixFQUFBOztBQUdsQjtFQUNBLFNBQVM7RUFDVCxtQkFBbUIsRUFBQTs7QUFJbkI7RUFDQSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdqQjtFQUNBLGFBQWEsRUFBQTs7QUFHYjtFQUNBLFdBQVcsRUFBQTs7QUFHWDtFQUNBLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CLEVBQUE7O0FBR3BCO0VBQ0Esa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUduQjtFQUVBLG1CQUFtQjtFQUNuQixZQUFhLEVBQUE7O0FBRWI7RUFDQSxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBR3pCO0VBQ0EsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUd6QjtFQUNBLG1CQUFtQixFQUFBOztBQUduQjtFQUNBLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRVo7RUFDQSxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBRW5CO0VBQ0EsaUJBQWdCLEVBQUE7O0FBRGhCO0VBQ0EsaUJBQWdCLEVBQUE7O0FBRGhCO0VBQ0EsaUJBQWdCLEVBQUE7O0FBRGhCO0VBQ0EsaUJBQWdCLEVBQUE7O0FBRGhCO0VBQ0EsaUJBQWdCLEVBQUE7O0FBRWhCO0VBQ0EsNkJBQTZCLEVBQUE7O0FBRTdCO0VBQ0EsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91cGRhdGVwYXNzd29yZC91cGRhdGVwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gICAgLS1pbnB1dC1wYWRkaW5nLXk6IC43NXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtc2lnbmluIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAvL2JveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkLXNpZ25pbiAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC1zaWduaW4gLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb3JtLXNpZ25pbiAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dCB7XHJcbiAgICAvL2hlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDQ1cHggO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuYnRuLWdvb2dsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ1ZDkyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLWZhY2Vib29rIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgICB9XHJcbiAgICA6cm9vdCB7XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gICAgLS1pbnB1dC1wYWRkaW5nLXk6IC43NXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtc2lnbmluIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAvL2JveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkLXNpZ25pbiAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC1zaWduaW4gLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb3JtLXNpZ25pbiAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dCB7XHJcbiAgICAvL2hlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDQ1cHggO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1nb29nbGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NWQ5MjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1mYWNlYm9vayB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dHtcclxuICAgIHBhZGRpbmctbGVmdDogNDdweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIC5jdXN0b21je1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIH1cclxuICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MXB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXRbX25nY29udGVudC1jMF0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0N3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY3Vze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/updatepassword/updatepassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/updatepassword/updatepassword.page.ts ***!
  \*******************************************************/
/*! exports provided: UpdatepasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatepasswordPage", function() { return UpdatepasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UpdatepasswordPage = /** @class */ (function () {
    function UpdatepasswordPage(toastController, authSrv, Router, loadingController) {
        this.toastController = toastController;
        this.authSrv = authSrv;
        this.Router = Router;
        this.loadingController = loadingController;
        this.resetpassword = { oldPassword: '', newPassword: '' };
    }
    UpdatepasswordPage.prototype.ngOnInit = function () {
    };
    UpdatepasswordPage.prototype.password = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, loadingController, loadingElement, current, success, fillallfields;
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
                        this.ID = JSON.parse(localStorage.getItem('id'));
                        console.log(this.ID);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Innvalid current password',
                                duration: 2000
                            })];
                    case 5:
                        current = _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Password Update successfully',
                                duration: 2500
                            })];
                    case 6:
                        success = _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please fill all the fields',
                                duration: 2000
                            })];
                    case 7:
                        fillallfields = _a.sent();
                        if (this.resetpassword.oldPassword === "" || this.resetpassword.newPassword === "") {
                            fillallfields.present();
                            loadingElement.dismiss();
                        }
                        else {
                            this.authSrv.Updatepassword(this.ID, this.resetpassword).subscribe(function (data) {
                                if (data.message === "NotOk") {
                                    current.present();
                                    loadingElement.dismiss();
                                }
                                else if (data.message === "OK") {
                                    success.present();
                                    _this.resetpassword.oldPassword = '';
                                    _this.resetpassword.newPassword = '';
                                    _this.Router.navigateByUrl('/login');
                                    localStorage.clear();
                                    loadingElement.dismiss();
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdatepasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updatepassword',
            template: __webpack_require__(/*! ./updatepassword.page.html */ "./src/app/updatepassword/updatepassword.page.html"),
            styles: [__webpack_require__(/*! ./updatepassword.page.scss */ "./src/app/updatepassword/updatepassword.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], UpdatepasswordPage);
    return UpdatepasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=updatepassword-updatepassword-module.js.map