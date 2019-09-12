(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-detail-blog-detail-module"],{

/***/ "./src/app/blog-detail/blog-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.module.ts ***!
  \***************************************************/
/*! exports provided: BlogDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailPageModule", function() { return BlogDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _blog_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-detail.page */ "./src/app/blog-detail/blog-detail.page.ts");







var routes = [
    {
        path: '',
        component: _blog_detail_page__WEBPACK_IMPORTED_MODULE_6__["BlogDetailPage"]
    }
];
var BlogDetailPageModule = /** @class */ (function () {
    function BlogDetailPageModule() {
    }
    BlogDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_blog_detail_page__WEBPACK_IMPORTED_MODULE_6__["BlogDetailPage"]]
        })
    ], BlogDetailPageModule);
    return BlogDetailPageModule;
}());



/***/ }),

/***/ "./src/app/blog-detail/blog-detail.page.html":
/*!***************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>{{devotional?.title}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card>\n      <div class=\"container\">\n        <br>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"product-grid\">\n              <div class=\"product-image\">\n                <img [src]=\"url+'/'+devotional?.imageUrl\" alt=\"\">\n              </div>\n              <div class=\"product-content\">\n                <h3 class=\"title\" style=\"margin-top: 10px;text-align: center\">{{devotional?.title}}</h3>\n                <div class=\"price\">\n                  <p style=\"text-align: center\">{{devotional?.updatedAt | date: 'dd-MM-yyyy'}}</p>\n                  <p>{{devotional?.description}}</p>\n                </div>\n                <br>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n<!--      <img [src]=\"url+'/'+devotional?.imageUrl\" alt=\"\"  style=\"width: 100%;height:200px\">-->\n<!--      <ion-card-content>-->\n<!--        <p>{{devotional?.updatedAt | date: 'dd/MM/yyyy'}}</p>-->\n<!--        <h2><b>{{devotional?.title}}</b></h2>-->\n<!--        <p>{{devotional?.description}}</p>-->\n<!--      </ion-card-content>-->\n    </ion-card>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/blog-detail/blog-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctZGV0YWlsL2Jsb2ctZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/blog-detail/blog-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.page.ts ***!
  \*************************************************/
/*! exports provided: BlogDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailPage", function() { return BlogDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-blog-detail',
//   templateUrl: './blog-detail.page.html',
//   styleUrls: ['./blog-detail.page.scss'],
// })
// export class BlogDetailPage implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }




var BlogDetailPage = /** @class */ (function () {
    function BlogDetailPage(AuthSrv, activatedroute) {
        this.AuthSrv = AuthSrv;
        this.activatedroute = activatedroute;
        this.url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseurl;
    }
    BlogDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedroute.snapshot.params.bid;
        this.AuthSrv.devotionalsingle(id).subscribe(function (data) {
            _this.devotional = data;
            console.log(_this.devotional);
        });
    };
    BlogDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-detail',
            template: __webpack_require__(/*! ./blog-detail.page.html */ "./src/app/blog-detail/blog-detail.page.html"),
            styles: [__webpack_require__(/*! ./blog-detail.page.scss */ "./src/app/blog-detail/blog-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], BlogDetailPage);
    return BlogDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=blog-detail-blog-detail-module.js.map