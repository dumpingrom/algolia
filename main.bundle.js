webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/algolia/algolia.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlgoliaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_algoliasearch__ = __webpack_require__("../../../../algoliasearch/src/browser/builds/algoliasearch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_algoliasearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_algoliasearch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_algoliasearch_helper__ = __webpack_require__("../../../../algoliasearch-helper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_algoliasearch_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_algoliasearch_helper__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlgoliaService = (function () {
    function AlgoliaService(http) {
        var _this = this;
        this.http = http;
        this.client = __WEBPACK_IMPORTED_MODULE_3_algoliasearch__('7FFYGHIS99', 'a60ba1f30c77303d329b6522221f336a');
        this.helper = __WEBPACK_IMPORTED_MODULE_4_algoliasearch_helper__(this.client, 'restaurants', {
            aroundLatLngViaIP: true,
            getRankingInfo: 1,
            hitsPerPage: 3,
            disjunctiveFacets: ['food_type', 'stars_count', 'payments_options', 'city', 'price_range'],
            maxValuesPerFacet: 5
        });
        this.hitsPerPage = 3;
        this.emitter = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.helper.on('result', function (results) {
            console.log(results);
            _this.hits = results.hits;
            _this.facets = results.facets;
            _this.emitter.next(results);
        });
        // make first search with no query (fetches all results)
        this.search('');
    }
    AlgoliaService.prototype.search = function (query) {
        this.helper.setQuery(query).search();
    };
    AlgoliaService.prototype.toggleFacet = function (facet, value) {
        this.helper.toggleFacetRefinement(facet, value).search();
    };
    AlgoliaService.prototype.loadMore = function () {
        this.hitsPerPage += 3;
        this.helper.setQueryParameter('hitsPerPage', this.hitsPerPage).search();
    };
    AlgoliaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AlgoliaService);
    return AlgoliaService;
}());



/***/ }),

/***/ "../../../../../src/app/algolia/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__algolia_service__ = __webpack_require__("../../../../../src/app/algolia/algolia.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__algolia_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__searchbox_component__ = __webpack_require__("../../../../../src/app/algolia/searchbox.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__searchbox_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__refinementlist_component__ = __webpack_require__("../../../../../src/app/algolia/refinementlist.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__refinementlist_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_component__ = __webpack_require__("../../../../../src/app/algolia/results.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__results_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rating_component__ = __webpack_require__("../../../../../src/app/algolia/rating.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__rating_component__["a"]; });







/***/ }),

