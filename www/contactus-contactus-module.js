(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactus-contactus-module"],{

/***/ "./src/app/contactus/contactus.module.ts":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/*! exports provided: ContactusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus.page */ "./src/app/contactus/contactus.page.ts");







var routes = [
    {
        path: '',
        component: _contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]
    }
];
var ContactusPageModule = /** @class */ (function () {
    function ContactusPageModule() {
    }
    ContactusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]]
        })
    ], ContactusPageModule);
    return ContactusPageModule;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.page.html":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>IPC Full Gospel Church</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding=\"\">\n<h5 text-center=\"\"><b>Contact Us</b></h5>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-icon name=\"contact\" color=\"primary\" style=\"font-size: 30px\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\" style=\"margin-top: 3px\"><b>Mobile Numbers</b></ion-col>\n      <ion-col size=\"12\">\n        Pastor (R) :\n        <a href=\"tel:+965-25610455 \"> +965-25610455 </a>\n      </ion-col>\n      <ion-col size=\"12\">\n        Pastor (M) :\n        <a href=\"tel:+965-69619005 \"> +965-69619005 </a>\n      </ion-col>\n      <ion-col size=\"12\">\n        Secretary (M) :\n        <a href=\"tel:+965-66880338 \"> +965-66880338 </a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <hr style=\"width: 100%\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"mail\" color=\"primary\" style=\"font-size: 30px\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\" style=\"margin-top: 3px\">\n        <b>Email Address</b>\n      </ion-col>\n      <ion-col size=\"12\">\n<!--        <a href=\"info@ipckuwait.com \"> info@ipckuwait.com </a>-->\n        Info@ipcfgck.com\n      </ion-col>\n      <hr style=\"width: 100%\">\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/contactus/contactus.page.scss":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/contactus/contactus.page.ts":
/*!*********************************************!*\
  !*** ./src/app/contactus/contactus.page.ts ***!
  \*********************************************/
/*! exports provided: ContactusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPage", function() { return ContactusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactusPage = /** @class */ (function () {
    function ContactusPage() {
    }
    ContactusPage.prototype.ngOnInit = function () {
    };
    ContactusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.page.html */ "./src/app/contactus/contactus.page.html"),
            styles: [__webpack_require__(/*! ./contactus.page.scss */ "./src/app/contactus/contactus.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactusPage);
    return ContactusPage;
}());



/***/ })

}]);
//# sourceMappingURL=contactus-contactus-module.js.map