webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_london_demo_london_component__ = __webpack_require__("./src/app/demo-london/demo-london.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'demo/london', component: __WEBPACK_IMPORTED_MODULE_2__demo_london_demo_london_component__["a" /* DemoLondonComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a routerLink=\"/\">Home</a>\n  <a routerLink=\"/demo/london\">Demo car accident in London</a>\n</nav>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deckgl_deckgl_component__ = __webpack_require__("./src/app/deckgl/deckgl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_box_map_box_component__ = __webpack_require__("./src/app/map-box/map-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_london_demo_london_component__ = __webpack_require__("./src/app/demo-london/demo-london.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__london_accident_service__ = __webpack_require__("./src/app/london-accident.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__deckgl_deckgl_component__["a" /* DeckglComponent */],
                __WEBPACK_IMPORTED_MODULE_4__map_box_map_box_component__["a" /* MapBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_6__demo_london_demo_london_component__["a" /* DemoLondonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__london_accident_service__["a" /* LondonAccidentService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/deckgl/deckgl.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/deckgl/deckgl.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas [id]=\"glId\"></canvas>\n"

/***/ }),

/***/ "./src/app/deckgl/deckgl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckglComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deck_gl_dist_es6___ = __webpack_require__("./node_modules/deck.gl/dist-es6/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_deck_gl_dist_es6_core_layers__ = __webpack_require__("./node_modules/deck.gl/dist-es6/core-layers/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeckGLJS = __WEBPACK_IMPORTED_MODULE_1_deck_gl_dist_es6___["a" /* experimental */].DeckGLJS, MapControllerJS = __WEBPACK_IMPORTED_MODULE_1_deck_gl_dist_es6___["a" /* experimental */].MapControllerJS;
var colorRange = [
    [1, 152, 189],
    [73, 227, 206],
    [216, 254, 181],
    [254, 237, 177],
    [254, 173, 84],
    [209, 55, 78],
];
var LIGHT_SETTINGS = {
    lightsPosition: [-0.144528, 49.739968, 8000, -3.807751, 54.104682, 8000],
    ambientRatio: 0.4,
    diffuseRatio: 0.6,
    specularRatio: 0.2,
    lightsStrength: [0.8, 0.0, 0.8, 0.0],
    numberOfLights: 2,
};
var elevationScale = { min: 1, max: 50 };
var DeckglComponent = /** @class */ (function () {
    function DeckglComponent(ngZone) {
        var _this = this;
        this.ngZone = ngZone;
        this.viewPortChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.elevationScale = elevationScale.min;
        this.viewport = {
            latitude: 52,
            longitude: -0.4,
            zoom: 7,
            pitch: 20,
            bearing: 0,
            width: this.width,
            height: this.height,
        };
        this.animateHeight = function () {
            if (_this.elevationScale === elevationScale.max) {
                _this.stopAnimate();
            }
            else {
                _this.ngZone.runOutsideAngular(function () {
                    requestAnimationFrame(function () {
                        _this.elevationScale = _this.elevationScale + 1;
                        _this.updateLayers();
                    });
                });
            }
        };
        this.onViewportChange = function (viewport) {
            _this.viewport = viewport;
            _this.deckgl.setProps(viewport);
            _this.controller.setProps(viewport);
            _this.updateLayers();
            _this.ngZone.runOutsideAngular(function () {
                _this.viewPortChange.emit(viewport);
            });
        };
        this.elevationScale = 1;
    }
    DeckglComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.deckgl) {
            this.ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                    _this.updateLayers();
                    if (changes.data) {
                        _this.startAnimate();
                    }
                });
            });
        }
    };
    DeckglComponent.prototype.startAnimate = function () {
        this.intervalTimer = window.setInterval(this.animateHeight, 20);
    };
    DeckglComponent.prototype.stopAnimate = function () {
        window.clearTimeout(this.intervalTimer);
    };
    DeckglComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.deckgl = new DeckGLJS(__assign({}, _this.viewport, { debug: true, layers: [], canvas: document.getElementById(_this.glId), width: _this.width || 500, height: _this.height || 500 }));
            _this.deckgl.canvas.style.position = 'absolute';
            _this.deckgl.canvas.style.top = '0';
            _this.deckgl.canvas.style.left = '0';
            _this.deckgl.canvas.style.width = '100%';
            _this.deckgl.canvas.style.height = '100%';
            _this.controller = new MapControllerJS(__assign({ canvas: _this.deckgl.canvas }, _this.viewport, { onViewportChange: _this.onViewportChange, width: _this.width || 500, height: _this.height || 500 }));
            _this.updateLayers();
        });
    };
    DeckglComponent.prototype.updateLayers = function () {
        var _this = this;
        if (this.deckgl) {
            var layers_1 = [
                new __WEBPACK_IMPORTED_MODULE_2_deck_gl_dist_es6_core_layers__["b" /* LineLayer */]({
                    id: 'line-layer',
                    strokeWdith: 10,
                    data: [
                        {
                            sourcePosition: [52, 22.3379040],
                            targetPosition: [52, 100],
                            color: [255, 0, 0],
                        },
                        {
                            sourcePosition: [-0.4, 22.3379040],
                            targetPosition: [-0.4, 100],
                            color: [255, 0, 0],
                        },
                    ],
                }),
            ];
            if (this.data && this.data.length > 0) {
                layers_1.push(new __WEBPACK_IMPORTED_MODULE_2_deck_gl_dist_es6_core_layers__["a" /* HexagonLayer */]({
                    data: this.data,
                    id: 'heatmap',
                    colorRange: colorRange,
                    coverage: 1,
                    lightSettings: LIGHT_SETTINGS,
                    elevationRange: [0, 3000],
                    elevationScale: this.elevationScale,
                    extruded: true,
                    getPosition: function (d) { return d; },
                    opacity: 1,
                    radius: 1000,
                    upperPercentile: 100,
                }));
            }
            var w_1 = this.width;
            var h_1 = this.height;
            this.ngZone.runOutsideAngular(function () {
                _this.deckgl.setProps({
                    layers: layers_1,
                    width: w_1,
                    height: h_1,
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], DeckglComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DeckglComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DeckglComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DeckglComponent.prototype, "glId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], DeckglComponent.prototype, "viewPortChange", void 0);
    DeckglComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-deckgl',
            template: __webpack_require__("./src/app/deckgl/deckgl.component.html"),
            styles: [__webpack_require__("./src/app/deckgl/deckgl.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], DeckglComponent);
    return DeckglComponent;
}());



/***/ }),

/***/ "./src/app/demo-london/demo-london.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-london/demo-london.component.html":
/***/ (function(module, exports) {

module.exports = "<app-map-box mapName=\"demo-london\" (mapSizeChange)=\"onMapChangeSize($event)\" [viewport]=\"deckViewPort\">\n  <app-deckgl\n    glId=\"demo-london-deckgl\"\n    (viewPortChange)=\"onViewPortChange($event)\"\n    [data]=\"data\"\n    [width]=\"mapWidth\"\n    [height]=\"mapHeight\">\n  </app-deckgl>\n</app-map-box>\n"

/***/ }),

/***/ "./src/app/demo-london/demo-london.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoLondonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__london_accident_service__ = __webpack_require__("./src/app/london-accident.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoLondonComponent = /** @class */ (function () {
    function DemoLondonComponent(londonAccidentService, ngZone, ref) {
        var _this = this;
        this.londonAccidentService = londonAccidentService;
        this.ngZone = ngZone;
        this.ref = ref;
        this.onViewPortChange = function (viewport) {
            // this.ngZone.run(() => {
            //   this.deckViewPort = viewport;
            // });
            _this.deckViewPort = viewport;
            _this.ref.tick();
        };
    }
    DemoLondonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.londonAccidentService.getDataAccident().then(function (data) {
            _this.data = data;
        }).catch(function (e) {
            console.log(e);
        });
    };
    DemoLondonComponent.prototype.onMapChangeSize = function (data) {
        this.mapWidth = data.mapWidth;
        this.mapHeight = data.mapHeight;
    };
    DemoLondonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-london',
            template: __webpack_require__("./src/app/demo-london/demo-london.component.html"),
            styles: [__webpack_require__("./src/app/demo-london/demo-london.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__london_accident_service__["a" /* LondonAccidentService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]])
    ], DemoLondonComponent);
    return DemoLondonComponent;
}());



/***/ }),

