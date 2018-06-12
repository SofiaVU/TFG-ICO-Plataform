webpackHotUpdate(4,{

/***/ "./components/IcoDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcoDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_truffle_contract__ = __webpack_require__("./node_modules/truffle-contract/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_truffle_contract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_truffle_contract__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_web3__ = __webpack_require__("./node_modules/web3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json__ = __webpack_require__("./build/contracts/createERC20_v2.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json__);

var _jsxFileName = "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/IcoDetail.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var IcoDetail =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IcoDetail, _React$Component);

  /*
  * CONSTRUCTOR
  */
  function IcoDetail(props) {
    var _this;

    _classCallCheck(this, IcoDetail);

    _this = _possibleConstructorReturn(this, (IcoDetail.__proto__ || Object.getPrototypeOf(IcoDetail)).call(this, props));
    _this.state = {
      name: null,
      openingDate: null,
      closingDate: null,
      price: null,
      token: null
    };
    _this.getName = _this.getName.bind(_assertThisInitialized(_this));
    _this.getOpeningDate = _this.getOpeningDate.bind(_assertThisInitialized(_this));
    _this.getClosingDate = _this.getClosingDate.bind(_assertThisInitialized(_this));
    _this.getPrice = _this.getPrice.bind(_assertThisInitialized(_this));
    _this.transfer = _this.transfer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IcoDetail, [{
    key: "getName",
    value: function () {
      var _getName = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var name;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.instancia.getICOnameByID.call(this.props.ico);

              case 2:
                name = _context.sent;
                this.setState({
                  name: name
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getName() {
        return _getName.apply(this, arguments);
      };
    }()
  }, {
    key: "getOpeningDate",
    value: function () {
      var _getOpeningDate = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var date;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.props.instancia.getOpeningDateNameByID.call(this.props.ico);

              case 2:
                date = _context2.sent;
                //console.log(date);
                this.setState({
                  openingDate: date
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getOpeningDate() {
        return _getOpeningDate.apply(this, arguments);
      };
    }()
  }, {
    key: "getClosingDate",
    value: function () {
      var _getClosingDate = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
        var date;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.props.instancia.getClosingDateNameByID.call(this.props.ico);

              case 2:
                date = _context3.sent;
                //console.log(date);
                this.setState({
                  closingDate: date
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getClosingDate() {
        return _getClosingDate.apply(this, arguments);
      };
    }()
  }, {
    key: "getPrice",
    value: function () {
      var _getPrice = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4() {
        var tprice;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.props.instancia.getTokenPriceByID.call(this.props.ico);

              case 2:
                tprice = _context4.sent;
                tprice = tprice.toNumber();
                this.setState({
                  price: tprice
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getPrice() {
        return _getPrice.apply(this, arguments);
      };
    }()
  }, {
    key: "getTokenName",
    value: function () {
      var _getTokenName = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5() {
        var token, theERC20, instance, tokName, tokPrice;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.props.instancia.getTokenAddressByID.call(this.props.ico);

              case 2:
                token = _context5.sent;
                theERC20 = __WEBPACK_IMPORTED_MODULE_3_truffle_contract___default()(__WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json___default.a);
                theERC20.setProvider(web3.currentProvider);
                instance = theERC20.at(token);
                _context5.next = 8;
                return instance.tokenName();

              case 8:
                tokName = _context5.sent;
                _context5.next = 11;
                return instance.buyPrice();

              case 11:
                tokPrice = _context5.sent;
                this.setState({
                  token: token,
                  price: tokPrice
                });

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getTokenName() {
        return _getTokenName.apply(this, arguments);
      };
    }()
  }, {
    key: "transfer",
    value: function transfer() {
      // enviamos al componente lista el ID de la ICO sobre la que se ha pulsado
      //Ico list enviará a index el contratoERC20 de esta ico
      //console.log("TRAZA 1");
      //console.log(this.props.ico.toNumber());
      this.props.getID(this.props.ico.toNumber());
    }
  }, {
    key: "render",
    value: function render() {
      var ico = this.props.ico; //console.log(this.props.instancia);

      if (this.state.name == null && this.state.tokenName == null && this.state.openingDate == null) {
        this.getName();
        this.getTokenName();
        this.getOpeningDate();
        this.getClosingDate(); //this.getPrice();
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, this.state.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, this.state.openingDate), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, this.state.closingDate), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, this.state.token), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, this.state.price, " ethers/toker"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["a" /* Button */], {
        onClick: this.transfer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "Buy tokens")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return IcoDetail;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IcoDetail, "IcoDetail", "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/IcoDetail.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.9d1a00483660ca119454.hot-update.js.map