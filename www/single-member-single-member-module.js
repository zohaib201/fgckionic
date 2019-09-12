(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-member-single-member-module"],{

/***/ "./src/app/single-member/single-member.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/single-member/single-member.module.ts ***!
  \*******************************************************/
/*! exports provided: SingleMemberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleMemberPageModule", function() { return SingleMemberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _single_member_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-member.page */ "./src/app/single-member/single-member.page.ts");







var routes = [
    {
        path: '',
        component: _single_member_page__WEBPACK_IMPORTED_MODULE_6__["SingleMemberPage"]
    }
];
var SingleMemberPageModule = /** @class */ (function () {
    function SingleMemberPageModule() {
    }
    SingleMemberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_single_member_page__WEBPACK_IMPORTED_MODULE_6__["SingleMemberPage"]]
        })
    ], SingleMemberPageModule);
    return SingleMemberPageModule;
}());



/***/ }),

/***/ "./src/app/single-member/single-member.page.html":
/*!*******************************************************!*\
  !*** ./src/app/single-member/single-member.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{store?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\" style=\"margin-top: 15px\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"product-grid\">\n          <div class=\"product-image\">\n            <img [src]=\"url+store?.family_photo\" alt=\"\" class=\"pic-1\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div text-center style=\"margin: 10px 0px 10px 0px\">\n    <h4 style=\"margin-bottom: 10px\">{{store?.name}}</h4>\n  </div>\n\n  <div padding=\"\">\n    <div style=\"margin-left: 5%\">\n      <img src=\"../../assets/img/contact.jpg\" style=\"border-radius: 50px;height: 40px;width: 40px;margin-bottom:8px \" alt=\"\">\n      <span style=\"margin-left: 10px\"><b>Contact Numbers</b></span>\n\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 0px\" *ngIf=\"(store?.landline_kuwait !== '')\">\n        <b>Phone (KW) : </b>\n        <a href=\"tel:{{store?.landline_kuwait}}\"> {{store?.landline_kuwait}}</a>\n      </p>\n\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 0px\" *ngIf=\"(store?.landline_international !== '')\">\n        <b>Phone (INT) : </b>\n        <a href=\"tel:{{store?.landline_international}}\"> {{store?.landline_international}}</a>\n      </p>\n\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 0px\" *ngIf=\"(store?.mobile1_kuwait !== '')\">\n        <b>Mobile (KW) : </b>\n        <a href=\"tel:{{store?.mobile1_kuwait}}\"> {{store?.mobile1_kuwait}}</a>\n      </p>\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 0px\" *ngIf=\"(store?.mobile2_kuwait !== '')\">\n        <b>Mobile (KW) :</b>\n        <a href=\"tel:{{store?.mobile2_kuwait}}\"> {{store?.mobile2_kuwait}}</a>\n      </p>\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 0px\" *ngIf=\"(store?.mobile1_international !== '')\">\n        <b>Mobile (INT) :</b>\n        <a href=\"tel:{{store?.mobile1_international}}\"> {{store?.mobile1_international}}</a>\n      </p>\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 0px\" *ngIf=\"(store?.mobile2_international !== '')\">\n        <b>Mobile (INT) : </b>\n        <a href=\"tel:{{store?.mobile2_international}}\"> {{store?.mobile2_international}}</a>\n      </p>\n\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 0px\" *ngIf=\"(store?.primary_whatsapp !== '')\">\n        <b>Whatsapp : </b>\n        <a href=\"tel:{{store?.primary_whatsapp}}\"> {{store?.primary_whatsapp}}</a>\n      </p>\n    </div>\n    <div style=\"padding: 0px 15px 0px 15px\">\n      <hr>\n    </div>\n\n    <div style=\"margin-left: 5%\" *ngIf=\"(store?.email_id1 !== '' || store?.email_id2 !== '')\">\n      <img src=\"../../assets/img/email2.png\" style=\"border-radius: 50px;height: 40px;width: 40px\" alt=\"\">\n      <span style=\"margin-left: 10px\"><b>Emails</b></span> \n      <br>\n\n      <div *ngIf=\"(store?.email_id1 !== '')\">\n<!--        <span><b>Emails</b></span>-->\n        <p style=\"margin-bottom: 0px;margin-top: 5px\">\n          {{store?.email_id1}}\n          <br>\n          {{store?.email_id2}}\n        </p>\n      </div>\n    </div>\n\n    <div style=\"padding: 0px 15px 0px 15px\" *ngIf=\"(store?.email_id1 !== '' || store?.email_id2 !== '')\">\n      <hr>\n    </div>\n\n\n    <div style=\"margin-left: 5%\" *ngIf=\"(store?.spouse !== '')\">\n      <img src=\"../../assets/img/sp.png\" style=\"border-radius: 40px;height: 40px;width: 40px\" alt=\"\">\n      <span style=\"margin-left: 10px\"><b>Spouse</b></span>\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 5px\">\n        {{store?.spouse}}\n      </p>\n    </div>\n    \n    <div style=\"padding: 0px 15px 0px 15px\" *ngIf=\"(store?.spouse !== '')\">\n        <hr>\n      </div>\n\n      \n    <div style=\"margin-left: 5%\">\n        <img src=\"../../assets/img/cellgroups.png\" style=\"border-radius: 40px;height: 40px;width: 40px\" alt=\"\">\n        <span style=\"margin-left: 10px\"><b>Cell Group</b></span>\n        <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 5px\">\n          {{cell_groupName?.cellGroupDetail}}\n        </p>\n      </div>\n      \n  <div *ngIf=\"(store?.children.length !== 0)\">\n  <div style=\"padding: 0px 15px 0px 15px\">\n    <hr>\n  </div>\n\n  <div style=\"margin-left: 5%\">\n    <img src=\"../../assets/img/chlild.png\" style=\"border-radius: 50px;height: 40px;width: 40px\" alt=\"\">\n    <span style=\"margin-left: 10px\"><b>Children</b></span>\n    <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 5px\" *ngFor=\"let a of store?.children;index as i\">\n      {{i+1}} - {{a.name}}\n    </p>\n  </div>\n\n  </div>\n   <div *ngIf=\"(store?.grand_children.length !== 0)\">\n     <div style=\"padding: 0px 15px 0px 15px\">\n       <hr>\n     </div>\n     <div style=\"margin-left: 5%\" *ngIf=\"store?.grand_children\">\n       <img src=\"../../assets/img/chlild.png\" style=\"border-radius: 50px;height: 40px;width: 40px\" alt=\"\">\n       <span style=\"margin-left: 10px\"><b>Grand Children</b></span>\n       <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 5px\" *ngFor=\"let b of store?.grand_children;index as i\">\n         {{i+1}} - {{b.name}}\n       </p>\n     </div>\n   </div>\n    <div style=\"padding: 0px 15px 0px 15px\">\n      <hr>\n    </div>\n\n    <div style=\"margin-left: 5%\" *ngIf=\"(store?.address !== '')\">\n      <img src=\"../../assets/img/address.png\" style=\"border-radius: 50px;height: 40px;width: 40px\" alt=\"\">\n      <span style=\"margin-left: 10px\"><b>Address</b></span>\n      <p style=\"margin-bottom: 0px;margin-left: 3px;margin-top: 5px\">\n        {{store?.address}}\n      </p>\n    </div>\n    <br>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/single-member/single-member.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/single-member/single-member.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-grid {\n  font-family: Raleway,sans-serif;\n  text-align: center;\n  padding: 0 0 0px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  position: relative;\n  z-index: 1; }\n\n.product-grid .product-image {\n  position: relative;\n  transition: all .3s ease 0s; }\n\n.product-grid .product-image a {\n  display: block; }\n\n.product-grid .product-image img {\n  width: 100%;\n  height: auto; }\n\n.product-grid .pic-1 {\n  opacity: 1;\n  transition: all .3s ease-out 0s; }\n\n.product-grid:hover .pic-1 {\n  opacity: 1; }\n\n.product-grid .pic-2 {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all .3s ease-out 0s; }\n\n.product-grid:hover .pic-2 {\n  opacity: 1; }\n\n.product-grid .social {\n  width: 150px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  opacity: 0;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  z-index: 1;\n  transition: all .3s ease 0s; }\n\n.product-grid:hover .social {\n  opacity: 1;\n  top: 50%; }\n\n.product-grid .social li {\n  display: inline-block; }\n\n.product-grid .social li a {\n  color: #fff;\n  background-color: #333;\n  font-size: 16px;\n  line-height: 40px;\n  text-align: center;\n  height: 40px;\n  width: 40px;\n  margin: 0 2px;\n  display: block;\n  position: relative;\n  transition: all .3s ease-in-out; }\n\n.product-grid .social li a:hover {\n  color: #fff;\n  background-color: #ef5777; }\n\n.product-grid .social li a:after, .product-grid .social li a:before {\n  content: attr(data-tip);\n  color: #fff;\n  background-color: #000;\n  font-size: 12px;\n  letter-spacing: 1px;\n  line-height: 20px;\n  padding: 1px 5px;\n  white-space: nowrap;\n  opacity: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  position: absolute;\n  left: 50%;\n  top: -30px; }\n\n.product-grid .social li a:after {\n  content: '';\n  height: 15px;\n  width: 15px;\n  border-radius: 0;\n  -webkit-transform: translateX(-50%) rotate(45deg);\n          transform: translateX(-50%) rotate(45deg);\n  top: -20px;\n  z-index: -1; }\n\n.product-grid .social li a:hover:after, .product-grid .social li a:hover:before {\n  opacity: 1; }\n\n.product-grid .product-discount-label, .product-grid .product-new-label {\n  color: #fff;\n  background-color: #ef5777;\n  font-size: 12px;\n  text-transform: uppercase;\n  padding: 2px 7px;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 0; }\n\n.product-grid .product-discount-label {\n  background-color: #333;\n  left: auto;\n  right: 0; }\n\n.product-grid .rating {\n  color: #FFD200;\n  font-size: 12px;\n  padding: 12px 0 0;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  z-index: -1; }\n\n.product-grid .rating li.disable {\n  color: rgba(0, 0, 0, 0.2); }\n\n.product-grid .product-content {\n  background-color: #fff;\n  text-align: center;\n  padding: 12px 0;\n  margin: 0 auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -27px;\n  z-index: 1;\n  transition: all .3s; }\n\n.product-grid:hover .product-content {\n  bottom: 0; }\n\n.product-grid .title {\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: .5px;\n  text-transform: capitalize;\n  margin: 0 0 10px;\n  transition: all .3s ease 0s; }\n\n.product-grid .title a {\n  color: #828282; }\n\n.product-grid .title a:hover, .product-grid:hover .title a {\n  color: #ef5777; }\n\n.product-grid .price {\n  color: #333;\n  font-size: 17px;\n  font-family: Montserrat,sans-serif;\n  font-weight: 700;\n  letter-spacing: .6px;\n  margin-bottom: 8px;\n  text-align: center;\n  transition: all .3s; }\n\n.product-grid .price span {\n  color: #999;\n  font-size: 13px;\n  font-weight: 400;\n  text-decoration: line-through;\n  margin-left: 3px;\n  display: inline-block; }\n\n.product-grid .add-to-cart {\n  color: #000;\n  font-size: 13px;\n  font-weight: 600; }\n\n@media only screen and (max-width: 990px) {\n  .product-grid {\n    margin-bottom: 30px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLW1lbWJlci9DOlxccHJvamVjdHNcXEZHQ19pb25pYy9zcmNcXGFwcFxcc2luZ2xlLW1lbWJlclxcc2luZ2xlLW1lbWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYywrQkFBOEI7RUFBQyxrQkFBaUI7RUFBQyxnQkFBZTtFQUFDLG9DQUErQjtFQUFDLGdCQUFlO0VBQUMsa0JBQWlCO0VBQUMsVUFBUyxFQUFBOztBQUMxSjtFQUE2QixrQkFBaUI7RUFBQywyQkFBMEIsRUFBQTs7QUFDekU7RUFBK0IsY0FBYSxFQUFBOztBQUM1QztFQUFpQyxXQUFVO0VBQUMsWUFBVyxFQUFBOztBQUN2RDtFQUFxQixVQUFTO0VBQUMsK0JBQThCLEVBQUE7O0FBQzdEO0VBQTJCLFVBQVMsRUFBQTs7QUFDcEM7RUFBcUIsVUFBUztFQUFDLGtCQUFpQjtFQUFDLE1BQUs7RUFBQyxPQUFNO0VBQUMsK0JBQThCLEVBQUE7O0FBQzVGO0VBQTJCLFVBQVMsRUFBQTs7QUFDcEM7RUFBc0IsWUFBVztFQUFDLFVBQVM7RUFBQyxTQUFRO0VBQUMsZ0JBQWU7RUFBQyxVQUFTO0VBQUMsb0RBQTJDO1VBQTNDLDRDQUEyQztFQUFDLGtCQUFpQjtFQUFDLFFBQU87RUFBQyxTQUFRO0VBQUMsVUFBUztFQUFDLDJCQUEwQixFQUFBOztBQUNsTTtFQUE0QixVQUFTO0VBQUMsUUFBTyxFQUFBOztBQUM3QztFQUF5QixxQkFBb0IsRUFBQTs7QUFDN0M7RUFBMkIsV0FBVTtFQUFDLHNCQUFxQjtFQUFDLGVBQWM7RUFBQyxpQkFBZ0I7RUFBQyxrQkFBaUI7RUFBQyxZQUFXO0VBQUMsV0FBVTtFQUFDLGFBQVk7RUFBQyxjQUFhO0VBQUMsa0JBQWlCO0VBQUMsK0JBQThCLEVBQUE7O0FBQ2hOO0VBQWlDLFdBQVU7RUFBQyx5QkFBd0IsRUFBQTs7QUFDcEU7RUFBbUUsdUJBQXNCO0VBQUMsV0FBVTtFQUFDLHNCQUFxQjtFQUFDLGVBQWM7RUFBQyxtQkFBa0I7RUFBQyxpQkFBZ0I7RUFBQyxnQkFBZTtFQUFDLG1CQUFrQjtFQUFDLFVBQVM7RUFBQyxtQ0FBMEI7VUFBMUIsMkJBQTBCO0VBQUMsa0JBQWlCO0VBQUMsU0FBUTtFQUFDLFVBQVMsRUFBQTs7QUFDMVI7RUFBaUMsV0FBVTtFQUFDLFlBQVc7RUFBQyxXQUFVO0VBQUMsZ0JBQWU7RUFBQyxpREFBd0M7VUFBeEMseUNBQXdDO0VBQUMsVUFBUztFQUFDLFdBQVUsRUFBQTs7QUFDaEo7RUFBK0UsVUFBUyxFQUFBOztBQUN4RjtFQUF1RSxXQUFVO0VBQUMseUJBQXdCO0VBQUMsZUFBYztFQUFDLHlCQUF3QjtFQUFDLGdCQUFlO0VBQUMsY0FBYTtFQUFDLGtCQUFpQjtFQUFDLFNBQVE7RUFBQyxPQUFNLEVBQUE7O0FBQ2xOO0VBQXNDLHNCQUFxQjtFQUFDLFVBQVM7RUFBQyxRQUFPLEVBQUE7O0FBQzdFO0VBQXNCLGNBQWE7RUFBQyxlQUFjO0VBQUMsaUJBQWdCO0VBQUMsU0FBUTtFQUFDLGdCQUFlO0VBQUMsa0JBQWlCO0VBQUMsV0FBVSxFQUFBOztBQUN6SDtFQUFpQyx5QkFBb0IsRUFBQTs7QUFDckQ7RUFBK0Isc0JBQXFCO0VBQUMsa0JBQWlCO0VBQUMsZUFBYztFQUFDLGNBQWE7RUFBQyxrQkFBaUI7RUFBQyxPQUFNO0VBQUMsUUFBTztFQUFDLGFBQVk7RUFBQyxVQUFTO0VBQUMsbUJBQWtCLEVBQUE7O0FBQzlLO0VBQXFDLFNBQVEsRUFBQTs7QUFDN0M7RUFBcUIsZUFBYztFQUFDLGdCQUFlO0VBQUMsb0JBQW1CO0VBQUMsMEJBQXlCO0VBQUMsZ0JBQWU7RUFBQywyQkFBMEIsRUFBQTs7QUFDNUk7RUFBdUIsY0FBYSxFQUFBOztBQUNwQztFQUEwRCxjQUFhLEVBQUE7O0FBQ3ZFO0VBQXFCLFdBQVU7RUFBQyxlQUFjO0VBQUMsa0NBQWlDO0VBQUMsZ0JBQWU7RUFBQyxvQkFBbUI7RUFBQyxrQkFBaUI7RUFBQyxrQkFBaUI7RUFBQyxtQkFBa0IsRUFBQTs7QUFDM0s7RUFBMEIsV0FBVTtFQUFDLGVBQWM7RUFBQyxnQkFBZTtFQUFDLDZCQUE0QjtFQUFDLGdCQUFlO0VBQUMscUJBQW9CLEVBQUE7O0FBQ3JJO0VBQTJCLFdBQVU7RUFBQyxlQUFjO0VBQUMsZ0JBQWUsRUFBQTs7QUFDcEU7RUFBeUM7SUFBYyxtQkFBa0IsRUFBQSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLW1lbWJlci9zaW5nbGUtbWVtYmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWdyaWR7Zm9udC1mYW1pbHk6UmFsZXdheSxzYW5zLXNlcmlmO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MCAwIDBweDtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjF9XHJcbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtaW1hZ2V7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2UgMHN9XHJcbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtaW1hZ2UgYXtkaXNwbGF5OmJsb2NrfVxyXG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWltYWdlIGltZ3t3aWR0aDoxMDAlO2hlaWdodDphdXRvfVxyXG4ucHJvZHVjdC1ncmlkIC5waWMtMXtvcGFjaXR5OjE7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2Utb3V0IDBzfVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5waWMtMXtvcGFjaXR5OjF9XHJcbi5wcm9kdWN0LWdyaWQgLnBpYy0ye29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2Utb3V0IDBzfVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5waWMtMntvcGFjaXR5OjF9XHJcbi5wcm9kdWN0LWdyaWQgLnNvY2lhbHt3aWR0aDoxNTBweDtwYWRkaW5nOjA7bWFyZ2luOjA7bGlzdC1zdHlsZTpub25lO29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo2MCU7bGVmdDo1MCU7ei1pbmRleDoxO3RyYW5zaXRpb246YWxsIC4zcyBlYXNlIDBzfVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5zb2NpYWx7b3BhY2l0eToxO3RvcDo1MCV9XHJcbi5wcm9kdWN0LWdyaWQgLnNvY2lhbCBsaXtkaXNwbGF5OmlubGluZS1ibG9ja31cclxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGF7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMzM7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6NDBweDt0ZXh0LWFsaWduOmNlbnRlcjtoZWlnaHQ6NDBweDt3aWR0aDo0MHB4O21hcmdpbjowIDJweDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246YWxsIC4zcyBlYXNlLWluLW91dH1cclxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGE6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNlZjU3Nzd9XHJcbi5wcm9kdWN0LWdyaWQgLnNvY2lhbCBsaSBhOmFmdGVyLC5wcm9kdWN0LWdyaWQgLnNvY2lhbCBsaSBhOmJlZm9yZXtjb250ZW50OmF0dHIoZGF0YS10aXApO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMDAwO2ZvbnQtc2l6ZToxMnB4O2xldHRlci1zcGFjaW5nOjFweDtsaW5lLWhlaWdodDoyMHB4O3BhZGRpbmc6MXB4IDVweDt3aGl0ZS1zcGFjZTpub3dyYXA7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDotMzBweH1cclxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGE6YWZ0ZXJ7Y29udGVudDonJztoZWlnaHQ6MTVweDt3aWR0aDoxNXB4O2JvcmRlci1yYWRpdXM6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpO3RvcDotMjBweDt6LWluZGV4Oi0xfVxyXG4ucHJvZHVjdC1ncmlkIC5zb2NpYWwgbGkgYTpob3ZlcjphZnRlciwucHJvZHVjdC1ncmlkIC5zb2NpYWwgbGkgYTpob3ZlcjpiZWZvcmV7b3BhY2l0eToxfVxyXG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWRpc2NvdW50LWxhYmVsLC5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtbmV3LWxhYmVse2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZWY1Nzc3O2ZvbnQtc2l6ZToxMnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtwYWRkaW5nOjJweCA3cHg7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTBweDtsZWZ0OjB9XHJcbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtZGlzY291bnQtbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojMzMzO2xlZnQ6YXV0bztyaWdodDowfVxyXG4ucHJvZHVjdC1ncmlkIC5yYXRpbmd7Y29sb3I6I0ZGRDIwMDtmb250LXNpemU6MTJweDtwYWRkaW5nOjEycHggMCAwO21hcmdpbjowO2xpc3Qtc3R5bGU6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4Oi0xfVxyXG4ucHJvZHVjdC1ncmlkIC5yYXRpbmcgbGkuZGlzYWJsZXtjb2xvcjpyZ2JhKDAsMCwwLC4yKX1cclxuLnByb2R1Y3QtZ3JpZCAucHJvZHVjdC1jb250ZW50e2JhY2tncm91bmQtY29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjEycHggMDttYXJnaW46MCBhdXRvO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO2JvdHRvbTotMjdweDt6LWluZGV4OjE7dHJhbnNpdGlvbjphbGwgLjNzfVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5wcm9kdWN0LWNvbnRlbnR7Ym90dG9tOjB9XHJcbi5wcm9kdWN0LWdyaWQgLnRpdGxle2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjQwMDtsZXR0ZXItc3BhY2luZzouNXB4O3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7bWFyZ2luOjAgMCAxMHB4O3RyYW5zaXRpb246YWxsIC4zcyBlYXNlIDBzfVxyXG4ucHJvZHVjdC1ncmlkIC50aXRsZSBhe2NvbG9yOiM4MjgyODJ9XHJcbi5wcm9kdWN0LWdyaWQgLnRpdGxlIGE6aG92ZXIsLnByb2R1Y3QtZ3JpZDpob3ZlciAudGl0bGUgYXtjb2xvcjojZWY1Nzc3fVxyXG4ucHJvZHVjdC1ncmlkIC5wcmljZXtjb2xvcjojMzMzO2ZvbnQtc2l6ZToxN3B4O2ZvbnQtZmFtaWx5Ok1vbnRzZXJyYXQsc2Fucy1zZXJpZjtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6LjZweDttYXJnaW4tYm90dG9tOjhweDt0ZXh0LWFsaWduOmNlbnRlcjt0cmFuc2l0aW9uOmFsbCAuM3N9XHJcbi5wcm9kdWN0LWdyaWQgLnByaWNlIHNwYW57Y29sb3I6Izk5OTtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo0MDA7dGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDttYXJnaW4tbGVmdDozcHg7ZGlzcGxheTppbmxpbmUtYmxvY2t9XHJcbi5wcm9kdWN0LWdyaWQgLmFkZC10by1jYXJ0e2NvbG9yOiMwMDA7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NjAwfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkwcHgpey5wcm9kdWN0LWdyaWR7bWFyZ2luLWJvdHRvbTozMHB4fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/single-member/single-member.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/single-member/single-member.page.ts ***!
  \*****************************************************/
