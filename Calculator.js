var Calculator;
(function (Calculator) {
    var BasicCalculator = /** @class */ (function () {
        function BasicCalculator() {
            console.log("BasicCalculator constructor");
        }
        return BasicCalculator;
    }());
    Calculator.BasicCalculator = BasicCalculator;
})(Calculator || (Calculator = {}));
