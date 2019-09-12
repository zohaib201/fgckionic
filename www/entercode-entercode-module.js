(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entercode-entercode-module"],{

/***/ "./src/app/entercode/entercode.module.ts":
/*!***********************************************!*\
  !*** ./src/app/entercode/entercode.module.ts ***!
  \***********************************************/
/*! exports provided: EntercodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntercodePageModule", function() { return EntercodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entercode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entercode.page */ "./src/app/entercode/entercode.page.ts");







var routes = [
    {
        path: '',
        component: _entercode_page__WEBPACK_IMPORTED_MODULE_6__["EntercodePage"]
    }
];
var EntercodePageModule = /** @class */ (function () {
    function EntercodePageModule() {
    }
    EntercodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_entercode_page__WEBPACK_IMPORTED_MODULE_6__["EntercodePage"]]
        })
    ], EntercodePageModule);
    return EntercodePageModule;
}());



/***/ }),

/***/ "./src/app/entercode/entercode.page.html":
/*!***********************************************!*\
  !*** ./src/app/entercode/entercode.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>Verification Code</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!--<ion-content padding=\"\">-->\n<!--  <br>-->\n<!--  <br>-->\n<!--  <img src=\"../../assets/img/fgc.jpeg\" alt=\"\" height=\"130\" style=\"display: block;margin: auto\">-->\n<!--  <br><br>-->\n<!--  <div class=\"form-label-group cus\">-->\n<!--    <span style=\"position: absolute;margin-top: 9px;margin-left: 15px\">-->\n<!--      <ion-icon name=\"person\" style=\"color:#026350;font-size: 25px\"></ion-icon>-->\n<!--    </span>-->\n<!--    <input type=\"text\" id=\"inpu\" class=\"form-control customc\" [(ngModel)]=\"data.vCode\" placeholder=\"Enter Verification Code\" required name=\"em\">-->\n<!--  </div>-->\n\n<!--  <button class=\"btn btn-lg btn-primary btn-block fcs\" style=\"background-color: #026350;font-size:15px;border-radius: 50px\"-->\n<!--          type=\"submit\" (click)=\"forgotpass()\">Next</button>-->\n\n\n<!--</ion-content>-->\n\n<ion-content class=\"bc-img\">\n  <br>\n  <br>\n  <div padding=\"\">\n    <div padding=\"\">\n      <img src=\"../../assets/img/fgck-logo.png\" alt=\"\" height=\"130\" style=\"display: block;margin: auto\">\n      <br><br>\n      <div class=\"form-label-group cus\">\n    <span style=\"position: absolute;margin-top: 9px;margin-left: 15px\">\n      <ion-icon name=\"person\" style=\"color:#026350;font-size: 25px\"></ion-icon>\n    </span>\n        <input type=\"text\" id=\"inpu\" class=\"form-control customc\" [(ngModel)]=\"data.vCode\" placeholder=\"Enter Verification Code\" required name=\"em\">\n      </div>\n\n      <button class=\"btn btn-lg btn-primary btn-block fcs\" style=\"background-color: #026350;border-radius: 50px;padding: 13px !important;font-size: 16px !important;\"\n              type=\"submit\" (click)=\"forgotpass()\">SUBMIT</button>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/entercode/entercode.page.scss":
/*!***********************************************!*\
  !*** ./src/app/entercode/entercode.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem; }\n\n.bc-img {\n  --background: url('fn.png')0 0/100% 760px no-repeat;\n  background-size: cover !important;\n  width: 100%;\n  background-position: center center; }\n\n@media screen and (min-height: 760px) {\n  .bc-img {\n    --background: url('fn.png')0 0/100% 900px no-repeat;\n    background-size: cover !important;\n    width: 100%;\n    background-attachment: fixed;\n    background-position: center center; } }\n\n.card-signin {\n  border: 0;\n  border-radius: 1rem; }\n\n.card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.card-signin .card-body {\n  padding: 2rem; }\n\n.form-signin {\n  width: 100%; }\n\n.form-signin .btn {\n  font-size: 70%;\n  border-radius: 5rem;\n  letter-spacing: .1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group input {\n  border-radius: 2rem;\n  height: 45px; }\n\n.btn-google {\n  color: white;\n  background-color: #645d92; }\n\n.btn-facebook {\n  color: white;\n  background-color: #3b5998; }\n\n:root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem; }\n\n.card-signin {\n  border: 0;\n  border-radius: 1rem; }\n\n.card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem; }\n\n.card-signin .card-body {\n  padding: 2rem; }\n\n.form-signin {\n  width: 100%; }\n\n.form-signin .btn {\n  font-size: 70%;\n  border-radius: 5rem;\n  letter-spacing: .1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group input {\n  border-radius: 2rem;\n  height: 45px; }\n\n.btn-google {\n  color: white;\n  background-color: #645d92; }\n\n.btn-facebook {\n  color: white;\n  background-color: #3b5998; }\n\n.mg {\n  margin-bottom: 10px; }\n\ninput {\n  padding-left: 47px;\n  height: 20px; }\n\n.customc {\n  height: 40px;\n  border-radius: 20px; }\n\ninput::-webkit-input-placeholder {\n  padding-left: 1px; }\n\ninput::-moz-placeholder {\n  padding-left: 1px; }\n\ninput:-ms-input-placeholder {\n  padding-left: 1px; }\n\ninput::-ms-input-placeholder {\n  padding-left: 1px; }\n\ninput::placeholder {\n  padding-left: 1px; }\n\ninput[_ngcontent-c0] {\n  padding-left: 47px !important; }\n\n.cus {\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50ZXJjb2RlL0M6XFxwcm9qZWN0c1xcRkdDX2lvbmljL3NyY1xcYXBwXFxlbnRlcmNvZGVcXGVudGVyY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBa0I7RUFDbEIseUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsbURBQWE7RUFDYixpQ0FBaUM7RUFFakMsV0FBVztFQUVYLGtDQUFrQyxFQUFBOztBQUVwQztFQUNFO0lBQ0UsbURBQWE7SUFDYixpQ0FBaUM7SUFFakMsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixrQ0FBa0MsRUFBQSxFQUNuQzs7QUFHSDtFQUNFLFNBQVM7RUFDVCxtQkFBbUIsRUFBQTs7QUFJckI7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUVFLG1CQUFtQjtFQUNuQixZQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUFrQjtFQUNsQix5QkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFFRSxtQkFBbUI7RUFDbkIsWUFBYSxFQUFBOztBQUVmO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGlCQUFnQixFQUFBOztBQURsQjtFQUNFLGlCQUFnQixFQUFBOztBQURsQjtFQUNFLGlCQUFnQixFQUFBOztBQURsQjtFQUNFLGlCQUFnQixFQUFBOztBQURsQjtFQUNFLGlCQUFnQixFQUFBOztBQUVsQjtFQUNFLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50ZXJjb2RlL2VudGVyY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcclxuICAtLWlucHV0LXBhZGRpbmcteTogLjc1cmVtO1xyXG59XHJcbi5iYy1pbWd7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2ZuLnBuZ1wiKTAgMC8xMDAlIDc2MHB4IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLy9oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSB7XHJcbiAgLmJjLWltZ3tcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9mbi5wbmdcIikwIDAvMTAwJSA5MDBweCBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICAvL2hlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1zaWduaW4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIC8vYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmJ0biB7XHJcbiAgZm9udC1zaXplOiA3MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dCB7XHJcbiAgLy9oZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBoZWlnaHQ6IDQ1cHggO1xyXG5cclxufVxyXG4uYnRuLWdvb2dsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDVkOTI7XHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG59XHJcbjpyb290IHtcclxuICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gIC0taW5wdXQtcGFkZGluZy15OiAuNzVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgLy9ib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuYnRuIHtcclxuICBmb250LXNpemU6IDcwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0IHtcclxuICAvL2hlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGhlaWdodDogNDVweCA7XHJcbn1cclxuLmJ0bi1nb29nbGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ1ZDkyO1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxufVxyXG5cclxuLm1ne1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gIHBhZGRpbmctbGVmdDogNDdweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmN1c3RvbWN7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6MXB4O1xyXG59XHJcbmlucHV0W19uZ2NvbnRlbnQtYzBdIHtcclxuICBwYWRkaW5nLWxlZnQ6IDQ3cHggIWltcG9ydGFudDtcclxufVxyXG4uY3Vze1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/entercode/entercode.page.ts":
/*!*********************************************!*\
  !*** ./src/app/entercode/entercode.page.ts ***!
  \*********************************************/
