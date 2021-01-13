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
var Events;
(function (Events) {
    Events[Events["SHOW_MIDDLE_NAME"] = 0] = "SHOW_MIDDLE_NAME";
    Events[Events["HIDE_MIDDLE_NAME"] = 1] = "HIDE_MIDDLE_NAME";
    Events[Events["RESET_FIELDS"] = 2] = "RESET_FIELDS";
})(Events || (Events = {}));
/**
 * Конкретные Посредники реализуют совместное поведение, координируя отдельные
 * компоненты.
 */
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator(c1, c2, c3) {
        this.middleNameCheckbox = c1;
        this.middleNameCheckbox.setMediator(this);
        this.loginButton = c2;
        this.loginButton.setMediator(this);
        this.middleNameInput = c3;
        this.middleNameInput.setMediator(this);
    }
    ConcreteMediator.prototype.notify = function (sender, event) {
        console.log("sender is " + sender);
        switch (event) {
            case Events.RESET_FIELDS:
                console.log("Mediator reacts on Events.RESET_FIELDS");
                this.middleNameInput.clearInput();
                this.middleNameInput.setInvisible();
                break;
            case Events.HIDE_MIDDLE_NAME:
                console.log("Mediator reacts on Events.HIDE_MIDDLE_NAME");
                this.middleNameInput.setInvisible();
                this.middleNameInput.clearInput();
                break;
            case Events.SHOW_MIDDLE_NAME:
                console.log("Mediator reacts on Events.SHOW_MIDDLE_NAME");
                this.middleNameInput.setVisible();
                break;
        }
    };
    return ConcreteMediator;
}());
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
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkbox.prototype.showMiddleName = function () {
        console.log("MiddleName checkbox show middleName");
        this.mediator.notify(this, Events.SHOW_MIDDLE_NAME);
    };
    Checkbox.prototype.hideMiddleName = function () {
        console.log("MiddleName checkbox hide middleName");
        this.mediator.notify(this, Events.HIDE_MIDDLE_NAME);
    };
    return Checkbox;
}(BaseComponent));
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
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.resetFields = function () {
        console.log("Login Button reset fields");
        this.mediator.notify(this, Events.RESET_FIELDS);
    };
    return Button;
}(BaseComponent));
/**
 * Клиентский код.
 */
var chanboxMiddlename = new Checkbox();
var buttonSave = new Button();
var inputMiddlename = new Input();
var mediator = new ConcreteMediator(chanboxMiddlename, buttonSave, inputMiddlename);
console.log("Admin want set middlename");
chanboxMiddlename.showMiddleName();
console.log("");
console.log("Admin save new user");
buttonSave.resetFields();
