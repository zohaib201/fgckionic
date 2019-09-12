(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\"  hideBackButton>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        IPC Full Gospel Church\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n        <div style=\"padding: 12px 10px\">\n            <div class=\"row\" *ngIf=\"(images?.length <= 0)\" padding=\"\">\n                <div class=\"col-12\">\n                    <img src=\"../../assets/img/gray.png\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"container\" *ngFor=\"let i of images\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <div class=\"product-grid\">\n                            <div class=\"product-image\">\n                                <img [src]=\"url+i.home_img\" alt=\"Image\" style=\"height: 200px;display: block;margin: auto;width:100% !important\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div style=\"padding: 0px 15px\">\n            <ion-card class=\"fcs\" routerLink=\"/search\" *ngIf=\"!guest\" style=\"margin-top: 10px !important;\">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"2\">\n                            <img src=\"../../assets/img/search.ico\" style=\"border-radius: 50px;height: 20px;width: 20px\" alt=\"\">\n                        </ion-col>\n                        <ion-col size=\"10\" style=\"font-size: 16px;margin-left: -10px !important;color: black !important;\" *ngIf=\"!guest\"><b>Member Directory </b></ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card>\n            <ion-card class=\"fcs\" routerLink=\"/ourtiming\" style=\"margin-top: 10px !important;\">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"2\">\n                            <img src=\"../../assets/img/timing.png\" style=\"border-radius: 50px;height: 20px;width: 20px\" alt=\"\">\n                        </ion-col>\n                        <ion-col size=\"10\" style=\"font-size: 16px;margin-left: -10px !important;color: black !important;\"><b>Weekly Programs </b></ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card>\n\n            <ion-card class=\"fcs\" routerLink=\"/cellgroup\" style=\"margin-top: 10px !important;\">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"2\">\n                            <img src=\"../../assets/img/cellgroups.png\" style=\"border-radius: 50px;height: 20px;width: 20px\" alt=\"\">\n                        </ion-col>\n                        <ion-col size=\"10\" style=\"font-size: 16px;margin-left: -10px !important;color: black !important;\"><b>Cell Groups </b></ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card>\n\n            <ion-card class=\"fcs\" routerLink=\"/blog\" style=\"margin-top: 10px !important;\">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"2\">\n                            <img src=\"../../assets/img/book.jpg\" style=\"border-radius: 50px;height: 20px;width: 20px\" alt=\"\">\n                        </ion-col>\n                        <ion-col size=\"10\" style=\"font-size: 16px;margin-left: -10px !important;color: black !important;\"><b>Pastor's Corner </b></ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card>\n            <ion-card class=\"fcs\" routerLink=\"/contactus\" style=\"margin-top: 10px !important;\">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"2\">\n                            <img src=\"../../assets/img/cont.png\" style=\"border-radius: 50px;height: 20px;width: 20px\" alt=\"\">\n                        </ion-col>\n                            <ion-col size=\"10\" style=\"font-size: 16px;margin-left: -10px !important;color: black !important;\"><b>Contact Us</b></ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card>\n\n                <ion-card class=\"fcs\" style=\"margin-top: 10px !important;\" (click)=\"open()\">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col size=\"2\">\n                                <img src=\"../../assets/img/more.png\" style=\"border-radius: 50px;height: 20px;width: 20px\" alt=\"\">\n                            </ion-col>\n                            <ion-col size=\"10\" style=\"font-size: 16px;margin-left: -10px !important;color: black !important;\"><b>More</b></ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-card>\n        </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n[iconst] {\n  background-color: #026350;\n  padding: 30px;\n  border-radius: 50px;\n  color: white;\n  font-size: 30px;\n  box-shadow: -1px 3px 14px 10px rgba(0, 0, 0, 0.33); }\n\n.bc-img {\n  --background: url('fn.png')0 0/100% 120% no-repeat;\n  background-size: cover !important;\n  width: 100%;\n  background-position: center center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxccHJvamVjdHNcXEZHQ19pb25pYy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FDRXBCO0VEQ0kseUJBQXlCO0VBQUMsYUFBYTtFQUFDLG1CQUFtQjtFQUFDLFlBQVk7RUFDeEUsZUFBZTtFQUNmLGtEQUFrRCxFQUFBOztBQUV0RDtFQUNFLGtEQUFhO0VBQ2IsaUNBQWlDO0VBRWpDLFdBQVc7RUFFWCw2Q0FBNkMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFtpY29uc3Rde1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNjM1MDtwYWRkaW5nOiAzMHB4O2JvcmRlci1yYWRpdXM6IDUwcHg7Y29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAzcHggMTRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XHJcbiAgfVxyXG4uYmMtaW1ne1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9mbi5wbmdcIikwIDAvMTAwJSAxMjAlIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLy9oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4gIFxyXG4iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbltpY29uc3RdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNjM1MDtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJveC1zaGFkb3c6IC0xcHggM3B4IDE0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMzMpOyB9XG5cbi5iYy1pbWcge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvZm4ucG5nXCIpMCAwLzEwMCUgMTIwJSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");






var HomePage = /** @class */ (function () {
    function HomePage(route, menuCtrl, platform, AuthSrv, loadingController) {
        var _this = this;
        this.route = route;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.AuthSrv = AuthSrv;
        this.loadingController = loadingController;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].baseurl;
        setInterval(function () {
            _this.guest = localStorage.getItem('guest');
        }, 500);
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setInterval(function () {
            _this.menuCtrl.enable(true);
        }, 500);
    };
    HomePage.prototype.ngOnInit = function () {
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
                        this.AuthSrv.allimg().subscribe(function (data) {
                            console.log('success');
                            _this.images = data;
                            console.log(_this.images);
                            loadingElement.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ngAfterViewInit = function () {
        this.platform.backButton.subscribe();
        this.backButtonSubscription = this.platform.backButton.subscribe(function () {
            navigator['app'].exitApp();
        });
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.platform.backButton.subscribe();
        this.backButtonSubscription.unsubscribe();
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.platform.backButton.subscribe();
        this.backButtonSubscription.unsubscribe();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.platform.backButton.subscribe();
        this.backButtonSubscription.unsubscribe();
        this.platform.backButton.subscribe();
        this.backButtonSubscription = this.platform.backButton.subscribe(function () {
            navigator['app'].exitApp();
        });
    };
    HomePage.prototype.open = function () {
        this.menuCtrl.open();
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map