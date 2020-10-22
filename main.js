(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _layout_components_calculo_materiales_calculo_materiales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/components/calculo-materiales/calculo-materiales.component */ "./src/app/layout/components/calculo-materiales/calculo-materiales.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor() {
        this.title = 'arqcalc-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-calculo-materiales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _layout_components_calculo_materiales_calculo_materiales_component__WEBPACK_IMPORTED_MODULE_2__["CalculoMaterialesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_components_calculo_k_calculo_k_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/components/calculo-k/calculo-k.component */ "./src/app/layout/components/calculo-k/calculo-k.component.ts");
/* harmony import */ var _layout_services_global_events_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/services/global-events-manager.service */ "./src/app/layout/services/global-events-manager.service.ts");
/* harmony import */ var _layout_services_material_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/services/material.service */ "./src/app/layout/services/material.service.ts");
/* harmony import */ var _layout_services_zonaBioAmbiental_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/services/zonaBioAmbiental.service */ "./src/app/layout/services/zonaBioAmbiental.service.ts");
/* harmony import */ var _layout_services_calculos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/services/calculos.service */ "./src/app/layout/services/calculos.service.ts");
/* harmony import */ var _layout_services_subtipoCalculo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/services/subtipoCalculo.service */ "./src/app/layout/services/subtipoCalculo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-splitbutton.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-radiobutton.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-message.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-overlaypanel.js");
/* harmony import */ var _layout_components_calculo_materiales_calculo_materiales_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./layout/components/calculo-materiales/calculo-materiales.component */ "./src/app/layout/components/calculo-materiales/calculo-materiales.component.ts");
























