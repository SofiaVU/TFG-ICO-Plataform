module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/contracts/IcoDDBB.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"IcoDDBB","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"arrayIdICOs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"oppening","type":"string"},{"indexed":false,"name":"closing","type":"string"},{"indexed":false,"name":"icoOwner","type":"address"}],"name":"Register","type":"event"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"token","type":"address"},{"name":"opppening","type":"string"},{"name":"clossing","type":"string"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numberOfIcos","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getIdIcos","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getICOnameByID","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getTokenAddressByID","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getOpeningDateNameByID","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getClosingDateNameByID","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getOwnerAddeByID","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x6080604052600060025534801561001557600080fd5b5033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610d31806100666000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634d397f45146100a957806358e08907146100ea57806382495eba146101575780638da5cb5b146101c3578063a9ecaad41461021a578063afa028581461032f578063bc0d3a58146103d5578063dd7de9061461047b578063df0dc1d3146104e8578063f7a8365414610513575b600080fd5b3480156100b557600080fd5b506100d4600480360381019080803590602001909291905050506105b9565b6040518082815260200191505060405180910390f35b3480156100f657600080fd5b50610115600480360381019080803590602001909291905050506105dc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561016357600080fd5b5061016c61061b565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101af578082015181840152602081019050610194565b505050509050019250505060405180910390f35b3480156101cf57600080fd5b506101d8610673565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561022657600080fd5b5061032d600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610699565b005b34801561033b57600080fd5b5061035a600480360381019080803590602001909291905050506109ef565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039a57808201518184015260208101905061037f565b50505050905090810190601f1680156103c75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103e157600080fd5b5061040060048036038101908080359060200190929190505050610aa6565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610440578082015181840152602081019050610425565b50505050905090810190601f16801561046d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561048757600080fd5b506104a660048036038101908080359060200190929190505050610b5d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104f457600080fd5b506104fd610b9c565b6040518082815260200191505060405180910390f35b34801561051f57600080fd5b5061053e60048036038101908080359060200190929190505050610ba9565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561057e578082015181840152602081019050610563565b50505050905090810190601f1680156105ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6001818154811015156105c857fe5b906000526020600020016000915090505481565b600080600083815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6060600180548060200260200160405190810160405280929190818152602001828054801561066957602002820191906000526020600020905b815481526020019060010190808311610655575b5050505050905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60c06040519081016040528060025481526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff16815250600080600254815260200190815260200160002060008201518160000155602082015181600101908051906020019061072f929190610c60565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019080519060200190610793929190610c60565b5060808201518160040190805190602001906107b0929190610c60565b5060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050600160025490806001815401808255809150509060018203906000526020600020016000909192909190915055507f8bfebf5e8e45f1fe7017418cf4efb6f7c66b687463e689c1392f1c1aefc258f960025485848433604051808681526020018060200180602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848103845288818151815260200191508051906020019080838360005b838110156108d15780820151818401526020810190506108b6565b50505050905090810190601f1680156108fe5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b8381101561093757808201518184015260208101905061091c565b50505050905090810190601f1680156109645780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019080838360005b8381101561099d578082015181840152602081019050610982565b50505050905090810190601f1680156109ca5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a160016002540160028190555050505050565b60606000808381526020019081526020016000206004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a9a5780601f10610a6f57610100808354040283529160200191610a9a565b820191906000526020600020905b815481529060010190602001808311610a7d57829003601f168201915b50505050509050919050565b60606000808381526020019081526020016000206001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b515780601f10610b2657610100808354040283529160200191610b51565b820191906000526020600020905b815481529060010190602001808311610b3457829003601f168201915b50505050509050919050565b600080600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600180549050905090565b60606000808381526020019081526020016000206003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c545780601f10610c2957610100808354040283529160200191610c54565b820191906000526020600020905b815481529060010190602001808311610c3757829003601f168201915b50505050509050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ca157805160ff1916838001178555610ccf565b82800160010185558215610ccf579182015b82811115610cce578251825591602001919060010190610cb3565b5b509050610cdc9190610ce0565b5090565b610d0291905b80821115610cfe576000816000905550600101610ce6565b5090565b905600a165627a7a723058201f1cf3c077a1027447c218814ec41e0fd8997201d9ec32a4a8605332dbcb67430029","deployedBytecode":"0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634d397f45146100a957806358e08907146100ea57806382495eba146101575780638da5cb5b146101c3578063a9ecaad41461021a578063afa028581461032f578063bc0d3a58146103d5578063dd7de9061461047b578063df0dc1d3146104e8578063f7a8365414610513575b600080fd5b3480156100b557600080fd5b506100d4600480360381019080803590602001909291905050506105b9565b6040518082815260200191505060405180910390f35b3480156100f657600080fd5b50610115600480360381019080803590602001909291905050506105dc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561016357600080fd5b5061016c61061b565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101af578082015181840152602081019050610194565b505050509050019250505060405180910390f35b3480156101cf57600080fd5b506101d8610673565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561022657600080fd5b5061032d600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610699565b005b34801561033b57600080fd5b5061035a600480360381019080803590602001909291905050506109ef565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039a57808201518184015260208101905061037f565b50505050905090810190601f1680156103c75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103e157600080fd5b5061040060048036038101908080359060200190929190505050610aa6565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610440578082015181840152602081019050610425565b50505050905090810190601f16801561046d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561048757600080fd5b506104a660048036038101908080359060200190929190505050610b5d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104f457600080fd5b506104fd610b9c565b6040518082815260200191505060405180910390f35b34801561051f57600080fd5b5061053e60048036038101908080359060200190929190505050610ba9565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561057e578082015181840152602081019050610563565b50505050905090810190601f1680156105ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6001818154811015156105c857fe5b906000526020600020016000915090505481565b600080600083815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6060600180548060200260200160405190810160405280929190818152602001828054801561066957602002820191906000526020600020905b815481526020019060010190808311610655575b5050505050905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60c06040519081016040528060025481526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff16815250600080600254815260200190815260200160002060008201518160000155602082015181600101908051906020019061072f929190610c60565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019080519060200190610793929190610c60565b5060808201518160040190805190602001906107b0929190610c60565b5060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050600160025490806001815401808255809150509060018203906000526020600020016000909192909190915055507f8bfebf5e8e45f1fe7017418cf4efb6f7c66b687463e689c1392f1c1aefc258f960025485848433604051808681526020018060200180602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848103845288818151815260200191508051906020019080838360005b838110156108d15780820151818401526020810190506108b6565b50505050905090810190601f1680156108fe5780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b8381101561093757808201518184015260208101905061091c565b50505050905090810190601f1680156109645780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019080838360005b8381101561099d578082015181840152602081019050610982565b50505050905090810190601f1680156109ca5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a160016002540160028190555050505050565b60606000808381526020019081526020016000206004018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a9a5780601f10610a6f57610100808354040283529160200191610a9a565b820191906000526020600020905b815481529060010190602001808311610a7d57829003601f168201915b50505050509050919050565b60606000808381526020019081526020016000206001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b515780601f10610b2657610100808354040283529160200191610b51565b820191906000526020600020905b815481529060010190602001808311610b3457829003601f168201915b50505050509050919050565b600080600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600180549050905090565b60606000808381526020019081526020016000206003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c545780601f10610c2957610100808354040283529160200191610c54565b820191906000526020600020905b815481529060010190602001808311610c3757829003601f168201915b50505050509050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ca157805160ff1916838001178555610ccf565b82800160010185558215610ccf579182015b82811115610cce578251825591602001919060010190610cb3565b5b509050610cdc9190610ce0565b5090565b610d0291905b80821115610cfe576000816000905550600101610ce6565b5090565b905600a165627a7a723058201f1cf3c077a1027447c218814ec41e0fd8997201d9ec32a4a8605332dbcb67430029","sourceMap":"25:3358:0:-;;;583:1;565:19;;823:56;8:9:-1;5:2;;;30:1;27;20:12;5:2;823:56:0;862:10;854:5;;:18;;;;;;;;;;;;;;;;;;25:3358;;;;;;","deployedSourceMap":"25:3358:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;516:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;516:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3271:110;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3271:110:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2134:91;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2134:91:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2134:91:0;;;;;;;;;;;;;;;;;595:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;595:20:0;;;;;;;;;;;;;;;;;;;;;;;;;;;960:515;;8:9:-1;5:2;;;30:1;27;20:12;5:2;960:515:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3078:121;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3078:121:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3078:121:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:106;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2295:106:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2295:106:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2674:121;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2674:121:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1957:97;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1957:97:0;;;;;;;;;;;;;;;;;;;;;;;2876:121;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2876:121:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2876:121:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;516:25;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3271:110::-;3331:7;3357;:11;3365:2;3357:11;;;;;;;;;;;:17;;;;;;;;;;;;3350:24;;3271:110;;;:::o;2134:91::-;2182:6;2207:11;2200:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2134:91;:::o;595:20::-;;;;;;;;;;;;;:::o;960:515::-;1193:61;;;;;;;;;1197:10;;1193:61;;;;1209:4;1193:61;;;;1215:5;1193:61;;;;;;1222:9;1193:61;;;;1233:8;1193:61;;;;1243:10;1193:61;;;;;1171:7;:19;1179:10;;1171:19;;;;;;;;;;;:83;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1263:11;1280:10;;1263:28;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1263:28:0;;;;;;;;;;;;;;;;;;;;;;1313:59;1322:10;;1334:4;1340:9;1351:8;1361:10;1313:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1313:59:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1313:59:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1313:59:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1434:1;1421:10;;:14;1408:10;:27;;;;960:515;;;;:::o;3078:121::-;3144:6;3169:7;:11;3177:2;3169:11;;;;;;;;;;;:23;;3162:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3078:121;;;:::o;2295:106::-;2353:6;2378:7;:11;2386:2;2378:11;;;;;;;;;;;:16;;2371:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:106;;;:::o;2674:121::-;2737:7;2763;:11;2771:2;2763:11;;;;;;;;;;;:25;;;;;;;;;;;;2756:32;;2674:121;;;:::o;1957:97::-;2006:4;2029:11;:18;;;;2022:25;;1957:97;:::o;2876:121::-;2942:6;2967:7;:11;2975:2;2967:11;;;;;;;;;;;:23;;2960:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2876:121;;;:::o;25:3358::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.4.4;\n\ncontract IcoDDBB   {\n    \n    struct ICO {\n        uint id;\n        string name;\n        address tokenContract;\n        string openingDate;\n        string closingDate;\n        //uint tokenPrice;\n        address owner; \n        //address ERC2contract; // guardo la dir del contrato que crea el token de la ico asociado\n    }\n    \n    //mapping (address => ICO) private icoListAdd;\n    //address[] public addrIcos;\n   \n    mapping (uint => ICO) private icoList; // Diccionario (id -> ICO)\n    uint[] public arrayIdICOs; // todos los id's\n    uint id_counter = 0;\n    \n    address public owner;\n    \n    // EVENTS\n    event Register(uint id, string name, string oppening, string closing, address icoOwner);\n    \n    /*\n    * Constructor del Smart Contract\n    */\n    //function IcoDDBB() public {\n    constructor() public {\n        owner = msg.sender;\n    }\n      \n    /*\n    * Funcion registart una nueva ICO en la plataforma\n    */\n    function register(string name, address token,  string opppening, string clossing) public {\n       \n       //icoList[id_counter] = ICO(id_counter, name, token, opppening, clossing, tokenPric, msg.sender);\n       icoList[id_counter] = ICO(id_counter, name, token, opppening, clossing, msg.sender);\n       arrayIdICOs.push(id_counter);\n       \n       emit Register(id_counter, name, opppening, clossing, msg.sender);// lanzamos evento \n       \n       id_counter = id_counter + 1; // actualizamos contador de ICOs\n    }\n    \n    //////////////////////////////////////////////////////////////////////////\n    //                                                                      //\n    //                      GETTER FUNCTIONS                                //\n    //                                                                      //\n    //////////////////////////////////////////////////////////////////////////\n    \n    \n    /*\n    * Devuelve el numero de ICOs creadas/registradas\n    */\n    function numberOfIcos() public constant returns (uint) {\n        return arrayIdICOs.length;\n    }\n    \n    /*\n    * Devuleve el array con todos los id's nde las ICOs\n    */\n    function getIdIcos ()  public constant returns (uint[]) {\n        return arrayIdICOs;\n    }\n    \n    /*\n    * Devuleve el nombre de la ICO dado su id\n    */\n    function getICOnameByID(uint id) public constant returns (string) {\n        return icoList[id].name;\n    }\n\n    /*\n    * Devuleve el precio del token de la ICO dado su id\n    */\n    /*function getTokenPriceByID(uint id) public constant returns (uint) {\n        return icoList[id].tokenPrice;\n    }*/\n    \n    /*\n    * Devuleve el nombre del token de la ICO dado su id\n    */\n    function getTokenAddressByID(uint id) public constant returns (address) {\n        return icoList[id].tokenContract;\n    }\n    \n    /*\n    * Devuleve la fecha de apertura de la ICO dado su id\n    */\n    function getOpeningDateNameByID(uint id) public constant returns (string) {\n        return icoList[id].openingDate;\n    }\n    \n    /*\n    * Devuleve la fecha de apertura de la ICO dado su id\n    */\n    function getClosingDateNameByID(uint id) public constant returns (string) {\n        return icoList[id].closingDate;\n    }\n    \n    /*\n    * Devuleve el creador  de la ICO dado su id\n    */\n    function getOwnerAddeByID(uint id) public constant returns (address) {\n        return icoList[id].owner;\n    }\n}","sourcePath":"/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/contracts/IcoDDBB.sol","ast":{"absolutePath":"/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/contracts/IcoDDBB.sol","exportedSymbols":{"IcoDDBB":[178]},"id":179,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".4"],"nodeType":"PragmaDirective","src":"0:23:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":178,"linearizedBaseContracts":[178],"name":"IcoDDBB","nodeType":"ContractDefinition","nodes":[{"canonicalName":"IcoDDBB.ICO","id":14,"members":[{"constant":false,"id":3,"name":"id","nodeType":"VariableDeclaration","scope":14,"src":"76:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":2,"name":"uint","nodeType":"ElementaryTypeName","src":"76:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":5,"name":"name","nodeType":"VariableDeclaration","scope":14,"src":"93:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":4,"name":"string","nodeType":"ElementaryTypeName","src":"93:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":7,"name":"tokenContract","nodeType":"VariableDeclaration","scope":14,"src":"114:21:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6,"name":"address","nodeType":"ElementaryTypeName","src":"114:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":9,"name":"openingDate","nodeType":"VariableDeclaration","scope":14,"src":"145:18:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":8,"name":"string","nodeType":"ElementaryTypeName","src":"145:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":11,"name":"closingDate","nodeType":"VariableDeclaration","scope":14,"src":"173:18:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":10,"name":"string","nodeType":"ElementaryTypeName","src":"173:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":13,"name":"owner","nodeType":"VariableDeclaration","scope":14,"src":"228:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":12,"name":"address","nodeType":"ElementaryTypeName","src":"228:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"name":"ICO","nodeType":"StructDefinition","scope":178,"src":"55:293:0","visibility":"public"},{"constant":false,"id":18,"name":"icoList","nodeType":"VariableDeclaration","scope":178,"src":"446:37:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO)"},"typeName":{"id":17,"keyType":{"id":15,"name":"uint","nodeType":"ElementaryTypeName","src":"455:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Mapping","src":"446:21:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO)"},"valueType":{"contractScope":null,"id":16,"name":"ICO","nodeType":"UserDefinedTypeName","referencedDeclaration":14,"src":"463:3:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage_ptr","typeString":"struct IcoDDBB.ICO"}}},"value":null,"visibility":"private"},{"constant":false,"id":21,"name":"arrayIdICOs","nodeType":"VariableDeclaration","scope":178,"src":"516:25:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[]"},"typeName":{"baseType":{"id":19,"name":"uint","nodeType":"ElementaryTypeName","src":"516:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":20,"length":null,"nodeType":"ArrayTypeName","src":"516:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"public"},{"constant":false,"id":24,"name":"id_counter","nodeType":"VariableDeclaration","scope":178,"src":"565:19:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":22,"name":"uint","nodeType":"ElementaryTypeName","src":"565:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":23,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"583:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"internal"},{"constant":false,"id":26,"name":"owner","nodeType":"VariableDeclaration","scope":178,"src":"595:20:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":25,"name":"address","nodeType":"ElementaryTypeName","src":"595:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":38,"name":"Register","nodeType":"EventDefinition","parameters":{"id":37,"nodeType":"ParameterList","parameters":[{"constant":false,"id":28,"indexed":false,"name":"id","nodeType":"VariableDeclaration","scope":38,"src":"655:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":27,"name":"uint","nodeType":"ElementaryTypeName","src":"655:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":30,"indexed":false,"name":"name","nodeType":"VariableDeclaration","scope":38,"src":"664:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":29,"name":"string","nodeType":"ElementaryTypeName","src":"664:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":32,"indexed":false,"name":"oppening","nodeType":"VariableDeclaration","scope":38,"src":"677:15:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":31,"name":"string","nodeType":"ElementaryTypeName","src":"677:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":34,"indexed":false,"name":"closing","nodeType":"VariableDeclaration","scope":38,"src":"694:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":33,"name":"string","nodeType":"ElementaryTypeName","src":"694:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":36,"indexed":false,"name":"icoOwner","nodeType":"VariableDeclaration","scope":38,"src":"710:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":35,"name":"address","nodeType":"ElementaryTypeName","src":"710:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"654:73:0"},"src":"640:88:0"},{"body":{"id":46,"nodeType":"Block","src":"844:35:0","statements":[{"expression":{"argumentTypes":null,"id":44,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":41,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"854:5:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":42,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"862:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":43,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"862:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"854:18:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":45,"nodeType":"ExpressionStatement","src":"854:18:0"}]},"documentation":null,"id":47,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":39,"nodeType":"ParameterList","parameters":[],"src":"834:2:0"},"payable":false,"returnParameters":{"id":40,"nodeType":"ParameterList","parameters":[],"src":"844:0:0"},"scope":178,"src":"823:56:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":93,"nodeType":"Block","src":"1049:426:0","statements":[{"expression":{"argumentTypes":null,"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":58,"name":"icoList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"1171:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO storage ref)"}},"id":60,"indexExpression":{"argumentTypes":null,"id":59,"name":"id_counter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"1179:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1171:19:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":62,"name":"id_counter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"1197:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":63,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":49,"src":"1209:4:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":64,"name":"token","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"1215:5:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":65,"name":"opppening","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":53,"src":"1222:9:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":66,"name":"clossing","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1233:8:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":67,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"1243:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":68,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1243:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_address","typeString":"address"}],"id":61,"name":"ICO","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":14,"src":"1193:3:0","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_ICO_$14_storage_ptr_$","typeString":"type(struct IcoDDBB.ICO storage pointer)"}},"id":69,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1193:61:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_memory","typeString":"struct IcoDDBB.ICO memory"}},"src":"1171:83:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"id":71,"nodeType":"ExpressionStatement","src":"1171:83:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":75,"name":"id_counter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"1280:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":72,"name":"arrayIdICOs","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"1263:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":74,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1263:16:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":76,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1263:28:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":77,"nodeType":"ExpressionStatement","src":"1263:28:0"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":79,"name":"id_counter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"1322:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":80,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":49,"src":"1334:4:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":81,"name":"opppening","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":53,"src":"1340:9:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":82,"name":"clossing","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1351:8:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":83,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"1361:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":84,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1361:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_address","typeString":"address"}],"id":78,"name":"Register","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":38,"src":"1313:8:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$returns$__$","typeString":"function (uint256,string memory,string memory,string memory,address)"}},"id":85,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1313:59:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":86,"nodeType":"EmitStatement","src":"1308:64:0"},{"expression":{"argumentTypes":null,"id":91,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":87,"name":"id_counter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"1408:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":90,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":88,"name":"id_counter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"1421:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"hexValue":"31","id":89,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1434:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1421:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1408:27:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":92,"nodeType":"ExpressionStatement","src":"1408:27:0"}]},"documentation":null,"id":94,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"register","nodeType":"FunctionDefinition","parameters":{"id":56,"nodeType":"ParameterList","parameters":[{"constant":false,"id":49,"name":"name","nodeType":"VariableDeclaration","scope":94,"src":"978:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":48,"name":"string","nodeType":"ElementaryTypeName","src":"978:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":51,"name":"token","nodeType":"VariableDeclaration","scope":94,"src":"991:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":50,"name":"address","nodeType":"ElementaryTypeName","src":"991:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":53,"name":"opppening","nodeType":"VariableDeclaration","scope":94,"src":"1007:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":52,"name":"string","nodeType":"ElementaryTypeName","src":"1007:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":55,"name":"clossing","nodeType":"VariableDeclaration","scope":94,"src":"1025:15:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":54,"name":"string","nodeType":"ElementaryTypeName","src":"1025:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"977:64:0"},"payable":false,"returnParameters":{"id":57,"nodeType":"ParameterList","parameters":[],"src":"1049:0:0"},"scope":178,"src":"960:515:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":102,"nodeType":"Block","src":"2012:42:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":99,"name":"arrayIdICOs","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"2029:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":100,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2029:18:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":98,"id":101,"nodeType":"Return","src":"2022:25:0"}]},"documentation":"///////////////////////////////////////////////////////////////////////","id":103,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"numberOfIcos","nodeType":"FunctionDefinition","parameters":{"id":95,"nodeType":"ParameterList","parameters":[],"src":"1978:2:0"},"payable":false,"returnParameters":{"id":98,"nodeType":"ParameterList","parameters":[{"constant":false,"id":97,"name":"","nodeType":"VariableDeclaration","scope":103,"src":"2006:4:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":96,"name":"uint","nodeType":"ElementaryTypeName","src":"2006:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2005:6:0"},"scope":178,"src":"1957:97:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":111,"nodeType":"Block","src":"2190:35:0","statements":[{"expression":{"argumentTypes":null,"id":109,"name":"arrayIdICOs","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"2207:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"functionReturnParameters":108,"id":110,"nodeType":"Return","src":"2200:18:0"}]},"documentation":null,"id":112,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getIdIcos","nodeType":"FunctionDefinition","parameters":{"id":104,"nodeType":"ParameterList","parameters":[],"src":"2153:2:0"},"payable":false,"returnParameters":{"id":108,"nodeType":"ParameterList","parameters":[{"constant":false,"id":107,"name":"","nodeType":"VariableDeclaration","scope":112,"src":"2182:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":105,"name":"uint","nodeType":"ElementaryTypeName","src":"2182:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":106,"length":null,"nodeType":"ArrayTypeName","src":"2182:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"}],"src":"2181:8:0"},"scope":178,"src":"2134:91:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":124,"nodeType":"Block","src":"2361:40:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":119,"name":"icoList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"2378:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO storage ref)"}},"id":121,"indexExpression":{"argumentTypes":null,"id":120,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":114,"src":"2386:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2378:11:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"id":122,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":5,"src":"2378:16:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":118,"id":123,"nodeType":"Return","src":"2371:23:0"}]},"documentation":null,"id":125,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getICOnameByID","nodeType":"FunctionDefinition","parameters":{"id":115,"nodeType":"ParameterList","parameters":[{"constant":false,"id":114,"name":"id","nodeType":"VariableDeclaration","scope":125,"src":"2319:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":113,"name":"uint","nodeType":"ElementaryTypeName","src":"2319:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2318:9:0"},"payable":false,"returnParameters":{"id":118,"nodeType":"ParameterList","parameters":[{"constant":false,"id":117,"name":"","nodeType":"VariableDeclaration","scope":125,"src":"2353:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":116,"name":"string","nodeType":"ElementaryTypeName","src":"2353:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2352:8:0"},"scope":178,"src":"2295:106:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":137,"nodeType":"Block","src":"2746:49:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":132,"name":"icoList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"2763:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO storage ref)"}},"id":134,"indexExpression":{"argumentTypes":null,"id":133,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":127,"src":"2771:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2763:11:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"id":135,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"tokenContract","nodeType":"MemberAccess","referencedDeclaration":7,"src":"2763:25:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"functionReturnParameters":131,"id":136,"nodeType":"Return","src":"2756:32:0"}]},"documentation":null,"id":138,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getTokenAddressByID","nodeType":"FunctionDefinition","parameters":{"id":128,"nodeType":"ParameterList","parameters":[{"constant":false,"id":127,"name":"id","nodeType":"VariableDeclaration","scope":138,"src":"2703:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":126,"name":"uint","nodeType":"ElementaryTypeName","src":"2703:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2702:9:0"},"payable":false,"returnParameters":{"id":131,"nodeType":"ParameterList","parameters":[{"constant":false,"id":130,"name":"","nodeType":"VariableDeclaration","scope":138,"src":"2737:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":129,"name":"address","nodeType":"ElementaryTypeName","src":"2737:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"2736:9:0"},"scope":178,"src":"2674:121:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":150,"nodeType":"Block","src":"2950:47:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":145,"name":"icoList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"2967:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO storage ref)"}},"id":147,"indexExpression":{"argumentTypes":null,"id":146,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":140,"src":"2975:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2967:11:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"id":148,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"openingDate","nodeType":"MemberAccess","referencedDeclaration":9,"src":"2967:23:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":144,"id":149,"nodeType":"Return","src":"2960:30:0"}]},"documentation":null,"id":151,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getOpeningDateNameByID","nodeType":"FunctionDefinition","parameters":{"id":141,"nodeType":"ParameterList","parameters":[{"constant":false,"id":140,"name":"id","nodeType":"VariableDeclaration","scope":151,"src":"2908:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":139,"name":"uint","nodeType":"ElementaryTypeName","src":"2908:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2907:9:0"},"payable":false,"returnParameters":{"id":144,"nodeType":"ParameterList","parameters":[{"constant":false,"id":143,"name":"","nodeType":"VariableDeclaration","scope":151,"src":"2942:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":142,"name":"string","nodeType":"ElementaryTypeName","src":"2942:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2941:8:0"},"scope":178,"src":"2876:121:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":163,"nodeType":"Block","src":"3152:47:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":158,"name":"icoList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"3169:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO storage ref)"}},"id":160,"indexExpression":{"argumentTypes":null,"id":159,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":153,"src":"3177:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3169:11:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"id":161,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"closingDate","nodeType":"MemberAccess","referencedDeclaration":11,"src":"3169:23:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":157,"id":162,"nodeType":"Return","src":"3162:30:0"}]},"documentation":null,"id":164,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getClosingDateNameByID","nodeType":"FunctionDefinition","parameters":{"id":154,"nodeType":"ParameterList","parameters":[{"constant":false,"id":153,"name":"id","nodeType":"VariableDeclaration","scope":164,"src":"3110:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":152,"name":"uint","nodeType":"ElementaryTypeName","src":"3110:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3109:9:0"},"payable":false,"returnParameters":{"id":157,"nodeType":"ParameterList","parameters":[{"constant":false,"id":156,"name":"","nodeType":"VariableDeclaration","scope":164,"src":"3144:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":155,"name":"string","nodeType":"ElementaryTypeName","src":"3144:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"3143:8:0"},"scope":178,"src":"3078:121:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":176,"nodeType":"Block","src":"3340:41:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":171,"name":"icoList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"3357:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO storage ref)"}},"id":173,"indexExpression":{"argumentTypes":null,"id":172,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":166,"src":"3365:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3357:11:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"id":174,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"owner","nodeType":"MemberAccess","referencedDeclaration":13,"src":"3357:17:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"functionReturnParameters":170,"id":175,"nodeType":"Return","src":"3350:24:0"}]},"documentation":null,"id":177,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getOwnerAddeByID","nodeType":"FunctionDefinition","parameters":{"id":167,"nodeType":"ParameterList","parameters":[{"constant":false,"id":166,"name":"id","nodeType":"VariableDeclaration","scope":177,"src":"3297:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":165,"name":"uint","nodeType":"ElementaryTypeName","src":"3297:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3296:9:0"},"payable":false,"returnParameters":{"id":170,"nodeType":"ParameterList","parameters":[{"constant":false,"id":169,"name":"","nodeType":"VariableDeclaration","scope":177,"src":"3331:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":168,"name":"address","nodeType":"ElementaryTypeName","src":"3331:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"3330:9:0"},"scope":178,"src":"3271:110:0","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":179,"src":"25:3358:0"}],"src":"0:3383:0"},"legacyAST":{"absolutePath":"/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/contracts/IcoDDBB.sol","exportedSymbols":{"IcoDDBB":[178]},"id":179,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".4"],"nodeType":"PragmaDirective","src":"0:23:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":178,"linearizedBaseContracts":[178],"name":"IcoDDBB","nodeType":"ContractDefinition","nodes":[{"canonicalName":"IcoDDBB.ICO","id":14,"members":[{"constant":false,"id":3,"name":"id","nodeType":"VariableDeclaration","scope":14,"src":"76:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":2,"name":"uint","nodeType":"ElementaryTypeName","src":"76:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":5,"name":"name","nodeType":"VariableDeclaration","scope":14,"src":"93:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":4,"name":"string","nodeType":"ElementaryTypeName","src":"93:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":7,"name":"tokenContract","nodeType":"VariableDeclaration","scope":14,"src":"114:21:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6,"name":"address","nodeType":"ElementaryTypeName","src":"114:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":9,"name":"openingDate","nodeType":"VariableDeclaration","scope":14,"src":"145:18:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":8,"name":"string","nodeType":"ElementaryTypeName","src":"145:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":11,"name":"closingDate","nodeType":"VariableDeclaration","scope":14,"src":"173:18:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":10,"name":"string","nodeType":"ElementaryTypeName","src":"173:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":13,"name":"owner","nodeType":"VariableDeclaration","scope":14,"src":"228:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":12,"name":"address","nodeType":"ElementaryTypeName","src":"228:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"name":"ICO","nodeType":"StructDefinition","scope":178,"src":"55:293:0","visibility":"public"},{"constant":false,"id":18,"name":"icoList","nodeType":"VariableDeclaration","scope":178,"src":"446:37:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO)"},"typeName":{"id":17,"keyType":{"id":15,"name":"uint","nodeType":"ElementaryTypeName","src":"455:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Mapping","src":"446:21:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO)"},"valueType":{"contractScope":null,"id":16,"name":"ICO","nodeType":"UserDefinedTypeName","referencedDeclaration":14,"src":"463:3:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage_ptr","typeString":"struct IcoDDBB.ICO"}}},"value":null,"visibility":"private"},{"constant":false,"id":21,"name":"arrayIdICOs","nodeType":"VariableDeclaration","scope":178,"src":"516:25:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[]"},"typeName":{"baseType":{"id":19,"name":"uint","nodeType":"ElementaryTypeName","src":"516:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":20,"length":null,"nodeType":"ArrayTypeName","src":"516:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"public"},{"constant":false,"id":24,"name":"id_counter","nodeType":"VariableDeclaration","scope":178,"src":"565:19:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":22,"name":"uint","nodeType":"ElementaryTypeName","src":"565:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":23,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"583:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"internal"},{"constant":false,"id":26,"name":"owner","nodeType":"VariableDeclaration","scope":178,"src":"595:20:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":25,"name":"address","nodeType":"ElementaryTypeName","src":"595:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":38,"name":"Register","nodeType":"EventDefinition","parameters":{"id":37,"nodeType":"ParameterList","parameters":[{"constant":false,"id":28,"indexed":false,"name":"id","nodeType":"VariableDeclaration","scope":38,"src":"655:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":27,"name":"uint","nodeType":"ElementaryTypeName","src":"655:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":30,"indexed":false,"name":"name","nodeType":"VariableDeclaration","scope":38,"src":"664:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":29,"name":"string","nodeType":"ElementaryTypeName","src":"664:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":32,"indexed":false,"name":"oppening","nodeType":"VariableDeclaration","scope":38,"src":"677:15:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":31,"name":"string","nodeType":"ElementaryTypeName","src":"677:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":34,"indexed":false,"name":"closing","nodeType":"VariableDeclaration","scope":38,"src":"694:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":33,"name":"string","nodeType":"ElementaryTypeName","src":"694:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":36,"indexed":false,"name":"icoOwner","nodeType":"VariableDeclaration","scope":38,"src":"710:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":35,"name":"address","nodeType":"ElementaryTypeName","src":"710:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"654:73:0"},"src":"640:88:0"},{"body":{"id":46,"nodeType":"Block","src":"844:35:0","statements":[{"expression":{"argumentTypes":null,"id":44,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":41,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"854:5:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":42,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"862:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":43,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"862:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"854:18:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":45,"nodeType":"ExpressionStatement","src":"854:18:0"}]},"documentation":null,"id":47,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":39,"nodeType":"ParameterList","parameters":[],"src":"834:2:0"},"payable":false,"returnParameters":{"id":40,"nodeType":"ParameterList","parameters":[],"src":"844:0:0"},"scope":178,"src":"823:56:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":93,"nodeType":"Block","src":"1049:426:0","statements":[{"expression":{"argumentTypes":null,"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":58,"name":"icoList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"1171:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO storage ref)"}},"id":60,"indexExpression":{"argumentTypes":null,"id":59,"name":"id_counter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"1179:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1171:19:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":62,"name":"id_counter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"1197:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":63,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":49,"src":"1209:4:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":64,"name":"token","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"1215:5:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":65,"name":"opppening","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":53,"src":"1222:9:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":66,"name":"clossing","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1233:8:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":67,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"1243:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":68,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1243:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_address","typeString":"address"}],"id":61,"name":"ICO","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":14,"src":"1193:3:0","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_ICO_$14_storage_ptr_$","typeString":"type(struct IcoDDBB.ICO storage pointer)"}},"id":69,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1193:61:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_memory","typeString":"struct IcoDDBB.ICO memory"}},"src":"1171:83:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"id":71,"nodeType":"ExpressionStatement","src":"1171:83:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":75,"name":"id_counter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"1280:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":72,"name":"arrayIdICOs","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"1263:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":74,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1263:16:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256) returns (uint256)"}},"id":76,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1263:28:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":77,"nodeType":"ExpressionStatement","src":"1263:28:0"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":79,"name":"id_counter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"1322:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":80,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":49,"src":"1334:4:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":81,"name":"opppening","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":53,"src":"1340:9:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":82,"name":"clossing","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"1351:8:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":83,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"1361:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":84,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1361:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_address","typeString":"address"}],"id":78,"name":"Register","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":38,"src":"1313:8:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$returns$__$","typeString":"function (uint256,string memory,string memory,string memory,address)"}},"id":85,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1313:59:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":86,"nodeType":"EmitStatement","src":"1308:64:0"},{"expression":{"argumentTypes":null,"id":91,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":87,"name":"id_counter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"1408:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":90,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":88,"name":"id_counter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":24,"src":"1421:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"hexValue":"31","id":89,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1434:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"1421:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1408:27:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":92,"nodeType":"ExpressionStatement","src":"1408:27:0"}]},"documentation":null,"id":94,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"register","nodeType":"FunctionDefinition","parameters":{"id":56,"nodeType":"ParameterList","parameters":[{"constant":false,"id":49,"name":"name","nodeType":"VariableDeclaration","scope":94,"src":"978:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":48,"name":"string","nodeType":"ElementaryTypeName","src":"978:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":51,"name":"token","nodeType":"VariableDeclaration","scope":94,"src":"991:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":50,"name":"address","nodeType":"ElementaryTypeName","src":"991:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":53,"name":"opppening","nodeType":"VariableDeclaration","scope":94,"src":"1007:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":52,"name":"string","nodeType":"ElementaryTypeName","src":"1007:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":55,"name":"clossing","nodeType":"VariableDeclaration","scope":94,"src":"1025:15:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":54,"name":"string","nodeType":"ElementaryTypeName","src":"1025:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"977:64:0"},"payable":false,"returnParameters":{"id":57,"nodeType":"ParameterList","parameters":[],"src":"1049:0:0"},"scope":178,"src":"960:515:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":102,"nodeType":"Block","src":"2012:42:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":99,"name":"arrayIdICOs","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"2029:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"id":100,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2029:18:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":98,"id":101,"nodeType":"Return","src":"2022:25:0"}]},"documentation":"///////////////////////////////////////////////////////////////////////","id":103,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"numberOfIcos","nodeType":"FunctionDefinition","parameters":{"id":95,"nodeType":"ParameterList","parameters":[],"src":"1978:2:0"},"payable":false,"returnParameters":{"id":98,"nodeType":"ParameterList","parameters":[{"constant":false,"id":97,"name":"","nodeType":"VariableDeclaration","scope":103,"src":"2006:4:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":96,"name":"uint","nodeType":"ElementaryTypeName","src":"2006:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2005:6:0"},"scope":178,"src":"1957:97:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":111,"nodeType":"Block","src":"2190:35:0","statements":[{"expression":{"argumentTypes":null,"id":109,"name":"arrayIdICOs","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"2207:11:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage","typeString":"uint256[] storage ref"}},"functionReturnParameters":108,"id":110,"nodeType":"Return","src":"2200:18:0"}]},"documentation":null,"id":112,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getIdIcos","nodeType":"FunctionDefinition","parameters":{"id":104,"nodeType":"ParameterList","parameters":[],"src":"2153:2:0"},"payable":false,"returnParameters":{"id":108,"nodeType":"ParameterList","parameters":[{"constant":false,"id":107,"name":"","nodeType":"VariableDeclaration","scope":112,"src":"2182:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":105,"name":"uint","nodeType":"ElementaryTypeName","src":"2182:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":106,"length":null,"nodeType":"ArrayTypeName","src":"2182:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"}],"src":"2181:8:0"},"scope":178,"src":"2134:91:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":124,"nodeType":"Block","src":"2361:40:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":119,"name":"icoList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"2378:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO storage ref)"}},"id":121,"indexExpression":{"argumentTypes":null,"id":120,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":114,"src":"2386:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2378:11:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"id":122,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":5,"src":"2378:16:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":118,"id":123,"nodeType":"Return","src":"2371:23:0"}]},"documentation":null,"id":125,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getICOnameByID","nodeType":"FunctionDefinition","parameters":{"id":115,"nodeType":"ParameterList","parameters":[{"constant":false,"id":114,"name":"id","nodeType":"VariableDeclaration","scope":125,"src":"2319:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":113,"name":"uint","nodeType":"ElementaryTypeName","src":"2319:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2318:9:0"},"payable":false,"returnParameters":{"id":118,"nodeType":"ParameterList","parameters":[{"constant":false,"id":117,"name":"","nodeType":"VariableDeclaration","scope":125,"src":"2353:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":116,"name":"string","nodeType":"ElementaryTypeName","src":"2353:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2352:8:0"},"scope":178,"src":"2295:106:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":137,"nodeType":"Block","src":"2746:49:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":132,"name":"icoList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"2763:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO storage ref)"}},"id":134,"indexExpression":{"argumentTypes":null,"id":133,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":127,"src":"2771:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2763:11:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"id":135,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"tokenContract","nodeType":"MemberAccess","referencedDeclaration":7,"src":"2763:25:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"functionReturnParameters":131,"id":136,"nodeType":"Return","src":"2756:32:0"}]},"documentation":null,"id":138,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getTokenAddressByID","nodeType":"FunctionDefinition","parameters":{"id":128,"nodeType":"ParameterList","parameters":[{"constant":false,"id":127,"name":"id","nodeType":"VariableDeclaration","scope":138,"src":"2703:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":126,"name":"uint","nodeType":"ElementaryTypeName","src":"2703:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2702:9:0"},"payable":false,"returnParameters":{"id":131,"nodeType":"ParameterList","parameters":[{"constant":false,"id":130,"name":"","nodeType":"VariableDeclaration","scope":138,"src":"2737:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":129,"name":"address","nodeType":"ElementaryTypeName","src":"2737:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"2736:9:0"},"scope":178,"src":"2674:121:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":150,"nodeType":"Block","src":"2950:47:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":145,"name":"icoList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"2967:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO storage ref)"}},"id":147,"indexExpression":{"argumentTypes":null,"id":146,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":140,"src":"2975:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2967:11:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"id":148,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"openingDate","nodeType":"MemberAccess","referencedDeclaration":9,"src":"2967:23:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":144,"id":149,"nodeType":"Return","src":"2960:30:0"}]},"documentation":null,"id":151,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getOpeningDateNameByID","nodeType":"FunctionDefinition","parameters":{"id":141,"nodeType":"ParameterList","parameters":[{"constant":false,"id":140,"name":"id","nodeType":"VariableDeclaration","scope":151,"src":"2908:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":139,"name":"uint","nodeType":"ElementaryTypeName","src":"2908:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2907:9:0"},"payable":false,"returnParameters":{"id":144,"nodeType":"ParameterList","parameters":[{"constant":false,"id":143,"name":"","nodeType":"VariableDeclaration","scope":151,"src":"2942:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":142,"name":"string","nodeType":"ElementaryTypeName","src":"2942:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2941:8:0"},"scope":178,"src":"2876:121:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":163,"nodeType":"Block","src":"3152:47:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":158,"name":"icoList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"3169:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO storage ref)"}},"id":160,"indexExpression":{"argumentTypes":null,"id":159,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":153,"src":"3177:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3169:11:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"id":161,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"closingDate","nodeType":"MemberAccess","referencedDeclaration":11,"src":"3169:23:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":157,"id":162,"nodeType":"Return","src":"3162:30:0"}]},"documentation":null,"id":164,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getClosingDateNameByID","nodeType":"FunctionDefinition","parameters":{"id":154,"nodeType":"ParameterList","parameters":[{"constant":false,"id":153,"name":"id","nodeType":"VariableDeclaration","scope":164,"src":"3110:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":152,"name":"uint","nodeType":"ElementaryTypeName","src":"3110:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3109:9:0"},"payable":false,"returnParameters":{"id":157,"nodeType":"ParameterList","parameters":[{"constant":false,"id":156,"name":"","nodeType":"VariableDeclaration","scope":164,"src":"3144:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":155,"name":"string","nodeType":"ElementaryTypeName","src":"3144:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"3143:8:0"},"scope":178,"src":"3078:121:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":176,"nodeType":"Block","src":"3340:41:0","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":171,"name":"icoList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"3357:7:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_uint256_$_t_struct$_ICO_$14_storage_$","typeString":"mapping(uint256 => struct IcoDDBB.ICO storage ref)"}},"id":173,"indexExpression":{"argumentTypes":null,"id":172,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":166,"src":"3365:2:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3357:11:0","typeDescriptions":{"typeIdentifier":"t_struct$_ICO_$14_storage","typeString":"struct IcoDDBB.ICO storage ref"}},"id":174,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"owner","nodeType":"MemberAccess","referencedDeclaration":13,"src":"3357:17:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"functionReturnParameters":170,"id":175,"nodeType":"Return","src":"3350:24:0"}]},"documentation":null,"id":177,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getOwnerAddeByID","nodeType":"FunctionDefinition","parameters":{"id":167,"nodeType":"ParameterList","parameters":[{"constant":false,"id":166,"name":"id","nodeType":"VariableDeclaration","scope":177,"src":"3297:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":165,"name":"uint","nodeType":"ElementaryTypeName","src":"3297:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3296:9:0"},"payable":false,"returnParameters":{"id":170,"nodeType":"ParameterList","parameters":[{"constant":false,"id":169,"name":"","nodeType":"VariableDeclaration","scope":177,"src":"3331:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":168,"name":"address","nodeType":"ElementaryTypeName","src":"3331:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"3330:9:0"},"scope":178,"src":"3271:110:0","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":179,"src":"25:3358:0"}],"src":"0:3383:0"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{"1528824434059":{"events":{},"links":{},"address":"0x6f22347fbb0edbdfb853b0538d9a9321904899b1","transactionHash":"0x6e10e7229cfe4e8cbdaed9bf722ef1a668c13b721bf81f09ffdb1bc65af30107"},"1528828762524":{"events":{},"links":{},"address":"0x36f2cfbd8b172772fc5c1c8a7116ee582a3c7bfd","transactionHash":"0x6e10e7229cfe4e8cbdaed9bf722ef1a668c13b721bf81f09ffdb1bc65af30107"},"1528897910800":{"events":{},"links":{},"address":"0x732b2576bfe01a55ba9f04b454f27fe674e95159","transactionHash":"0x6e10e7229cfe4e8cbdaed9bf722ef1a668c13b721bf81f09ffdb1bc65af30107"},"1528907618310":{"events":{},"links":{},"address":"0xcdd8e5506e8242ac8e950eee430eb437c9300cb7","transactionHash":"0x6e10e7229cfe4e8cbdaed9bf722ef1a668c13b721bf81f09ffdb1bc65af30107"},"1528909917753":{"events":{},"links":{},"address":"0x3b130c237123661505fc508769185703e330c27f","transactionHash":"0x6e10e7229cfe4e8cbdaed9bf722ef1a668c13b721bf81f09ffdb1bc65af30107"}},"schemaVersion":"2.0.0","updatedAt":"2018-06-13T17:12:22.528Z"}

/***/ }),

/***/ "./build/contracts/createERC20_v2.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"createERC20_v2","abi":[{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"icoOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"actualSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"symbol","type":"string"},{"indexed":false,"name":"decimals","type":"uint256"},{"indexed":false,"name":"totalSupply","type":"uint256"},{"indexed":false,"name":"princeInEther","type":"uint256"},{"indexed":false,"name":"icoOwner","type":"address"}],"name":"CreateToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"constant":false,"inputs":[{"name":"tName","type":"string"},{"name":"tSymbol","type":"string"},{"name":"nDecimals","type":"uint256"},{"name":"initialSup","type":"uint256"},{"name":"p_buy","type":"uint256"},{"name":"owner","type":"address"}],"name":"setERC2Params","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTotalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBuyPrice","type":"uint256"}],"name":"setPrices","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"extractInvestment","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b5033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610ec6806100616000396000f3006080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd146100ca57806353f57bbd146100f55780636c02a931146101e25780636c4bf16b1461027257806370a08231146102c95780638620410b1461032057806395d89b411461034b57806396de0305146103db578063a3201daa146103fb578063a6f2ae3a14610428578063a9059cbb14610432578063c4e41b221461047f578063d9c905b8146104aa575b600080fd5b3480156100d657600080fd5b506100df6104d5565b6040518082815260200191505060405180910390f35b34801561010157600080fd5b506101e0600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104db565b005b3480156101ee57600080fd5b506101f7610746565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561023757808201518184015260208101905061021c565b50505050905090810190601f1680156102645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561027e57600080fd5b506102876107e4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102d557600080fd5b5061030a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061080a565b6040518082815260200191505060405180910390f35b34801561032c57600080fd5b50610335610853565b6040518082815260200191505060405180910390f35b34801561035757600080fd5b50610360610859565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103a0578082015181840152602081019050610385565b50505050905090810190601f1680156103cd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103f9600480360381019080803590602001909291905050506108f7565b005b34801561040757600080fd5b50610426600480360381019080803590602001909291905050506109bf565b005b610430610a25565b005b34801561043e57600080fd5b5061047d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610aaa565b005b34801561048b57600080fd5b50610494610ab9565b6040518082815260200191505060405180910390f35b3480156104b657600080fd5b506104bf610ac3565b6040518082815260200191505060405180910390f35b60025481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561053757600080fd5b856000908051906020019061054d929190610df5565b508460019080519060200190610564929190610df5565b5083600a8402026002819055508160038190555060025460048190555060025460066000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f6bdfefcc03e17927523234b1a3d478c2aaa4f09a62253dbe6d4397144473cb008686868686866040518080602001806020018781526020018681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835289818151815260200191508051906020019080838360005b8381101561069857808201518184015260208101905061067d565b50505050905090810190601f1680156106c55780820380516001836020036101000a031916815260200191505b50838103825288818151815260200191508051906020019080838360005b838110156106fe5780820151818401526020810190506106e3565b50505050905090810190601f16801561072b5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a1505050505050565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107dc5780601f106107b1576101008083540402835291602001916107dc565b820191906000526020600020905b8154815290600101906020018083116107bf57829003601f168201915b505050505081565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60035481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108ef5780601f106108c4576101008083540402835291602001916108ef565b820191906000526020600020905b8154815290600101906020018083116108d257829003601f168201915b505050505081565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561095357600080fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156109bb573d6000803e3d6000fd5b5050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a1b57600080fd5b8060038190555050565b600060035434811515610a3457fe5b049050610a42303383610ac9565b3373ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a350565b610ab5338383610ac9565b5050565b6000600254905090565b60045481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610b0657600080fd5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610b5457600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401111515610be257600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401905081600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a380600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401141515610def57fe5b50505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610e3657805160ff1916838001178555610e64565b82800160010185558215610e64579182015b82811115610e63578251825591602001919060010190610e48565b5b509050610e719190610e75565b5090565b610e9791905b80821115610e93576000816000905550600101610e7b565b5090565b905600a165627a7a72305820cd092cbba7f7ec1f86f9492aa29aa2b29161223a1d2f923830cf61f9c3f2e2990029","deployedBytecode":"0x6080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd146100ca57806353f57bbd146100f55780636c02a931146101e25780636c4bf16b1461027257806370a08231146102c95780638620410b1461032057806395d89b411461034b57806396de0305146103db578063a3201daa146103fb578063a6f2ae3a14610428578063a9059cbb14610432578063c4e41b221461047f578063d9c905b8146104aa575b600080fd5b3480156100d657600080fd5b506100df6104d5565b6040518082815260200191505060405180910390f35b34801561010157600080fd5b506101e0600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104db565b005b3480156101ee57600080fd5b506101f7610746565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561023757808201518184015260208101905061021c565b50505050905090810190601f1680156102645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561027e57600080fd5b506102876107e4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102d557600080fd5b5061030a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061080a565b6040518082815260200191505060405180910390f35b34801561032c57600080fd5b50610335610853565b6040518082815260200191505060405180910390f35b34801561035757600080fd5b50610360610859565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103a0578082015181840152602081019050610385565b50505050905090810190601f1680156103cd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103f9600480360381019080803590602001909291905050506108f7565b005b34801561040757600080fd5b50610426600480360381019080803590602001909291905050506109bf565b005b610430610a25565b005b34801561043e57600080fd5b5061047d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610aaa565b005b34801561048b57600080fd5b50610494610ab9565b6040518082815260200191505060405180910390f35b3480156104b657600080fd5b506104bf610ac3565b6040518082815260200191505060405180910390f35b60025481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561053757600080fd5b856000908051906020019061054d929190610df5565b508460019080519060200190610564929190610df5565b5083600a8402026002819055508160038190555060025460048190555060025460066000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f6bdfefcc03e17927523234b1a3d478c2aaa4f09a62253dbe6d4397144473cb008686868686866040518080602001806020018781526020018681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835289818151815260200191508051906020019080838360005b8381101561069857808201518184015260208101905061067d565b50505050905090810190601f1680156106c55780820380516001836020036101000a031916815260200191505b50838103825288818151815260200191508051906020019080838360005b838110156106fe5780820151818401526020810190506106e3565b50505050905090810190601f16801561072b5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a1505050505050565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107dc5780601f106107b1576101008083540402835291602001916107dc565b820191906000526020600020905b8154815290600101906020018083116107bf57829003601f168201915b505050505081565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60035481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108ef5780601f106108c4576101008083540402835291602001916108ef565b820191906000526020600020905b8154815290600101906020018083116108d257829003601f168201915b505050505081565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561095357600080fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156109bb573d6000803e3d6000fd5b5050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a1b57600080fd5b8060038190555050565b600060035434811515610a3457fe5b049050610a42303383610ac9565b3373ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a350565b610ab5338383610ac9565b5050565b6000600254905090565b60045481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610b0657600080fd5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610b5457600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401111515610be257600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401905081600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a380600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401141515610def57fe5b50505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610e3657805160ff1916838001178555610e64565b82800160010185558215610e64579182015b82811115610e63578251825591602001919060010190610e48565b5b509050610e719190610e75565b5090565b610e9791905b80821115610e93576000816000905550600101610e7b565b5090565b905600a165627a7a72305820cd092cbba7f7ec1f86f9492aa29aa2b29161223a1d2f923830cf61f9c3f2e2990029","sourceMap":"25:4430:1:-;;;1235:53;8:9:-1;5:2;;;30:1;27;20:12;5:2;1235:53:1;1274:10;1263:8;;:21;;;;;;;;;;;;;;;;;;25:4430;;;;;;","deployedSourceMap":"25:4430:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;370:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;370:26:1;;;;;;;;;;;;;;;;;;;;;;;1337:675;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1337:675:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;167:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;167:23:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;167:23:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;525:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;525:24:1;;;;;;;;;;;;;;;;;;;;;;;;;;;2226:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2226:117:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;431:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;431:23:1;;;;;;;;;;;;;;;;;;;;;;;228:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;228:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;228:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4313:138;;;;;;;;;;;;;;;;;;;;;;;;;;3722:127;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3722:127:1;;;;;;;;;;;;;;;;;;;;;;;;;;3923:251;;;;;;3470:106;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3470:106:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2077:87;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2077:87:1;;;;;;;;;;;;;;;;;;;;;;;491:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;491:27:1;;;;;;;;;;;;;;;;;;;;;;;370:26;;;;:::o;1337:675::-;132:8;;;;;;;;;;;118:22;;:10;:22;;;109:32;;;;;;;;1503:5;1491:9;:17;;;;;;;;;;;;:::i;:::-;;1525:7;1516:6;:16;;;;;;;;;;;;:::i;:::-;;1669:9;1656:2;1643:10;:15;:36;1629:11;:50;;;;1702:5;1691:8;:16;;;;1758:11;;1743:12;:26;;;;1838:11;;1817:8;:18;1826:8;;;;;;;;;;;1817:18;;;;;;;;;;;;;;;:32;;;;1943:64;1955:5;1962:7;1971:9;1982:10;1994:5;2001;1943:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1943:64:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1943:64:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1337:675;;;;;;:::o;167:23::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;525:24::-;;;;;;;;;;;;;:::o;2226:117::-;2290:12;2318:8;:20;2327:10;2318:20;;;;;;;;;;;;;;;;2311:27;;2226:117;;;:::o;431:23::-;;;;:::o;228:20::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4313:138::-;132:8;;;;;;;;;;;118:22;;:10;:22;;;109:32;;;;;;;;4411:8;;;;;;;;;;;:17;;:25;4429:6;4411:25;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4411:25:1;4313:138;:::o;3722:127::-;132:8;;;;;;;;;;;118:22;;:10;:22;;;109:32;;;;;;;;3831:11;3820:8;:22;;;;3722:127;:::o;3923:251::-;3963:11;3989:8;;3977:9;:20;;;;;;;;3963:34;;4031:36;4042:4;4048:10;4060:6;4031:9;:36::i;:::-;4106:10;4091:34;;4100:4;4091:34;;;4118:6;4091:34;;;;;;;;;;;;;;;;;;3923:251;:::o;3470:106::-;3535:34;3545:10;3557:3;3562:6;3535:9;:34::i;:::-;3470:106;;:::o;2077:87::-;2128:4;2148:11;;2141:18;;2077:87;:::o;491:27::-;;;;:::o;2430:813::-;2755:21;2541:1;2526:17;;:3;:17;;;;2518:26;;;;;;;;2617:6;2598:8;:15;2607:5;2598:15;;;;;;;;;;;;;;;;:25;;2590:34;;;;;;;;2702:8;:13;2711:3;2702:13;;;;;;;;;;;;;;;;2693:6;2677:8;:13;2686:3;2677:13;;;;;;;;;;;;;;;;:22;:38;2669:47;;;;;;;;2797:8;:13;2806:3;2797:13;;;;;;;;;;;;;;;;2779:8;:15;2788:5;2779:15;;;;;;;;;;;;;;;;:31;2755:55;;2892:6;2873:8;:15;2882:5;2873:15;;;;;;;;;;;;;;;;:25;;;;;;;;;;;2953:6;2936:8;:13;2945:3;2936:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;3031:3;3015:28;;3024:5;3015:28;;;3036:6;3015:28;;;;;;;;;;;;;;;;;;3219:16;3202:8;:13;3211:3;3202:13;;;;;;;;;;;;;;;;3184:8;:15;3193:5;3184:15;;;;;;;;;;;;;;;;:31;:51;3177:59;;;;;;2430:813;;;;:::o;25:4430::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.4.4;\n\ncontract createERC20_v2 {\n    \n     // MODIFIER \n     modifier onlyOwner {\n         require (msg.sender == icoOwner);\n         _;\n     }\n   \t string public tokenName; // nombre de nuestra criptomoneda\n\t string public symbol;// le designamos un simbolo\n\t //uint public decimals;  // le asignamos el numero de decimales - ether usa 18 decimales\n\t uint256 public totalSupply; // total supply of our token \n\n\t uint256 public buyPrice;\n\t //uint256 public sellPrice;\n\t \n\t uint256 public actualSupply;\n\t \n\t address public  icoOwner;\n\t \n\t // keep track of how mucha tokens everybody has\n\t mapping(address => uint256) balances; // the addres is the key of the dic balances\n\t //mapping (address => mapping (address => uint256)) public allowance;\n\t \n\t \n\t // EVENTOS\n\t event CreateToken (string name, string symbol, uint decimals, uint256 totalSupply, uint256 princeInEther, address icoOwner);\n\t event Transfer(address indexed from, address indexed to, uint256 value); // notificamos que se ha realizado una transaccion\n     event Burn(address indexed from, uint256 value); // notificamos de la destruccion de tokens\n\t\n\t/*\n\t* the constructor function of our Token smart contract\n\t*/\n\t//function createERC20_v2() public {\n\tconstructor() public {\n\t    icoOwner = msg.sender;\n\t}\n\t\n\t/*\n\t* Function to set token parameters\n\t*/\n\t function setERC2Params (string tName, string  tSymbol, uint nDecimals, uint256  initialSup, uint256 p_buy, address owner) public onlyOwner {\n\t     \n\t     tokenName = tName;\n\t     symbol = tSymbol;\n\t     // totalSupply = totalSup;// we create totalSup=100 tokens w/ nDecimals=2 decimals\n\t     totalSupply = initialSup * 10 * uint256(nDecimals); // \n\t     buyPrice = p_buy;\n\t    // sellPrice = p_sell;\n\t     actualSupply = totalSupply;\n\t     \n\t     //icoOwner = owner;\n\t     \n\t     balances[icoOwner] = totalSupply; // es lo mismo poner tokenOwner que msgSender por como está progrmado???\n\t     \n\t     emit CreateToken(tName, tSymbol, nDecimals, initialSup, p_buy, owner);\n\t }\n\t \n\t /*\n\t * Getter function for the totalSupply variable\n\t */\n\t function getTotalSupply() public constant returns (uint){\n\t     return totalSupply;\n\t }\n\t \n\t /*\n\t * Gets the balance of the specified address\n\t */\n\t function balanceOf(address tokenOwner) public constant returns (uint balance){\n\t     return balances[tokenOwner];\n\t }\n\t \n\t /*\n\t * Internal transfer function, it can only be called by this contract\n\t */\n\t function _transfer(address _from, address _to, uint _value) internal {\n        \n        require(_to != address(0)); // Prevent transfer to 0x0 address.\n        require(balances[_from] >= _value);  // Check if the sender has enough\n        require(balances[_to] + _value > balances[_to]); // Check for overflows ?????\n        uint previousBalances = balances[_from] + balances[_to]; // Save this for an assertion in the future\n        \n        balances[_from] -= _value; // Subtract from the sender\n        balances[_to] += _value;// Add the same to the recipient\n        \n        emit Transfer(_from, _to, _value); // emit event\n        \n        // Asserts are used to use static analysis to find bugs in your code. They should never fail\n        assert(balances[_from] + balances[_to] == previousBalances);\n    }\n    \n    /* \n    * Externalfunction for transfering\n    * Sen (_value) tokens to (_to) account from your account\n    *\n    * @param _to Address of recipient account\n    * @param _value Amount of tokens to send    *\n    */\n    function transfer( address _to, uint256 _value) public {\n        _transfer(msg.sender, _to, _value);\n    }\n    \n    \n    /*\n    * Funcion que actualiza el precio del token creado \n    * solo el creador de la ICO puede actualizar este valor \n    */\n    function setPrices (uint256 newBuyPrice) onlyOwner public {\n        // sel tamb iria aqui\n        buyPrice = newBuyPrice;\n    }\n    \n    /*\n    *  buy tokens from contract by sending ether \n    */\n    function buy() payable public {\n        uint amount = msg.value / buyPrice; // calculates the amoun\n        _transfer (this, msg.sender, amount);\n        \n        emit Transfer(this, msg.sender, amount); // execute an event reflecting the change\n    }\n    \n    /*\n    * Function to extract the ehters keep in the contract\n    * only the ICO owner can use it\n    * ¿ESTA BIIIEN?\n    */\n    function extractInvestment(uint amount) payable onlyOwner public {\n        // COMO ????? \n        icoOwner.transfer(amount); // ??? \n    }\n\t\n}","sourcePath":"/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/contracts/createERC20_v2.sol","ast":{"absolutePath":"/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/contracts/createERC20_v2.sol","exportedSymbols":{"createERC20_v2":[468]},"id":469,"nodeType":"SourceUnit","nodes":[{"id":180,"literals":["solidity","^","0.4",".4"],"nodeType":"PragmaDirective","src":"0:23:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":468,"linearizedBaseContracts":[468],"name":"createERC20_v2","nodeType":"ContractDefinition","nodes":[{"body":{"id":190,"nodeType":"Block","src":"98:63:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":186,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":183,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"118:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":184,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"118:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":185,"name":"icoOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":203,"src":"132:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"118:22:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":182,"name":"require","nodeType":"Identifier","overloadedDeclarations":[486,487],"referencedDeclaration":486,"src":"109:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":187,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"109:32:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":188,"nodeType":"ExpressionStatement","src":"109:32:1"},{"id":189,"nodeType":"PlaceholderStatement","src":"152:1:1"}]},"documentation":null,"id":191,"name":"onlyOwner","nodeType":"ModifierDefinition","parameters":{"id":181,"nodeType":"ParameterList","parameters":[],"src":"98:0:1"},"src":"79:82:1","visibility":"internal"},{"constant":false,"id":193,"name":"tokenName","nodeType":"VariableDeclaration","scope":468,"src":"167:23:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":192,"name":"string","nodeType":"ElementaryTypeName","src":"167:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"public"},{"constant":false,"id":195,"name":"symbol","nodeType":"VariableDeclaration","scope":468,"src":"228:20:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":194,"name":"string","nodeType":"ElementaryTypeName","src":"228:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"public"},{"constant":false,"id":197,"name":"totalSupply","nodeType":"VariableDeclaration","scope":468,"src":"370:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":196,"name":"uint256","nodeType":"ElementaryTypeName","src":"370:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":199,"name":"buyPrice","nodeType":"VariableDeclaration","scope":468,"src":"431:23:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":198,"name":"uint256","nodeType":"ElementaryTypeName","src":"431:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":201,"name":"actualSupply","nodeType":"VariableDeclaration","scope":468,"src":"491:27:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":200,"name":"uint256","nodeType":"ElementaryTypeName","src":"491:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":203,"name":"icoOwner","nodeType":"VariableDeclaration","scope":468,"src":"525:24:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":202,"name":"address","nodeType":"ElementaryTypeName","src":"525:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"public"},{"constant":false,"id":207,"name":"balances","nodeType":"VariableDeclaration","scope":468,"src":"606:36:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":206,"keyType":{"id":204,"name":"address","nodeType":"ElementaryTypeName","src":"614:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"606:27:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":205,"name":"uint256","nodeType":"ElementaryTypeName","src":"625:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"internal"},{"anonymous":false,"documentation":null,"id":221,"name":"CreateToken","nodeType":"EventDefinition","parameters":{"id":220,"nodeType":"ParameterList","parameters":[{"constant":false,"id":209,"indexed":false,"name":"name","nodeType":"VariableDeclaration","scope":221,"src":"801:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":208,"name":"string","nodeType":"ElementaryTypeName","src":"801:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":211,"indexed":false,"name":"symbol","nodeType":"VariableDeclaration","scope":221,"src":"814:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":210,"name":"string","nodeType":"ElementaryTypeName","src":"814:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":213,"indexed":false,"name":"decimals","nodeType":"VariableDeclaration","scope":221,"src":"829:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":212,"name":"uint","nodeType":"ElementaryTypeName","src":"829:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":215,"indexed":false,"name":"totalSupply","nodeType":"VariableDeclaration","scope":221,"src":"844:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":214,"name":"uint256","nodeType":"ElementaryTypeName","src":"844:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":217,"indexed":false,"name":"princeInEther","nodeType":"VariableDeclaration","scope":221,"src":"865:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":216,"name":"uint256","nodeType":"ElementaryTypeName","src":"865:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":219,"indexed":false,"name":"icoOwner","nodeType":"VariableDeclaration","scope":221,"src":"888:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":218,"name":"address","nodeType":"ElementaryTypeName","src":"888:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"800:105:1"},"src":"782:124:1"},{"anonymous":false,"documentation":null,"id":229,"name":"Transfer","nodeType":"EventDefinition","parameters":{"id":228,"nodeType":"ParameterList","parameters":[{"constant":false,"id":223,"indexed":true,"name":"from","nodeType":"VariableDeclaration","scope":229,"src":"924:20:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":222,"name":"address","nodeType":"ElementaryTypeName","src":"924:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":225,"indexed":true,"name":"to","nodeType":"VariableDeclaration","scope":229,"src":"946:18:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":224,"name":"address","nodeType":"ElementaryTypeName","src":"946:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":227,"indexed":false,"name":"value","nodeType":"VariableDeclaration","scope":229,"src":"966:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":226,"name":"uint256","nodeType":"ElementaryTypeName","src":"966:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"923:57:1"},"src":"909:72:1"},{"anonymous":false,"documentation":null,"id":235,"name":"Burn","nodeType":"EventDefinition","parameters":{"id":234,"nodeType":"ParameterList","parameters":[{"constant":false,"id":231,"indexed":true,"name":"from","nodeType":"VariableDeclaration","scope":235,"src":"1049:20:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":230,"name":"address","nodeType":"ElementaryTypeName","src":"1049:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":233,"indexed":false,"name":"value","nodeType":"VariableDeclaration","scope":235,"src":"1071:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":232,"name":"uint256","nodeType":"ElementaryTypeName","src":"1071:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1048:37:1"},"src":"1038:48:1"},{"body":{"id":243,"nodeType":"Block","src":"1256:32:1","statements":[{"expression":{"argumentTypes":null,"id":241,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":238,"name":"icoOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":203,"src":"1263:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":239,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"1274:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":240,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1274:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"1263:21:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":242,"nodeType":"ExpressionStatement","src":"1263:21:1"}]},"documentation":null,"id":244,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":236,"nodeType":"ParameterList","parameters":[],"src":"1246:2:1"},"payable":false,"returnParameters":{"id":237,"nodeType":"ParameterList","parameters":[],"src":"1256:0:1"},"scope":468,"src":"1235:53:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":302,"nodeType":"Block","src":"1476:536:1","statements":[{"expression":{"argumentTypes":null,"id":263,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":261,"name":"tokenName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":193,"src":"1491:9:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":262,"name":"tName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":246,"src":"1503:5:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1491:17:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":264,"nodeType":"ExpressionStatement","src":"1491:17:1"},{"expression":{"argumentTypes":null,"id":267,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":265,"name":"symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":195,"src":"1516:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":266,"name":"tSymbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":248,"src":"1525:7:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1516:16:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":268,"nodeType":"ExpressionStatement","src":"1516:16:1"},{"expression":{"argumentTypes":null,"id":277,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":269,"name":"totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":197,"src":"1629:11:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":276,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":272,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":270,"name":"initialSup","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":252,"src":"1643:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"*","rightExpression":{"argumentTypes":null,"hexValue":"3130","id":271,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1656:2:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10_by_1","typeString":"int_const 10"},"value":"10"},"src":"1643:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"*","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":274,"name":"nDecimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":250,"src":"1669:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":273,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1661:7:1","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint256"},"id":275,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1661:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1643:36:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1629:50:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":278,"nodeType":"ExpressionStatement","src":"1629:50:1"},{"expression":{"argumentTypes":null,"id":281,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":279,"name":"buyPrice","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":199,"src":"1691:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":280,"name":"p_buy","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":254,"src":"1702:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1691:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":282,"nodeType":"ExpressionStatement","src":"1691:16:1"},{"expression":{"argumentTypes":null,"id":285,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":283,"name":"actualSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":201,"src":"1743:12:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":284,"name":"totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":197,"src":"1758:11:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1743:26:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":286,"nodeType":"ExpressionStatement","src":"1743:26:1"},{"expression":{"argumentTypes":null,"id":291,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":287,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"1817:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":289,"indexExpression":{"argumentTypes":null,"id":288,"name":"icoOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":203,"src":"1826:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1817:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":290,"name":"totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":197,"src":"1838:11:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1817:32:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":292,"nodeType":"ExpressionStatement","src":"1817:32:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":294,"name":"tName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":246,"src":"1955:5:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":295,"name":"tSymbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":248,"src":"1962:7:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":296,"name":"nDecimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":250,"src":"1971:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":297,"name":"initialSup","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":252,"src":"1982:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":298,"name":"p_buy","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":254,"src":"1994:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":299,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":256,"src":"2001:5:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address","typeString":"address"}],"id":293,"name":"CreateToken","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":221,"src":"1943:11:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$returns$__$","typeString":"function (string memory,string memory,uint256,uint256,uint256,address)"}},"id":300,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1943:64:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":301,"nodeType":"EmitStatement","src":"1938:69:1"}]},"documentation":null,"id":303,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":259,"modifierName":{"argumentTypes":null,"id":258,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"1466:9:1","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1466:9:1"}],"name":"setERC2Params","nodeType":"FunctionDefinition","parameters":{"id":257,"nodeType":"ParameterList","parameters":[{"constant":false,"id":246,"name":"tName","nodeType":"VariableDeclaration","scope":303,"src":"1361:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":245,"name":"string","nodeType":"ElementaryTypeName","src":"1361:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":248,"name":"tSymbol","nodeType":"VariableDeclaration","scope":303,"src":"1375:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":247,"name":"string","nodeType":"ElementaryTypeName","src":"1375:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":250,"name":"nDecimals","nodeType":"VariableDeclaration","scope":303,"src":"1392:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":249,"name":"uint","nodeType":"ElementaryTypeName","src":"1392:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":252,"name":"initialSup","nodeType":"VariableDeclaration","scope":303,"src":"1408:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":251,"name":"uint256","nodeType":"ElementaryTypeName","src":"1408:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":254,"name":"p_buy","nodeType":"VariableDeclaration","scope":303,"src":"1429:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":253,"name":"uint256","nodeType":"ElementaryTypeName","src":"1429:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":256,"name":"owner","nodeType":"VariableDeclaration","scope":303,"src":"1444:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":255,"name":"address","nodeType":"ElementaryTypeName","src":"1444:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"1360:98:1"},"payable":false,"returnParameters":{"id":260,"nodeType":"ParameterList","parameters":[],"src":"1476:0:1"},"scope":468,"src":"1337:675:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":310,"nodeType":"Block","src":"2133:31:1","statements":[{"expression":{"argumentTypes":null,"id":308,"name":"totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":197,"src":"2148:11:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":307,"id":309,"nodeType":"Return","src":"2141:18:1"}]},"documentation":null,"id":311,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getTotalSupply","nodeType":"FunctionDefinition","parameters":{"id":304,"nodeType":"ParameterList","parameters":[],"src":"2100:2:1"},"payable":false,"returnParameters":{"id":307,"nodeType":"ParameterList","parameters":[{"constant":false,"id":306,"name":"","nodeType":"VariableDeclaration","scope":311,"src":"2128:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":305,"name":"uint","nodeType":"ElementaryTypeName","src":"2128:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2127:6:1"},"scope":468,"src":"2077:87:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":322,"nodeType":"Block","src":"2303:40:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":318,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2318:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":320,"indexExpression":{"argumentTypes":null,"id":319,"name":"tokenOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":313,"src":"2327:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2318:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":317,"id":321,"nodeType":"Return","src":"2311:27:1"}]},"documentation":null,"id":323,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"balanceOf","nodeType":"FunctionDefinition","parameters":{"id":314,"nodeType":"ParameterList","parameters":[{"constant":false,"id":313,"name":"tokenOwner","nodeType":"VariableDeclaration","scope":323,"src":"2245:18:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":312,"name":"address","nodeType":"ElementaryTypeName","src":"2245:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"2244:20:1"},"payable":false,"returnParameters":{"id":317,"nodeType":"ParameterList","parameters":[{"constant":false,"id":316,"name":"balance","nodeType":"VariableDeclaration","scope":323,"src":"2290:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":315,"name":"uint","nodeType":"ElementaryTypeName","src":"2290:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2289:14:1"},"scope":468,"src":"2226:117:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":400,"nodeType":"Block","src":"2499:744:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":337,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":333,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"2526:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":335,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"2541:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":334,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"2533:7:1","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":336,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2533:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"2526:17:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":332,"name":"require","nodeType":"Identifier","overloadedDeclarations":[486,487],"referencedDeclaration":486,"src":"2518:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":338,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2518:26:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":339,"nodeType":"ExpressionStatement","src":"2518:26:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":345,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":341,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2598:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":343,"indexExpression":{"argumentTypes":null,"id":342,"name":"_from","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":325,"src":"2607:5:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2598:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">=","rightExpression":{"argumentTypes":null,"id":344,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"2617:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2598:25:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":340,"name":"require","nodeType":"Identifier","overloadedDeclarations":[486,487],"referencedDeclaration":486,"src":"2590:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":346,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2590:34:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":347,"nodeType":"ExpressionStatement","src":"2590:34:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":357,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":353,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":349,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2677:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":351,"indexExpression":{"argumentTypes":null,"id":350,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"2686:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2677:13:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"id":352,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"2693:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2677:22:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">","rightExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":354,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2702:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":356,"indexExpression":{"argumentTypes":null,"id":355,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"2711:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2702:13:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2677:38:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":348,"name":"require","nodeType":"Identifier","overloadedDeclarations":[486,487],"referencedDeclaration":486,"src":"2669:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":358,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2669:47:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":359,"nodeType":"ExpressionStatement","src":"2669:47:1"},{"assignments":[361],"declarations":[{"constant":false,"id":361,"name":"previousBalances","nodeType":"VariableDeclaration","scope":401,"src":"2755:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":360,"name":"uint","nodeType":"ElementaryTypeName","src":"2755:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":369,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":368,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":362,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2779:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":364,"indexExpression":{"argumentTypes":null,"id":363,"name":"_from","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":325,"src":"2788:5:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2779:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":365,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2797:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":367,"indexExpression":{"argumentTypes":null,"id":366,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"2806:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2797:13:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2779:31:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"2755:55:1"},{"expression":{"argumentTypes":null,"id":374,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":370,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2873:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":372,"indexExpression":{"argumentTypes":null,"id":371,"name":"_from","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":325,"src":"2882:5:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"2873:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":373,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"2892:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2873:25:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":375,"nodeType":"ExpressionStatement","src":"2873:25:1"},{"expression":{"argumentTypes":null,"id":380,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":376,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2936:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":378,"indexExpression":{"argumentTypes":null,"id":377,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"2945:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"2936:13:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":379,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"2953:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2936:23:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":381,"nodeType":"ExpressionStatement","src":"2936:23:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":383,"name":"_from","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":325,"src":"3024:5:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":384,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"3031:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":385,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"3036:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":382,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":229,"src":"3015:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":386,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3015:28:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":387,"nodeType":"EmitStatement","src":"3010:33:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":397,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":395,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":389,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"3184:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":391,"indexExpression":{"argumentTypes":null,"id":390,"name":"_from","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":325,"src":"3193:5:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3184:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":392,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"3202:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":394,"indexExpression":{"argumentTypes":null,"id":393,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"3211:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3202:13:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"3184:31:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":396,"name":"previousBalances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":361,"src":"3219:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"3184:51:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":388,"name":"assert","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":472,"src":"3177:6:1","typeDescriptions":{"typeIdentifier":"t_function_assert_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":398,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3177:59:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":399,"nodeType":"ExpressionStatement","src":"3177:59:1"}]},"documentation":null,"id":401,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"_transfer","nodeType":"FunctionDefinition","parameters":{"id":330,"nodeType":"ParameterList","parameters":[{"constant":false,"id":325,"name":"_from","nodeType":"VariableDeclaration","scope":401,"src":"2449:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":324,"name":"address","nodeType":"ElementaryTypeName","src":"2449:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":327,"name":"_to","nodeType":"VariableDeclaration","scope":401,"src":"2464:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":326,"name":"address","nodeType":"ElementaryTypeName","src":"2464:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":329,"name":"_value","nodeType":"VariableDeclaration","scope":401,"src":"2477:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":328,"name":"uint","nodeType":"ElementaryTypeName","src":"2477:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2448:41:1"},"payable":false,"returnParameters":{"id":331,"nodeType":"ParameterList","parameters":[],"src":"2499:0:1"},"scope":468,"src":"2430:813:1","stateMutability":"nonpayable","superFunction":null,"visibility":"internal"},{"body":{"id":415,"nodeType":"Block","src":"3525:51:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":409,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"3545:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":410,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3545:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":411,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":403,"src":"3557:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":412,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":405,"src":"3562:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":408,"name":"_transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":401,"src":"3535:9:1","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":413,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3535:34:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":414,"nodeType":"ExpressionStatement","src":"3535:34:1"}]},"documentation":null,"id":416,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"transfer","nodeType":"FunctionDefinition","parameters":{"id":406,"nodeType":"ParameterList","parameters":[{"constant":false,"id":403,"name":"_to","nodeType":"VariableDeclaration","scope":416,"src":"3489:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":402,"name":"address","nodeType":"ElementaryTypeName","src":"3489:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":405,"name":"_value","nodeType":"VariableDeclaration","scope":416,"src":"3502:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":404,"name":"uint256","nodeType":"ElementaryTypeName","src":"3502:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3487:30:1"},"payable":false,"returnParameters":{"id":407,"nodeType":"ParameterList","parameters":[],"src":"3525:0:1"},"scope":468,"src":"3470:106:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":427,"nodeType":"Block","src":"3780:69:1","statements":[{"expression":{"argumentTypes":null,"id":425,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":423,"name":"buyPrice","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":199,"src":"3820:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":424,"name":"newBuyPrice","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":418,"src":"3831:11:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"3820:22:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":426,"nodeType":"ExpressionStatement","src":"3820:22:1"}]},"documentation":null,"id":428,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":421,"modifierName":{"argumentTypes":null,"id":420,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"3763:9:1","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"3763:9:1"}],"name":"setPrices","nodeType":"FunctionDefinition","parameters":{"id":419,"nodeType":"ParameterList","parameters":[{"constant":false,"id":418,"name":"newBuyPrice","nodeType":"VariableDeclaration","scope":428,"src":"3742:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":417,"name":"uint256","nodeType":"ElementaryTypeName","src":"3742:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3741:21:1"},"payable":false,"returnParameters":{"id":422,"nodeType":"ParameterList","parameters":[],"src":"3780:0:1"},"scope":468,"src":"3722:127:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":452,"nodeType":"Block","src":"3953:221:1","statements":[{"assignments":[432],"declarations":[{"constant":false,"id":432,"name":"amount","nodeType":"VariableDeclaration","scope":453,"src":"3963:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":431,"name":"uint","nodeType":"ElementaryTypeName","src":"3963:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":437,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":436,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":433,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"3977:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":434,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3977:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"/","rightExpression":{"argumentTypes":null,"id":435,"name":"buyPrice","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":199,"src":"3989:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"3977:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"3963:34:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":439,"name":"this","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":498,"src":"4042:4:1","typeDescriptions":{"typeIdentifier":"t_contract$_createERC20_v2_$468","typeString":"contract createERC20_v2"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":440,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"4048:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":441,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"4048:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":442,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":432,"src":"4060:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_createERC20_v2_$468","typeString":"contract createERC20_v2"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":438,"name":"_transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":401,"src":"4031:9:1","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":443,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"4031:36:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":444,"nodeType":"ExpressionStatement","src":"4031:36:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":446,"name":"this","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":498,"src":"4100:4:1","typeDescriptions":{"typeIdentifier":"t_contract$_createERC20_v2_$468","typeString":"contract createERC20_v2"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":447,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"4106:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":448,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"4106:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":449,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":432,"src":"4118:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_createERC20_v2_$468","typeString":"contract createERC20_v2"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":445,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":229,"src":"4091:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":450,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"4091:34:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":451,"nodeType":"EmitStatement","src":"4086:39:1"}]},"documentation":null,"id":453,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"buy","nodeType":"FunctionDefinition","parameters":{"id":429,"nodeType":"ParameterList","parameters":[],"src":"3935:2:1"},"payable":true,"returnParameters":{"id":430,"nodeType":"ParameterList","parameters":[],"src":"3953:0:1"},"scope":468,"src":"3923:251:1","stateMutability":"payable","superFunction":null,"visibility":"public"},{"body":{"id":466,"nodeType":"Block","src":"4378:73:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":463,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":455,"src":"4429:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":460,"name":"icoOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":203,"src":"4411:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":462,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"transfer","nodeType":"MemberAccess","referencedDeclaration":null,"src":"4411:17:1","typeDescriptions":{"typeIdentifier":"t_function_transfer_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":464,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"4411:25:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":465,"nodeType":"ExpressionStatement","src":"4411:25:1"}]},"documentation":null,"id":467,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":458,"modifierName":{"argumentTypes":null,"id":457,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"4361:9:1","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"4361:9:1"}],"name":"extractInvestment","nodeType":"FunctionDefinition","parameters":{"id":456,"nodeType":"ParameterList","parameters":[{"constant":false,"id":455,"name":"amount","nodeType":"VariableDeclaration","scope":467,"src":"4340:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":454,"name":"uint","nodeType":"ElementaryTypeName","src":"4340:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"4339:13:1"},"payable":true,"returnParameters":{"id":459,"nodeType":"ParameterList","parameters":[],"src":"4378:0:1"},"scope":468,"src":"4313:138:1","stateMutability":"payable","superFunction":null,"visibility":"public"}],"scope":469,"src":"25:4430:1"}],"src":"0:4455:1"},"legacyAST":{"absolutePath":"/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/contracts/createERC20_v2.sol","exportedSymbols":{"createERC20_v2":[468]},"id":469,"nodeType":"SourceUnit","nodes":[{"id":180,"literals":["solidity","^","0.4",".4"],"nodeType":"PragmaDirective","src":"0:23:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":468,"linearizedBaseContracts":[468],"name":"createERC20_v2","nodeType":"ContractDefinition","nodes":[{"body":{"id":190,"nodeType":"Block","src":"98:63:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":186,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":183,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"118:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":184,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"118:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":185,"name":"icoOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":203,"src":"132:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"118:22:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":182,"name":"require","nodeType":"Identifier","overloadedDeclarations":[486,487],"referencedDeclaration":486,"src":"109:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":187,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"109:32:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":188,"nodeType":"ExpressionStatement","src":"109:32:1"},{"id":189,"nodeType":"PlaceholderStatement","src":"152:1:1"}]},"documentation":null,"id":191,"name":"onlyOwner","nodeType":"ModifierDefinition","parameters":{"id":181,"nodeType":"ParameterList","parameters":[],"src":"98:0:1"},"src":"79:82:1","visibility":"internal"},{"constant":false,"id":193,"name":"tokenName","nodeType":"VariableDeclaration","scope":468,"src":"167:23:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":192,"name":"string","nodeType":"ElementaryTypeName","src":"167:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"public"},{"constant":false,"id":195,"name":"symbol","nodeType":"VariableDeclaration","scope":468,"src":"228:20:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":194,"name":"string","nodeType":"ElementaryTypeName","src":"228:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"public"},{"constant":false,"id":197,"name":"totalSupply","nodeType":"VariableDeclaration","scope":468,"src":"370:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":196,"name":"uint256","nodeType":"ElementaryTypeName","src":"370:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":199,"name":"buyPrice","nodeType":"VariableDeclaration","scope":468,"src":"431:23:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":198,"name":"uint256","nodeType":"ElementaryTypeName","src":"431:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":201,"name":"actualSupply","nodeType":"VariableDeclaration","scope":468,"src":"491:27:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":200,"name":"uint256","nodeType":"ElementaryTypeName","src":"491:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":203,"name":"icoOwner","nodeType":"VariableDeclaration","scope":468,"src":"525:24:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":202,"name":"address","nodeType":"ElementaryTypeName","src":"525:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"public"},{"constant":false,"id":207,"name":"balances","nodeType":"VariableDeclaration","scope":468,"src":"606:36:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":206,"keyType":{"id":204,"name":"address","nodeType":"ElementaryTypeName","src":"614:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"606:27:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":205,"name":"uint256","nodeType":"ElementaryTypeName","src":"625:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"internal"},{"anonymous":false,"documentation":null,"id":221,"name":"CreateToken","nodeType":"EventDefinition","parameters":{"id":220,"nodeType":"ParameterList","parameters":[{"constant":false,"id":209,"indexed":false,"name":"name","nodeType":"VariableDeclaration","scope":221,"src":"801:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":208,"name":"string","nodeType":"ElementaryTypeName","src":"801:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":211,"indexed":false,"name":"symbol","nodeType":"VariableDeclaration","scope":221,"src":"814:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":210,"name":"string","nodeType":"ElementaryTypeName","src":"814:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":213,"indexed":false,"name":"decimals","nodeType":"VariableDeclaration","scope":221,"src":"829:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":212,"name":"uint","nodeType":"ElementaryTypeName","src":"829:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":215,"indexed":false,"name":"totalSupply","nodeType":"VariableDeclaration","scope":221,"src":"844:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":214,"name":"uint256","nodeType":"ElementaryTypeName","src":"844:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":217,"indexed":false,"name":"princeInEther","nodeType":"VariableDeclaration","scope":221,"src":"865:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":216,"name":"uint256","nodeType":"ElementaryTypeName","src":"865:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":219,"indexed":false,"name":"icoOwner","nodeType":"VariableDeclaration","scope":221,"src":"888:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":218,"name":"address","nodeType":"ElementaryTypeName","src":"888:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"800:105:1"},"src":"782:124:1"},{"anonymous":false,"documentation":null,"id":229,"name":"Transfer","nodeType":"EventDefinition","parameters":{"id":228,"nodeType":"ParameterList","parameters":[{"constant":false,"id":223,"indexed":true,"name":"from","nodeType":"VariableDeclaration","scope":229,"src":"924:20:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":222,"name":"address","nodeType":"ElementaryTypeName","src":"924:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":225,"indexed":true,"name":"to","nodeType":"VariableDeclaration","scope":229,"src":"946:18:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":224,"name":"address","nodeType":"ElementaryTypeName","src":"946:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":227,"indexed":false,"name":"value","nodeType":"VariableDeclaration","scope":229,"src":"966:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":226,"name":"uint256","nodeType":"ElementaryTypeName","src":"966:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"923:57:1"},"src":"909:72:1"},{"anonymous":false,"documentation":null,"id":235,"name":"Burn","nodeType":"EventDefinition","parameters":{"id":234,"nodeType":"ParameterList","parameters":[{"constant":false,"id":231,"indexed":true,"name":"from","nodeType":"VariableDeclaration","scope":235,"src":"1049:20:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":230,"name":"address","nodeType":"ElementaryTypeName","src":"1049:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":233,"indexed":false,"name":"value","nodeType":"VariableDeclaration","scope":235,"src":"1071:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":232,"name":"uint256","nodeType":"ElementaryTypeName","src":"1071:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1048:37:1"},"src":"1038:48:1"},{"body":{"id":243,"nodeType":"Block","src":"1256:32:1","statements":[{"expression":{"argumentTypes":null,"id":241,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":238,"name":"icoOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":203,"src":"1263:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":239,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"1274:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":240,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1274:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"1263:21:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":242,"nodeType":"ExpressionStatement","src":"1263:21:1"}]},"documentation":null,"id":244,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":236,"nodeType":"ParameterList","parameters":[],"src":"1246:2:1"},"payable":false,"returnParameters":{"id":237,"nodeType":"ParameterList","parameters":[],"src":"1256:0:1"},"scope":468,"src":"1235:53:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":302,"nodeType":"Block","src":"1476:536:1","statements":[{"expression":{"argumentTypes":null,"id":263,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":261,"name":"tokenName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":193,"src":"1491:9:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":262,"name":"tName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":246,"src":"1503:5:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1491:17:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":264,"nodeType":"ExpressionStatement","src":"1491:17:1"},{"expression":{"argumentTypes":null,"id":267,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":265,"name":"symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":195,"src":"1516:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":266,"name":"tSymbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":248,"src":"1525:7:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1516:16:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":268,"nodeType":"ExpressionStatement","src":"1516:16:1"},{"expression":{"argumentTypes":null,"id":277,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":269,"name":"totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":197,"src":"1629:11:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":276,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":272,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":270,"name":"initialSup","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":252,"src":"1643:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"*","rightExpression":{"argumentTypes":null,"hexValue":"3130","id":271,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1656:2:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10_by_1","typeString":"int_const 10"},"value":"10"},"src":"1643:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"*","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":274,"name":"nDecimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":250,"src":"1669:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":273,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"1661:7:1","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint256"},"id":275,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1661:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1643:36:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1629:50:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":278,"nodeType":"ExpressionStatement","src":"1629:50:1"},{"expression":{"argumentTypes":null,"id":281,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":279,"name":"buyPrice","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":199,"src":"1691:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":280,"name":"p_buy","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":254,"src":"1702:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1691:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":282,"nodeType":"ExpressionStatement","src":"1691:16:1"},{"expression":{"argumentTypes":null,"id":285,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":283,"name":"actualSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":201,"src":"1743:12:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":284,"name":"totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":197,"src":"1758:11:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1743:26:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":286,"nodeType":"ExpressionStatement","src":"1743:26:1"},{"expression":{"argumentTypes":null,"id":291,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":287,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"1817:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":289,"indexExpression":{"argumentTypes":null,"id":288,"name":"icoOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":203,"src":"1826:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1817:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":290,"name":"totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":197,"src":"1838:11:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1817:32:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":292,"nodeType":"ExpressionStatement","src":"1817:32:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":294,"name":"tName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":246,"src":"1955:5:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":295,"name":"tSymbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":248,"src":"1962:7:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":296,"name":"nDecimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":250,"src":"1971:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":297,"name":"initialSup","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":252,"src":"1982:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":298,"name":"p_buy","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":254,"src":"1994:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":299,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":256,"src":"2001:5:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address","typeString":"address"}],"id":293,"name":"CreateToken","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":221,"src":"1943:11:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$returns$__$","typeString":"function (string memory,string memory,uint256,uint256,uint256,address)"}},"id":300,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1943:64:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":301,"nodeType":"EmitStatement","src":"1938:69:1"}]},"documentation":null,"id":303,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":259,"modifierName":{"argumentTypes":null,"id":258,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"1466:9:1","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1466:9:1"}],"name":"setERC2Params","nodeType":"FunctionDefinition","parameters":{"id":257,"nodeType":"ParameterList","parameters":[{"constant":false,"id":246,"name":"tName","nodeType":"VariableDeclaration","scope":303,"src":"1361:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":245,"name":"string","nodeType":"ElementaryTypeName","src":"1361:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":248,"name":"tSymbol","nodeType":"VariableDeclaration","scope":303,"src":"1375:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":247,"name":"string","nodeType":"ElementaryTypeName","src":"1375:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":250,"name":"nDecimals","nodeType":"VariableDeclaration","scope":303,"src":"1392:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":249,"name":"uint","nodeType":"ElementaryTypeName","src":"1392:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":252,"name":"initialSup","nodeType":"VariableDeclaration","scope":303,"src":"1408:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":251,"name":"uint256","nodeType":"ElementaryTypeName","src":"1408:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":254,"name":"p_buy","nodeType":"VariableDeclaration","scope":303,"src":"1429:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":253,"name":"uint256","nodeType":"ElementaryTypeName","src":"1429:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":256,"name":"owner","nodeType":"VariableDeclaration","scope":303,"src":"1444:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":255,"name":"address","nodeType":"ElementaryTypeName","src":"1444:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"1360:98:1"},"payable":false,"returnParameters":{"id":260,"nodeType":"ParameterList","parameters":[],"src":"1476:0:1"},"scope":468,"src":"1337:675:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":310,"nodeType":"Block","src":"2133:31:1","statements":[{"expression":{"argumentTypes":null,"id":308,"name":"totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":197,"src":"2148:11:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":307,"id":309,"nodeType":"Return","src":"2141:18:1"}]},"documentation":null,"id":311,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getTotalSupply","nodeType":"FunctionDefinition","parameters":{"id":304,"nodeType":"ParameterList","parameters":[],"src":"2100:2:1"},"payable":false,"returnParameters":{"id":307,"nodeType":"ParameterList","parameters":[{"constant":false,"id":306,"name":"","nodeType":"VariableDeclaration","scope":311,"src":"2128:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":305,"name":"uint","nodeType":"ElementaryTypeName","src":"2128:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2127:6:1"},"scope":468,"src":"2077:87:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":322,"nodeType":"Block","src":"2303:40:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":318,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2318:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":320,"indexExpression":{"argumentTypes":null,"id":319,"name":"tokenOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":313,"src":"2327:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2318:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":317,"id":321,"nodeType":"Return","src":"2311:27:1"}]},"documentation":null,"id":323,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"balanceOf","nodeType":"FunctionDefinition","parameters":{"id":314,"nodeType":"ParameterList","parameters":[{"constant":false,"id":313,"name":"tokenOwner","nodeType":"VariableDeclaration","scope":323,"src":"2245:18:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":312,"name":"address","nodeType":"ElementaryTypeName","src":"2245:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"2244:20:1"},"payable":false,"returnParameters":{"id":317,"nodeType":"ParameterList","parameters":[{"constant":false,"id":316,"name":"balance","nodeType":"VariableDeclaration","scope":323,"src":"2290:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":315,"name":"uint","nodeType":"ElementaryTypeName","src":"2290:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2289:14:1"},"scope":468,"src":"2226:117:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":400,"nodeType":"Block","src":"2499:744:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":337,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":333,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"2526:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":335,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"2541:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":334,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"2533:7:1","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":336,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2533:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"2526:17:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":332,"name":"require","nodeType":"Identifier","overloadedDeclarations":[486,487],"referencedDeclaration":486,"src":"2518:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":338,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2518:26:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":339,"nodeType":"ExpressionStatement","src":"2518:26:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":345,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":341,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2598:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":343,"indexExpression":{"argumentTypes":null,"id":342,"name":"_from","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":325,"src":"2607:5:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2598:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">=","rightExpression":{"argumentTypes":null,"id":344,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"2617:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2598:25:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":340,"name":"require","nodeType":"Identifier","overloadedDeclarations":[486,487],"referencedDeclaration":486,"src":"2590:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":346,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2590:34:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":347,"nodeType":"ExpressionStatement","src":"2590:34:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":357,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":353,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":349,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2677:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":351,"indexExpression":{"argumentTypes":null,"id":350,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"2686:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2677:13:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"id":352,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"2693:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2677:22:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">","rightExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":354,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2702:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":356,"indexExpression":{"argumentTypes":null,"id":355,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"2711:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2702:13:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2677:38:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":348,"name":"require","nodeType":"Identifier","overloadedDeclarations":[486,487],"referencedDeclaration":486,"src":"2669:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":358,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2669:47:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":359,"nodeType":"ExpressionStatement","src":"2669:47:1"},{"assignments":[361],"declarations":[{"constant":false,"id":361,"name":"previousBalances","nodeType":"VariableDeclaration","scope":401,"src":"2755:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":360,"name":"uint","nodeType":"ElementaryTypeName","src":"2755:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":369,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":368,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":362,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2779:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":364,"indexExpression":{"argumentTypes":null,"id":363,"name":"_from","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":325,"src":"2788:5:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2779:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":365,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2797:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":367,"indexExpression":{"argumentTypes":null,"id":366,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"2806:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2797:13:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2779:31:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"2755:55:1"},{"expression":{"argumentTypes":null,"id":374,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":370,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2873:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":372,"indexExpression":{"argumentTypes":null,"id":371,"name":"_from","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":325,"src":"2882:5:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"2873:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":373,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"2892:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2873:25:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":375,"nodeType":"ExpressionStatement","src":"2873:25:1"},{"expression":{"argumentTypes":null,"id":380,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":376,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"2936:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":378,"indexExpression":{"argumentTypes":null,"id":377,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"2945:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"2936:13:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":379,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"2953:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2936:23:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":381,"nodeType":"ExpressionStatement","src":"2936:23:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":383,"name":"_from","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":325,"src":"3024:5:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":384,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"3031:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":385,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"3036:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":382,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":229,"src":"3015:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":386,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3015:28:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":387,"nodeType":"EmitStatement","src":"3010:33:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":397,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":395,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":389,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"3184:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":391,"indexExpression":{"argumentTypes":null,"id":390,"name":"_from","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":325,"src":"3193:5:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3184:15:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":392,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":207,"src":"3202:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":394,"indexExpression":{"argumentTypes":null,"id":393,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"3211:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3202:13:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"3184:31:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":396,"name":"previousBalances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":361,"src":"3219:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"3184:51:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":388,"name":"assert","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":472,"src":"3177:6:1","typeDescriptions":{"typeIdentifier":"t_function_assert_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":398,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3177:59:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":399,"nodeType":"ExpressionStatement","src":"3177:59:1"}]},"documentation":null,"id":401,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"_transfer","nodeType":"FunctionDefinition","parameters":{"id":330,"nodeType":"ParameterList","parameters":[{"constant":false,"id":325,"name":"_from","nodeType":"VariableDeclaration","scope":401,"src":"2449:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":324,"name":"address","nodeType":"ElementaryTypeName","src":"2449:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":327,"name":"_to","nodeType":"VariableDeclaration","scope":401,"src":"2464:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":326,"name":"address","nodeType":"ElementaryTypeName","src":"2464:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":329,"name":"_value","nodeType":"VariableDeclaration","scope":401,"src":"2477:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":328,"name":"uint","nodeType":"ElementaryTypeName","src":"2477:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2448:41:1"},"payable":false,"returnParameters":{"id":331,"nodeType":"ParameterList","parameters":[],"src":"2499:0:1"},"scope":468,"src":"2430:813:1","stateMutability":"nonpayable","superFunction":null,"visibility":"internal"},{"body":{"id":415,"nodeType":"Block","src":"3525:51:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":409,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"3545:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":410,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3545:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":411,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":403,"src":"3557:3:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":412,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":405,"src":"3562:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":408,"name":"_transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":401,"src":"3535:9:1","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":413,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3535:34:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":414,"nodeType":"ExpressionStatement","src":"3535:34:1"}]},"documentation":null,"id":416,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"transfer","nodeType":"FunctionDefinition","parameters":{"id":406,"nodeType":"ParameterList","parameters":[{"constant":false,"id":403,"name":"_to","nodeType":"VariableDeclaration","scope":416,"src":"3489:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":402,"name":"address","nodeType":"ElementaryTypeName","src":"3489:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":405,"name":"_value","nodeType":"VariableDeclaration","scope":416,"src":"3502:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":404,"name":"uint256","nodeType":"ElementaryTypeName","src":"3502:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3487:30:1"},"payable":false,"returnParameters":{"id":407,"nodeType":"ParameterList","parameters":[],"src":"3525:0:1"},"scope":468,"src":"3470:106:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":427,"nodeType":"Block","src":"3780:69:1","statements":[{"expression":{"argumentTypes":null,"id":425,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":423,"name":"buyPrice","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":199,"src":"3820:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":424,"name":"newBuyPrice","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":418,"src":"3831:11:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"3820:22:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":426,"nodeType":"ExpressionStatement","src":"3820:22:1"}]},"documentation":null,"id":428,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":421,"modifierName":{"argumentTypes":null,"id":420,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"3763:9:1","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"3763:9:1"}],"name":"setPrices","nodeType":"FunctionDefinition","parameters":{"id":419,"nodeType":"ParameterList","parameters":[{"constant":false,"id":418,"name":"newBuyPrice","nodeType":"VariableDeclaration","scope":428,"src":"3742:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":417,"name":"uint256","nodeType":"ElementaryTypeName","src":"3742:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3741:21:1"},"payable":false,"returnParameters":{"id":422,"nodeType":"ParameterList","parameters":[],"src":"3780:0:1"},"scope":468,"src":"3722:127:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":452,"nodeType":"Block","src":"3953:221:1","statements":[{"assignments":[432],"declarations":[{"constant":false,"id":432,"name":"amount","nodeType":"VariableDeclaration","scope":453,"src":"3963:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":431,"name":"uint","nodeType":"ElementaryTypeName","src":"3963:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":437,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":436,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":433,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"3977:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":434,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3977:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"/","rightExpression":{"argumentTypes":null,"id":435,"name":"buyPrice","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":199,"src":"3989:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"3977:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"3963:34:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":439,"name":"this","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":498,"src":"4042:4:1","typeDescriptions":{"typeIdentifier":"t_contract$_createERC20_v2_$468","typeString":"contract createERC20_v2"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":440,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"4048:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":441,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"4048:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":442,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":432,"src":"4060:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_createERC20_v2_$468","typeString":"contract createERC20_v2"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":438,"name":"_transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":401,"src":"4031:9:1","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":443,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"4031:36:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":444,"nodeType":"ExpressionStatement","src":"4031:36:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":446,"name":"this","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":498,"src":"4100:4:1","typeDescriptions":{"typeIdentifier":"t_contract$_createERC20_v2_$468","typeString":"contract createERC20_v2"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":447,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":483,"src":"4106:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":448,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"4106:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":449,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":432,"src":"4118:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_createERC20_v2_$468","typeString":"contract createERC20_v2"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":445,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":229,"src":"4091:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":450,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"4091:34:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":451,"nodeType":"EmitStatement","src":"4086:39:1"}]},"documentation":null,"id":453,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"buy","nodeType":"FunctionDefinition","parameters":{"id":429,"nodeType":"ParameterList","parameters":[],"src":"3935:2:1"},"payable":true,"returnParameters":{"id":430,"nodeType":"ParameterList","parameters":[],"src":"3953:0:1"},"scope":468,"src":"3923:251:1","stateMutability":"payable","superFunction":null,"visibility":"public"},{"body":{"id":466,"nodeType":"Block","src":"4378:73:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":463,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":455,"src":"4429:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":460,"name":"icoOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":203,"src":"4411:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":462,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"transfer","nodeType":"MemberAccess","referencedDeclaration":null,"src":"4411:17:1","typeDescriptions":{"typeIdentifier":"t_function_transfer_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256)"}},"id":464,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"4411:25:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":465,"nodeType":"ExpressionStatement","src":"4411:25:1"}]},"documentation":null,"id":467,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[{"arguments":null,"id":458,"modifierName":{"argumentTypes":null,"id":457,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"4361:9:1","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"4361:9:1"}],"name":"extractInvestment","nodeType":"FunctionDefinition","parameters":{"id":456,"nodeType":"ParameterList","parameters":[{"constant":false,"id":455,"name":"amount","nodeType":"VariableDeclaration","scope":467,"src":"4340:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":454,"name":"uint","nodeType":"ElementaryTypeName","src":"4340:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"4339:13:1"},"payable":true,"returnParameters":{"id":459,"nodeType":"ParameterList","parameters":[],"src":"4378:0:1"},"scope":468,"src":"4313:138:1","stateMutability":"payable","superFunction":null,"visibility":"public"}],"scope":469,"src":"25:4430:1"}],"src":"0:4455:1"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{"1528824434059":{"events":{},"links":{},"address":"0x08df6e7b83172126c8fd1606f1d49a28f287301a","transactionHash":"0x3eabc236ed171421dc06015f67ab7a2c04f55327148add8ff05265dbeb295872"},"1528828762524":{"events":{},"links":{},"address":"0x2e0337c6a8cedc06d3dad4e1870568b15705fcdc","transactionHash":"0x3eabc236ed171421dc06015f67ab7a2c04f55327148add8ff05265dbeb295872"},"1528897910800":{"events":{},"links":{},"address":"0x9d2915b83e7b9aaa6152530f8974c8c621322398","transactionHash":"0x3eabc236ed171421dc06015f67ab7a2c04f55327148add8ff05265dbeb295872"},"1528907618310":{"events":{},"links":{},"address":"0xc2d54cd66df4ba8d4a75c4047c6364224abb1899","transactionHash":"0x3eabc236ed171421dc06015f67ab7a2c04f55327148add8ff05265dbeb295872"},"1528909917753":{"events":{},"links":{},"address":"0x826291159e59f97add383438239c0a22ce8f5d18","transactionHash":"0x3eabc236ed171421dc06015f67ab7a2c04f55327148add8ff05265dbeb295872"}},"schemaVersion":"2.0.0","updatedAt":"2018-06-13T17:12:22.896Z"}

/***/ }),

