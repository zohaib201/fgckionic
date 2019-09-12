(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prayerrequest-prayerrequest-module"],{

/***/ "./src/app/prayerrequest/prayerrequest.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/prayerrequest/prayerrequest.module.ts ***!
  \*******************************************************/
/*! exports provided: PrayerrequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerrequestPageModule", function() { return PrayerrequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prayerrequest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prayerrequest.page */ "./src/app/prayerrequest/prayerrequest.page.ts");







var routes = [
    {
        path: '',
        component: _prayerrequest_page__WEBPACK_IMPORTED_MODULE_6__["PrayerrequestPage"]
    }
];
var PrayerrequestPageModule = /** @class */ (function () {
    function PrayerrequestPageModule() {
    }
    PrayerrequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_prayerrequest_page__WEBPACK_IMPORTED_MODULE_6__["PrayerrequestPage"]]
        })
    ], PrayerrequestPageModule);
    return PrayerrequestPageModule;
}());



/***/ }),

/***/ "./src/app/prayerrequest/prayerrequest.page.html":
/*!*******************************************************!*\
  !*** ./src/app/prayerrequest/prayerrequest.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Prayer request</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"\">\n  <div padding=\"\">\n    <div padding=\"\">\n      <br>\n      <img src=\"../../assets/img/fgc.jpeg\" alt=\"\" height=\"120\" style=\"display: block;margin: auto\">\n      <br>\n      <ion-item>\n        <ion-textarea placeholder=\"Prayer Request/Message\" [(ngModel)]=\"data.description\" style=\"height: 70px\"></ion-textarea>\n      </ion-item>\n      <button class=\"btn btn-lg btn-primary btn-block fcs\" (click)=\"create()\" style=\"background-color: #026350;margin-top: 50px;border-radius: 50px\" type=\"submit\">Post Prayer Request</button>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/prayerrequest/prayerrequest.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/prayerrequest/prayerrequest.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByYXllcnJlcXVlc3QvcHJheWVycmVxdWVzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/prayerrequest/prayerrequest.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/prayerrequest/prayerrequest.page.ts ***!
  \*****************************************************/
/*! exports provided: PrayerrequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerrequestPage", function() { return PrayerrequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PrayerrequestPage = /** @class */ (function () {
    function PrayerrequestPage(authSrv, toastController, loadingController, route) {
        this.authSrv = authSrv;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.route = route;
        this.data = { description: '' };
    }
    PrayerrequestPage.prototype.create = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, loadingController, toast, success, id;
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
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Sorry! You can not request for prayer untill your complete data is filled by admin. Please contact admin',
                                duration: 6000
                            })];
                    case 3:
                        toast = _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Your prayer request has been submitted!',
                                duration: 1000
                            })];
                    case 4:
                        success = _a.sent();
                        id = localStorage.getItem('id');
                        this.authSrv.prayercreate(id, this.data).subscribe(function (data) {
                            if (data.message === "Sorry! You can not request for prayer untill your complete data is filled by admin. Please contact admin") {
                                toast.present();
                            }
                            else {
                                success.present();
                                _this.route.navigateByUrl('/prayerwall');
                            }
                        });
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    PrayerrequestPage.prototype.ngOnInit = function () {
    };
    PrayerrequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prayerrequest',
            template: __webpack_require__(/*! ./prayerrequest.page.html */ "./src/app/prayerrequest/prayerrequest.page.html"),
            styles: [__webpack_require__(/*! ./prayerrequest.page.scss */ "./src/app/prayerrequest/prayerrequest.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PrayerrequestPage);
    return PrayerrequestPage;
}());



/***/ })

}]);
//# sourceMappingURL=prayerrequest-prayerrequest-module.js.map