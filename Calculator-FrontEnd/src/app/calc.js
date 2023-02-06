"use strict";
exports.__esModule = true;
exports.calculator = void 0;
var btns = document.getElementById("nums");
var disp = document.getElementsByClassName("cal_disp");
var calculator = /** @class */ (function () {
    function calculator() {
        this.prev_op = "";
        this.op = "";
        this.curr_op = "";
    }
    /*constructor(prev_op:string,op:string,curr_op:string)
    {
      this.prev_op=prev_op;
      this.op=op;
      this.curr_op=curr_op;
    }*/
    calculator.prototype.clear = function () {
        this.prev_op = '';
        this.op = '';
        this.curr_op = '';
    };
    calculator.prototype.update = function () {
        if (this.curr_op.includes('.') && btns.textContent === '.') {
            return;
        }
        this.curr_op += btns.textContent;
    };
    return calculator;
}());
exports.calculator = calculator;