/***/ "./src/app/london-accident.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LondonAccidentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_request__ = __webpack_require__("./node_modules/d3-request/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DATA_URL = 'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv';
var LondonAccidentService = /** @class */ (function () {
    function LondonAccidentService() {
    }
    LondonAccidentService.prototype.getDataAccident = function () {
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_1_d3_request__["a" /* csv */])(DATA_URL, function (error, response) {
                if (!error) {
                    var data = response.map(function (d) { return [Number(d.lng), Number(d.lat)]; });
                    resolve(data);
                }
                reject(error);
            });
        });
    };
    LondonAccidentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LondonAccidentService);
    return LondonAccidentService;
}());



/***/ }),

/***/ "./src/app/map-box/map-box.component.css":
/***/ (function(module, exports) {

module.exports = ".map-box {\n  position: relative;\n}\n"

/***/ }),

/***/ "./src/app/map-box/map-box.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  London car accidents from 1979\n</p>\n<div *ngIf=\"mapName\">\n  <div class=\"map-box\">\n    <div [id]=\"mapName\" style=\"height: 100vh\"></div>\n    <ng-content></ng-content>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/map-box/map-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__ = __webpack_require__("./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_debounce__ = __webpack_require__("./node_modules/lodash.debounce/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_debounce__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapBoxComponent = /** @class */ (function () {
    function MapBoxComponent(ngZone) {
        var _this = this;
        this.ngZone = ngZone;
        this.mapSizeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onResize = function () {
            if (_this.map) {
                var c = _this.map.getCanvas();
                _this.mapHeight = c.height;
                _this.mapWidth = c.width;
                _this.mapSizeChange.emit({
                    mapHeight: _this.mapHeight,
                    mapWidth: _this.mapWidth,
                });
            }
        };
        this.onDebounceResize = __WEBPACK_IMPORTED_MODULE_2_lodash_debounce__(this.onResize, 10);
        window.addEventListener('resize', this.onDebounceResize);
    }
    MapBoxComponent.prototype.ngOnChanges = function (changes) {
        if (this.map && changes.viewport) {
            var _a = this.viewport, zoom = _a.zoom, bearing = _a.bearing, pitch = _a.pitch, longitude = _a.longitude, latitude = _a.latitude, maxZoom = _a.maxZoom, minZoom = _a.minZoom;
            this.map.flyTo({
                duration: 0,
                bearing: bearing,
                pitch: pitch,
                zoom: zoom,
                maxZoom: maxZoom,
                minZoom: minZoom,
                center: [longitude, latitude]
            });
        }
    };
    MapBoxComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            requestAnimationFrame(function () {
                __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["accessToken"] = 'pk.eyJ1IjoiZ2lhbmduZ3V5ZW5kZXYiLCJhIjoiY2pmbXRmMGgwMHp2MjMzbXNnY2xmazB5ZyJ9.iK3EVwAZPCHNYUqIVzR6EQ';
                _this.map = new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["Map"]({
                    container: _this.mapName,
                    style: 'mapbox://styles/mapbox/dark-v9',
                    center: [-0.4, 52],
                    zoom: 7,
                    pitch: 20,
                });
                var c = _this.map.getCanvas();
                _this.mapHeight = c.height;
                _this.mapWidth = c.width;
                _this.mapSizeChange.emit({
                    mapHeight: _this.mapHeight,
                    mapWidth: _this.mapWidth,
                });
            });
        });
    };
    MapBoxComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onDebounceResize);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MapBoxComponent.prototype, "viewport", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MapBoxComponent.prototype, "mapName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], MapBoxComponent.prototype, "mapSizeChange", void 0);
    MapBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map-box',
            template: __webpack_require__("./src/app/map-box/map-box.component.html"),
            styles: [__webpack_require__("./src/app/map-box/map-box.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], MapBoxComponent);
    return MapBoxComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map