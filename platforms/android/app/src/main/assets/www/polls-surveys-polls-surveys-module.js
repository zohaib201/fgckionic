(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["polls-surveys-polls-surveys-module"],{

/***/ "./src/app/polls-surveys/polls-surveys.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/polls-surveys/polls-surveys.module.ts ***!
  \*******************************************************/
/*! exports provided: PollsSurveysPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollsSurveysPageModule", function() { return PollsSurveysPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _polls_surveys_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./polls-surveys.page */ "./src/app/polls-surveys/polls-surveys.page.ts");







var routes = [
    {
        path: '',
        component: _polls_surveys_page__WEBPACK_IMPORTED_MODULE_6__["PollsSurveysPage"]
    }
];
var PollsSurveysPageModule = /** @class */ (function () {
    function PollsSurveysPageModule() {
    }
    PollsSurveysPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_polls_surveys_page__WEBPACK_IMPORTED_MODULE_6__["PollsSurveysPage"]]
        })
    ], PollsSurveysPageModule);
    return PollsSurveysPageModule;
}());



/***/ }),

/***/ "./src/app/polls-surveys/polls-surveys.page.html":
/*!*******************************************************!*\
  !*** ./src/app/polls-surveys/polls-surveys.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Polls ssurvey</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item style=\"width: 90% !important;background-color: #fff;width: 100%;margin: 20px\">\n            <ion-label>I take a survey</ion-label>\n            <ion-select placeholder=\"Select Question\" name=\"radioBtn\" [(ngModel)]=\"number\" (ionChange)=\"onchangeradio($event)\">\n                    <ion-select-option *ngFor=\"let radio of all;index as i\" value=\"{{radio.id}}\"  >{{i+1}} - {{radio.statement | titlecase}}</ion-select-option>\n                </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/polls-surveys/polls-surveys.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/polls-surveys/polls-surveys.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGxzLXN1cnZleXMvcG9sbHMtc3VydmV5cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/polls-surveys/polls-surveys.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/polls-surveys/polls-surveys.page.ts ***!
  \*****************************************************/
/*! exports provided: PollsSurveysPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollsSurveysPage", function() { return PollsSurveysPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PollsSurveysPage = /** @class */ (function () {
    function PollsSurveysPage(srv, route) {
        this.srv = srv;
        this.route = route;
    }
    PollsSurveysPage.prototype.ngOnInit = function () {
        var _this = this;
        this.srv.getallquestion().subscribe(function (data) {
            console.log(data);
            _this.all = data;
            console.log(_this.all);
        });
    };
    PollsSurveysPage.prototype.onchangeradio = function (event) {
        console.log(event.detail.value);
        var id = event.detail.value;
        this.route.navigate(['single-survey/' + id]);
    };
    PollsSurveysPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-polls-surveys',
            template: __webpack_require__(/*! ./polls-surveys.page.html */ "./src/app/polls-surveys/polls-surveys.page.html"),
            styles: [__webpack_require__(/*! ./polls-surveys.page.scss */ "./src/app/polls-surveys/polls-surveys.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PollsSurveysPage);
    return PollsSurveysPage;
}());



/***/ })

}]);
//# sourceMappingURL=polls-surveys-polls-surveys-module.js.map