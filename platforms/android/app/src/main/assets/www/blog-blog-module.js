(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "./src/app/blog/blog.module.ts":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageModule", function() { return BlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog.page */ "./src/app/blog/blog.page.ts");







var routes = [
    {
        path: '',
        component: _blog_page__WEBPACK_IMPORTED_MODULE_6__["BlogPage"]
    }
];
var BlogPageModule = /** @class */ (function () {
    function BlogPageModule() {
    }
    BlogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_6__["BlogPage"]]
        })
    ], BlogPageModule);
    return BlogPageModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.page.html":
/*!*************************************!*\
  !*** ./src/app/blog/blog.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Pastor's Corner</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!--<div *ngIf=\"devotional?.length <= 1\" id=\"post\">Total post : {{devotional?.length}}</div>-->\n<!--<div *ngIf=\"devotional?.length >= 1\" id=\"posts\">Total posts : {{devotional?.length}}</div>-->\n  <ion-card *ngFor=\"let blog of devotional\" routerLink=\"/blog-detail/{{blog.id}}\">\n      <div class=\"container\">\n        <br>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"product-grid\">\n              <div class=\"product-image\">\n                <img [src]=\"url+'/'+blog?.imageUrl\" alt=\"\">\n              </div>\n              <div class=\"product-content\">\n\n                <h3 class=\"title\" style=\"margin-top: 10px;text-align: center\">{{blog.title}}</h3>\n                <div class=\"price\">\n                  <p style=\"text-align: center\">{{blog.createdAt | date: 'dd-MM-yyyy'}}</p>\n                  <p>{{blog.description.substr(0,200)}}</p>\n                </div>\n                <br>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"price\" style=\"padding: 0px 50px\">\n<!--        {{i.description}}-->\n      </div>\n<!--    <img [src]=\"url+'/'+blog?.imageUrl\" alt=\"\" style=\"width: 100%;height:200px\">-->\n<!--    <ion-card-content>-->\n<!--      <p>{{blog.createdAt | date: 'dd/MM/yyyy'}}</p>-->\n<!--      <h2><b>{{blog.title}}</b></h2>-->\n<!--      <p>{{blog.description.substr(0,200)}}</p>-->\n<!--    </ion-card-content>-->\n  </ion-card>\n\n\n\n\n  <div style=\"width: 100%; text-align: center; margin-top: 220px;\" *ngIf=\"devotional?.length <= 0\">\n    <h5>Empty</h5>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/blog/blog.page.scss":
/*!*************************************!*\
  !*** ./src/app/blog/blog.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#post {\n  width: 100%;\n  padding-top: 10px;\n  padding-left: 15px;\n  font-size: 17px; }\n\n#posts {\n  width: 100%;\n  padding-top: 10px;\n  padding-left: 15px;\n  font-size: 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9DOlxccHJvamVjdHNcXEZHQ19pb25pYy9zcmNcXGFwcFxcYmxvZ1xcYmxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwb3N0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuI3Bvc3Rze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/blog/blog.page.ts":
/*!***********************************!*\
  !*** ./src/app/blog/blog.page.ts ***!
  \***********************************/
/*! exports provided: BlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage", function() { return BlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var BlogPage = /** @class */ (function () {
    function BlogPage(AuthSrv, loadingController) {
        this.AuthSrv = AuthSrv;
        this.loadingController = loadingController;
        this.url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseurl;
    }
    BlogPage.prototype.ngOnInit = function () {
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
                        this.AuthSrv.devotionalgetall().subscribe(function (data) {
                            _this.devotional = data;
                            loadingElement.dismiss();
                            console.log(_this.devotional);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BlogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.page.html */ "./src/app/blog/blog.page.html"),
            styles: [__webpack_require__(/*! ./blog.page.scss */ "./src/app/blog/blog.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], BlogPage);
    return BlogPage;
}());



/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map