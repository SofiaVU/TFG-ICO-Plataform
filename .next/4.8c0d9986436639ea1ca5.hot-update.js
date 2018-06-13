webpackHotUpdate(4,{

/***/ "./components/IcoList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcoList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_IcoDetail__ = __webpack_require__("./components/IcoDetail.js");
var _jsxFileName = "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/IcoList.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var IcoList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IcoList, _React$Component);

  /*
     * constructor que maneja las props recibidas y la enví al componente padre
     */
  function IcoList(props) {
    var _this;

    _classCallCheck(this, IcoList);

    _this = _possibleConstructorReturn(this, (IcoList.__proto__ || Object.getPrototypeOf(IcoList)).call(this, props));
    _this.getIDfromDetail = _this.getIDfromDetail.bind(_assertThisInitialized(_this));
    _this.navControl = _this.navControl.bind(_assertThisInitialized(_this));
    _this.clickedICO = _this.clickedICO.bind(_assertThisInitialized(_this));
    return _this;
  }
  /*
  *
  */


  _createClass(IcoList, [{
    key: "getIDfromDetail",
    value: function getIDfromDetail(id) {
      // Recibe de IcoDetail el id de la ICO sobre la que se ha pulsado
      // envia a index el contratoERC20 de dicha ICO
      console.log("TRAZA 2");
      console.log(id); //this.props.getERC20contract(this.props.arrayERC20[id]);

      this.props.getERC20contract(id); //console.log("TRAZA 3");
      //console.log(this.props.arrayERC20[id]);
      //console.log(this.props.arrayERC20);
    }
  }, {
    key: "navControl",
    value: function navControl(view) {
      this.props.navControl(view);
    }
  }, {
    key: "clickedICO",
    value: function clickedICO(id) {}
    /*
    * Renderizado del componente: maneja la lista de icos
    */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.ICOarray === null) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, " Cargando... ");
      } //lista procedente de componente padre


      var lista = [];
      lista = this.props.ICOarray.map(function (icoID, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_IcoDetail__["a" /* default */], {
          key: index,
          ico: icoID,
          instancia: _this2.props.instancia,
          getID: _this2.getIDfromDetail,
          navControl: _this2.props.navControl,
          clickedICO: _this2.props.clickedICO,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }); //return(<IcoDetail key={index} ico={icoAddr} instancia={this.props.instancia} />);
      });
      var instanciaContrato = this.props.instancia; // devolvemos la lista

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["i" /* Table */], {
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Opening date"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Closing date"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Token name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Token price (in ether)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
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

  return IcoList;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IcoList, "IcoList", "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/IcoList.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.8c0d9986436639ea1ca5.hot-update.js.map