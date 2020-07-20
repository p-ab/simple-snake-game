function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _grid_layout_grid_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./grid-layout/grid-layout.component */
    "./src/app/grid-layout/grid-layout.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'snake-game';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Snake game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-grid-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        }
      },
      directives: [_grid_layout_grid_layout_component__WEBPACK_IMPORTED_MODULE_1__["GridLayoutComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 5px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxQYXZlbCBBXFxEZXNrdG9wXFxEZXZzXFxzbmFrZS1nYW1lL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _grid_layout_grid_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./grid-layout/grid-layout.component */
    "./src/app/grid-layout/grid-layout.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _grid_layout_grid_layout_component__WEBPACK_IMPORTED_MODULE_3__["GridLayoutComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _grid_layout_grid_layout_component__WEBPACK_IMPORTED_MODULE_3__["GridLayoutComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/grid-layout/grid-layout.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/grid-layout/grid-layout.component.ts ***!
    \******************************************************/

  /*! exports provided: GridLayoutComponent */

  /***/
  function srcAppGridLayoutGridLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridLayoutComponent", function () {
      return GridLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GridLayoutComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridLayoutComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.initGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.gameStates.isOver ? "New Game" : "Shuffle", " ");
      }
    }

    function GridLayoutComponent_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridLayoutComponent_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.togglePause();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.gameStates.isPaused ? "Play" : "Pause", " ");
      }
    }

    var _c0 = function _c0(a0, a1) {
      return [a0, a1];
    };

    function GridLayoutComponent_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
      }

      if (rf & 2) {
        var i_r10 = ctx.$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, i_r10 === ctx_r9.feed.position ? "feed" : "", ctx_r9.snake.positions.indexOf(i_r10) !== 0 - 1 ? "snake-part" : ""));
      }
    }

    function GridLayoutComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridLayoutComponent_div_9_div_1_Template, 1, 4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--grid-color", "#096792")("--rows", ctx_r2.grid.rows)("--columns", ctx_r2.grid.columns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.generateGridList());
      }
    }

    function GridLayoutComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Game Over!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var KeyCodeEnum;

    (function (KeyCodeEnum) {
      KeyCodeEnum[KeyCodeEnum["right"] = 39] = "right";
      KeyCodeEnum[KeyCodeEnum["left"] = 37] = "left";
      KeyCodeEnum[KeyCodeEnum["up"] = 38] = "up";
      KeyCodeEnum[KeyCodeEnum["down"] = 40] = "down";
      KeyCodeEnum[KeyCodeEnum["space"] = 32] = "space";
      KeyCodeEnum[KeyCodeEnum["enter"] = 13] = "enter";
    })(KeyCodeEnum || (KeyCodeEnum = {}));

    var GridLayoutComponent = /*#__PURE__*/function () {
      function GridLayoutComponent() {
        _classCallCheck(this, GridLayoutComponent);

        this.grid = {
          rows: 10,
          columns: 10,
          getTotal: function getTotal() {
            return this.rows * this.columns;
          }
        };
        this.defaultSpeed = 700;
        this.feed = {
          points: 10,
          position: null
        };
        this.gameStates = {
          isOver: false,
          isPaused: false,
          isStarted: false
        };
        this.pauseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.intervalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultSpeed);
        this.iterations = 0;
        this.keyboardLocked = false;
      }

      _createClass(GridLayoutComponent, [{
        key: "keyEvent",
        value: function keyEvent(event) {
          // tslint:disable-next-line: deprecation
          switch (event.keyCode) {
            case KeyCodeEnum.right:
              this.changeDirection('right');
              break;

            case KeyCodeEnum.up:
              this.changeDirection('up');
              break;

            case KeyCodeEnum.left:
              this.changeDirection('left');
              break;

            case KeyCodeEnum.down:
              this.changeDirection('down');
              break;

            case KeyCodeEnum.space:
              this.togglePause();
              break;

            case KeyCodeEnum.enter:
              this.initGame();
              break;

            default:
              this.changeDirection('right');
          }
        }
      }, {
        key: "preventScroll",
        value: function preventScroll(event) {
          switch (event.keyCode) {
            case 37:
            case 39:
            case 38:
            case 40:
            case 32:
              event.preventDefault();
              break;

            default:
              break;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initGame();
        }
      }, {
        key: "initGame",
        value: function initGame() {
          this.gameStates.isOver = false;
          this.snake = {
            positions: [],
            points: 0,
            speed: this.defaultSpeed,
            direction: 'right',
            orientation: 'horizontal'
          };
          this.feed = {
            points: 10,
            position: null
          };
          var initPos = this.randomPos();
          var indent = initPos % this.grid.columns;
          var startPos = this.grid.columns - indent < 3 ? initPos - 3 : initPos;
          this.snake.positions.push(startPos);
          this.feed.position = this.randomPos();
          this.gameStates.isStarted = true;
          this.gameStates.isPaused = true;
          this.gameObserver = this.getTimer(this.pauseSubject);
        } // to-do: rewrite.

      }, {
        key: "togglePause",
        value: function togglePause() {
          if (this.gameStates.isPaused) {
            this.gameStates.isPaused = false;
            this.pauseSubject.next(false);
          } else {
            this.gameStates.isPaused = true;
            this.pauseSubject.next(true);
          }
        }
      }, {
        key: "getTimer",
        value: function getTimer(pause) {
          var _this = this;

          var pausable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(function () {
            return _this.intervalSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (value) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(value);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(pause), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  v = _ref2[0],
                  paused = _ref2[1];

              return !paused;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["repeat"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
              _this.intervalSubject.next(_this.snake.speed);

              _this.gameAction();
            }));
          });
          return {
            time: pausable$
          };
        }
      }, {
        key: "generateGridList",
        value: function generateGridList() {
          var list = _toConsumableArray(Array(this.grid.getTotal()).keys());

          return list;
        }
      }, {
        key: "randomPos",
        value: function randomPos() {
          // value from 0 (inclusive) to total grid cells count (exclusive):
          var index = Math.trunc(Math.random() * this.grid.getTotal());
          return this.snake.positions.indexOf(index) === -1 ? index : this.randomPos();
        }
      }, {
        key: "changeDirection",
        value: function changeDirection(vector) {
          var orientation = this.snake.orientation;
          var horCondition = ['right', 'left'].indexOf(vector) === -1 && orientation === 'horizontal';
          var vertCondition = ['up', 'down'].indexOf(vector) === -1 && orientation === 'vertical';

          if (!this.keyboardLocked && (horCondition || vertCondition)) {
            this.keyboardLocked = true;
            this.snake.orientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
            this.snake.direction = vector;
          }
        }
      }, {
        key: "gameAction",
        value: function gameAction() {
          var _this2 = this;

          var moveSnake = function moveSnake() {
            var _this2$grid = _this2.grid,
                rows = _this2$grid.rows,
                columns = _this2$grid.columns;
            var _this2$snake = _this2.snake,
                direction = _this2$snake.direction,
                positions = _this2$snake.positions;
            var tailPos = positions.slice(0, -1);

            var headPos = _this2.makeStep(positions[0], direction);

            var coords = function () {
              // y reffers to rows, x reffers to columns
              var y = Math.trunc(positions[0] / columns);
              var x = positions[0] - y * columns;
              return {
                x: x,
                y: y
              };
            }();

            var collisionTriggers = [direction === 'right' && coords.x === columns - 1, direction === 'left' && coords.x === 0, direction === 'down' && coords.y === rows - 1, direction === 'up' && coords.y === 0, tailPos.indexOf(headPos) !== -1];

            for (var _i2 = 0, _collisionTriggers = collisionTriggers; _i2 < _collisionTriggers.length; _i2++) {
              var collision = _collisionTriggers[_i2];

              if (collision) {
                _this2.setError('Whoops');
              }
            }

            var rewardEl;

            if (headPos === _this2.feed.position) {
              rewardEl = _this2.rewardForFeed();
            }

            _this2.snake.positions = rewardEl === undefined ? [headPos].concat(_toConsumableArray(tailPos)) : [headPos].concat(_toConsumableArray(tailPos), [rewardEl]);
            _this2.keyboardLocked = false;
            _this2.iterations++;
            return _this2.iterations;
          };

          return moveSnake();
        }
      }, {
        key: "makeStep",
        value: function makeStep(position, direction) {
          switch (direction) {
            case 'right':
              return position + 1;

            case 'left':
              return position - 1;

            case 'up':
              return position - this.grid.columns;

            case 'down':
              return position + this.grid.columns;
          }
        }
      }, {
        key: "rewardForFeed",
        value: function rewardForFeed() {
          var speed = this.snake.speed;
          this.feed.position = this.randomPos();
          this.feed.points += 20;
          this.snake.points += this.feed.points;
          this.snake.speed = speed > 120 ? speed - 70 : speed; // return last snake element as a bonus

          return this.snake.positions[this.snake.positions.length - 1];
        }
      }, {
        key: "setError",
        value: function setError() {
          var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (msg) {
            console.error(msg);
          }

          this.gameStates.isOver = true;
          this.pauseSubject.next(true);
          throw new Error('game over!');
        }
      }]);

      return GridLayoutComponent;
    }();

    GridLayoutComponent.ɵfac = function GridLayoutComponent_Factory(t) {
      return new (t || GridLayoutComponent)();
    };

    GridLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GridLayoutComponent,
      selectors: [["app-grid-layout"]],
      hostBindings: function GridLayoutComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function GridLayoutComponent_keyup_HostBindingHandler($event) {
            return ctx.keyEvent($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown", function GridLayoutComponent_keydown_HostBindingHandler($event) {
            return ctx.preventScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 20,
      vars: 9,
      consts: [[1, "panel-info"], [1, "score"], [1, "speed"], [1, "panel-controls"], ["class", "start", 3, "click", 4, "ngIf"], ["class", "toggle-play", 3, "click", 4, "ngIf"], ["class", "grid-container", 3, "--grid-color", "--rows", "--columns", 4, "ngIf", "ngIfElse"], ["gameOver", ""], [1, "start", 3, "click"], [1, "toggle-play", 3, "click"], [1, "grid-container"], ["class", "grid-cell", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "grid-cell", 3, "ngClass"], [1, "big-caption"]],
      template: function GridLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GridLayoutComponent_button_7_Template, 2, 1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GridLayoutComponent_button_8_Template, 2, 1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GridLayoutComponent_div_9_Template, 2, 7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GridLayoutComponent_ng_template_10_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Control by arrows, space - toggle pause/play, enter - reset game.\n    No records saving. Good luck.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your score: ", ctx.snake.points, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Snake's speed: ", 1000 - ctx.snake.speed, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameStates.isPaused || ctx.gameStates.isOver);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameStates.isOver);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameStates.isOver)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 7, ctx.gameObserver.time));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 0 10px;\n  justify-content: space-between;\n}\nsection[_ngcontent-%COMP%]   .panel-info[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .panel-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   .panel-info[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .panel-controls[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin: 10px 0 10px 10px;\n}\nsection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  outline: none;\n  border: 1px solid #1aafb4;\n}\nsection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border-color: #a3137a;\n  transition: 0.3s;\n}\nsection[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  padding: 20px 0 10px 30px;\n}\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: repeat(var(--rows), minmax(5px, 60px));\n  grid-template-columns: repeat(var(--columns), minmax(5px, 60px));\n}\n.grid-container[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%] {\n  margin: 2px;\n  background: var(--grid-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.grid-container[_ngcontent-%COMP%]   .feed[_ngcontent-%COMP%] {\n  background: #1aafb4;\n}\n.grid-container[_ngcontent-%COMP%]   .snake-part[_ngcontent-%COMP%] {\n  background-color: #ced0d3;\n}\n.big-caption[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 20px;\n  text-align: center;\n  font-size: 90px;\n  color: maroon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC1sYXlvdXQvQzpcXFVzZXJzXFxQYXZlbCBBXFxEZXNrdG9wXFxEZXZzXFxzbmFrZS1nYW1lL3NyY1xcYXBwXFxncmlkLWxheW91dFxcZ3JpZC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dyaWQtbGF5b3V0L2dyaWQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNFLHdCQUFBO0FDRU47QURDRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQUk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FDRU47QURFRTtFQUNFLHlCQUFBO0FDQUo7QURLQTtFQUNFLGFBQUE7RUFDQSwwREFBQTtFQUNBLGdFQUFBO0FDRkY7QURJRTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRko7QURJRTtFQUFRLG1CQUFBO0FDRFY7QURFRTtFQUFjLHlCQUFBO0FDQ2hCO0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2dyaWQtbGF5b3V0L2dyaWQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwIDAgMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5wYW5lbC1pbmZvLCAucGFuZWwtY29udHJvbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICA+ICogKyAqIHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNiwgMTc1LCAxODApO1xyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBib3JkZXItY29sb3I6ICNhMzEzN2E7XHJcbiAgICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMTBweCAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuJGdyaWRDZWxsU2l6ZTogbWlubWF4KDVweCwgNjBweCk7XHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1yb3dzKSwgJGdyaWRDZWxsU2l6ZSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tY29sdW1ucyksICRncmlkQ2VsbFNpemUpO1xyXG5cclxuICAuZ3JpZC1jZWxsIHtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1jb2xvcik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuZmVlZCB7IGJhY2tncm91bmQ6IHJnYigyNiwgMTc1LCAxODApOyB9XHJcbiAgLnNuYWtlLXBhcnQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VkMGQzOyB9XHJcbn1cclxuXHJcbi5iaWctY2FwdGlvbiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogOTBweDtcclxuICBjb2xvcjogbWFyb29uO1xyXG59XHJcbiIsInNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDAgMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuc2VjdGlvbiAucGFuZWwtaW5mbywgc2VjdGlvbiAucGFuZWwtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuc2VjdGlvbiAucGFuZWwtaW5mbyA+ICogKyAqLCBzZWN0aW9uIC5wYW5lbC1jb250cm9scyA+ICogKyAqIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xufVxuc2VjdGlvbiBidXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWFhZmI0O1xufVxuc2VjdGlvbiBidXR0b246YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjYTMxMzdhO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuc2VjdGlvbiBwcmUge1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweCAzMHB4O1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1yb3dzKSwgbWlubWF4KDVweCwgNjBweCkpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1jb2x1bW5zKSwgbWlubWF4KDVweCwgNjBweCkpO1xufVxuLmdyaWQtY29udGFpbmVyIC5ncmlkLWNlbGwge1xuICBtYXJnaW46IDJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JpZC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdyaWQtY29udGFpbmVyIC5mZWVkIHtcbiAgYmFja2dyb3VuZDogIzFhYWZiNDtcbn1cbi5ncmlkLWNvbnRhaW5lciAuc25ha2UtcGFydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWQwZDM7XG59XG5cbi5iaWctY2FwdGlvbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDkwcHg7XG4gIGNvbG9yOiBtYXJvb247XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-grid-layout',
          templateUrl: './grid-layout.component.html',
          styleUrls: ['./grid-layout.component.scss']
        }]
      }], function () {
        return [];
      }, {
        keyEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:keyup', ['$event']]
        }],
        preventScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:keydown', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Pavel A\Desktop\Devs\snake-game\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map