(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["incharge-incharge-module"],{

/***/ "./src/app/incharge/incharge.module.ts":
/*!*********************************************!*\
  !*** ./src/app/incharge/incharge.module.ts ***!
  \*********************************************/
/*! exports provided: InchargePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InchargePageModule", function() { return InchargePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _incharge_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./incharge.page */ "./src/app/incharge/incharge.page.ts");







var routes = [
    {
        path: '',
        component: _incharge_page__WEBPACK_IMPORTED_MODULE_6__["InchargePage"]
    }
];
var InchargePageModule = /** @class */ (function () {
    function InchargePageModule() {
    }
    InchargePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_incharge_page__WEBPACK_IMPORTED_MODULE_6__["InchargePage"]]
        })
    ], InchargePageModule);
    return InchargePageModule;
}());



/***/ }),

/***/ "./src/app/incharge/incharge.page.html":
/*!*********************************************!*\
  !*** ./src/app/incharge/incharge.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Minister In-Charge</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let i of incharge\">\n    <div class=\"container\" style=\"margin-top: -10px\">\n      <br>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"product-grid\">\n            <div class=\"product-image\">\n             <img [src]=\"url+i.photo\" alt=\"\">\n            </div>\n            <div class=\"product-content\">\n              <div class=\"price\">\n                {{i.name}}\n              </div>\n              <h3 class=\"title\">Minister In-Charge</h3>\n              <br>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n      <div class=\"price\" style=\"padding: 0px 20px;margin-top: -10px;text-align: justify\">\n<!--        {{i.description}}-->\n        <b>Pr. Moncy P. Mathew</b>  was born & brought up in Chittar, Pathanamthitta.\n        After his secular education he joined Grace Bible College, Harayana in the year 1988. He graduated in 1991\n        and for the past 28 years he has been serving the Lord as a Pastor as part of Church Ministry.\n        <br>\n        <br>\n\n        In 1994 he got married to Sr. Lovely Varghese (Shirley). Loise Moncy was his first\n        daughter who went to be with the Lord in the year 2014. Reba Moncy his second daughter\n        and Aaron Moncy are currently pursuing their education.\n\n        <br>\n        <br>\n\n        Pastor Moncy P. Mathew was associated with various churches at the following places:\n        <br>\n        <br>\n        <ol>\n          <li>Mota Nagar, New Delhi</li>\n          <li>Velakulangra, Adoor</li>\n          <li>Nellimukal, Adoor </li>\n          <li>Adoor Town</li>\n          <li>Thrikkanamangal, Kottarakara </li>\n          <li>Nellikkamon, Ranni </li>\n          <li>Abu Dhabi </li>\n          <li>Kozhencherry </li>\n        </ol>\n        Since April 2019, Pastor Moncy P. Mathew is the residential pastor of IPC Full Gospel Church Kuwait.\n      </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/incharge/incharge.page.scss":
/*!*********************************************!*\
  !*** ./src/app/incharge/incharge.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-grid {\n  font-family: Raleway,sans-serif;\n  text-align: center;\n  padding: 0 0 0px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  position: relative;\n  z-index: 1; }\n\n.product-grid .product-image {\n  position: relative;\n  transition: all .3s ease 0s; }\n\n.product-grid .product-image a {\n  display: block; }\n\n.product-grid .product-image img {\n  width: 100%;\n  height: auto; }\n\n.product-grid .pic-1 {\n  opacity: 1;\n  transition: all .3s ease-out 0s; }\n\n.product-grid:hover .pic-1 {\n  opacity: 1; }\n\n.product-grid .pic-2 {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all .3s ease-out 0s; }\n\n.product-grid:hover .pic-2 {\n  opacity: 1; }\n\n.product-grid .social {\n  width: 150px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  opacity: 0;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  z-index: 1;\n  transition: all .3s ease 0s; }\n\n.product-grid:hover .social {\n  opacity: 1;\n  top: 50%; }\n\n.product-grid .social li {\n  display: inline-block; }\n\n.product-grid .social li a {\n  color: #fff;\n  background-color: #333;\n  font-size: 16px;\n  line-height: 40px;\n  text-align: center;\n  height: 40px;\n  width: 40px;\n  margin: 0 2px;\n  display: block;\n  position: relative;\n  transition: all .3s ease-in-out; }\n\n.product-grid .social li a:hover {\n  color: #fff;\n  background-color: #ef5777; }\n\n.product-grid .social li a:after, .product-grid .social li a:before {\n  content: attr(data-tip);\n  color: #fff;\n  background-color: #000;\n  font-size: 12px;\n  letter-spacing: 1px;\n  line-height: 20px;\n  padding: 1px 5px;\n  white-space: nowrap;\n  opacity: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  position: absolute;\n  left: 50%;\n  top: -30px; }\n\n.product-grid .social li a:after {\n  content: '';\n  height: 15px;\n  width: 15px;\n  border-radius: 0;\n  -webkit-transform: translateX(-50%) rotate(45deg);\n          transform: translateX(-50%) rotate(45deg);\n  top: -20px;\n  z-index: -1; }\n\n.product-grid .social li a:hover:after, .product-grid .social li a:hover:before {\n  opacity: 1; }\n\n.product-grid .product-discount-label, .product-grid .product-new-label {\n  color: #fff;\n  background-color: #ef5777;\n  font-size: 12px;\n  text-transform: uppercase;\n  padding: 2px 7px;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 0; }\n\n.product-grid .product-discount-label {\n  background-color: #333;\n  left: auto;\n  right: 0; }\n\n.product-grid .rating {\n  color: #FFD200;\n  font-size: 12px;\n  padding: 12px 0 0;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  z-index: -1; }\n\n.product-grid .rating li.disable {\n  color: rgba(0, 0, 0, 0.2); }\n\n.product-grid .product-content {\n  background-color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  bottom: -27px;\n  z-index: 1;\n  transition: all .3s;\n  margin-bottom: -20px; }\n\n.product-grid:hover .product-content {\n  bottom: 0; }\n\n.product-grid .title {\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: .5px;\n  text-transform: capitalize;\n  margin: 0 0 10px;\n  transition: all .3s ease 0s; }\n\n.product-grid .title a {\n  color: #828282; }\n\n.product-grid .title a:hover, .product-grid:hover .title a {\n  color: #ef5777; }\n\n.product-grid .price {\n  color: #333;\n  font-size: 17px;\n  font-family: Montserrat,sans-serif;\n  font-weight: 700;\n  letter-spacing: .6px;\n  margin-bottom: 8px;\n  text-align: center;\n  transition: all .3s; }\n\n.product-grid .price span {\n  color: #999;\n  font-size: 13px;\n  font-weight: 400;\n  text-decoration: line-through;\n  margin-left: 3px;\n  display: inline-block; }\n\n.product-grid .add-to-cart {\n  color: #000;\n  font-size: 13px;\n  font-weight: 600; }\n\n@media only screen and (max-width: 990px) {\n  .product-grid {\n    margin-bottom: 30px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jaGFyZ2UvQzpcXHByb2plY3RzXFxGR0NfaW9uaWMvc3JjXFxhcHBcXGluY2hhcmdlXFxpbmNoYXJnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFBYywrQkFBOEI7RUFBQyxrQkFBaUI7RUFBQyxnQkFBZTtFQUFDLG9DQUErQjtFQUFDLGdCQUFlO0VBQUMsa0JBQWlCO0VBQUMsVUFBUyxFQUFBOztBQUMxSjtFQUE2QixrQkFBaUI7RUFBQywyQkFBMEIsRUFBQTs7QUFDekU7RUFBK0IsY0FBYSxFQUFBOztBQUM1QztFQUFpQyxXQUFVO0VBQUMsWUFBVyxFQUFBOztBQUN2RDtFQUFxQixVQUFTO0VBQUMsK0JBQThCLEVBQUE7O0FBQzdEO0VBQTJCLFVBQVMsRUFBQTs7QUFDcEM7RUFBcUIsVUFBUztFQUFDLGtCQUFpQjtFQUFDLE1BQUs7RUFBQyxPQUFNO0VBQUMsK0JBQThCLEVBQUE7O0FBQzVGO0VBQTJCLFVBQVMsRUFBQTs7QUFDcEM7RUFBc0IsWUFBVztFQUFDLFVBQVM7RUFBQyxTQUFRO0VBQUMsZ0JBQWU7RUFBQyxVQUFTO0VBQUMsb0RBQTJDO1VBQTNDLDRDQUEyQztFQUFDLGtCQUFpQjtFQUFDLFFBQU87RUFBQyxTQUFRO0VBQUMsVUFBUztFQUFDLDJCQUEwQixFQUFBOztBQUNsTTtFQUE0QixVQUFTO0VBQUMsUUFBTyxFQUFBOztBQUM3QztFQUF5QixxQkFBb0IsRUFBQTs7QUFDN0M7RUFBMkIsV0FBVTtFQUFDLHNCQUFxQjtFQUFDLGVBQWM7RUFBQyxpQkFBZ0I7RUFBQyxrQkFBaUI7RUFBQyxZQUFXO0VBQUMsV0FBVTtFQUFDLGFBQVk7RUFBQyxjQUFhO0VBQUMsa0JBQWlCO0VBQUMsK0JBQThCLEVBQUE7O0FBQ2hOO0VBQWlDLFdBQVU7RUFBQyx5QkFBd0IsRUFBQTs7QUFDcEU7RUFBbUUsdUJBQXNCO0VBQUMsV0FBVTtFQUFDLHNCQUFxQjtFQUFDLGVBQWM7RUFBQyxtQkFBa0I7RUFBQyxpQkFBZ0I7RUFBQyxnQkFBZTtFQUFDLG1CQUFrQjtFQUFDLFVBQVM7RUFBQyxtQ0FBMEI7VUFBMUIsMkJBQTBCO0VBQUMsa0JBQWlCO0VBQUMsU0FBUTtFQUFDLFVBQVMsRUFBQTs7QUFDMVI7RUFBaUMsV0FBVTtFQUFDLFlBQVc7RUFBQyxXQUFVO0VBQUMsZ0JBQWU7RUFBQyxpREFBd0M7VUFBeEMseUNBQXdDO0VBQUMsVUFBUztFQUFDLFdBQVUsRUFBQTs7QUFDaEo7RUFBK0UsVUFBUyxFQUFBOztBQUN4RjtFQUF1RSxXQUFVO0VBQUMseUJBQXdCO0VBQUMsZUFBYztFQUFDLHlCQUF3QjtFQUFDLGdCQUFlO0VBQUMsY0FBYTtFQUFDLGtCQUFpQjtFQUFDLFNBQVE7RUFBQyxPQUFNLEVBQUE7O0FBQ2xOO0VBQXNDLHNCQUFxQjtFQUFDLFVBQVM7RUFBQyxRQUFPLEVBQUE7O0FBQzdFO0VBQXNCLGNBQWE7RUFBQyxlQUFjO0VBQUMsaUJBQWdCO0VBQUMsU0FBUTtFQUFDLGdCQUFlO0VBQUMsa0JBQWlCO0VBQUMsV0FBVSxFQUFBOztBQUN6SDtFQUFpQyx5QkFBb0IsRUFBQTs7QUFDckQ7RUFBK0Isc0JBQXFCO0VBQUMsa0JBQWlCO0VBQUMsY0FBYTtFQUFDLGNBQWE7RUFBQyxPQUFNO0VBQUMsUUFBTztFQUMvRyxhQUFZO0VBQUMsVUFBUztFQUFDLG1CQUFrQjtFQUN6QyxvQkFBb0IsRUFBQTs7QUFFdEI7RUFBcUMsU0FBUSxFQUFBOztBQUM3QztFQUFxQixlQUFjO0VBQUMsZ0JBQWU7RUFBQyxvQkFBbUI7RUFBQywwQkFBeUI7RUFBQyxnQkFBZTtFQUFDLDJCQUEwQixFQUFBOztBQUM1STtFQUF1QixjQUFhLEVBQUE7O0FBQ3BDO0VBQTBELGNBQWEsRUFBQTs7QUFDdkU7RUFBcUIsV0FBVTtFQUFDLGVBQWM7RUFBQyxrQ0FBaUM7RUFBQyxnQkFBZTtFQUFDLG9CQUFtQjtFQUFDLGtCQUFpQjtFQUFDLGtCQUFpQjtFQUFDLG1CQUFrQixFQUFBOztBQUMzSztFQUEwQixXQUFVO0VBQUMsZUFBYztFQUFDLGdCQUFlO0VBQUMsNkJBQTRCO0VBQUMsZ0JBQWU7RUFBQyxxQkFBb0IsRUFBQTs7QUFDckk7RUFBMkIsV0FBVTtFQUFDLGVBQWM7RUFBQyxnQkFBZSxFQUFBOztBQUNwRTtFQUF5QztJQUFjLG1CQUFrQixFQUFBLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9pbmNoYXJnZS9pbmNoYXJnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1tpbWddIHtcclxuLy8gICAgbWFyZ2luOiBhdXRvO1xyXG4vLyAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuLy8gIH1cclxuXHJcbi5wcm9kdWN0LWdyaWR7Zm9udC1mYW1pbHk6UmFsZXdheSxzYW5zLXNlcmlmO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MCAwIDBweDtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjF9XHJcbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtaW1hZ2V7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2UgMHN9XHJcbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtaW1hZ2UgYXtkaXNwbGF5OmJsb2NrfVxyXG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWltYWdlIGltZ3t3aWR0aDoxMDAlO2hlaWdodDphdXRvfVxyXG4ucHJvZHVjdC1ncmlkIC5waWMtMXtvcGFjaXR5OjE7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2Utb3V0IDBzfVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5waWMtMXtvcGFjaXR5OjF9XHJcbi5wcm9kdWN0LWdyaWQgLnBpYy0ye29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2Utb3V0IDBzfVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5waWMtMntvcGFjaXR5OjF9XHJcbi5wcm9kdWN0LWdyaWQgLnNvY2lhbHt3aWR0aDoxNTBweDtwYWRkaW5nOjA7bWFyZ2luOjA7bGlzdC1zdHlsZTpub25lO29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo2MCU7bGVmdDo1MCU7ei1pbmRleDoxO3RyYW5zaXRpb246YWxsIC4zcyBlYXNlIDBzfVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5zb2NpYWx7b3BhY2l0eToxO3RvcDo1MCV9XHJcbi5wcm9kdWN0LWdyaWQgLnNvY2lhbCBsaXtkaXNwbGF5OmlubGluZS1ibG9ja31cclxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGF7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMzM7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6NDBweDt0ZXh0LWFsaWduOmNlbnRlcjtoZWlnaHQ6NDBweDt3aWR0aDo0MHB4O21hcmdpbjowIDJweDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246YWxsIC4zcyBlYXNlLWluLW91dH1cclxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGE6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNlZjU3Nzd9XHJcbi5wcm9kdWN0LWdyaWQgLnNvY2lhbCBsaSBhOmFmdGVyLC5wcm9kdWN0LWdyaWQgLnNvY2lhbCBsaSBhOmJlZm9yZXtjb250ZW50OmF0dHIoZGF0YS10aXApO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMDAwO2ZvbnQtc2l6ZToxMnB4O2xldHRlci1zcGFjaW5nOjFweDtsaW5lLWhlaWdodDoyMHB4O3BhZGRpbmc6MXB4IDVweDt3aGl0ZS1zcGFjZTpub3dyYXA7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDotMzBweH1cclxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGE6YWZ0ZXJ7Y29udGVudDonJztoZWlnaHQ6MTVweDt3aWR0aDoxNXB4O2JvcmRlci1yYWRpdXM6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpO3RvcDotMjBweDt6LWluZGV4Oi0xfVxyXG4ucHJvZHVjdC1ncmlkIC5zb2NpYWwgbGkgYTpob3ZlcjphZnRlciwucHJvZHVjdC1ncmlkIC5zb2NpYWwgbGkgYTpob3ZlcjpiZWZvcmV7b3BhY2l0eToxfVxyXG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWRpc2NvdW50LWxhYmVsLC5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtbmV3LWxhYmVse2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZWY1Nzc3O2ZvbnQtc2l6ZToxMnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtwYWRkaW5nOjJweCA3cHg7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTBweDtsZWZ0OjB9XHJcbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtZGlzY291bnQtbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojMzMzO2xlZnQ6YXV0bztyaWdodDowfVxyXG4ucHJvZHVjdC1ncmlkIC5yYXRpbmd7Y29sb3I6I0ZGRDIwMDtmb250LXNpemU6MTJweDtwYWRkaW5nOjEycHggMCAwO21hcmdpbjowO2xpc3Qtc3R5bGU6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4Oi0xfVxyXG4ucHJvZHVjdC1ncmlkIC5yYXRpbmcgbGkuZGlzYWJsZXtjb2xvcjpyZ2JhKDAsMCwwLC4yKX1cclxuLnByb2R1Y3QtZ3JpZCAucHJvZHVjdC1jb250ZW50e2JhY2tncm91bmQtY29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjVweCAwO21hcmdpbjowIGF1dG87bGVmdDowO3JpZ2h0OjA7XHJcbiAgYm90dG9tOi0yN3B4O3otaW5kZXg6MTt0cmFuc2l0aW9uOmFsbCAuM3M7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZDpob3ZlciAucHJvZHVjdC1jb250ZW50e2JvdHRvbTowfVxyXG4ucHJvZHVjdC1ncmlkIC50aXRsZXtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjVweDt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplO21hcmdpbjowIDAgMTBweDt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZSAwc31cclxuLnByb2R1Y3QtZ3JpZCAudGl0bGUgYXtjb2xvcjojODI4MjgyfVxyXG4ucHJvZHVjdC1ncmlkIC50aXRsZSBhOmhvdmVyLC5wcm9kdWN0LWdyaWQ6aG92ZXIgLnRpdGxlIGF7Y29sb3I6I2VmNTc3N31cclxuLnByb2R1Y3QtZ3JpZCAucHJpY2V7Y29sb3I6IzMzMztmb250LXNpemU6MTdweDtmb250LWZhbWlseTpNb250c2VycmF0LHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOi42cHg7bWFyZ2luLWJvdHRvbTo4cHg7dGV4dC1hbGlnbjpjZW50ZXI7dHJhbnNpdGlvbjphbGwgLjNzfVxyXG4ucHJvZHVjdC1ncmlkIC5wcmljZSBzcGFue2NvbG9yOiM5OTk7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NDAwO3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7bWFyZ2luLWxlZnQ6M3B4O2Rpc3BsYXk6aW5saW5lLWJsb2NrfVxyXG4ucHJvZHVjdC1ncmlkIC5hZGQtdG8tY2FydHtjb2xvcjojMDAwO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjYwMH1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MHB4KXsucHJvZHVjdC1ncmlke21hcmdpbi1ib3R0b206MzBweH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/incharge/incharge.page.ts":
/*!*******************************************!*\
  !*** ./src/app/incharge/incharge.page.ts ***!
  \*******************************************/
/*! exports provided: InchargePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InchargePage", function() { return InchargePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");





var InchargePage = /** @class */ (function () {
    function InchargePage(auth, loadingController) {
        this.auth = auth;
        this.loadingController = loadingController;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].baseurl;
    }
    InchargePage.prototype.ngOnInit = function () {
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
                        this.auth.all().subscribe(function (data) {
                            console.log('success');
                            _this.incharge = data;
                            console.log(_this.incharge);
                            loadingElement.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InchargePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incharge',
            template: __webpack_require__(/*! ./incharge.page.html */ "./src/app/incharge/incharge.page.html"),
            styles: [__webpack_require__(/*! ./incharge.page.scss */ "./src/app/incharge/incharge.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], InchargePage);
    return InchargePage;
}());



/***/ })

}]);
//# sourceMappingURL=incharge-incharge-module.js.map