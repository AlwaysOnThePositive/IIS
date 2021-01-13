"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Button = exports.Input = exports.Checkbox = exports.BaseComponent = void 0;
var mediator_1 = require("./mediator");
var BaseComponent = /** @class */ (function () {
    function BaseComponent(mediator) {
        if (mediator === void 0) { mediator = null; }
        this.mediator = mediator;
    }
    BaseComponent.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkbox.prototype.showMiddleName = function () {
        console.log("MiddleName checkbox show middleName");
        this.mediator.notify(this, mediator_1.Events.SHOW_MIDDLE_NAME);
    };
    Checkbox.prototype.hideMiddleName = function () {
        console.log("MiddleName checkbox hide middleName");
        this.mediator.notify(this, mediator_1.Events.HIDE_MIDDLE_NAME);
    };
    return Checkbox;
}(BaseComponent));
exports.Checkbox = Checkbox;
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.setVisible = function () {
        console.log("Input was visible");
    };
    Input.prototype.setInvisible = function () {
        console.log("Input was invisible");
    };
    Input.prototype.clearInput = function () {
        console.log("Input was cleared");
    };
    return Input;
}(BaseComponent));
exports.Input = Input;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.resetFields = function () {
        console.log("Login Button reset fields");
        this.mediator.notify(this, mediator_1.Events.RESET_FIELDS);
    };
    return Button;
}(BaseComponent));
exports.Button = Button;
