(function () {

  var app = angular.module('Calculator', []);

  app.controller('CalculatorController', function () {
    var controller = this;

    this.value = "0"
    this.holder;
    this.current;
    this.operator;
    this.isDecimal = false;
    this.operators = ["+", "/", "*", "-"];

    this.getDigitValue = function (digit) {
      if (this.value.length === 1 && parseInt(this.value) === 0) {
        this.value = "";
      }

      this.value += digit;

    }

    /* Resets all variables that needed to be reset */
    this.allClear = function () {
      this.value = "0";
      this.operator = undefined;
      this.holder = undefined;
      this.isDecimal = false;
    }

    /* 
      Only clears the current holder of digits
    */
    this.clear = function () {
      var trimmed_string = this.value.substring(0, this.value.length - 1);
      if (trimmed_string.length < 1 || trimmed_string == "") {
        this.value = "0";
        this.isDecimal = false;
      } else {
        if (!trimmed_string.indexOf('.') > -1) {
          this.isDecimal = false;
        }
        this.value = trimmed_string;
      }
    };

    this.setExpression = function (operator) {

    };

    this.setDecimal = function () {

      if (this.value.length > 1) {
        if (!this.isDecimal) {
          this.value += "."
          this.isDecimal = true;
        }
      } else {
        if (!this.isDecimal) {
          this.value = ".";
          this.isDecimal = true;  
        }
      }

    }
  });

})();