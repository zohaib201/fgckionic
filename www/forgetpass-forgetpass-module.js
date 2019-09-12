(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgetpass-forgetpass-module"],{

/***/ "./src/app/forgetpass/forgetpass.module.ts":
/*!*************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.module.ts ***!
  \*************************************************/
/*! exports provided: ForgetpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpassPageModule", function() { return ForgetpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgetpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgetpass.page */ "./src/app/forgetpass/forgetpass.page.ts");







var routes = [
    {
        path: '',
        component: _forgetpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgetpassPage"]
    }
];
var ForgetpassPageModule = /** @class */ (function () {
    function ForgetpassPageModule() {
    }
    ForgetpassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgetpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgetpassPage"]]
        })
    ], ForgetpassPageModule);
    return ForgetpassPageModule;
}());



/***/ }),

/***/ "./src/app/forgetpass/forgetpass.page.html":
/*!*************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"bc-img\">\n  <br>\n  <br>\n  <div padding=\"\">\n  <div padding=\"\">\n    <img src=\"../../assets/img/fgck-logo.png\" alt=\"\" height=\"130\" style=\"display: block;margin: auto\">\n    <br><br>\n    <div class=\"form-label-group cus\">\n    <span style=\"position: absolute;margin-top: 9px;margin-left: 15px\">\n      <ion-icon name=\"person\" style=\"color:#026350;font-size: 25px\"></ion-icon>\n    </span>\n      <input type=\"email\" id=\"inpu\" class=\"form-control customc\" [(ngModel)]=\"data.email\" placeholder=\"Enter your Email\" required name=\"em\">\n    </div>\n\n    <button class=\"btn btn-lg btn-primary btn-block fcs\" style=\"background-color: #026350;\n   border-radius: 50px;padding: 13px !important;font-size: 16px !important;\" type=\"submit\" (click)=\"forgotpass()\">SUBMIT</button>\n  </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/forgetpass/forgetpass.page.scss":
/*!*************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem; }\n\n.bc-img {\n  --background: url('fn.png')0 0/100% 760px no-repeat;\n  background-size: cover !important;\n  width: 100%;\n  background-position: center center; }\n\n@media screen and (min-height: 760px) {\n  .bc-img {\n    --background: url('fn.png')0 0/100% 900px no-repeat;\n    background-size: cover !important;\n    width: 100%;\n    background-attachment: fixed;\n    background-position: center center; } }\n\n.card-signin {\n  border: 0;\n  border-radius: 1rem; }\n\n.card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.card-signin .card-body {\n  padding: 2rem; }\n\n.form-signin {\n  width: 100%; }\n\n.form-signin .btn {\n  font-size: 70%;\n  border-radius: 5rem;\n  letter-spacing: .1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group input {\n  border-radius: 2rem;\n  height: 45px; }\n\n.btn-google {\n  color: white;\n  background-color: #645d92; }\n\n.btn-facebook {\n  color: white;\n  background-color: #3b5998; }\n\n:root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem; }\n\n.card-signin {\n  border: 0;\n  border-radius: 1rem; }\n\n.card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.card-signin .card-body {\n  padding: 2rem; }\n\n.form-signin {\n  width: 100%; }\n\n.form-signin .btn {\n  font-size: 70%;\n  border-radius: 5rem;\n  letter-spacing: .1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group input {\n  border-radius: 2rem;\n  height: 45px; }\n\n.btn-google {\n  color: white;\n  background-color: #645d92; }\n\n.btn-facebook {\n  color: white;\n  background-color: #3b5998; }\n\n.mg {\n  margin-bottom: 10px; }\n\ninput {\n  padding-left: 47px;\n  height: 20px; }\n\n.customc {\n  height: 40px;\n  border-radius: 20px; }\n\ninput::-webkit-input-placeholder {\n  padding-left: 1px; }\n\ninput::-moz-placeholder {\n  padding-left: 1px; }\n\ninput:-ms-input-placeholder {\n  padding-left: 1px; }\n\ninput::-ms-input-placeholder {\n  padding-left: 1px; }\n\ninput::placeholder {\n  padding-left: 1px; }\n\ninput[_ngcontent-c0] {\n  padding-left: 47px !important; }\n\n.cus {\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0cGFzcy9DOlxccHJvamVjdHNcXEZHQ19pb25pYy9zcmNcXGFwcFxcZm9yZ2V0cGFzc1xcZm9yZ2V0cGFzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBa0I7RUFDbEIseUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsbURBQWE7RUFDYixpQ0FBaUM7RUFFakMsV0FBVztFQUVYLGtDQUFrQyxFQUFBOztBQUVwQztFQUNFO0lBQ0UsbURBQWE7SUFDYixpQ0FBaUM7SUFFakMsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixrQ0FBa0MsRUFBQSxFQUNuQzs7QUFFSDtFQUNFLFNBQVM7RUFDVCxtQkFBbUIsRUFBQTs7QUFJckI7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUVFLG1CQUFtQjtFQUNuQixZQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUFrQjtFQUNsQix5QkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFFRSxtQkFBbUI7RUFDbkIsWUFBYSxFQUFBOztBQUVmO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGlCQUFnQixFQUFBOztBQURsQjtFQUNFLGlCQUFnQixFQUFBOztBQURsQjtFQUNFLGlCQUFnQixFQUFBOztBQURsQjtFQUNFLGlCQUFnQixFQUFBOztBQURsQjtFQUNFLGlCQUFnQixFQUFBOztBQUVsQjtFQUNFLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0cGFzcy9mb3JnZXRwYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gIC0taW5wdXQtcGFkZGluZy15OiAuNzVyZW07XHJcbn1cclxuLmJjLWltZ3tcclxuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvZm4ucG5nXCIpMCAwLzEwMCUgNzYwcHggbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAvL2hlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICAvL2JhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNzYwcHgpIHtcclxuICAuYmMtaW1ne1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2ZuLnBuZ1wiKTAgMC8xMDAlIDkwMHB4IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgIC8vaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB9XHJcbn1cclxuLmNhcmQtc2lnbmluIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAvL2JveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiAuY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4gLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5idG4ge1xyXG4gIGZvbnQtc2l6ZTogNzAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQge1xyXG4gIC8vaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgaGVpZ2h0OiA0NXB4IDtcclxuXHJcbn1cclxuLmJ0bi1nb29nbGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ1ZDkyO1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxufVxyXG46cm9vdCB7XHJcbiAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcclxuICAtLWlucHV0LXBhZGRpbmcteTogLjc1cmVtO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIC8vYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmJ0biB7XHJcbiAgZm9udC1zaXplOiA3MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dCB7XHJcbiAgLy9oZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBoZWlnaHQ6IDQ1cHggO1xyXG59XHJcbi5idG4tZ29vZ2xlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NWQ5MjtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbn1cclxuXHJcbi5tZ3tcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICBwYWRkaW5nLWxlZnQ6IDQ3cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5jdXN0b21je1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OjFweDtcclxufVxyXG5pbnB1dFtfbmdjb250ZW50LWMwXSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0N3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3tcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/forgetpass/forgetpass.page.ts":
/*!***********************************************!*\
  !*** ./src/app/forgetpass/forgetpass.page.ts ***!
  \***********************************************/
