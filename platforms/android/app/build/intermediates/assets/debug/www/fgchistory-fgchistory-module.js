(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fgchistory-fgchistory-module"],{

/***/ "./src/app/fgchistory/fgchistory.module.ts":
/*!*************************************************!*\
  !*** ./src/app/fgchistory/fgchistory.module.ts ***!
  \*************************************************/
/*! exports provided: FgchistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FgchistoryPageModule", function() { return FgchistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fgchistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fgchistory.page */ "./src/app/fgchistory/fgchistory.page.ts");







var routes = [
    {
        path: '',
        component: _fgchistory_page__WEBPACK_IMPORTED_MODULE_6__["FgchistoryPage"]
    }
];
var FgchistoryPageModule = /** @class */ (function () {
    function FgchistoryPageModule() {
    }
    FgchistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fgchistory_page__WEBPACK_IMPORTED_MODULE_6__["FgchistoryPage"]]
        })
    ], FgchistoryPageModule);
    return FgchistoryPageModule;
}());



/***/ }),

/***/ "./src/app/fgchistory/fgchistory.page.html":
/*!*************************************************!*\
  !*** ./src/app/fgchistory/fgchistory.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"\">\n  <img src=\"../../assets/img/fgc.jpeg\" height=\"110\" style=\"display: block;margin: auto\" alt=\"\">\n<p padding=\"\" style=\"text-align: justify;font-size: 15px\">\n  About 25 members of the <i>“Thursday Prayer Fellowship”</i> (which was an Inter - denominational revival group, in existence since 1974) decided on 12th May 1989 to form a Pentecostal congregation according to the leading of the Holy Spirit. This congregation was later named as <b>\"Full Gospel Church, Kuwait\"</b>.\n  <br><br>\n\n  The first gathering took place at Pastor Mammen Abraham's house in Hasawi and weekly meetings were later moved to the National Evangelical Church of Kuwait (NECK).\n  <br><br>\n  Pastor P. J. Samuel (Sam Uncle) ministered from 1989 till March 2016 followed by Pastor Koshy  K. Mathew from 2016 till 2019. Pastor Moncy P. Mathew is the present Minister In-Charge.\n  <br><br>\n\n  The congregation is now under the Indian Pentecostal Church of God denomination in India. It has its headquarters in Kumbanad, Kerala, and is currently the largest Pentecostal church network in India.\n\n  <br><br>\n\n  The following persons have helped us in the past in the growth of the Church, eventually left kuwait to continue with the calling for Lord's Ministry  in India:\n\n  <br>\n</p>\n  <ul>\n  <li>Pastor K.C Abraham - an associate pastor, secretary, now serving as an associate pastor at IPC prayer center Thiruvalla, Kerala.</li>\n  <li>Pastor T.E. Varghese - as associate pastor, now working as IPC district pastor, Chathanoor, Kerala.</li>\n  <li>Pastor Mammen Abraham - as an associate pastor, secretary & treasurer,\n    now working as a pastor with Church of God.</li>\n    <li>Pastor P. K. Jacob - as an active member, now working as a pastor at IPC Changanacherry, Kerala.</li>\n</ul>\n <p padding=\"\" style=\"text-align: justify;font-size: 15px\"> We have also had the following brothers who served as secretaries and treasurers, namely:</p>\n  <ul>\n    <li>Br. Rajan C. Koshy </li>\n    <li>Br. P.T. Philip </li>\n    <li>Br. Reji T. Zachariah</li>\n    <li>Pr. Mammen Abraham </li>\n    <li>Pr. T. E. Varghese</li>\n    <li>Br. Isaac Abraham</li>\n    <li>Br. Jacob Varghese</li>\n    <li>Br. George Cherian</li>\n<!--    <li>Br. Abraham Varkey</li>-->\n    <li>Br. Simon Abraham</li>\n    <li>Br. Finny Thomas </li>\n  </ul>\n  <p padding=\"\" style=\"text-align: center;font-size: 15px\">\n    <b>“So then neither he who plants is anything, nor he who waters, but God who gives the increase”</b>\n    ( 1 Corinthians 3: 7, NKJV)\n  </p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/fgchistory/fgchistory.page.scss":
/*!*************************************************!*\
  !*** ./src/app/fgchistory/fgchistory.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZnY2hpc3RvcnkvZmdjaGlzdG9yeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/fgchistory/fgchistory.page.ts":
/*!***********************************************!*\
  !*** ./src/app/fgchistory/fgchistory.page.ts ***!
  \***********************************************/
/*! exports provided: FgchistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FgchistoryPage", function() { return FgchistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FgchistoryPage = /** @class */ (function () {
    function FgchistoryPage() {
    }
    FgchistoryPage.prototype.ngOnInit = function () {
    };
    FgchistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fgchistory',
            template: __webpack_require__(/*! ./fgchistory.page.html */ "./src/app/fgchistory/fgchistory.page.html"),
            styles: [__webpack_require__(/*! ./fgchistory.page.scss */ "./src/app/fgchistory/fgchistory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FgchistoryPage);
    return FgchistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=fgchistory-fgchistory-module.js.map