/*! exports provided: EntercodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntercodePage", function() { return EntercodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var EntercodePage = /** @class */ (function () {
    function EntercodePage(auth, router, loadingController, toastController) {
        this.auth = auth;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.data = { vCode: '' };
    }
    EntercodePage.prototype.ngOnInit = function () {
    };
    EntercodePage.prototype.forgotpass = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, loadingController, loadingElement, toast;
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
                                message: 'Please Enter the correct code',
                                duration: 1400
                            })];
                    case 5:
                        toast = _a.sent();
                        console.log(this.data.vCode);
                        this.auth.code(this.data).subscribe(function (res) {
                            console.log(res);
                            _this.responce = res;
                            console.log(_this.responce.id);
                            var id = _this.responce.id;
                            console.log('message log');
                            console.log(_this.responce.message);
                            if (_this.responce.message === 'success') {
                                _this.router.navigate(['/newpass/' + id]);
                                loadingElement.dismiss();
                            }
                            else if (_this.responce.message === 'false') {
                                console.log('toast presented');
                                toast.present();
                                loadingElement.dismiss();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EntercodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entercode',
            template: __webpack_require__(/*! ./entercode.page.html */ "./src/app/entercode/entercode.page.html"),
            styles: [__webpack_require__(/*! ./entercode.page.scss */ "./src/app/entercode/entercode.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], EntercodePage);
    return EntercodePage;
}());



/***/ })

}]);
//# sourceMappingURL=entercode-entercode-module.js.map