/***/ "./components/BarraNav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraNav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
var _jsxFileName = "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/BarraNav.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 //import { BrowserRouter as Router, Route, Link } from "react-router-dom";



var BarraNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BarraNav, _React$Component);

  function BarraNav(props) {
    var _this;

    _classCallCheck(this, BarraNav);

    _this = _possibleConstructorReturn(this, (BarraNav.__proto__ || Object.getPrototypeOf(BarraNav)).call(this, props));
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BarraNav, [{
    key: "handleSelect",
    value: function handleSelect(eventKey) {
      event.preventDefault(); //alert(`selected ${eventKey}`);

      this.props.navControl(eventKey);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"], {
        inverse: true,
        collapseOnSelect: true,
        style: {
          height: "75px"
        },
        onSelect: function onSelect(k) {
          return _this2.handleSelect(k);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Brand, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        style: {
          listStyle: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white",
          fontSize: "3vh",
          marginLeft: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "ICO FACTORY")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white",
          fontSize: "1.75vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Created by SOF\xCDA VIDAL URRIZA"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Collapse, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Nav"], {
        pullRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], {
        style: {
          color: "white",
          fontSize: "3vh",
          marginLeft: "25px"
        },
        eventKey: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Home"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], {
        style: {
          color: "white",
          fontSize: "3vh",
          marginLeft: "25px"
        },
        eventKey: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Create ICO"))));
    }
  }]);

  return BarraNav;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Formu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
var _jsxFileName = "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/Formu.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Formu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Formu, _React$Component);

  function Formu(props) {
    var _this;

    _classCallCheck(this, Formu);

    _this = _possibleConstructorReturn(this, (Formu.__proto__ || Object.getPrototypeOf(Formu)).call(this, props));
    _this.createICO = _this.createICO.bind(_assertThisInitialized(_this));
    _this.handleDates = _this.handleDates.bind(_assertThisInitialized(_this));
    return _this;
  }
  /*
  * Método que coge la info del formulario y crea un objetoJS ICO
  * que envia al componente padre
  */


  _createClass(Formu, [{
    key: "createICO",
    value: function createICO() {
      //console.log(ReactDOM.findDOMNode(this.refs.icoName).value);
      //console.log(ReactDOM.findDOMNode(this.refs.shortDescription).value);
      var ICO = new Object();
      ICO.icoName = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.refs.icoName).value;
      ICO.tokenName = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.refs.tokenName).value;
      ICO.symbol = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.refs.symbol).value;
      ICO.tokenDecimals = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.refs.tokenDecimals).value;
      ICO.tokenPrice = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.refs.tokenPrice).value;
      ICO.tokenTotalSupply = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.refs.tokenTotalSupply).value;
      var inicio = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.refs.OpeningDate).value;
      var fin = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.refs.ClossingDate).value;

      if (this.handleDates(inicio, fin)) {
        ICO.OpeningDate = inicio;
        ICO.ClossingDate = fin; //console.log ("FECHAS OK")
      } else {
        console.log("FECHAS NOT OK");
      } //console.log("Form INPUT: ")
      //console.log(ICO);
      // se envia info introducida a componente padre


      this.props.formCliked(ICO);
    }
    /*
    *
    */

  }, {
    key: "handleDates",
    value: function handleDates(inicio, fin) {
      //console.log(inicio);
      var first = inicio.split('-'); //console.log(first);

      var inicioDate = new Date(first[0], first[1], first[2]);
      var inicioDate2 = new Date(2018, 5, 4); // year, month, date
      //console.log(inicioDate.toISOString().split('T')[0]);
      //console.log("-----------------------");
      //console.log(inicioDate2.toISOString().split('T')[0]);//  +1 mes, -1 dia ???
      //console.log(fin);

      var last = fin.split('-');
      var lastDate = new Date(last[0], last[1], last[2]); //console.log(lastDate.toISOString().split('T')[0]);
      //console.log("-----------------------");

      var hoy = new Date(); //console.log(hoy);
      //console.log(hoy.toISOString().split('T')[0]);

      var aux = hoy.toISOString().split('T')[0];
      var today = aux.split('-'); //console.log(today);
      //console.log(aux);

      /*var boolFirst;
      var boolLast;
      console.log(inicioDate.getFullYear() >= hoy.getFullYear());
      console.log(inicioDate.getMonth() >= hoy.getMonth());
      console.log(inicioDate.getDate() >= hoy.getDate());
      console.log("-----------------------");
      console.log(inicioDate.getFullYear() <= lastDate.getFullYear());
      console.log(inicioDate.getMonth() <= lastDate.getMonth());
      console.log(inicioDate.getDate() <= lastDate.getDate());
        if ( (inicioDate.getFullYear() >= hoy.getFullYear()) && (inicioDate.getMonth() >= hoy.getMonth()) && (inicioDate.getDate() >= hoy.getDate()) ) {
          boolFirst = true;
      }
      if ( (inicioDate.getFullYear() <= lastDate.getFullYear()) && (inicioDate.getMonth() <= lastDate.getMonth()) && (inicioDate.getDate() <= lastDate.getDate()) ) {
          boolLast = true;
      }
       return (boolFirst && boolLast);*/

      return true;
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, " FORMULARIO "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        className: "formu",
        id: "formu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
        id: "formControlsText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "ICO / Bussiness Name (*) "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
        ref: "icoName",
        type: "text",
        placeholder: "Bussiness Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
        id: "formControlsText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "Opening Date (*) "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
        ref: "OpeningDate",
        className: "Opening Date",
        type: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "Clossing Date (*) "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
        ref: "ClossingDate",
        className: "ClossingDate",
        type: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
        id: "formControlsText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "Token / Coin Name(*) "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
        ref: "tokenName",
        type: "text",
        placeholder: "Enter Token Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
        id: "formControlsText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "Token symbol(*) "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
        ref: "symbol",
        type: "text",
        placeholder: "Enter Symbol",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
        id: "formControlsText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, "Token decimals (*) "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
        ref: "tokenDecimals",
        type: "number",
        placeholder: "Insert decimals between 0 to 18",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
        id: "formControlsText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "Total Supply of new Token (*) "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
        ref: "tokenTotalSupply",
        type: "number",
        placeholder: "Insert amount of ether",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
        id: "formControlsText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "Token price in Ether (*) "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
        ref: "tokenPrice",
        type: "number",
        placeholder: "Insert amount of ether",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["ControlLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, "Required Fields"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"].Static, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "You must complete the boxes marked by (*) "))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], {
        className: "myButton",
        onClick: this.createICO,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, "CREATE ICO"));
    }
  }]);

  return Formu;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/IcoDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcoDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_truffle_contract__ = __webpack_require__("truffle-contract");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_truffle_contract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_truffle_contract__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json__ = __webpack_require__("./build/contracts/createERC20_v2.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json__);

var _jsxFileName = "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/IcoDetail.js";

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
    _this.getClosingDate = _this.getClosingDate.bind(_assertThisInitialized(_this)); //this.getPrice = this.getPrice.bind(this);

    _this.transfer = _this.transfer.bind(_assertThisInitialized(_this));
    _this.showInfo = _this.showInfo.bind(_assertThisInitialized(_this));
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
    /*async getPrice() {
    	
    	var tprice = await this.props.instancia.getTokenPriceByID.call(this.props.ico);
    	tprice = tprice.toNumber();
    	this.setState({price: tprice});
     }*/

  }, {
    key: "getTokenName",
    value: function () {
      var _getTokenName = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4() {
        var token, theERC20, instance, tokName, tokPrice, tprice;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.props.instancia.getTokenAddressByID.call(this.props.ico);

              case 2:
                token = _context4.sent;
                theERC20 = __WEBPACK_IMPORTED_MODULE_3_truffle_contract___default()(__WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json___default.a);
                theERC20.setProvider(web3.currentProvider);
                instance = theERC20.at(token);
                _context4.next = 8;
                return instance.tokenName();

              case 8:
                tokName = _context4.sent;
                _context4.next = 11;
                return instance.buyPrice();

              case 11:
                tokPrice = _context4.sent;
                tprice = tokPrice.toNumber();
                this.setState({
                  token: tokName,
                  price: tprice
                });

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
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
    key: "showInfo",
    value: function showInfo() {
      this.props.navControl(2);
      this.props.clickedICO(this.props.ico.toNumber());
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
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        onClick: this.showInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, this.state.name)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, this.state.openingDate), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, this.state.closingDate), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, this.state.token), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, this.state.price, " ethers/toker"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Button"], {
        onClick: this.transfer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "Buy tokens")));
    }
  }]);

  return IcoDetail;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/IcoList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcoList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_IcoDetail__ = __webpack_require__("./components/IcoDetail.js");
