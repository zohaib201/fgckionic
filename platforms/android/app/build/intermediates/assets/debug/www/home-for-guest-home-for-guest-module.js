(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-for-guest-home-for-guest-module"],{

/***/ "./src/app/home-for-guest/home-for-guest.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/home-for-guest/home-for-guest.module.ts ***!
  \*********************************************************/
/*! exports provided: HomeForGuestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeForGuestPageModule", function() { return HomeForGuestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_for_guest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-for-guest.page */ "./src/app/home-for-guest/home-for-guest.page.ts");







var routes = [
    {
        path: '',
        component: _home_for_guest_page__WEBPACK_IMPORTED_MODULE_6__["HomeForGuestPage"]
    }
];
var HomeForGuestPageModule = /** @class */ (function () {
    function HomeForGuestPageModule() {
    }
    HomeForGuestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_for_guest_page__WEBPACK_IMPORTED_MODULE_6__["HomeForGuestPage"]]
        })
    ], HomeForGuestPageModule);
    return HomeForGuestPageModule;
}());



/***/ }),

/***/ "./src/app/home-for-guest/home-for-guest.page.html":
/*!*********************************************************!*\
  !*** ./src/app/home-for-guest/home-for-guest.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash; <ion-header>-->\n  <!--<ion-toolbar>-->\n    <!--<ion-title>home</ion-title>-->\n  <!--</ion-toolbar>-->\n<!--</ion-header>-->\n\n<!--<ion-content>-->\n\n<!--</ion-content> &ndash;&gt;-->\n<!--<ion-header>-->\n  <!--<ion-toolbar color=\"primary\">-->\n    <!--<ion-buttons slot=\"start\">-->\n      <!--<ion-menu-button></ion-menu-button>-->\n    <!--</ion-buttons>-->\n    <!--<ion-title>-->\n      <!--Home-->\n    <!--</ion-title>-->\n  <!--</ion-toolbar>-->\n<!--</ion-header>-->\n\n<!--<ion-content padding=\"\" text-center=\"\">-->\n  <!--<div style=\"margin-top: 130px\">-->\n    <!--<ion-grid>-->\n      <!--<ion-row>-->\n        <!--<ion-col size=\"12\" routerLink=\"/fgchistory\" class=\"fcs\">-->\n          <!--<ion-icon name=\"book\" iconst></ion-icon><br>-->\n          <!--<b style=\"font-size: 13px;font-weight: bolder\">CHURCH HISTORY</b>-->\n        <!--</ion-col>-->\n        <!--<ion-col size=\"12\" routerLink=\"/members\" class=\"fcs\">-->\n          <!--<ion-icon name=\"people\" iconst></ion-icon><br>-->\n          <!--<b style=\"font-size: 13px\">LEADERSHIP</b>-->\n        <!--</ion-col>-->\n      <!--</ion-row>-->\n    <!--</ion-grid>-->\n  <!--</div>-->\n<!--</ion-content>-->\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content text-center=\"\">\n  <ion-card style=\"height: 52vw\">\n    <img src=\"../../assets/img/his.jpg\" alt=\"\" style=\"display: inline\">\n    <button class=\"btn btn-dark\" routerLink=\"/fgchistory\" style=\"margin-top: -100px;background-color: #1d2124\">Church History</button>\n  </ion-card>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/home-for-guest/home-for-guest.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/home-for-guest/home-for-guest.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n[iconst] {\n  background-color: #026350;\n  padding: 30px;\n  border-radius: 50px;\n  color: white;\n  font-size: 30px;\n  box-shadow: -1px 3px 14px 10px rgba(0, 0, 0, 0.33); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1mb3ItZ3Vlc3QvQzpcXHByb2plY3RzXFxGR0NfaW9uaWMvc3JjXFxhcHBcXGhvbWUtZm9yLWd1ZXN0XFxob21lLWZvci1ndWVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUtZm9yLWd1ZXN0L2hvbWUtZm9yLWd1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUNFcEI7RURDSSx5QkFBeUI7RUFBQyxhQUFhO0VBQUMsbUJBQW1CO0VBQUMsWUFBWTtFQUN4RSxlQUFlO0VBQ2Ysa0RBQWtELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lLWZvci1ndWVzdC9ob21lLWZvci1ndWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFtpY29uc3Rde1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNjM1MDtwYWRkaW5nOiAzMHB4O2JvcmRlci1yYWRpdXM6IDUwcHg7Y29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAzcHggMTRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XHJcbiAgfVxyXG4gIFxyXG4gICIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuW2ljb25zdF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI2MzUwO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm94LXNoYWRvdzogLTFweCAzcHggMTRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home-for-guest/home-for-guest.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/home-for-guest/home-for-guest.page.ts ***!
  \*******************************************************/
/*! exports provided: HomeForGuestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeForGuestPage", function() { return HomeForGuestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var HomeForGuestPage = /** @class */ (function () {
    // for storing the returned subscription
    function HomeForGuestPage(route, menuCtrl, platform) {
        this.route = route;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        if (localStorage.getItem('guest') === null) {
            this.route.navigate(['/login']);
        }
    }
    HomeForGuestPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setInterval(function () {
            _this.menuCtrl.enable(true);
        }, 500);
    };
    HomeForGuestPage.prototype.ngOnInit = function () {
    };
    HomeForGuestPage.prototype.ngAfterViewInit = function () {
        this.platform.backButton.subscribe();
        this.backButtonSubscription2 = this.platform.backButton.subscribe(function () {
            navigator['app'].exitApp();
            localStorage.clear();
        });
    };
    HomeForGuestPage.prototype.ngOnDestroy = function () {
        this.platform.backButton.subscribe();
        this.backButtonSubscription2.unsubscribe();
        localStorage.clear();
    };
    HomeForGuestPage.prototype.ionViewDidLeave = function () {
        this.platform.backButton.subscribe();
        this.backButtonSubscription2.unsubscribe();
    };
    HomeForGuestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-for-guest',
            template: __webpack_require__(/*! ./home-for-guest.page.html */ "./src/app/home-for-guest/home-for-guest.page.html"),
            styles: [__webpack_require__(/*! ./home-for-guest.page.scss */ "./src/app/home-for-guest/home-for-guest.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], HomeForGuestPage);
    return HomeForGuestPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-for-guest-home-for-guest-module.js.map