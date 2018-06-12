webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3__ = __webpack_require__("./node_modules/web3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__build_contracts_IcoDDBB_json__ = __webpack_require__("./build/contracts/IcoDDBB.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__build_contracts_IcoDDBB_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__build_contracts_IcoDDBB_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json__ = __webpack_require__("./build/contracts/createERC20_v2.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_truffle_contract__ = __webpack_require__("./node_modules/truffle-contract/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_truffle_contract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_truffle_contract__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Formu__ = __webpack_require__("./components/Formu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_IcoList__ = __webpack_require__("./components/IcoList.js");

var _jsxFileName = "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/pages/index.js";

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






 // REACT COMPONENTS


 // TODO ESTO SOBRA PORQUE USAMOS LA EXTENSION METAMASK

var web3;

if (typeof web3 !== 'undefined') {
  web3 = new __WEBPACK_IMPORTED_MODULE_3_web3___default.a(web3.currentProvider);
} else {
  //  Especificamos el provider 
  // empleando chrome con MetaMask el provider es injectado automaticamente
  web3 = new __WEBPACK_IMPORTED_MODULE_3_web3___default.a(new __WEBPACK_IMPORTED_MODULE_3_web3___default.a.providers.HttpProvider("http://localhost:7545"));
}

var account = web3.eth.accounts[0];
var arrayERC20 = new Array(); // guarda los contratos de los tokens creados

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  /* 
  * Constructor que define el estado del componente
  */
  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    _this.state = {
      contrato: null,
      lastICO: null,
      event_Register: null,

      /*event_CreateToken: null, */
      event_Transfer: null,
      id_Array: null
    };
    _this.formCliked = _this.formCliked.bind(_assertThisInitialized(_this));
    _this.registerNewICO = _this.registerNewICO.bind(_assertThisInitialized(_this));
    _this.deployNewERC20 = _this.deployNewERC20.bind(_assertThisInitialized(_this));
    _this.updateList = _this.updateList.bind(_assertThisInitialized(_this));
    _this.executeTransfer = _this.executeTransfer.bind(_assertThisInitialized(_this));
    return _this;
  }
  /*
  * Métdo invocado 1 vez antes de que el render inicial ocurra 
  */


  _createClass(App, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var _this2 = this;

        var theContract, contrato, eventReg;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                theContract = __WEBPACK_IMPORTED_MODULE_6_truffle_contract___default()(__WEBPACK_IMPORTED_MODULE_4__build_contracts_IcoDDBB_json___default.a);
                theContract.setProvider(web3.currentProvider); // CONTRATO		

                _context.next = 4;
                return theContract.deployed();

              case 4:
                contrato = _context.sent;
                // ESTO YA ME GUARDA EL CONTRATO
                //console.log("Contrato =", contrato);
                // EVENTO 
                eventReg = contrato.Register();
                /* Event Params: Register(uint id, string name, string opppening, string clossing, address icoOwner) */
                //console.log(event);
                // LANZAMOS WATCH

                eventReg.watch(function (err, event) {
                  //console.log(event);
                  if (err) {
                    console.log(err);
                  } else {
                    console.log("This is the event!"); //console.log(event);

                    console.log("ICO was created/registered by: " + event.args.icoOwner);
                    var icoId = event.args.id;
                    console.log("The last ICO was given the following ID: " + icoId);
                    var last = new Object();
                    last.id = event.args.id;
                    last.name = event.args.name;
                    last.opppeningDate = event.args.opppening;
                    last.clossingDate = event.args.clossing;
                    last.owner = event.args.icoOwner;
                    console.log(last.valueOf());

                    _this2.setState({
                      lastICO: last.valueOf()
                    });

                    _this2.updateList();
                  }
                });
                console.log("eventReg watch has been started");
                this.setState({
                  contrato: contrato,
                  event_Register: eventReg
                });

              case 9:
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
    /*
    * Metodo que recibe props del componente Form con la info introducida
    */

  }, {
    key: "formCliked",
    value: function formCliked(formInfo) {
      console.log("formInfo recieved"); //console.log(formInfo);
      // Guardar nueva ICO en Smart Contract IcoDDBB.sol

      this.registerNewICO(formInfo); // Desplegar ERC20 de la new ICO

      this.deployNewERC20(formInfo); // Actualizar listado de ICos

      this.updateList();
    }
    /*
    * Se conecta con la blockchain para interactuar con el smart contract IcoDDBB.sol
    */

  }, {
    key: "registerNewICO",
    value: function registerNewICO(info) {
      console.log(">>>>REGISTER<<<<<<"); //console.log(info);
      //register(string name, string opppening, string clossing)

      this.state.contrato.register(info.icoName, info.tokenName, info.OpeningDate, info.ClossingDate, info.tokenPrice, {
        from: account,
        gas: 2000000
      }).then(function (res) {
        console.log(">>>>>>>>>>>> +1 succes");
      }).catch(function (err) {
        console.log("ERROR", err);
      });
    }
    /*
    * Método que despliega sobre la Blockhain el nuevo ERC20 creado
    */

  }, {
    key: "deployNewERC20",
    value: function () {
      var _deployNewERC = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(info) {
        var theERC20, contrato, eventTransfer;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(">>>>DEPLOY ERC20<<<<<<"); //console.log(info);

                theERC20 = __WEBPACK_IMPORTED_MODULE_6_truffle_contract___default()(__WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json___default.a);
                theERC20.setProvider(web3.currentProvider); // CONTRATO		
                //createERC20 (string tName, string  tSymbol, uint nDecimals, uint256  initialSup, uint256 p_buy, address owner)

                _context2.next = 5;
                return theERC20.deployed();

              case 5:
                contrato = _context2.sent;
                //console.log("Contrato =", contrato);
                arrayERC20.push(contrato); //console.log("array lenght" + arrayERC20.length);

                contrato.setERC2Params(info.tokenName, info.symbol, info.tokenDecimals, info.tokenTotalSupply, info.tokenPrice, account, {
                  from: account,
                  gas: 200000
                }).then(function (res, err) {
                  if (!err) {
                    console.log(">>>>> PARAMs SET <<<<<<");
                  } else {
                    console.log(err);
                  }
                }); // EVENTO
                // event Transfer(address indexed from, address indexed to, uint256 value)

                eventTransfer = contrato.Transfer(); //console.log(eventTransfer);
                // LANZAMOS WATCH

                eventTransfer.watch(function (err, event) {
                  //console.log(event);
                  if (err) {
                    console.log(err);
                  } else {
                    console.log("This is the Transfer event!"); //console.log(event);

                    console.log(">>>>> TANSFER MADE <<<<<");
                    console.log("Anamount of " + event.args.value + " tokens have been transfered to " + event.args.to);
                    updateList();
                  }
                });
                console.log("eventTransfer watch has been started");
                this.setState({
                  event_Transfer: eventTransfer
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function deployNewERC20(_x) {
        return _deployNewERC.apply(this, arguments);
      };
    }()
    /*
    * Metodo que pide a la Blockchain el array de id's de las ICOs
    */

  }, {
    key: "updateList",
    value: function () {
      var _updateList = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
        var idArray;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log("UPDATE ICO LIST ");
                idArray = [];
                _context3.next = 4;
                return this.state.contrato.getIdIcos.call();

              case 4:
                idArray = _context3.sent;
                //console.log("ARRAY");
                //console.log(idArray);
                this.setState({
                  id_Array: idArray
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function updateList() {
        return _updateList.apply(this, arguments);
      };
    }()
    /*
    *
    */

  }, {
    key: "executeTransfer",
    value: function executeTransfer(contract) {
      //console.log("TRAZA 4");
      //console.log(contract);
      contract.transfer(account, 100, {
        from: account,
        gas: 200000
      });
    }
    /*
    * Invocado inmediatamente antes de que un componente se desmonte del DOM
    */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // TEAR DOWN WATCH
      this.state.event_Register.stopWatching(); //this.state.event_CreateToken.stopWatching();

      this.state.event_Transfer.stopWatching();
      console.log("watch's have been tore down");
    }
    /*
    * Metodo render que renderiza la vista ppal
    */

  }, {
    key: "render",
    value: function render() {
      this.updateList();
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Navbar */], {
        inverse: true,
        collapseOnSelect: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Navbar */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        className: "cabName",
        style: {
          color: "white",
          fontSize: "4vh",
          float: "left",
          marginLeft: "-100px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, "ICO PLATAFORM by svu")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* Col */], {
        md: 5,
        style: {
          borderRight: "solid"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Formu__["a" /* default */], {
        formCliked: this.formCliked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* Col */], {
        md: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_IcoList__["a" /* default */], {
        ICOarray: this.state.id_Array,
        instancia: this.state.contrato,
        arrayERC20: arrayERC20,
        getERC20contract: this.executeTransfer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
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

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(web3, "web3", "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/pages/index.js");
  reactHotLoader.register(account, "account", "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/pages/index.js");
  reactHotLoader.register(arrayERC20, "arrayERC20", "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/pages/index.js");
  reactHotLoader.register(App, "App", "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.eb78a284a97093cd9bef.hot-update.js.map