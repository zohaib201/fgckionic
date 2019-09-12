(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["financial-financial-module"],{

/***/ "./src/app/financial/financial.module.ts":
/*!***********************************************!*\
  !*** ./src/app/financial/financial.module.ts ***!
  \***********************************************/
/*! exports provided: FinancialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialPageModule", function() { return FinancialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _financial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./financial.page */ "./src/app/financial/financial.page.ts");







var routes = [
    {
        path: '',
        component: _financial_page__WEBPACK_IMPORTED_MODULE_6__["FinancialPage"]
    }
];
var FinancialPageModule = /** @class */ (function () {
    function FinancialPageModule() {
    }
    FinancialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_financial_page__WEBPACK_IMPORTED_MODULE_6__["FinancialPage"]]
        })
    ], FinancialPageModule);
    return FinancialPageModule;
}());



/***/ }),

/***/ "./src/app/financial/financial.page.html":
/*!***********************************************!*\
  !*** ./src/app/financial/financial.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Financial Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let a of all\" style=\"padding: 10px\">\n    <p><b>Amount: {{a.amount}}</b></p>\n    <p><b>Description: {{a.description}}</b></p>\n    <p><b>Date: {{a.date | date: 'dd/MM/yyyy'}}</b></p>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/financial/financial.page.scss":
/*!***********************************************!*\
  !*** ./src/app/financial/financial.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFuY2lhbC9maW5hbmNpYWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/financial/financial.page.ts":
/*!*********************************************!*\
  !*** ./src/app/financial/financial.page.ts ***!
  \*********************************************/
/*! exports provided: FinancialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialPage", function() { return FinancialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var FinancialPage = /** @class */ (function () {
    function FinancialPage(srv) {
        this.srv = srv;
    }
    FinancialPage.prototype.ngOnInit = function () {
        var _this = this;
        var id = localStorage.getItem('id');
        this.srv.getsingle(id).subscribe(function (data) {
            _this.all = data;
            console.log(_this.all);
        });
    };
    FinancialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-financial',
            template: __webpack_require__(/*! ./financial.page.html */ "./src/app/financial/financial.page.html"),
            styles: [__webpack_require__(/*! ./financial.page.scss */ "./src/app/financial/financial.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], FinancialPage);
    return FinancialPage;
}());



/***/ })

}]);
//# sourceMappingURL=financial-financial-module.js.map