//import { TreeTableModule, SharedModule, CalendarModule } from 'primeng/primeng';







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_layout_services_global_events_manager_service__WEBPACK_IMPORTED_MODULE_7__["GlobalEventsManagerService"], _layout_services_material_service__WEBPACK_IMPORTED_MODULE_8__["MaterialService"], _layout_services_zonaBioAmbiental_service__WEBPACK_IMPORTED_MODULE_9__["ZonaBioAmbientalService"], _layout_services_calculos_service__WEBPACK_IMPORTED_MODULE_10__["CalculosService"], _layout_services_subtipoCalculo_service__WEBPACK_IMPORTED_MODULE_11__["SubtipoCalculoService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"],
            primeng_splitbutton__WEBPACK_IMPORTED_MODULE_16__["SplitButtonModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_17__["TableModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__["InputTextModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"],
            //TreeTableModule,
            //SharedModule,
            //CalendarModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__["RadioButtonModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_23__["DataViewModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_25__["MessageModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_26__["PanelModule"],
            primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_28__["OverlayPanelModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _layout_components_calculo_k_calculo_k_component__WEBPACK_IMPORTED_MODULE_6__["CalculoKComponent"],
        _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_27__["HeaderComponent"],
        _layout_components_calculo_materiales_calculo_materiales_component__WEBPACK_IMPORTED_MODULE_29__["CalculoMaterialesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"],
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_16__["SplitButtonModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_17__["TableModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__["InputTextModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"],
        //TreeTableModule,
        //SharedModule,
        //CalendarModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__["RadioButtonModule"],
        primeng_dataview__WEBPACK_IMPORTED_MODULE_23__["DataViewModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_25__["MessageModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_26__["PanelModule"],
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_28__["OverlayPanelModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _layout_components_calculo_k_calculo_k_component__WEBPACK_IMPORTED_MODULE_6__["CalculoKComponent"],
                    _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_27__["HeaderComponent"],
                    _layout_components_calculo_materiales_calculo_materiales_component__WEBPACK_IMPORTED_MODULE_29__["CalculoMaterialesComponent"]
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"],
                    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_16__["SplitButtonModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_17__["TableModule"],
                    primeng_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__["InputTextModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"],
                    //TreeTableModule,
                    //SharedModule,
                    //CalendarModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__["RadioButtonModule"],
                    primeng_dataview__WEBPACK_IMPORTED_MODULE_23__["DataViewModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"],
                    primeng_message__WEBPACK_IMPORTED_MODULE_25__["MessageModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_26__["PanelModule"],
                    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_28__["OverlayPanelModule"]
                ],
                providers: [_layout_services_global_events_manager_service__WEBPACK_IMPORTED_MODULE_7__["GlobalEventsManagerService"], _layout_services_material_service__WEBPACK_IMPORTED_MODULE_8__["MaterialService"], _layout_services_zonaBioAmbiental_service__WEBPACK_IMPORTED_MODULE_9__["ZonaBioAmbientalService"], _layout_services_calculos_service__WEBPACK_IMPORTED_MODULE_10__["CalculosService"], _layout_services_subtipoCalculo_service__WEBPACK_IMPORTED_MODULE_11__["SubtipoCalculoService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/components/calculo-k/calculo-k.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/components/calculo-k/calculo-k.component.ts ***!
  \********************************************************************/
/*! exports provided: CalculoKComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoKComponent", function() { return CalculoKComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_BEItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/BEItem */ "./src/app/layout/models/BEItem.ts");
/* harmony import */ var _models_BEResultado__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/BEResultado */ "./src/app/layout/models/BEResultado.ts");
/* harmony import */ var src_app_layout_services_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layout/services/material.service */ "./src/app/layout/services/material.service.ts");
/* harmony import */ var src_app_layout_services_zonaBioAmbiental_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/layout/services/zonaBioAmbiental.service */ "./src/app/layout/services/zonaBioAmbiental.service.ts");
/* harmony import */ var _services_calculos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/calculos.service */ "./src/app/layout/services/calculos.service.ts");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-overlaypanel.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");


















function CalculoKComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r6.value.NombreZona, " ", " - ", " ", item_r6.value.Descripcion, " ");
} }
function CalculoKComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r7.value.NombreZona, " ", " - ", " ", item_r7.value.Descripcion, " ");
} }
function CalculoKComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CalculoKComponent_p_table_62_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " MATERIALES INGRESADOS ");
} }
function CalculoKComponent_p_table_62_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Espesor Ingresado (en mts)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CalculoKComponent_p_table_62_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const objItem_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](objItem_r12.NombreMaterial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](objItem_r12.Espesor);
} }
function CalculoKComponent_p_table_62_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Footer ");
} }
function CalculoKComponent_p_table_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalculoKComponent_p_table_62_ng_template_1_Template, 1, 0, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalculoKComponent_p_table_62_ng_template_2_Template, 5, 0, "ng-template", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalculoKComponent_p_table_62_ng_template_3_Template, 5, 2, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalculoKComponent_p_table_62_ng_template_4_Template, 1, 0, "ng-template", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.ListaItems);
} }
function CalculoKComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-panel", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Resistencia T\u00E9rmica:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Transmitancia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Masa:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "k-max-admisible:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Verifica:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.Resultado.Resistencia_Termica);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.Resultado.Transmitancia);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.Resultado.Masa);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.Resultado.Maximo_K_Admisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.Resultado.Verifica ? "SI" : "NO");
} }
class CalculoKComponent {
    constructor(_MaterialService, _ZonaBioAmbientalService, _CalculosService) {
        this._MaterialService = _MaterialService;
        this._ZonaBioAmbientalService = _ZonaBioAmbientalService;
        this._CalculosService = _CalculosService;
        this.LstMuroCubierta = [];
        this.msgs = [];
        this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.InicializarVariables();
        try {
            this.LstMuroCubierta.push({ Label: 'Muro', Value: 'Muro' }, { Label: 'Cubierta', Value: 'Cubierta' });
            this.lstUnidadesDeMedida.push({ IdUnidadDeMedida: 1, Descripcion: "metro", EquivalenciaEnMetros: 1, Sigla: "m" }, { IdUnidadDeMedida: 2, Descripcion: "centímetro", EquivalenciaEnMetros: Number(1 / 100), Sigla: "cm" }, { IdUnidadDeMedida: 3, Descripcion: "milímetro", EquivalenciaEnMetros: Number(1 / 1000), Sigla: "mm" });
            this.oSelectedUnidadesDeMedida = this.lstUnidadesDeMedida[2];
            this.subscription = this._MaterialService.getMateriales().subscribe(ListaMateriales => {
                this.lstMateriales = ListaMateriales;
            });
            this.subscription = this._ZonaBioAmbientalService.getZonas().subscribe(ListaZonas => {
                this.lstZonas = ListaZonas;
                this.oSelectedZona = this.lstZonas.find(x => x.NombreZona === 'IIIB');
            });
        }
        catch (err) {
            this.showError(err);
        }
    }
    showError(sErrorMensaje) {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: sErrorMensaje, detail: '' });
    }
    InicializarVariables() {
        this.EspesorIngresado = null;
        this.ListaItems = new Array();
        this.Resultado = new _models_BEResultado__WEBPACK_IMPORTED_MODULE_4__["BEResultado"]();
        this.lstUnidadesDeMedida = new Array();
    }
    AgregarItem() {
        this.msgs = [];
        if (!this.oSelectedMaterial)
            this.showError("Debe seleccionar un Material");
        if (!this.oSelectedZona)
            this.showError("Debe seleccionar una Zona Bio Ambiental");
        if (!this.EspesorIngresado)
            this.showError("Debe ingresar el espesor (expresado en metros) del material seleccionado");
        if (!this.selectedValueMuroCubierta)
            this.showError("Debe seleccionar Muro o Cubierta");
        if (this.msgs.length > 0)
            return;
        let item = new _models_BEItem__WEBPACK_IMPORTED_MODULE_3__["BEItem"]();
        item.Espesor = Number(this.EspesorIngresado) * this.oSelectedUnidadesDeMedida.EquivalenciaEnMetros;
        item.IdMaterial = Number(this.oSelectedMaterial.IdMaterial);
        item.NombreMaterial = this.oSelectedMaterial.NombreMaterial;
        this.ListaItems.push(item);
    }
    Calcular() {
        try {
            this._CalculosService.CalcularResistenciaTermica(this.ListaItems, true).subscribe(resRT => {
                this.Resultado.Resistencia_Termica = resRT.toString();
                this.Resultado.Resistencia_TermicaNumber = Number(parseFloat(this.Resultado.Resistencia_Termica.split(' ')[0].replace(',', '.')).toFixed(4));
                this._CalculosService.CalcularTransmitancia(Number(this.Resultado.Resistencia_TermicaNumber)).subscribe(res => {
                    this.Resultado.Transmitancia = res.toString();
                });
            });
            this._CalculosService.CalcularMasa(this.ListaItems).subscribe(res => {
                this.Resultado.Masa = res.toString();
                this.Resultado.MasaNumber = Number(parseFloat(this.Resultado.Masa.split(' ')[0].replace(',', '.')).toFixed(4));
                var EsCubierta = false;
                EsCubierta = this.selectedValueMuroCubierta.includes("Cubierta");
                //MasaMuro: number, orientacion: string, zona: string, EsCubierta: boolean
                this._CalculosService.CalcularKMaxAdmisible(Number(this.Resultado.MasaNumber), '', this.oSelectedZona.NombreZona, EsCubierta).subscribe(resKmax => {
                    this.Resultado.Maximo_K_Admisible = resKmax.toString();
                    this.Resultado.Maximo_K_AdmisibleNumber = Number(parseFloat(this.Resultado.Maximo_K_Admisible.split(' ')[0].replace(',', '.')).toFixed(4));
                    this.Resultado.Verifica = this._CalculosService.Verifica(this.Resultado.Maximo_K_AdmisibleNumber, this.Resultado.Resistencia_TermicaNumber);
                });
            });
        }
        catch (err) {
            this.showError(err);
        }
    }
    ShowPopOver() {
    }
    LimpiarVariables() {
        this.oSelectedMaterial = null;
        this.ListaItems = [];
        this.msgs = [];
        this.Resultado = new _models_BEResultado__WEBPACK_IMPORTED_MODULE_4__["BEResultado"]();
        this.InicializarVariables();
        this.oSelectedZona = this.lstZonas.find(x => x.NombreZona === 'IIIB');
    }
}
CalculoKComponent.ɵfac = function CalculoKComponent_Factory(t) { return new (t || CalculoKComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_layout_services_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_layout_services_zonaBioAmbiental_service__WEBPACK_IMPORTED_MODULE_6__["ZonaBioAmbientalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_calculos_service__WEBPACK_IMPORTED_MODULE_7__["CalculosService"])); };
CalculoKComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculoKComponent, selectors: [["app-calculo-k"]], inputs: { display: "display" }, outputs: { displayChange: "displayChange" }, decls: 64, vars: 17, consts: [[1, "col-12"], [1, "container-fluid"], [1, "card"], [1, "card-header", "panel-header"], [1, "card-body"], ["closable", "true", 3, "value", "valueChange"], [1, "row"], [1, "col-6"], [1, "form-group"], [1, "col-m-2"], ["for", "cboMuroCubierta"], [1, "col-m-6"], ["id", "cboMuroCubierta", "autoWidth", "false", "placeholder", "Seleccione una opcion", "optionLabel", "Label", 3, "options", "ngModel", "showClear", "ngModelChange"], ["for", "cboZonas"], [1, "col-m-4"], ["id", "cboZonas", "autoWidth", "false", "placeholder", "Seleccione una opcion", "optionLabel", "NombreZona", "data-toggle", "tooltip", "data-placement", "top", "title", "IIIB / Gran Bs As y Costa Atl\u00E1ntica, seg\u00FAn Clasificaci\u00F3n bioambiental de la Rep\u00FAblica Argentina - Norma IRAM 11603e-1.", 3, "options", "ngModel", "showClear", "ngModelChange"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Help", 1, "btn", "btn-success", "mb-4", 3, "click"], [1, "fa", "fa-question-circle"], ["op", ""], ["pTemplate", ""], ["for", "cboMateriales"], ["id", "cboMateriales", "autoWidth", "false", "placeholder", "Seleccione una opcion", "optionLabel", "NombreMaterial", 3, "options", "ngModel", "showClear", "ngModelChange"], ["for", "cboUnidadesDeMedida"], ["id", "cboUnidadesDeMedida", "autoWidth", "false", "placeholder", "Seleccione una opcion", "optionLabel", "Descripcion", 3, "options", "ngModel", "showClear", "ngModelChange"], ["for", "txtEspesor"], ["id", "txtEspesor", "placeholder", "Ingrese Espesor", "type", "number", "min", "1", "maxlength", "12", "pattern", "\\d+", "step", "1", "autoWidth", "false", "pInputText", "", "onkeypress", "var charCode = (event.which) ? event.which : event.keyCode;\n                    if (charCode != 46 && charCode > 31 \n                    && (charCode < 48 || charCode > 57))\n                    return false;\n        \n                    return true; ", "oninput", "if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);", 3, "ngModel", "ngModelChange"], [1, "form-group", "mt-3"], [1, "col-m-8", "text-center"], [1, "btn-group", "btn-group-lg"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Agregar Material", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-plus"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Calcular", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-calculator"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Limpiar", 1, "btn", "btn-warning", 3, "click"], [1, "fa", "fa-times"], [1, "col-sm-8"], ["styleClass", "p-datatable-gridlines", 3, "value", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "option-row", 2, "min-width", "width 100px!important"], [1, "option-row"], [1, "col"], ["width", "400", "height", "400", "src", "../../../../assets/components/images/Figura-1-Clasificacion-bioambiental-de-la-Republica-Argentina-IRAM-11603-78_Q640.jpg"], ["styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], ["header", "Resultados", 3, "toggleable"], [1, "col-sm-3"], ["for", "lblResistenciaTermica"], [1, "col-sm-5"], ["id", "lblResistenciaTermica"], ["for", "lblTransmitancia"], ["id", "lblTransmitancia"], ["for", "lblMasa"], ["id", "lblMasa"], ["for", "lblMaximo_K_Admisible"], ["id", "lblMaximo_K_Admisible"], ["for", "lblVerifica"], ["id", "lblVerifica"]], template: function CalculoKComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Resistencia, Masa, Transmitancia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-messages", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CalculoKComponent_Template_p_messages_valueChange_9_listener($event) { return ctx.msgs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Muro/Cubierta:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculoKComponent_Template_p_dropdown_ngModelChange_18_listener($event) { return ctx.selectedValueMuroCubierta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Zonas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p-dropdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculoKComponent_Template_p_dropdown_ngModelChange_24_listener($event) { return ctx.oSelectedZona = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CalculoKComponent_ng_template_25_Template, 2, 3, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CalculoKComponent_ng_template_26_Template, 2, 3, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculoKComponent_Template_button_click_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return _r2.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p-overlayPanel", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CalculoKComponent_ng_template_31_Template, 3, 0, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Materiales:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p-dropdown", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculoKComponent_Template_p_dropdown_ngModelChange_39_listener($event) { return ctx.oSelectedMaterial = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Unidad de Medida:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p-dropdown", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculoKComponent_Template_p_dropdown_ngModelChange_45_listener($event) { return ctx.oSelectedUnidadesDeMedida = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Espesor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculoKComponent_Template_input_ngModelChange_50_listener($event) { return ctx.EspesorIngresado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculoKComponent_Template_button_click_54_listener() { return ctx.AgregarItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculoKComponent_Template_button_click_56_listener() { return ctx.Calcular(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculoKComponent_Template_button_click_58_listener() { return ctx.LimpiarVariables(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, CalculoKComponent_p_table_62_Template, 5, 1, "p-table", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CalculoKComponent_div_63_Template, 40, 6, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.msgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.LstMuroCubierta)("ngModel", ctx.selectedValueMuroCubierta)("showClear", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.lstZonas)("ngModel", ctx.oSelectedZona)("showClear", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.lstMateriales)("ngModel", ctx.oSelectedMaterial)("showClear", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.lstUnidadesDeMedida)("ngModel", ctx.oSelectedUnidadesDeMedida)("showClear", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.EspesorIngresado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.ListaItems.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ListaItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Resultado.Transmitancia);
    } }, directives: [primeng_messages__WEBPACK_IMPORTED_MODULE_8__["Messages"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], primeng_api__WEBPACK_IMPORTED_MODULE_11__["PrimeTemplate"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_12__["OverlayPanel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["PatternValidator"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_15__["Table"], primeng_panel__WEBPACK_IMPORTED_MODULE_16__["Panel"]], styles: [".ui-dropdown[_ngcontent-%COMP%]    {\r\n    width:100% !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvY2FsY3Vsby1rL2NhbGN1bG8tay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvY2FsY3Vsby1rL2NhbGN1bG8tay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWRyb3Bkb3duICAgIHtcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculoKComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculo-k',
                templateUrl: './calculo-k.component.html',
                styleUrls: ['./calculo-k.component.css']
            }]
    }], function () { return [{ type: src_app_layout_services_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"] }, { type: src_app_layout_services_zonaBioAmbiental_service__WEBPACK_IMPORTED_MODULE_6__["ZonaBioAmbientalService"] }, { type: _services_calculos_service__WEBPACK_IMPORTED_MODULE_7__["CalculosService"] }]; }, { display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/layout/components/calculo-materiales/calculo-materiales.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/components/calculo-materiales/calculo-materiales.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CalculoMaterialesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoMaterialesComponent", function() { return CalculoMaterialesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_layout_services_subtipoCalculo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout/services/subtipoCalculo.service */ "./src/app/layout/services/subtipoCalculo.service.ts");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");












function CalculoMaterialesComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " TOTAL ");
} }
function CalculoMaterialesComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cantidad Requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Unidad de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Presentacion Comercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CalculoMaterialesComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.NombreMaterial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.CantidadMaterial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.UnidadMedida);
} }
function CalculoMaterialesComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Footer ");
} }
function CalculoMaterialesComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " DETALLE ");
} }
function CalculoMaterialesComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculoMaterialesComponent_ng_template_52_Template_p_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.selectedValues = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cantidad Requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Unidad de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Presentacion Comercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.selectedValues);
} }
function CalculoMaterialesComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.item.NombreMaterial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.item.CantidadMaterial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.item.UnidadMedida);
} }
function CalculoMaterialesComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Footer ");
} }
class CalculoMaterialesComponent {
    constructor(_SubtipoCalculoService) {
        this._SubtipoCalculoService = _SubtipoCalculoService;
        this.msgs = [];
        this.lstTrabajos = [];
    }
    ngOnInit() {
        this.Initialize();
        try {
            this.subscription = this._SubtipoCalculoService.get(0).subscribe(request => {
                this.lstTrabajos = request;
            });
        }
        catch (err) {
            this.showError(err);
        }
    }
    CalcularMateriales() {
        if (this.trabajoSelected == null || this.trabajoSelected == undefined) {
            this.showError("Debe seleccionar un trabajo.");
            return;
        }
        let volumenSuperficie = 0.00;
        try {
            this.subscription = this._SubtipoCalculoService.CalcularMateriales(this.trabajoSelected.IdSubTipoCalculo, (Number(this.altoIngresado) * Number(this.largoIngresado))).subscribe(request => {
                this.lstResultado = request;
            });
        }
        catch (err) {
            this.showError(err);
        }
    }
    showError(sErrorMensaje) {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: sErrorMensaje, detail: '' });
    }
    Initialize() {
        this.altoIngresado = null;
        this.espesorIngresado = null;
        this.largoIngresado = null;
    }
}
CalculoMaterialesComponent.ɵfac = function CalculoMaterialesComponent_Factory(t) { return new (t || CalculoMaterialesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_layout_services_subtipoCalculo_service__WEBPACK_IMPORTED_MODULE_3__["SubtipoCalculoService"])); };
CalculoMaterialesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculoMaterialesComponent, selectors: [["app-calculo-materiales"]], decls: 55, vars: 9, consts: [[1, "card-header", "panel-header"], [1, "card-body"], ["closable", "true", 3, "value", "valueChange"], [1, "row"], [1, "col-8"], [1, "col-m-2"], ["for", "cboTrabajo"], [1, "col-m-6"], ["id", "cboTrabajo", "autoWidth", "false", "placeholder", "Seleccione una opcion", "optionLabel", "Descripcion", 3, "options", "ngModel", "showClear", "ngModelChange"], ["for", "txtAlto"], ["id", "txtAlto", "placeholder", "Ingrese Alto", "type", "number", "min", "1", "maxlength", "12", "pattern", "\\d+", "step", "1", "autoWidth", "false", "pInputText", "", "onkeypress", "var charCode = (event.which) ? event.which : event.keyCode;\n                    if (charCode != 46 && charCode > 31 \n                    && (charCode < 48 || charCode > 57))\n                    return false;\n        \n                    return true; ", "oninput", "if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);", 3, "ngModel", "ngModelChange"], ["for", "txtLargo"], ["id", "txtLargo", "placeholder", "Ingrese largo", "type", "number", "min", "1", "maxlength", "12", "pattern", "\\d+", "step", "1", "autoWidth", "false", "pInputText", "", "onkeypress", "var charCode = (event.which) ? event.which : event.keyCode;\n                    if (charCode != 46 && charCode > 31 \n                    && (charCode < 48 || charCode > 57))\n                    return false;\n        \n                    return true; ", "oninput", "if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);", 3, "ngModel", "ngModelChange"], ["for", "txtEspesor"], ["id", "txtEspesor", "placeholder", "Ingrese espesor", "type", "number", "min", "1", "maxlength", "12", "pattern", "\\d+", "step", "1", "autoWidth", "false", "pInputText", "", "onkeypress", "var charCode = (event.which) ? event.which : event.keyCode;\n                    if (charCode != 46 && charCode > 31 \n                    && (charCode < 48 || charCode > 57))\n                    return false;\n        \n                    return true; ", "oninput", "if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);", 3, "ngModel", "ngModelChange"], [1, "p-buttonset"], ["pButton", "", "type", "button", "label", "Agregar", "icon", "pi pi-plus", 3, "click"], ["pButton", "", "type", "button", "label", "Eliminar Item", "icon", "pi pi-minus"], ["pButton", "", "type", "button", "label", "Limpiar Formulario", "icon", "pi pi-trash"], ["pButton", "", "type", "button", "label", "Sumar", "icon", "far fa-sigma"], ["pButton", "", "type", "button", "label", "Exportar", "icon", "pi pi-file-excel"], ["pButton", "", "type", "button", "label", "Limpiar Todo", "icon", "pi pi-times"], ["styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], ["name", "groupname", "value", "val1", 3, "ngModel", "ngModelChange"]], template: function CalculoMaterialesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CALCULO DE MATERIALES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-messages", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CalculoMaterialesComponent_Template_p_messages_valueChange_7_listener($event) { return ctx.msgs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Trabajo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculoMaterialesComponent_Template_p_dropdown_ngModelChange_14_listener($event) { return ctx.trabajoSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Alto:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculoMaterialesComponent_Template_input_ngModelChange_20_listener($event) { return ctx.altoIngresado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Largo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculoMaterialesComponent_Template_input_ngModelChange_26_listener($event) { return ctx.largoIngresado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Espesor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculoMaterialesComponent_Template_input_ngModelChange_32_listener($event) { return ctx.espesorIngresado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculoMaterialesComponent_Template_button_click_35_listener() { return ctx.CalcularMateriales(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p-table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CalculoMaterialesComponent_ng_template_44_Template, 1, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CalculoMaterialesComponent_ng_template_45_Template, 9, 0, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CalculoMaterialesComponent_ng_template_46_Template, 8, 3, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CalculoMaterialesComponent_ng_template_47_Template, 1, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p-table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CalculoMaterialesComponent_ng_template_51_Template, 1, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CalculoMaterialesComponent_ng_template_52_Template, 11, 1, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CalculoMaterialesComponent_ng_template_53_Template, 8, 3, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CalculoMaterialesComponent_ng_template_54_Template, 1, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.msgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.lstTrabajos)("ngModel", ctx.trabajoSelected)("showClear", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.altoIngresado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.largoIngresado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.espesorIngresado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.lstResultadoTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.lstResultado);
    } }, directives: [primeng_messages__WEBPACK_IMPORTED_MODULE_4__["Messages"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_10__["PrimeTemplate"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2NhbGN1bG8tbWF0ZXJpYWxlcy9jYWxjdWxvLW1hdGVyaWFsZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculoMaterialesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculo-materiales',
                templateUrl: './calculo-materiales.component.html',
                styleUrls: ['./calculo-materiales.component.css']
            }]
    }], function () { return [{ type: src_app_layout_services_subtipoCalculo_service__WEBPACK_IMPORTED_MODULE_3__["SubtipoCalculoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/models/BEItem.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/models/BEItem.ts ***!
  \*****************************************/
/*! exports provided: BEItem, BEMuroCubierta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEItem", function() { return BEItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEMuroCubierta", function() { return BEMuroCubierta; });
class BEItem {
}
class BEMuroCubierta {
}


/***/ }),

/***/ "./src/app/layout/models/BEResultado.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/models/BEResultado.ts ***!
  \**********************************************/
/*! exports provided: BEResultado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEResultado", function() { return BEResultado; });
class BEResultado {
}


/***/ }),

/***/ "./src/app/layout/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__);




// import { containerStart } from '@angular/core';
class BaseService {
    handleError(error) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"]) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMsg);
    }
    extractData(res) {
        const body = res.json();
        return body.data || {};
    }
}


/***/ }),

/***/ "./src/app/layout/services/calculos.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/services/calculos.service.ts ***!
  \*****************************************************/
/*! exports provided: CalculosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculosService", function() { return CalculosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/layout/services/base.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/Subject.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _global_events_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-events-manager.service */ "./src/app/layout/services/global-events-manager.service.ts");









const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class CalculosService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(httpClient, configService) {
        super();
        this.httpClient = httpClient;
        this.configService = configService;
        this.oItem = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.list = [];
        this._baseUrl = "";
        this._baseUrl = configService.getWebApiURL();
    }
    CalcularResistenciaTermica(_ListaItems, _EsMuro) {
        let parametros = { ListaItems: _ListaItems, EsMuro: _EsMuro };
        try {
            let _url = this._baseUrl + '/api/calcular-resistencia-termica/';
            return this.httpClient.post(_url, parametros, httpOptions).catch(this.handleError);
        }
        catch (err) {
            console.log(err);
        }
    }
    CalcularTransmitancia(_Resistencia) {
        let parametros = { ResistenciaTermica: _Resistencia };
        try {
            let _url = this._baseUrl + '/api/calcular-transmitancia/';
            return this.httpClient.post(_url, parametros, httpOptions).catch(this.handleError);
        }
        catch (err) {
            console.log(err);
        }
    }
    CalcularMasa(_ListaItems) {
        let parametros = { ListaItems: _ListaItems };
        try {
            let _url = this._baseUrl + '/api/calcular-masa/';
            return this.httpClient.post(_url, parametros, httpOptions).catch(this.handleError);
        }
        catch (err) {
            console.log(err);
        }
    }
    CalcularKMaxAdmisible(_MasaMuro, _orientacion, _zona, _EsCubierta) {
        let parametros = { MasaMuro: _MasaMuro, orientacion: _orientacion, zona: _zona, EsCubierta: _EsCubierta };
        try {
            let _url = this._baseUrl + '/api/calcular-k-max-admisible/';
            return this.httpClient.post(_url, parametros, httpOptions).catch(this.handleError);
        }
        catch (err) {
            console.log(err);
        }
    }
    Verifica(KMaxAdmisible, Resistencia) {
        if (KMaxAdmisible === 0 && Resistencia == 0)
            return false;
        return (1 / Resistencia) <= KMaxAdmisible;
    }
}
CalculosService.ɵfac = function CalculosService_Factory(t) { return new (t || CalculosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_events_manager_service__WEBPACK_IMPORTED_MODULE_6__["GlobalEventsManagerService"])); };
CalculosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalculosService, factory: CalculosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _global_events_manager_service__WEBPACK_IMPORTED_MODULE_6__["GlobalEventsManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/services/global-events-manager.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/services/global-events-manager.service.ts ***!
  \******************************************************************/
/*! exports provided: GlobalEventsManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalEventsManagerService", function() { return GlobalEventsManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");



class GlobalEventsManagerService {
    constructor() {
        this.showHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._webApi = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    getWebApiURL() {
        return this._webApi;
    }
}
GlobalEventsManagerService.ɵfac = function GlobalEventsManagerService_Factory(t) { return new (t || GlobalEventsManagerService)(); };
GlobalEventsManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalEventsManagerService, factory: GlobalEventsManagerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalEventsManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/services/material.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/services/material.service.ts ***!
  \*****************************************************/
/*! exports provided: MaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return MaterialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/base.service */ "./src/app/layout/services/base.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/Subject.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _global_events_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-events-manager.service */ "./src/app/layout/services/global-events-manager.service.ts");









const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class MaterialService extends _services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(httpClient, configService) {
        super();
        this.httpClient = httpClient;
        this.configService = configService;
        this.oMaterial = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.list = [];
        this._baseUrl = '';
        this._baseUrl = configService.getWebApiURL();
    }
    //   getMateriales(): Observable<any> {
    //       return this.oMaterial.asObservable();
    //   }
    getMateriales() {
        try {
            let _url = this._baseUrl + '/api/Material/obtener-materiales/';
            return this.httpClient.get(_url).catch(this.handleError);
        }
        catch (err) {
            console.log(err);
        }
    }
}
MaterialService.ɵfac = function MaterialService_Factory(t) { return new (t || MaterialService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_events_manager_service__WEBPACK_IMPORTED_MODULE_6__["GlobalEventsManagerService"])); };
MaterialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MaterialService, factory: MaterialService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _global_events_manager_service__WEBPACK_IMPORTED_MODULE_6__["GlobalEventsManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/services/subtipoCalculo.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/services/subtipoCalculo.service.ts ***!
  \***********************************************************/
/*! exports provided: SubtipoCalculoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtipoCalculoService", function() { return SubtipoCalculoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/base.service */ "./src/app/layout/services/base.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/Subject.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _global_events_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-events-manager.service */ "./src/app/layout/services/global-events-manager.service.ts");









const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class SubtipoCalculoService extends _services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(httpClient, configService) {
        super();
        this.httpClient = httpClient;
        this.configService = configService;
        this.oBESubtipoCalculo = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.list = [];
        this._baseUrl = '';
        this._baseUrl = configService.getWebApiURL();
    }
    get(IdSubTipoCalculo) {
        try {
            let _url = this._baseUrl + '/api/obtener-subtipos-calculos/' + IdSubTipoCalculo.toString() + '/';
            return this.httpClient.get(_url).catch(this.handleError);
        }
        catch (err) {
            console.log(err);
        }
    }
    CalcularMateriales(IdSubTipoCalculo, SuperficieVolumen) {
        try {
            let _url = this._baseUrl + '/api/calcular-materiales/' + IdSubTipoCalculo.toString() + '/' + SuperficieVolumen + '/';
            return this.httpClient.get(_url).catch(this.handleError);
        }
        catch (err) {
            console.log(err);
        }
    }
}
SubtipoCalculoService.ɵfac = function SubtipoCalculoService_Factory(t) { return new (t || SubtipoCalculoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_events_manager_service__WEBPACK_IMPORTED_MODULE_6__["GlobalEventsManagerService"])); };
SubtipoCalculoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubtipoCalculoService, factory: SubtipoCalculoService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubtipoCalculoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _global_events_manager_service__WEBPACK_IMPORTED_MODULE_6__["GlobalEventsManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/services/zonaBioAmbiental.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/services/zonaBioAmbiental.service.ts ***!
  \*************************************************************/
/*! exports provided: ZonaBioAmbientalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonaBioAmbientalService", function() { return ZonaBioAmbientalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/layout/services/base.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/Subject.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _global_events_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-events-manager.service */ "./src/app/layout/services/global-events-manager.service.ts");