/*! exports provided: ForgetpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpassPage", function() { return ForgetpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ForgetpassPage = /** @class */ (function () {
    function ForgetpassPage(auth, router, loadingController, toastController) {
        this.auth = auth;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.data = { email: '' };
    }
    ForgetpassPage.prototype.ngOnInit = function () {
    };
    ForgetpassPage.prototype.forgotpass = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, loadingController, loadingElement, toast, toast2;
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
                                message: 'Invalid Email. Please enter correct email.',
                                duration: 1400
                            })];
                    case 5:
                        toast = _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter your email',
                                duration: 1400
                            })];
                    case 6:
                        toast2 = _a.sent();
                        console.log(this.data.email);
                        this.auth.forgetemail(this.data).subscribe(function (data) {
                            if (_this.data.email === '') {
                                toast2.present();
                                loadingElement.dismiss();
                            }
                            else if (data.message === 'success') {
                                console.log('your email has sent successfully');
                                _this.router.navigateByUrl('/entercode');
                                loadingElement.dismiss();
                            }
                            else {
                                console.log('Invalid Email. Please enter correct email.');
                                toast.present();
                                loadingElement.dismiss();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgetpassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgetpass',
            template: __webpack_require__(/*! ./forgetpass.page.html */ "./src/app/forgetpass/forgetpass.page.html"),
            styles: [__webpack_require__(/*! ./forgetpass.page.scss */ "./src/app/forgetpass/forgetpass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], ForgetpassPage);
    return ForgetpassPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgetpass-forgetpass-module.js.map