/***/ "../../../../../src/app/algolia/rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = (function () {
    function RatingComponent() {
    }
    RatingComponent.prototype.ngOnInit = function () {
        this.parsedScore = parseFloat(this.score) * 20;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "score", void 0);
    RatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-rating',
            template: "\n    <div class=\"app-rating-container\">\n      <span class=\"app-rating-bottom\">\n        <img src=\"/assets/images/stars-empty.png\" *ngFor=\"let i of [0,1,2,3,4]\" height=\"18\">\n      </span>\n      <span class=\"app-rating-top\" [ngStyle]=\"{'width': parsedScore+'%'}\">\n        <img src=\"/assets/images/stars-plain.png\" *ngFor=\"let i of [0,1,2,3,4]\" height=\"18\">\n      </span>\n    </div>\n    ",
            styles: [
                ".app-rating-bottom, .app-rating-top {\n        position: absolute;\n        top: 0; left: 0;\n      }\n      ",
                ".app-rating-container {\n        position : relative;\n        top: 2px;\n        width: 90px;\n        height: 18px;\n        display: inline-block;\n      }\n      ",
                ".app-rating-top {\n        z-index: 1;\n        overflow: hidden;\n        white-space: nowrap;\n      }\n      ",
                ".app-rating-bottom {\n        z-index: 0;\n      }\n      ",
                "img {\n        display: inline-block;\n      }\n      "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/algolia/refinementlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefinementlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__algolia_service__ = __webpack_require__("../../../../../src/app/algolia/algolia.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RefinementlistComponent = (function () {
    function RefinementlistComponent(algolia) {
        this.algolia = algolia;
        this.results = [];
        this.prettyNames = {
            'food_type': 'Cuisine/Food Type',
            'stars_count': 'Rating',
            'payment_options': 'Payment Options',
            'city': 'City',
            'price_range': 'Price Range'
        };
        this.subs = new Array();
    }
    RefinementlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.algolia.emitter.subscribe(function (results) { _this.results = results; }, function (error) { console.error(error); }));
    };
    RefinementlistComponent.prototype.onCheckboxChange = function (facet, value) {
        this.algolia.toggleFacet(facet, value);
    };
    RefinementlistComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], RefinementlistComponent.prototype, "isActive", void 0);
    RefinementlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-refinementlist',
            template: "\n    <div [class]=\"'app-refinementlist-container' + (isActive ? ' active' : ' inactive')\">\n      <div *ngFor=\"let facet of results.disjunctiveFacets\">\n        <h3>{{ prettyNames[facet.name] }}</h3>\n        <ul>\n          <li *ngFor=\"let data of results.getFacetValues(facet.name)\">\n            <input type=\"checkbox\" [id]=\"'data-'+data.name\"\n              (change)=\"onCheckboxChange(facet.name, data.name)\">\n            <label for=\"data-{{data.name}}\" [class]=\"'clickable ' + (data.isRefined ? 'refined' : '')\">\n              <span class=\"facet-data-name\">{{data.name}}</span>\n              <span class=\"facet-data-count\">{{ data.count }}</span>\n            </label>\n          </li>\n        </ul>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__algolia_service__["a" /* AlgoliaService */]])
    ], RefinementlistComponent);
    return RefinementlistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/algolia/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__algolia_service__ = __webpack_require__("../../../../../src/app/algolia/algolia.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = (function () {
    function ResultsComponent(algolia) {
        this.algolia = algolia;
        this.onToggleRefinementList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.subs = new Array();
        this.results = [];
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.algolia.emitter.subscribe(function (results) { _this.results = results; }, function (error) { console.error(error); }));
    };
    ResultsComponent.prototype.toggleList = function () {
        this.onToggleRefinementList.emit();
    };
    ResultsComponent.prototype.loadMore = function () {
        this.algolia.loadMore();
    };
    ResultsComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], ResultsComponent.prototype, "onToggleRefinementList", void 0);
    ResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-results',
            template: "\n    <span class=\"clickable refinementlist-filter-toggle\" (click)=\"toggleList()\">Show/Hide Filters</span>\n    <div class=\"app-results-container\">\n      <div class=\"results-nbHits\">\n        <span><strong>{{ results.nbHits }} results found</strong> in {{ results.processingTimeMS * 0.001 }} seconds</span>\n        <div class=\"separator\"></div>\n      </div>\n      <div *ngFor=\"let hit of results.hits\" class=\"result\">\n        <div class=\"result-image\">\n          <img [src]=\"hit.image_url\" width=\"100\" height=\"100\">\n        </div>\n        <div class=\"result-info\">\n          <h2 [innerHTML]=\"hit._highlightResult.name.value\"></h2>\n          <span class=\"yellow\">{{ hit.stars_count }}</span>\n          <app-rating [score]=\"hit.stars_count\"></app-rating>\n          <span class=\"grey\">({{ hit.reviews_count }} reviews)</span><br>\n          <span class=\"grey\">\n            {{ hit._highlightResult.food_type.value }} | {{ hit.neighborhood }} | {{ hit.price_range }}\n          </span>\n        </div>\n      </div>\n      <div class=\"app-pager-container\">\n        <button (click)=\"loadMore()\">Show More</button>\n      </div>\n    </div>\n  ",
            styles: [
                ".result {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n      align-items: flex-start;\n      justify-content: flex-start;\n    }\n    ",
                ".result .result-image, .result .result-info {\n      padding: 10px;\n    }\n    ",
                ".results-nbHits {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n      align-items: flex-end;\n      margin-bottom: 20px;\n    }\n    ",
                ".separator {\n      height: 1px;\n      background-color: #eee;\n      flex-grow: 1;\n      margin-left: 10px;\n    }\n    ",
                ".app-pager-container {\n      text-align: center;\n    }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__algolia_service__["a" /* AlgoliaService */]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/algolia/searchbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchboxComponent = (function () {
    function SearchboxComponent() {
        var _this = this;
        this.debounceTime = 200;
        this.emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.query = '';
        this.placeholder = 'Search for Restaurants by Name, Cuisine, Location...';
        this.debouncer = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.subs = new Array();
        this.subs.push(this.debouncer.debounceTime(this.debounceTime).subscribe(function (value) { _this.emitter.emit(value); }, function (error) { console.log(error); }));
    }
    SearchboxComponent.prototype.onInputChange = function (event) {
        this.debouncer.next(event.target.value);
    };
    SearchboxComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchboxComponent.prototype, "debounceTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchboxComponent.prototype, "emitter", void 0);
    SearchboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-searchbox',
            template: "\n    <div class=\"searchbox-container\">\n      <input type=\"text\" autocomplete=\"off\" [(ngModel)]=\"query\" [placeholder]=\"placeholder\" (keyup)=\"onInputChange($event)\">\n    </div>\n  ",
            styles: [
                '.searchbox-container { width: 100% }'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SearchboxComponent);
    return SearchboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-searchbox debounceTime=\"500\" (emitter)=\"onQueryChange($event)\"></app-searchbox>\r\n\r\n<div class=\"app-main-container\">\r\n  <app-refinementlist [isActive]=\"isRefinementListActive\" [class]=\"isRefinementListActive ? 'active' : 'inactive'\"></app-refinementlist>\r\n  <app-results (onToggleRefinementList)=\"isRefinementListActive = !isRefinementListActive\"></app-results>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__algolia_algolia_service__ = __webpack_require__("../../../../../src/app/algolia/algolia.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(algolia) {
        this.algolia = algolia;
        this.title = 'Algolia Restaurants Search';
        this.isRefinementListActive = false;
    }
    AppComponent.prototype.onQueryChange = function (value) {
        this.algolia.search(value);
    };
    AppComponent.prototype.onToggleRefinementList = function () {
        this.isRefinementListActive = !this.isRefinementListActive;
        console.log(this.isRefinementListActive);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__algolia_algolia_service__["a" /* AlgoliaService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__algolia__ = __webpack_require__("../../../../../src/app/algolia/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__algolia__["e" /* SearchboxComponent */],
                __WEBPACK_IMPORTED_MODULE_6__algolia__["c" /* RefinementlistComponent */],
                __WEBPACK_IMPORTED_MODULE_6__algolia__["d" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__algolia__["b" /* RatingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__algolia__["a" /* AlgoliaService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map