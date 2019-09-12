(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prayerwall-prayerwall-module"],{

/***/ "./src/app/prayerwall/prayerwall.module.ts":
/*!*************************************************!*\
  !*** ./src/app/prayerwall/prayerwall.module.ts ***!
  \*************************************************/
/*! exports provided: PrayerwallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerwallPageModule", function() { return PrayerwallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prayerwall_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prayerwall.page */ "./src/app/prayerwall/prayerwall.page.ts");







var routes = [
    {
        path: '',
        component: _prayerwall_page__WEBPACK_IMPORTED_MODULE_6__["PrayerwallPage"]
    }
];
var PrayerwallPageModule = /** @class */ (function () {
    function PrayerwallPageModule() {
    }
    PrayerwallPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_prayerwall_page__WEBPACK_IMPORTED_MODULE_6__["PrayerwallPage"]]
        })
    ], PrayerwallPageModule);
    return PrayerwallPageModule;
}());



/***/ }),

/***/ "./src/app/prayerwall/prayerwall.page.html":
/*!*************************************************!*\
  !*** ./src/app/prayerwall/prayerwall.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Prayer wall</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"btn btn-primary btn-block fcs\" st routerLink=\"/prayerrequest\">\n    Submit a prayer request\n  </div>\n  <div style=\"    width: 100%; text-align: center; margin-top: 20px;\" *ngIf=\"prayer?.length <= 0\">\n    No Current topics\n  </div>\n  <ion-card padding=\"\" *ngFor=\"let p of prayer.slice().reverse()\">\n   <p style=\"font-size: 16px;\"><b>{{p?.memberName}}</b></p>\n\n   <span style=\"font-size: 16px;\">{{p?.description}}</span>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/prayerwall/prayerwall.page.scss":
/*!*************************************************!*\
  !*** ./src/app/prayerwall/prayerwall.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[st] {\n  background-color: #026350;\n  bottom: 0px;\n  display: block;\n  position: fixed;\n  border: none;\n  padding: 13px;\n  z-index: 123; }\n\n.autocomplete-container .suggestions-container ul li a {\n  padding: 6px 15px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJheWVyd2FsbC9wcmF5ZXJ3YWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJheWVyd2FsbC9DOlxccHJvamVjdHNcXEZHQ19pb25pYy9zcmNcXGFwcFxccHJheWVyd2FsbFxccHJheWVyd2FsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUNDRSx5QkFBeUI7RUFDekIsV0FBVztFQUFDLGNBQWM7RUFBQyxlQUFlO0VBQzFDLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUVkO0VBQ0UsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcmF5ZXJ3YWxsL3ByYXllcndhbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW3N0XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjYzNTA7XG4gIGJvdHRvbTogMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIHotaW5kZXg6IDEyMzsgfVxuXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lciAuc3VnZ2VzdGlvbnMtY29udGFpbmVyIHVsIGxpIGEge1xuICBwYWRkaW5nOiA2cHggMTVweCAhaW1wb3J0YW50OyB9XG4iLCJbc3Rde1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjYzNTA7XHJcbiAgYm90dG9tOiAwcHg7ZGlzcGxheTogYmxvY2s7cG9zaXRpb246IGZpeGVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIHotaW5kZXg6IDEyMztcclxufVxyXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lciAuc3VnZ2VzdGlvbnMtY29udGFpbmVyIHVsIGxpIGEge1xyXG4gIHBhZGRpbmc6IDZweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/prayerwall/prayerwall.page.ts":
/*!***********************************************!*\
  !*** ./src/app/prayerwall/prayerwall.page.ts ***!
  \***********************************************/
/*! exports provided: PrayerwallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerwallPage", function() { return PrayerwallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var PrayerwallPage = /** @class */ (function () {
    function PrayerwallPage(authSrv, loadingController) {
        this.authSrv = authSrv;
        this.loadingController = loadingController;
    }
    PrayerwallPage.prototype.ngOnInit = function () {
    };
    PrayerwallPage.prototype.ionViewDidEnter = function () {
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
                        this.authSrv.getallprayer().subscribe((function (data) {
                            _this.prayer = data;
                            loadingElement.dismiss();
                            console.log(_this.prayer);
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    PrayerwallPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prayerwall',
            template: __webpack_require__(/*! ./prayerwall.page.html */ "./src/app/prayerwall/prayerwall.page.html"),
            styles: [__webpack_require__(/*! ./prayerwall.page.scss */ "./src/app/prayerwall/prayerwall.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], PrayerwallPage);
    return PrayerwallPage;
}());



/***/ })

}]);
//# sourceMappingURL=prayerwall-prayerwall-module.js.map