var _jsxFileName = "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/IcoList.js";

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
    _this.navControlList = _this.navControlList.bind(_assertThisInitialized(_this));
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
    key: "navControlList",
    value: function navControlList(view) {
      this.props.navControl(view);
    }
  }, {
    key: "clickedICO",
    value: function clickedICO(id) {
      this.props.clickedICO(id);
    }
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
          navControl: _this2.navControlList,
          clickedICO: _this2.clickedICO,
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Table"], {
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
  }]);

  return IcoList;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/InfoDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfoDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
var _jsxFileName = "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/components/InfoDetail.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var IfoDetail =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IfoDetail, _React$Component);

  function IfoDetail(props) {
    _classCallCheck(this, IfoDetail);

    return _possibleConstructorReturn(this, (IfoDetail.__proto__ || Object.getPrototypeOf(IfoDetail)).call(this, props));
  }

  _createClass(IfoDetail, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, " ICO NAME ", this.props.IcoID), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, " All info a continuacion "));
    }
  }]);

  return IfoDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__build_contracts_IcoDDBB_json__ = __webpack_require__("./build/contracts/IcoDDBB.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__build_contracts_IcoDDBB_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__build_contracts_IcoDDBB_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json__ = __webpack_require__("./build/contracts/createERC20_v2.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_truffle_contract__ = __webpack_require__("truffle-contract");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_truffle_contract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_truffle_contract__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Formu__ = __webpack_require__("./components/Formu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_IcoList__ = __webpack_require__("./components/IcoList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_BarraNav__ = __webpack_require__("./components/BarraNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_InfoDetail__ = __webpack_require__("./components/InfoDetail.js");

var _jsxFileName = "/home/sofiavidal/Escritorio/ICO_Plataform/TFG-ICO-Plataform/pages/index.js";

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
      id_Array: null,
      nav: 0,
      icoClicked: null
    };
    _this.formCliked = _this.formCliked.bind(_assertThisInitialized(_this));
    _this.registerNewICO = _this.registerNewICO.bind(_assertThisInitialized(_this));
    _this.deployNewERC20 = _this.deployNewERC20.bind(_assertThisInitialized(_this));
    _this.updateList = _this.updateList.bind(_assertThisInitialized(_this));
    _this.executeTransfer = _this.executeTransfer.bind(_assertThisInitialized(_this));
    _this.navControl = _this.navControl.bind(_assertThisInitialized(_this));
    _this.clickedICO = _this.clickedICO.bind(_assertThisInitialized(_this));
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
                    last.owner = event.args.icoOwner; //console.log(last.valueOf());

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
                this.updateList();

              case 10:
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
    value: function () {
      var _formCliked = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(formInfo) {
        var tokenAddr;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log("formInfo recieved"); //console.log(formInfo);
                // Desplegar ERC20 de la new ICO

                _context2.next = 3;
                return this.deployNewERC20(formInfo);

              case 3:
                tokenAddr = _context2.sent;
                console.log("TRAZA 2: " + tokenAddr); // Guardar nueva ICO en Smart Contract IcoDDBB.sol

                this.registerNewICO(formInfo, tokenAddr); // Actualizar listado de ICos

                this.updateList();
                this.setState({
                  nav: 0
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function formCliked(_x) {
        return _formCliked.apply(this, arguments);
      };
    }()
    /*
    * Se conecta con la blockchain para interactuar con el smart contract IcoDDBB.sol
    */

  }, {
    key: "registerNewICO",
    value: function registerNewICO(info, tokenAdd) {
      console.log(">>>>REGISTER<<<<<<"); //console.log(info);

      var add = tokenAdd;
      console.log("AAAAAQUIIIIIIIII");
      console.log(add); //register(string name, string opppening, string clossing)
      //register(string name, address token,  string opppening, string clossing)

      this.state.contrato.register(info.icoName, add, info.OpeningDate, info.ClossingDate, {
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
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(info) {
        var theERC20, tokenInstance, eventTransfer;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(">>>>DEPLOY ERC20<<<<<<"); //console.log(info);

                theERC20 = __WEBPACK_IMPORTED_MODULE_6_truffle_contract___default()(__WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json___default.a);
                theERC20.setProvider(web3.currentProvider); // CONTRATO	
                // New instance of the Smart Contract -> NUEW TOKEN

                _context3.next = 5;
                return theERC20.new({
                  from: account,
                  gas: 2000000
                }).then(function (instanciaERC20) {
                  // print addr of the new token 
                  console.log(">>>>>>>>> NEW TOKEN <<<<<<<<<<<");
                  console.log(instanciaERC20.address);
                  return instanciaERC20;
                });

              case 5:
                tokenInstance = _context3.sent;
                //console.log("Contrato: " + tokenInstance);		
                tokenInstance.setERC2Params(info.tokenName, info.symbol, info.tokenDecimals, info.tokenTotalSupply, info.tokenPrice, account, {
                  from: account,
                  gas: 200000
                }).then(function (res, err) {
                  if (!err) {
                    console.log(">>>>> PARAMs SET <<<<<<");
                  } else {
                    console.log(err);
                  }
                }); // Actualizamos array

                arrayERC20.push(tokenInstance); //arrayERC20.push(contrato);
                //console.log("array lenght" + arrayERC20.length);
                //var tok = await tokenInstance.tokenName();

                _context3.t0 = console;
                _context3.next = 11;
                return tokenInstance.tokenName();

              case 11:
                _context3.t1 = _context3.sent;
                _context3.t2 = "TOKEN NAME " + _context3.t1;

                _context3.t0.log.call(_context3.t0, _context3.t2);

                // EVENTO
                // event Transfer(address indexed from, address indexed to, uint256 value)
                eventTransfer = tokenInstance.Transfer(); //contrato.Transfer();
                //console.log(eventTransfer);
                // LANZAMOS WATCH

                eventTransfer.watch(function (err, event) {
                  //console.log(event);
                  if (err) {
                    console.log(err);
                  } else {
                    console.log("This is the Transfer event!"); //console.log(event);

                    console.log(">>>>> TANSFER MADE <<<<<");
                    console.log("Anamount of " + event.args.value + " tokens have been transfered to " + event.args.to); //updateList();
                  }
                });
                console.log("eventTransfer watch has been started");
                this.setState({
                  event_Transfer: eventTransfer
                }); // RETURN THE ADDRESS OF THE CONTRACT CREATED ABOVE

                console.log("TRAZA 1: " + tokenInstance.address);
                return _context3.abrupt("return", tokenInstance.address);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function deployNewERC20(_x2) {
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
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4() {
        var idArray;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log("UPDATE ICO LIST ");
                idArray = [];
                _context4.next = 4;
                return this.state.contrato.getIdIcos.call();

              case 4:
                idArray = _context4.sent;
                //console.log("ARRAY");
                //console.log(idArray);
                this.setState({
                  id_Array: idArray
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
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
    value: function () {
      var _executeTransfer = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(contractID) {
        var theContract, theERC20, instance;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log("TRAZA 4");
                console.log(contractID); //contract.transfer(account, 100, {from: account, gas:200000});
                //console.log(this.state.contrato)

                _context5.next = 4;
                return this.state.contrato.getTokenAddressByID.call(contractID);

              case 4:
                theContract = _context5.sent;
                theERC20 = __WEBPACK_IMPORTED_MODULE_6_truffle_contract___default()(__WEBPACK_IMPORTED_MODULE_5__build_contracts_createERC20_v2_json___default.a);
                theERC20.setProvider(web3.currentProvider);
                console.log(theContract);
                instance = theERC20.at(theContract);
                instance.transfer(account, 100, {
                  from: account,
                  gas: 200000
                });

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function executeTransfer(_x3) {
        return _executeTransfer.apply(this, arguments);
      };
    }()
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
  }, {
    key: "navControl",
    value: function navControl(updatedState) {
      this.setState({
        nav: updatedState
      });
    }
  }, {
    key: "clickedICO",
    value: function clickedICO(id) {
      this.setState({
        icoClicked: id
      });
    }
    /*
    * Metodo render que renderiza la vista ppal
    */

  }, {
    key: "render",
    value: function render() {
      switch (this.state.nav) {
        case 0:
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 295
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
            rel: "stylesheet",
            href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
            integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
            crossOrigin: "anonymous",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 296
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_BarraNav__["a" /* default */], {
            navControl: this.navControl,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Col"], {
            md: 2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 298
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Col"], {
            xs: 12,
            md: 8,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 299
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_IcoList__["a" /* default */], {
            ICOarray: this.state.id_Array,
            instancia: this.state.contrato,
            arrayERC20: arrayERC20,
            getERC20contract: this.executeTransfer,
            navControl: this.navControl,
            clickedICO: this.clickedICO,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 300
            }
          })));
          break;

        case 1:
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 314
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
            rel: "stylesheet",
            href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
            integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
            crossOrigin: "anonymous",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 315
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_BarraNav__["a" /* default */], {
            navControl: this.navControl,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 316
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Col"], {
            md: 2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 317
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Col"], {
            xs: 12,
            md: 8,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 318
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Formu__["a" /* default */], {
            formCliked: this.formCliked,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 319
            }
          })));
          break;

        case 2:
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 327
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
            rel: "stylesheet",
            href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
            integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
            crossOrigin: "anonymous",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 328
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_BarraNav__["a" /* default */], {
            navControl: this.navControl,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 329
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Col"], {
            md: 2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 330
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Col"], {
            xs: 12,
            md: 8,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 331
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_InfoDetail__["a" /* default */], {
            IcoID: this.state.icoClicked,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 332
            }
          })));
          break;

        default:
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 340
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
            rel: "stylesheet",
            href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
            integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
            crossOrigin: "anonymous",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 341
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_BarraNav__["a" /* default */], {
            navControl: this.navControl,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 342
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Col"], {
            md: 2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 343
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Col"], {
            xs: 12,
            md: 8,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 344
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_IcoList__["a" /* default */], {
            ICOarray: this.state.id_Array,
            instancia: this.state.contrato,
            arrayERC20: arrayERC20,
            getERC20contract: this.executeTransfer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 345
            }
          })));
      }
      /*return(
      	<div>
      		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
      		<BarraNav navControl={this.navControl}/>
      		
              <Col md={5} style={{borderRight: "solid"}}>											
      			<Formu formCliked={this.formCliked}/>											
      		</Col>
      			<Col md={7} >
      				<IcoList ICOarray={this.state.id_Array}  instancia={this.state.contrato} arrayERC20={arrayERC20} getERC20contract={this.executeTransfer}/>
      			</Col>
      		</div>
      );*/

    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "truffle-contract":
/***/ (function(module, exports) {

module.exports = require("truffle-contract");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map