const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class ZonaBioAmbientalService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(httpClient, configService) {
        super();
        this.httpClient = httpClient;
        this.configService = configService;
        this.oMaterial = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.list = [];
        this._baseUrl = '';
        this._baseUrl = configService.getWebApiURL();
    }
    getZonas() {
        try {
            let _url = this._baseUrl + '/api/ZonaBioAmbiental/obtener-zonas/';
            return this.httpClient.get(_url).catch(this.handleError);
        }
        catch (err) {
            console.log(err);
        }
    }
}
ZonaBioAmbientalService.ɵfac = function ZonaBioAmbientalService_Factory(t) { return new (t || ZonaBioAmbientalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_events_manager_service__WEBPACK_IMPORTED_MODULE_6__["GlobalEventsManagerService"])); };
ZonaBioAmbientalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ZonaBioAmbientalService, factory: ZonaBioAmbientalService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZonaBioAmbientalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _global_events_manager_service__WEBPACK_IMPORTED_MODULE_6__["GlobalEventsManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 0, consts: [[1, "container-fluid", "topcontainer"], [1, "row"], [1, "col"], ["width", "120", "height", "80", "src", "../../../../assets/components/images/index.jpg"], [1, "col", "titulo"], [1, "col", "leyenda"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ARQ-CALC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "by Guillermo Rodriguez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".topcontainer[_ngcontent-%COMP%] {\r\n    background: #005187;    \r\n    width: auto;   \r\n    height: 80px;         \r\n}\r\n.titulo[_ngcontent-%COMP%]{\r\n    color: white;    \r\n    text-align: left; \r\n    padding: 25px;\r\n    \r\n}\r\n.leyenda[_ngcontent-%COMP%]{\r\n    color: white;    \r\n    text-align: right; \r\n    padding: 25px;\r\n    font-size: smaller;\r\n}\r\n.logotopright[_ngcontent-%COMP%]{\r\n    padding-top: 15px;\r\n}\r\n.logofondo[_ngcontent-%COMP%]{\r\n    padding: 60px 16px 15px 10px;    \r\n    overflow: hidden;\r\n    height: auto;   \r\n    text-align: center;\r\n}\r\n.navbar-bgcolor[_ngcontent-%COMP%]{\r\n    background: #005187;    \r\n    width: auto;   \r\n    height: 80px;   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Bjb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwNTE4NzsgICAgXHJcbiAgICB3aWR0aDogYXV0bzsgICBcclxuICAgIGhlaWdodDogODBweDsgICAgICAgICBcclxufVxyXG4udGl0dWxve1xyXG4gICAgY29sb3I6IHdoaXRlOyAgICBcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIC8qcGFkZGluZzogMjVweCAxNTBweDsgICAqL1xyXG59XHJcbi5sZXllbmRhe1xyXG4gICAgY29sb3I6IHdoaXRlOyAgICBcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuLmxvZ290b3ByaWdodHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59IFxyXG4ubG9nb2ZvbmRve1xyXG4gICAgcGFkZGluZzogNjBweCAxNnB4IDE1cHggMTBweDsgICAgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXZiYXItYmdjb2xvcntcclxuICAgIGJhY2tncm91bmQ6ICMwMDUxODc7ICAgIFxyXG4gICAgd2lkdGg6IGF1dG87ICAgXHJcbiAgICBoZWlnaHQ6IDgwcHg7ICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:51609'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HANSOLO\Source\Repos\ArqCalcUI\arqcalc-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map