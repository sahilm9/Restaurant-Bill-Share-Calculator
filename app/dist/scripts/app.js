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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _calculateRestaurantBill = __webpack_require__(1);

var _calculateRestaurantBill2 = _interopRequireDefault(_calculateRestaurantBill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bill = new _calculateRestaurantBill2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalculateRestaurantBill = function () {
  // will be run when class is invoked using new keyword
  function CalculateRestaurantBill() {
    _classCallCheck(this, CalculateRestaurantBill);

    // initiale required variables
    this.personShare = document.getElementById('personShare');
    this.each = document.getElementById('each');
    this.calculateBtn = document.getElementById('calculate');
    this.shareAmount = document.getElementById("share");
    this.defaultValues();
    // invoke the appendStatesOptions functions to append states as options to selectState
    this.appendStatesOptions();
    // invoke the appendSeviceQualityOptions to append service quality options to serviceQuality
    this.appendSeviceQualityOptions();
  }

  _createClass(CalculateRestaurantBill, [{
    key: 'defaultValues',
    value: function defaultValues() {
      // start with not displaying the personShare
      this.personShare.style.display = 'none';
      // listen for click event on button and call the calculate function
      this.calculateBtn.addEventListener("click", this.calculate.bind(this));
    }
    // function to append options to selectState

  }, {
    key: 'appendStatesOptions',
    value: function appendStatesOptions() {
      // an object to store states and their corresponding sales tax percentage
      var states = {
        'Alabama': 1.0400,
        'Arizona': 1.0560,
        'Arkansas': 1.0650,
        'California': 1.0725,
        'Colorado': 1.0290,
        'Connecticut': 1.0635,
        'Florida': 1.0600,
        'Georgia': 1.0400,
        'Hawaii': 1.0400,
        'Idaho': 1.0600,
        'Illinois': 1.0625,
        'Indiana': 1.0700,
        'Iowa': 1.0600,
        'Kansas': 1.0650,
        'kentucky': 1.0600,
        'Louisiana': 1.0500,
        'Maine': 1.0550,
        'Maryland': 1.0600,
        'Massachusetts': 1.0625,
        'Michigan': 1.0600,
        'Minnesota': 1.0687,
        'Mississippi': 1.0700,
        'Missouri': 1.0422,
        'Nebraska': 1.0550,
        'Nevada': 1.0685,
        'New Jersey': 1.0625,
        'New Mexico': 1.0512,
        'New York': 1.0400,
        'North Carolina': 1.0475,
        'North Dakota': 1.0500,
        'Ohio': 1.0575,
        'Oklahoma': 1.0450,
        'Pennsylvania': 1.0600,
        'Rhode Island': 1.0700,
        'South Carloina': 1.0600,
        'South Dakota': 1.0450,
        'Tennessee': 1.0700,
        'Texas': 1.0625,
        'Utah': 1.0595,
        'Vermont': 1.0600,
        'Virginia': 1.0530,
        'Washington': 1.0650,
        'West Virginia': 1.0600,
        'Wisconsin': 1.0500,
        'Wyoming': 1.0400,
        'Washington D C': 1.0575
      };
      var selectState = document.getElementById('selectState');
      // loop through length of states object
      for (var state in states) {
        // create element option
        var opt = document.createElement('option');
        // set value attribute to state's sales tax
        opt.value = states[state];
        // set content to state
        opt.innerHTML = state;
        // append the option to selectState
        selectState.appendChild(opt);
      }
    }
    // function to append options to serviceQuality

  }, {
    key: 'appendSeviceQualityOptions',
    value: function appendSeviceQualityOptions() {
      // an object to store serviceQuality and their corresponding percentage
      var serviceQuality = {
        '30% - Outstanding': 1.3,
        '20% - Good': 1.2,
        '15% - It was okay': 1.15,
        '10% - Bad': 1.10,
        '5% - Terrible': 1.05
      };
      var selectService = document.getElementById('serviceQuality');
      // loop through length of serviceQuality object
      for (var service in serviceQuality) {
        // create element option
        var opt = document.createElement('option');
        // set value attribute to serviceQuality's percentage
        opt.value = serviceQuality[service];
        // set content to service
        opt.innerHTML = service;
        // append the option to selectService
        selectService.appendChild(opt);
      }
    }
    // function to calculate each person's share

  }, {
    key: 'calculate',
    value: function calculate() {
      var billAmount = document.getElementById('billAmount').value;
      var serviceQuality = document.getElementById('serviceQuality').value;
      var numPeople = document.getElementById('totalPeople').value;
      var selectedState = document.getElementById('selectState').value;
      // check to see if billAmount or serviceQuality or selctState are not selected or given
      if (billAmount === "" || serviceQuality === '0' || selectState === '0') {
        // end alert user to enter values and end function
        return window.alert("Please enter/select the required fields to calculate the share");
      }
      // check to see numPeople is empty or less than or equal to one
      if (numPeople === "" || numPeople <= 1) {
        numPeople = 1;
      }
      // calculate total
      var total = billAmount * selectedState * serviceQuality / numPeople;
      total = (Math.round(total * 100) / 100).toFixed(2);
      // make personShare text display block
      this.personShare.style.display = 'block';
      // set content to total
      this.shareAmount.innerHTML = total;
    }
  }]);

  return CalculateRestaurantBill;
}();

exports.default = CalculateRestaurantBill;

/***/ })
/******/ ]);