(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchresult-searchresult-module"],{

/***/ "./src/app/searchresult/searchresult.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/searchresult/searchresult.module.ts ***!
  \*****************************************************/
/*! exports provided: SearchresultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchresultPageModule", function() { return SearchresultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchresult_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchresult.page */ "./src/app/searchresult/searchresult.page.ts");







var routes = [
    {
        path: '',
        component: _searchresult_page__WEBPACK_IMPORTED_MODULE_6__["SearchresultPage"]
    }
];
var SearchresultPageModule = /** @class */ (function () {
    function SearchresultPageModule() {
    }
    SearchresultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_searchresult_page__WEBPACK_IMPORTED_MODULE_6__["SearchresultPage"]]
        })
    ], SearchresultPageModule);
    return SearchresultPageModule;
}());



/***/ }),

/***/ "./src/app/searchresult/searchresult.page.html":
/*!*****************************************************!*\
  !*** ./src/app/searchresult/searchresult.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Search Result</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div style=\"height: 50vw\">\n      <img src=\"../../assets/img/fm.jpg\" alt=\"\" height=\"100%\" width=\"100%\" style=\"display: block;margin: auto;border-radius: 5px\">\n    </div>\n  </ion-card>\n  <div text-center=\"\" style=\"margin-bottom: 10px\">\n    <h4 mg>Abraham Joseph</h4>\n    <p mg>01-Mar</p>\n    <p mg><b>Aniversary : </b> 05-Jul</p>\n  </div>\n  <div>\n    <div style=\"margin-left: 5%\">\n      <img src=\"../../assets/img/contact.jpg\" style=\"border-radius: 50px;height: 40px;width: 40px\" alt=\"\">\n      <span style=\"margin-left: 10px\"><b>Contact Numbers</b></span>\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 5px\">\n        <b>land-line</b> : +298374289374\n      </p>\n      <p style=\"margin-bottom: 0px;margin-left: 3px\">\n        <b>Office</b> : +298374289374\n      </p>\n      <p style=\"margin-bottom: 0px;margin-left: 3px\">\n        <b>Home</b> : +298374289374\n      </p>\n    </div>\n    <div style=\"padding: 0px 15px 0px 15px\">\n      <hr>\n    </div>\n\n    <div style=\"margin-left: 5%\">\n      <img src=\"../../assets/img/email2.png\" style=\"border-radius: 50px;height: 40px;width: 40px\" alt=\"\">\n      <span style=\"margin-left: 10px\"><b>Email</b></span>\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 5px\">\n        zohaib201@gmail.com\n      </p>\n    </div>\n\n    <div style=\"padding: 0px 15px 0px 15px\">\n      <hr>\n    </div>\n\n\n    <div style=\"margin-left: 5%\">\n      <img src=\"../../assets/img/sp.png\" style=\"border-radius: 40px;height: 40px;width: 50px\" alt=\"\">\n      <span style=\"margin-left: 10px\"><b>Spouse</b></span>\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 5px\">\n        Anthony Firnandez (19-Jul)\n      </p>\n    </div>\n\n    <div style=\"padding: 0px 15px 0px 15px\">\n      <hr>\n    </div>\n\n    <div style=\"margin-left: 5%\">\n      <img src=\"../../assets/img/chlild.png\" style=\"border-radius: 50px;height: 40px;width: 40px\" alt=\"\">\n      <span style=\"margin-left: 10px\"><b>Children and Dependents</b></span>\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 5px\">\n        fakhar habib (12-Nov)\n      </p>\n      <p style=\"margin-bottom: 0px;margin-left: 3px\">\n        Shankar Rownay (12-Nov)\n      </p>\n    </div>\n\n    <div style=\"padding: 0px 15px 0px 15px\">\n      <hr>\n    </div>\n\n    <div style=\"margin-left: 5%\">\n      <img src=\"../../assets/img/address.png\" style=\"border-radius: 50px;height: 40px;width: 40px\" alt=\"\">\n      <span style=\"margin-left: 10px\"><b>Address in Kuwait</b></span>\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 5px\">\n        house no 201 street 10 main road fsd.\n      </p>\n    </div>\n\n    <div style=\"padding: 0px 15px 0px 15px\">\n      <hr>\n    </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/searchresult/searchresult.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/searchresult/searchresult.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaHJlc3VsdC9zZWFyY2hyZXN1bHQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/searchresult/searchresult.page.ts":
/*!***************************************************!*\
  !*** ./src/app/searchresult/searchresult.page.ts ***!
  \***************************************************/
/*! exports provided: SearchresultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchresultPage", function() { return SearchresultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchresultPage = /** @class */ (function () {
    function SearchresultPage() {
    }
    SearchresultPage.prototype.ngOnInit = function () {
    };
    SearchresultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchresult',
            template: __webpack_require__(/*! ./searchresult.page.html */ "./src/app/searchresult/searchresult.page.html"),
            styles: [__webpack_require__(/*! ./searchresult.page.scss */ "./src/app/searchresult/searchresult.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchresultPage);
    return SearchresultPage;
}());



/***/ })

}]);
//# sourceMappingURL=searchresult-searchresult-module.js.map