/*! exports provided: SingleMemberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleMemberPage", function() { return SingleMemberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");







var SingleMemberPage = /** @class */ (function () {
    function SingleMemberPage(route, authSrv, menucontroller, loadingController, photoViewer, platform) {
        this.route = route;
        this.authSrv = authSrv;
        this.menucontroller = menucontroller;
        this.loadingController = loadingController;
        this.photoViewer = photoViewer;
        this.platform = platform;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseurl;
    }
    // phot() {
    //   this.platform.ready().then(() => {
    //     let photoUrl = "https://www.pexels.com/photo/three-women-walking-at-shore-1589867/";
    //     var title = "View photo";
    //     var options = {
    //       share: true,
    //       close: true
    //     };
    //     this.photoViewer.show(photoUrl, title, options);
    //   });
    // }
    SingleMemberPage.prototype.ngOnInit = function () {
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
                        this.id = this.route.snapshot.params['mid'];
                        this.authSrv.memberbyMemberFromAppID(this.id).subscribe(function (data) {
                            _this.store = data;
                            console.log(data.cellGroupId);
                            _this.authSrv.cell_group_ID(data.cellGroupId).subscribe(function (item) {
                                _this.cell_groupName = item;
                                loadingElement.dismiss();
                                console.log(item);
                            });
                            console.log(data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SingleMemberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-member',
            template: __webpack_require__(/*! ./single-member.page.html */ "./src/app/single-member/single-member.page.html"),
            styles: [__webpack_require__(/*! ./single-member.page.scss */ "./src/app/single-member/single-member.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoViewer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], SingleMemberPage);
    return SingleMemberPage;
}());



/***/ })

}]);
//# sourceMappingURL=single-member-single-member-module.js.map