(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-video-module"],{

/***/ "./src/app/video/video.module.ts":
/*!***************************************!*\
  !*** ./src/app/video/video.module.ts ***!
  \***************************************/
/*! exports provided: VideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video.page */ "./src/app/video/video.page.ts");







var routes = [
    {
        path: '',
        component: _video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]
    }
];
var VideoPageModule = /** @class */ (function () {
    function VideoPageModule() {
    }
    VideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]]
        })
    ], VideoPageModule);
    return VideoPageModule;
}());



/***/ }),

/***/ "./src/app/video/video.page.html":
/*!***************************************!*\
  !*** ./src/app/video/video.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Video</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!--<div *ngIf=\"videoarr?.length <= 1\" id=\"post\">Total Video : {{videoarr?.length}}</div>-->\n  <!--<div *ngIf=\"videoarr?.length >= 1\" id=\"posts\">Total Video's : {{videoarr?.length}}</div>-->\n\n\n\n  <ion-card *ngFor=\"let v of videoarr\" href=\"{{v.videoUrl}}\">\n    <div class=\"container\">\n      <br>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"product-grid\">\n            <div class=\"product-image\">\n              <img [src]=\"url+v.imageUrl\" alt=\"\">\n            </div>\n            <div class=\"product-content\">\n\n<!--              <h3 class=\"title\" style=\"margin-top: 10px;text-align: center\">{{blog.title}}</h3>-->\n              <div class=\"price\">\n<!--                <p style=\"text-align: center\">{{blog.createdAt | date: 'dd-MM-yyyy'}}</p>-->\n                <p> {{v?.description.substr(0,20)}}</p>\n              </div>\n              <br>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"price\" style=\"padding: 0px 50px\">\n      <!--        {{i.description}}-->\n    </div>\n    <!--    <img [src]=\"url+'/'+blog?.imageUrl\" alt=\"\" style=\"width: 100%;height:200px\">-->\n    <!--    <ion-card-content>-->\n    <!--      <p>{{blog.createdAt | date: 'dd/MM/yyyy'}}</p>-->\n    <!--      <h2><b>{{blog.title}}</b></h2>-->\n    <!--      <p>{{blog.description.substr(0,200)}}</p>-->\n    <!--    </ion-card-content>-->\n  </ion-card>\n\n\n\n\n\n\n\n\n\n\n<!--  <a *ngFor=\"let v of videoarr\" href=\"{{v.videoUrl}}\">-->\n<!--    <ion-card>-->\n<!--      <ion-card-header style=\"padding: 0px;\">-->\n<!--        <img [src]=\"url+v.imageUrl\" alt=\"\" style=\"width: 100%;height:200px\">-->\n<!--      </ion-card-header>-->\n<!--      <ion-card-content>-->\n<!--        {{v?.description.substr(0,20)}}-->\n<!--      </ion-card-content>-->\n<!--    </ion-card>-->\n<!--  </a>-->\n\n  <div style=\"width: 100%; text-align: center; margin-top: 220px;\" *ngIf=\"videoarr?.length <= 0\">\n    <h5>Empty</h5>\n  </div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/video/video.page.scss":
/*!***************************************!*\
  !*** ./src/app/video/video.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a, a:hover, a:active, a:visited, a:focus {\n  text-decoration: none; }\n\n#post {\n  width: 100%;\n  padding-top: 10px;\n  padding-left: 15px;\n  font-size: 17px; }\n\n#posts {\n  width: 100%;\n  padding-top: 10px;\n  padding-left: 15px;\n  font-size: 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vQzpcXHByb2plY3RzXFxGR0NfaW9uaWMvc3JjXFxhcHBcXHZpZGVvXFx2aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8vdmlkZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSwgYTpob3ZlciwgYTphY3RpdmUsIGE6dmlzaXRlZCwgYTpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuI3Bvc3R7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuI3Bvc3Rze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/video/video.page.ts":
/*!*************************************!*\
  !*** ./src/app/video/video.page.ts ***!
  \*************************************/
/*! exports provided: VideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPage", function() { return VideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var VideoPage = /** @class */ (function () {
    function VideoPage(AuthSrv, loadingController) {
        this.AuthSrv = AuthSrv;
        this.loadingController = loadingController;
        this.url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseurl;
    }
    VideoPage.prototype.ngOnInit = function () {
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
                        this.AuthSrv.videoget().subscribe(function (data) {
                            _this.videoarr = data;
                            loadingElement.dismiss();
                            console.log(_this.videoarr);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    VideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.page.html */ "./src/app/video/video.page.html"),
            styles: [__webpack_require__(/*! ./video.page.scss */ "./src/app/video/video.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], VideoPage);
    return VideoPage;
}());



/***/ })

}]);
//# sourceMappingURL=video-video-module.js.map