(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["audio-audio-module"],{

/***/ "./src/app/audio/audio.module.ts":
/*!***************************************!*\
  !*** ./src/app/audio/audio.module.ts ***!
  \***************************************/
/*! exports provided: AudioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPageModule", function() { return AudioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _audio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio.page */ "./src/app/audio/audio.page.ts");







var routes = [
    {
        path: '',
        component: _audio_page__WEBPACK_IMPORTED_MODULE_6__["AudioPage"]
    }
];
var AudioPageModule = /** @class */ (function () {
    function AudioPageModule() {
    }
    AudioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_audio_page__WEBPACK_IMPORTED_MODULE_6__["AudioPage"]]
        })
    ], AudioPageModule);
    return AudioPageModule;
}());



/***/ }),

/***/ "./src/app/audio/audio.page.html":
/*!***************************************!*\
  !*** ./src/app/audio/audio.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Audio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"\">\n  <!--<div *ngIf=\"videoarr?.length <= 1\" id=\"post\">Total Audio : {{videoarr?.length}}</div>-->\n  <!--<div *ngIf=\"videoarr?.length >= 1\" id=\"posts\">Total Audio's : {{videoarr?.length}}</div>-->\n\n  <a *ngFor=\"let v of videoarr\" href=\"{{v.audioUrl}}\">\n    <ion-card>\n      <ion-card-header style=\"padding: 0px\">\n<!--        [src]=\"url+v?.imageUrl\"-->\n        <img src=\"../../assets/img/audio_thumbnail.png\" alt=\"\" style=\"border-radius: 3px\">\n      </ion-card-header>\n<!--      <ion-card-content>-->\n        <p text-center=\"\">{{v?.description.substr(0,20)}}</p>\n<!--      </ion-card-content>-->\n    </ion-card>\n  </a>\n\n  <div style=\"    width: 100%; text-align: center; margin-top: 220px;\" *ngIf=\"videoarr?.length <= 0\">\n    <h5>Empty</h5>\n<!--    <img src=\"../../assets/img/loader.gif\" alt=\"\" height=\"150\">-->\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/audio/audio.page.scss":
/*!***************************************!*\
  !*** ./src/app/audio/audio.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a, a:hover, a:active, a:visited, a:focus {\n  text-decoration: none; }\n\n#post {\n  width: 100%;\n  padding-top: 10px;\n  padding-left: 15px;\n  font-size: 17px; }\n\n#posts {\n  width: 100%;\n  padding-top: 10px;\n  padding-left: 15px;\n  font-size: 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVkaW8vQzpcXHByb2plY3RzXFxGR0NfaW9uaWMvc3JjXFxhcHBcXGF1ZGlvXFxhdWRpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXVkaW8vYXVkaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSwgYTpob3ZlciwgYTphY3RpdmUsIGE6dmlzaXRlZCwgYTpmb2N1cyB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICB9XHJcbiAgI3Bvc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4jcG9zdHN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/audio/audio.page.ts":
/*!*************************************!*\
  !*** ./src/app/audio/audio.page.ts ***!
  \*************************************/
/*! exports provided: AudioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPage", function() { return AudioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var AudioPage = /** @class */ (function () {
    function AudioPage(AuthSrv, loadingController) {
        this.AuthSrv = AuthSrv;
        this.loadingController = loadingController;
        this.url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseurl;
    }
    AudioPage.prototype.ngOnInit = function () {
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
                        this.AuthSrv.audioget().subscribe(function (data) {
                            _this.videoarr = data;
                            loadingElement.dismiss();
                            console.log(_this.videoarr);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audio',
            template: __webpack_require__(/*! ./audio.page.html */ "./src/app/audio/audio.page.html"),
            styles: [__webpack_require__(/*! ./audio.page.scss */ "./src/app/audio/audio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], AudioPage);
    return AudioPage;
}());



/***/ })

}]);
//# sourceMappingURL=audio-audio-module.js.map