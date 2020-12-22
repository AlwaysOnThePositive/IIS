var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.doLogic = function (payload) {
        var resAfterSort = this.strategy.doAlgorithm(payload);
        var resultArray = __spreadArrays(resAfterSort);
        console.log(resultArray, typeof resultArray);
    };
    return Context;
}());
var StrategySort = /** @class */ (function () {
    function StrategySort() {
    }
    StrategySort.prototype.doAlgorithm = function (data) {
        return data.sort();
    };
    return StrategySort;
}());
var StrategyReverse = /** @class */ (function () {
    function StrategyReverse() {
    }
    StrategyReverse.prototype.doAlgorithm = function (data) {
        return data.reverse();
    };
    return StrategyReverse;
}());
var context = new Context(new StrategySort());
console.log("Strategy sort example");
var testData1 = ["a", "c", "b", "e", "d"];
context.doLogic(testData1);
console.log("");
console.log("Strategy reverse example");
context.setStrategy(new StrategyReverse());
var testData2 = ["a", "b", "c", "e", "d"];
context.doLogic(testData2);
