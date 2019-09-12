(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usertype-usertype-module"],{

/***/ "./src/app/usertype/usertype.module.ts":
/*!*********************************************!*\
  !*** ./src/app/usertype/usertype.module.ts ***!
  \*********************************************/
/*! exports provided: UsertypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsertypePageModule", function() { return UsertypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _usertype_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usertype.page */ "./src/app/usertype/usertype.page.ts");







var routes = [
    {
        path: '',
        component: _usertype_page__WEBPACK_IMPORTED_MODULE_6__["UsertypePage"]
    }
];
var UsertypePageModule = /** @class */ (function () {
    function UsertypePageModule() {
    }
    UsertypePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_usertype_page__WEBPACK_IMPORTED_MODULE_6__["UsertypePage"]]
        })
    ], UsertypePageModule);
    return UsertypePageModule;
}());



/***/ }),

/***/ "./src/app/usertype/usertype.page.html":
/*!*********************************************!*\
  !*** ./src/app/usertype/usertype.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding=\"\" text-center=\"\">\n  <!--<h5><b>Select User Type</b></h5>-->\n<div style=\"margin-top: 120px\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" routerLink=\"/login\" class=\"fcs\">\n        <ion-icon name=\"contact\" iconst></ion-icon><br>\n        <b style=\"font-size: 10px;font-weight: bolder\">MEMBER LOGIN</b>\n      </ion-col>\n      <ion-col size=\"12\" class=\"fcs\" (click)=\"guest()\" >\n        <ion-icon name=\"log-in\" iconst></ion-icon><br>\n        <b style=\"font-size: 10px\">GUEST LOGIN</b>\n      </ion-col>\n      <ion-col size=\"12\" routerLink=\"/signup\" class=\"fcs\">\n        <ion-icon name=\"person-add\" iconst></ion-icon><br>\n        <b style=\"font-size: 10px\">BECOME A MEMBER</b>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/usertype/usertype.page.scss":
/*!*********************************************!*\
  !*** ./src/app/usertype/usertype.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[iconst] {\n  background-color: #026350;\n  padding: 30px;\n  border-radius: 50px;\n  color: white;\n  font-size: 30px;\n  box-shadow: -1px 3px 14px 10px rgba(0, 0, 0, 0.33); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnR5cGUvdXNlcnR5cGUucGFnZS5zY3NzIiwic3JjL2FwcC91c2VydHlwZS9DOlxccHJvamVjdHNcXEZHQ19pb25pYy9zcmNcXGFwcFxcdXNlcnR5cGVcXHVzZXJ0eXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0NFLHlCQUF5QjtFQUFDLGFBQWE7RUFBQyxtQkFBbUI7RUFBQyxZQUFZO0VBQ3hFLGVBQWU7RUFDZixrREFBa0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXJ0eXBlL3VzZXJ0eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltpY29uc3RdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNjM1MDtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJveC1zaGFkb3c6IC0xcHggM3B4IDE0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMzMpOyB9XG4iLCJbaWNvbnN0XXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI2MzUwO3BhZGRpbmc6IDMwcHg7Ym9yZGVyLXJhZGl1czogNTBweDtjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGJveC1zaGFkb3c6IC0xcHggM3B4IDE0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/usertype/usertype.page.ts":
/*!*******************************************!*\
  !*** ./src/app/usertype/usertype.page.ts ***!
  \*******************************************/
/*! exports provided: UsertypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsertypePage", function() { return UsertypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UsertypePage = /** @class */ (function () {
    function UsertypePage(route) {
        this.route = route;
    }
    UsertypePage.prototype.ngOnInit = function () {
    };
    UsertypePage.prototype.guest = function () {
        localStorage.setItem('guest', "guest");
        this.route.navigateByUrl('/home-for-guest');
    };
    UsertypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usertype',
            template: __webpack_require__(/*! ./usertype.page.html */ "./src/app/usertype/usertype.page.html"),
            styles: [__webpack_require__(/*! ./usertype.page.scss */ "./src/app/usertype/usertype.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsertypePage);
    return UsertypePage;
}());



/***/ })

}]);
//# sourceMappingURL=usertype-usertype-module.js.map