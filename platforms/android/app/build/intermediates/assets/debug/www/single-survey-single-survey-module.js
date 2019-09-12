(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-survey-single-survey-module"],{

/***/ "./src/app/single-survey/single-survey.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/single-survey/single-survey.module.ts ***!
  \*******************************************************/
/*! exports provided: SingleSurveyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSurveyPageModule", function() { return SingleSurveyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _single_survey_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-survey.page */ "./src/app/single-survey/single-survey.page.ts");







var routes = [
    {
        path: '',
        component: _single_survey_page__WEBPACK_IMPORTED_MODULE_6__["SingleSurveyPage"]
    }
];
var SingleSurveyPageModule = /** @class */ (function () {
    function SingleSurveyPageModule() {
    }
    SingleSurveyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_single_survey_page__WEBPACK_IMPORTED_MODULE_6__["SingleSurveyPage"]]
        })
    ], SingleSurveyPageModule);
    return SingleSurveyPageModule;
}());



/***/ }),

/***/ "./src/app/single-survey/single-survey.page.html":
/*!*******************************************************!*\
  !*** ./src/app/single-survey/single-survey.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{name | titlecase}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item style=\"width: 90% !important;background-color: #fff;width: 100%;margin: 20px\">\n            <ion-label>{{name | titlecase}}</ion-label>\n            <ion-select placeholder=\"Select Question\" name=\"radioBtn\"   (ionChange)=\"onchangeradio($event)\">\n                    <ion-select-option *ngFor=\"let radio of data;index as i\" value=\"{{radio.id}}\"  >{{i+1}} - {{radio?.statement | titlecase}}</ion-select-option>\n                </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/single-survey/single-survey.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/single-survey/single-survey.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1zdXJ2ZXkvc2luZ2xlLXN1cnZleS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/single-survey/single-survey.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/single-survey/single-survey.page.ts ***!
  \*****************************************************/
/*! exports provided: SingleSurveyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSurveyPage", function() { return SingleSurveyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var SingleSurveyPage = /** @class */ (function () {
    function SingleSurveyPage(routr, srv, router, toastController, alertController) {
        this.routr = routr;
        this.srv = srv;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.send = { radioId: '', memberFromAppId: '', questionId: '' };
        this.data = [];
    }
    SingleSurveyPage.prototype.ngOnInit = function () {
    };
    SingleSurveyPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.id = this.routr.snapshot.params['id'];
        this.srv.getsinglesurvey(this.id).subscribe(function (data) {
            _this.data = data.radios;
            _this.name = data.statement;
        });
    };
    SingleSurveyPage.prototype.onchangeradio = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, toast, secondtime, id, mid;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: 'Subtitle',
                            message: 'This is an alert message.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'survey save successfull.',
                                duration: 1800
                            })];
                    case 2:
                        toast = _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: 'You are not allowed to submit second time.',
                                duration: 1800
                            })];
                    case 3:
                        secondtime = _a.sent();
                        id = event.detail.value;
                        mid = localStorage.getItem('id');
                        this.send.radioId = id;
                        this.send.questionId = this.id;
                        this.send.memberFromAppId = mid;
                        console.log(this.send);
                        this.srv.answer(this.send).subscribe(function (data) {
                            console.log(data);
                            if (data.message === 'You are not allowed to submit second time') {
                                secondtime.present();
                                _this.router.navigate(['/home']);
                            }
                            else {
                                toast.present();
                                _this.router.navigate(['/home']);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SingleSurveyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-survey',
            template: __webpack_require__(/*! ./single-survey.page.html */ "./src/app/single-survey/single-survey.page.html"),
            styles: [__webpack_require__(/*! ./single-survey.page.scss */ "./src/app/single-survey/single-survey.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], SingleSurveyPage);
    return SingleSurveyPage;
}());



/***/ })

}]);
//# sourceMappingURL=single-survey-single-survey-module.js.map