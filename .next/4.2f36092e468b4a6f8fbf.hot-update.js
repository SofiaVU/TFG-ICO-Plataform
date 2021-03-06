webpackHotUpdate(4,{

/***/ "./components/InfoDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfoDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_truffle_contract__ = __webpack_require__("./node_modules/truffle-contract/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_truffle_contract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_truffle_contract__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json__ = __webpack_require__("./build/contracts/createERC20_v2.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_BalancesList__ = __webpack_require__("./components/BalancesList.js");

var _jsxFileName = "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/InfoDetail.js";

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








var IfoDetail =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IfoDetail, _React$Component);

  function IfoDetail(props) {
    var _this;

    _classCallCheck(this, IfoDetail);

    _this = _possibleConstructorReturn(this, (IfoDetail.__proto__ || Object.getPrototypeOf(IfoDetail)).call(this, props));
    _this.state = {
      instance: null,
      nameICO: null,
      tokenAddr: null,
      tokenName: null,
      tokenSymbol: null,
      tokenDecimals: null,
      openingDate: null,
      closingDate: null,
      price: null,
      token: null,
      totalSupply: null,
      actualSupply: null,
      arrayEvents: null
    };
    _this.getInfoFromICOBB = _this.getInfoFromICOBB.bind(_assertThisInitialized(_this));
    _this.getInfoFromERC20 = _this.getInfoFromERC20.bind(_assertThisInitialized(_this));
    _this.getAllPastEvents = _this.getAllPastEvents.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IfoDetail, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var theERC20, tokenAdd, instancia, miArray, events;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                theERC20 = __WEBPACK_IMPORTED_MODULE_3_truffle_contract___default()(__WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json___default.a);
                theERC20.setProvider(web3.currentProvider);
                _context.next = 4;
                return this.props.contrato.getTokenAddressByID.call(this.props.IcoID);

              case 4:
                tokenAdd = _context.sent;
                instancia = theERC20.at(tokenAdd);
                miArray = new Array();
                this.setState({
                  instance: instancia
                });
                miArray = new Array();
                _context.next = 11;
                return instancia.allEvents({
                  fromBlock: 0,
                  toBlock: "latest"
                });

              case 11:
                events = _context.sent;
                events.get(function (err, logs) {
                  for (var i = 0; i < logs.length; i++) {
                    var miEvent = new Object();
                    miEvent.from = logs[i].args.from;
                    miEvent.to = logs[i].args.to;
                    miEvent.value = logs[i].args.value.toNumber();
                    miEvent.aSupply = logs[i].args.aSupply.toNumber(); //console.log(miEvent.from); console.log(miEvent.to); console.log(miEvent.value);

                    miArray.push(miEvent);
                  }
                });
                console.log(miArray);
                this.setState({
                  arrayEvents: miArray,
                  instance: instancia
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }()
  }, {
    key: "getInfoFromICOBB",
    value: function () {
      var _getInfoFromICOBB = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var contrato, icoName, oDate, cDate, tokenAdd;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                contrato = this.props.contrato;
                _context2.next = 3;
                return contrato.getICOnameByID(this.props.IcoID);

              case 3:
                icoName = _context2.sent;
                _context2.next = 6;
                return contrato.getOpeningDateNameByID.call(this.props.IcoID);

              case 6:
                oDate = _context2.sent;
                _context2.next = 9;
                return contrato.getClosingDateNameByID.call(this.props.IcoID);

              case 9:
                cDate = _context2.sent;
                this.setState({
                  nameICO: icoName,
                  openingDate: oDate,
                  closingDate: cDate
                });
                _context2.next = 13;
                return contrato.getTokenAddressByID.call(this.props.IcoID);

              case 13:
                tokenAdd = _context2.sent;
                this.getInfoFromERC20(tokenAdd);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInfoFromICOBB() {
        return _getInfoFromICOBB.apply(this, arguments);
      };
    }()
  }, {
    key: "getInfoFromERC20",
    value: function () {
      var _getInfoFromERC = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(addr) {
        var tokName, symbol, decimals, dec, tokPrice, tprice, supp, totSupply, aSupp, actSupply;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.state.instance.tokenName();

              case 2:
                tokName = _context3.sent;
                _context3.next = 5;
                return this.state.instance.symbol();

              case 5:
                symbol = _context3.sent;
                _context3.next = 8;
                return this.state.instance.decimals();

              case 8:
                decimals = _context3.sent;
                dec = decimals.toNumber();
                _context3.next = 12;
                return this.state.instance.buyPrice();

              case 12:
                tokPrice = _context3.sent;
                tprice = tokPrice.toNumber();
                _context3.next = 16;
                return this.state.instance.totalSupply();

              case 16:
                supp = _context3.sent;
                totSupply = supp.toNumber();
                _context3.next = 20;
                return this.state.instance.actualSupply();

              case 20:
                aSupp = _context3.sent;
                actSupply = aSupp.toNumber();
                this.setState({
                  tokenAddr: addr,
                  tokenName: tokName,
                  tokenSymbol: symbol,
                  price: tprice,
                  totalSupply: totSupply,
                  actualSupply: actSupply,
                  tokenDecimals: dec
                });

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getInfoFromERC20(_x) {
        return _getInfoFromERC.apply(this, arguments);
      };
    }()
  }, {
    key: "getAllPastEvents",
    value: function () {
      var _getAllPastEvents = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4() {
        var miArray, instancia, events;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log("MIIIERDA");
                miArray = new Array();

                while (this.state.instance == null) {}

                _context4.next = 5;
                return this.state.instance.allEvents({
                  fromBlock: 0,
                  toBlock: "latest"
                });

              case 5:
                events = _context4.sent;
                events.get(function (err, logs) {
                  for (var i = 0; i < logs.length; i++) {
                    var miEvent = new Object();
                    miEvent.from = logs[i].args.from;
                    miEvent.to = logs[i].args.to;
                    miEvent.value = logs[i].args.value.toNumber();
                    miEvent.aSupply = logs[i].args.aSupply.toNumber(); //console.log(miEvent.from); console.log(miEvent.to); console.log(miEvent.value);

                    miArray.push(miEvent);
                  }
                });
                console.log(miArray);
                this.setState({
                  arrayEvents: miArray
                });

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getAllPastEvents() {
        return _getAllPastEvents.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      this.getInfoFromICOBB();
      this.getAllPastEvents();
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["i" /* Row */], {
        className: "show-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["b" /* Col */], {
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        className: "list-group-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "ICO NAME ", this.state.nameICO)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, "Token name:"), " ", this.state.tokenName, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, "Token symbol:"), " ", this.state.tokenSymbol, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "ICO Opening Date:"), " ", this.state.openingDate, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, "ICO Closing Date:"), " ", this.state.closingDate, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, this.state.tokenName, " Price:"), "  ", this.state.price, " ether's "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, "Total Supply of ", this.state.tokenName, " in contract:"), " ", this.state.totalSupply), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "Actual Supply of ", this.state.tokenName, " in contract:"), " ", this.state.actualSupply)))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["b" /* Col */], {
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        className: "list-group-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, "INFO TO ADD TOKEN TO METAMASK")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, "Token Smart Contract Addres:")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, " ", this.state.tokenAddr), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "Token symbol:"), " ", this.state.tokenSymbol), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "Token Decimals Of precision:"), " ", this.state.tokenDecimals))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["i" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, "TOKEN BALANCES"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_BalancesList__["a" /* default */], {
        arrayEvents: this.state.arrayEvents,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return IfoDetail;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IfoDetail, "IfoDetail", "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/InfoDetail.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.2f36092e468b4a6f8fbf.hot-update.js.map