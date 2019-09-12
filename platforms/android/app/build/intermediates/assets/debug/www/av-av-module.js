(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["av-av-module"],{

/***/ "./src/app/av/av.module.ts":
/*!*********************************!*\
  !*** ./src/app/av/av.module.ts ***!
  \*********************************/
/*! exports provided: AvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvPageModule", function() { return AvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _av_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./av.page */ "./src/app/av/av.page.ts");







var routes = [
    {
        path: '',
        component: _av_page__WEBPACK_IMPORTED_MODULE_6__["AvPage"]
    }
];
var AvPageModule = /** @class */ (function () {
    function AvPageModule() {
    }
    AvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_av_page__WEBPACK_IMPORTED_MODULE_6__["AvPage"]]
        })
    ], AvPageModule);
    return AvPageModule;
}());



/***/ }),

/***/ "./src/app/av/av.page.html":
/*!*********************************!*\
  !*** ./src/app/av/av.page.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Audio & Video Gallery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"\">\n  <br><br>\n  <img src=\"../../assets/img/fgck-logo.png\" alt=\"\" height=\"150\" style=\"display: block;margin: auto\">\n<!--<ion-card text-center=\"\" routerLink=\"/audio\">-->\n<!--  <img src=\"../../assets/img/audioi.png\" height=\"200\" alt=\"\">-->\n<!--</ion-card>-->\n<!--  <ion-card text-center=\"\" routerLink=\"/audio\">-->\n<!--    <img src=\"../../assets/img/videoi.jpg\" height=\"200\" alt=\"\">-->\n<!--</ion-card>-->\n  <br><br>\n  <div padding=\"\">\n <div padding=\"\">\n   <div style=\"margin-top: 5px;margin-bottom: 10px\">\n     <button class=\"btn btn-primary btn-block\" setting type=\"submit\" routerLink=\"/audio\">Audio Gallery </button>\n   </div>\n\n   <div style=\"margin-top: 5px\">\n     <button class=\"btn btn-primary btn-block\" setting type=\"submit\" routerLink=\"/video\">Video Gallery </button>\n   </div>\n </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/av/av.page.scss":
/*!*********************************!*\
  !*** ./src/app/av/av.page.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[setting] {\n  display: block;\n  margin: auto;\n  background-color: #026350;\n  border-radius: 25px !important;\n  font-size: 15px !important;\n  padding: 10px 10px; }\n\n.bc-img {\n  --background: url('fn.png')0 0/100% 120% no-repeat;\n  background-size: cover !important;\n  width: 100%;\n  background-repeat: no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXYvYXYucGFnZS5zY3NzIiwic3JjL2FwcC9hdi9DOlxccHJvamVjdHNcXEZHQ19pb25pYy9zcmNcXGFwcFxcYXZcXGF2LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0NFLGNBQWM7RUFDZCxZQUFZO0VBQ1oseUJBQXlCO0VBRXpCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0RBQWE7RUFDYixpQ0FBaUM7RUFFakMsV0FBVztFQUVYLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXYvYXYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW3NldHRpbmddIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNjM1MDtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAxMHB4OyB9XG5cbi5iYy1pbWcge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvZm4ucG5nXCIpMCAwLzEwMCUgMTIwJSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IH1cbiIsIltzZXR0aW5nXXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNjM1MDtcclxuICAvL3dpZHRoOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG4uYmMtaW1ne1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9mbi5wbmdcIikwIDAvMTAwJSAxMjAlIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLy9oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgLy9iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/av/av.page.ts":
/*!*******************************!*\
  !*** ./src/app/av/av.page.ts ***!
  \*******************************/
/*! exports provided: AvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvPage", function() { return AvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AvPage = /** @class */ (function () {
    function AvPage() {
    }
    AvPage.prototype.ngOnInit = function () {
    };
    AvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-av',
            template: __webpack_require__(/*! ./av.page.html */ "./src/app/av/av.page.html"),
            styles: [__webpack_require__(/*! ./av.page.scss */ "./src/app/av/av.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AvPage);
    return AvPage;
}());



/***/ })

}]);
//# sourceMappingURL=av-av-module.js.map