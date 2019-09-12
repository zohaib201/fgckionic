(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cellgroup-cellgroup-module"],{

/***/ "./src/app/cellgroup/cellgroup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/cellgroup/cellgroup.module.ts ***!
  \***********************************************/
/*! exports provided: CellgroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellgroupPageModule", function() { return CellgroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cellgroup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cellgroup.page */ "./src/app/cellgroup/cellgroup.page.ts");







var routes = [
    {
        path: '',
        component: _cellgroup_page__WEBPACK_IMPORTED_MODULE_6__["CellgroupPage"]
    }
];
var CellgroupPageModule = /** @class */ (function () {
    function CellgroupPageModule() {
    }
    CellgroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cellgroup_page__WEBPACK_IMPORTED_MODULE_6__["CellgroupPage"]]
        })
    ], CellgroupPageModule);
    return CellgroupPageModule;
}());



/***/ }),

/***/ "./src/app/cellgroup/cellgroup.page.html":
/*!***********************************************!*\
  !*** ./src/app/cellgroup/cellgroup.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Cell Groups</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"\">\n  <p *ngFor=\"let c of cellgroups\">\n    <ion-card style=\"margin: 13px;box-shadow: 2px 2px 25px 1px rgba(214,203,214,1);\">\n      <ion-card-content>\n        {{c.cellGroupDetail}}\n      </ion-card-content>\n    </ion-card>\n  </p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cellgroup/cellgroup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/cellgroup/cellgroup.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbGxncm91cC9jZWxsZ3JvdXAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cellgroup/cellgroup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/cellgroup/cellgroup.page.ts ***!
  \*********************************************/
/*! exports provided: CellgroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellgroupPage", function() { return CellgroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var CellgroupPage = /** @class */ (function () {
    function CellgroupPage(authSrv, loadingController) {
        this.authSrv = authSrv;
        this.loadingController = loadingController;
    }
    CellgroupPage.prototype.ngOnInit = function () {
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
                        this.authSrv.cellgroups().subscribe(function (data) {
                            _this.cellgroups = data;
                            loadingElement.dismiss();
                            console.log(_this.cellgroups);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CellgroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cellgroup',
            template: __webpack_require__(/*! ./cellgroup.page.html */ "./src/app/cellgroup/cellgroup.page.html"),
            styles: [__webpack_require__(/*! ./cellgroup.page.scss */ "./src/app/cellgroup/cellgroup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], CellgroupPage);
    return CellgroupPage;
}());



/***/ })

}]);
//# sourceMappingURL=cellgroup-cellgroup-module.js.map