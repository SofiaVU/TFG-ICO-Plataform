webpackHotUpdate(4,{

/***/ "./components/BalancesList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalancesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/BalancesList.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BalancesList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BalancesList, _React$Component);

  function BalancesList() {
    _classCallCheck(this, BalancesList);

    return _possibleConstructorReturn(this, (BalancesList.__proto__ || Object.getPrototypeOf(BalancesList)).apply(this, arguments));
  }

  _createClass(BalancesList, [{
    key: "render",

    /*
       * Renderizado del componente: maneja la lista de icos
       */
    value: function render() {
      var _this = this;

      if (this.props.arrayEvents === null) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, " Cargando... ");
      } //lista procedente de componente padre


      var lista = [];
      lista = this.props.arrayEvents.map(function (event, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, event.from), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, event.to), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, event.value), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, event.aSupply), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, _this.props.total)); //return(<IcoDetail key={index} ico={icoAddr} instancia={this.props.instancia} />);
      });
      var instanciaContrato = this.props.instancia; // devolvemos la lista

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["j" /* Table */], {
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "From"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "To"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Amount"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Actual Supply"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, lista)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return BalancesList;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BalancesList, "BalancesList", "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/BalancesList.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.0b48fed31ade7cf549b3.hot-update.js.map