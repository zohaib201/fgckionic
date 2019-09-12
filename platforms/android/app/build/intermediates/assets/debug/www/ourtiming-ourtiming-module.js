(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ourtiming-ourtiming-module"],{

/***/ "./src/app/ourtiming/ourtiming.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ourtiming/ourtiming.module.ts ***!
  \***********************************************/
/*! exports provided: OurtimingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurtimingPageModule", function() { return OurtimingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ourtiming_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ourtiming.page */ "./src/app/ourtiming/ourtiming.page.ts");







var routes = [
    {
        path: '',
        component: _ourtiming_page__WEBPACK_IMPORTED_MODULE_6__["OurtimingPage"]
    }
];
var OurtimingPageModule = /** @class */ (function () {
    function OurtimingPageModule() {
    }
    OurtimingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ourtiming_page__WEBPACK_IMPORTED_MODULE_6__["OurtimingPage"]]
        })
    ], OurtimingPageModule);
    return OurtimingPageModule;
}());



/***/ }),

/***/ "./src/app/ourtiming/ourtiming.page.html":
/*!***********************************************!*\
  !*** ./src/app/ourtiming/ourtiming.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Weekly Programs & Timings </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"\">\n  <ion-card style=\"margin: 13px;box-shadow: 2px 2px 25px 1px rgba(214,203,214,1);\" *ngFor=\"let e of Events.slice().reverse()\">\n    <ion-card-content>\n      <b>Programme : </b><span>{{e.title}}</span><br>\n      <b>Date : </b><span>{{e.date}}</span><br>\n      <b>Message : </b><span>{{e.description}}</span>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ourtiming/ourtiming.page.scss":
/*!***********************************************!*\
  !*** ./src/app/ourtiming/ourtiming.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291cnRpbWluZy9vdXJ0aW1pbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ourtiming/ourtiming.page.ts":
/*!*********************************************!*\
  !*** ./src/app/ourtiming/ourtiming.page.ts ***!
  \*********************************************/
/*! exports provided: OurtimingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurtimingPage", function() { return OurtimingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var OurtimingPage = /** @class */ (function () {
    function OurtimingPage(AuthSrv, loadingController) {
        this.AuthSrv = AuthSrv;
        this.loadingController = loadingController;
        this.Events = [];
    }
    OurtimingPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, loadingController, loadingElement;
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
                        // loading module code ends here
                        this.AuthSrv.All_event().subscribe(function (data) {
                            _this.Events = data;
                            console.log(_this.Events);
                            loadingElement.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OurtimingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ourtiming',
            template: __webpack_require__(/*! ./ourtiming.page.html */ "./src/app/ourtiming/ourtiming.page.html"),
            styles: [__webpack_require__(/*! ./ourtiming.page.scss */ "./src/app/ourtiming/ourtiming.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], OurtimingPage);
    return OurtimingPage;
}());



/***/ })

}]);
//# sourceMappingURL=ourtiming-ourtiming-module.js.map