"use strict";
exports.__esModule = true;
exports.Events = void 0;
var components_1 = require("./components");
var Events;
(function (Events) {
    Events[Events["SHOW_MIDDLE_NAME"] = 0] = "SHOW_MIDDLE_NAME";
    Events[Events["HIDE_MIDDLE_NAME"] = 1] = "HIDE_MIDDLE_NAME";
    Events[Events["RESET_FIELDS"] = 2] = "RESET_FIELDS";
})(Events = exports.Events || (exports.Events = {}));
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
function clientCode() {
    var chanboxMiddlename = new components_1.Checkbox();
    var buttonSave = new components_1.Button();
    var inputMiddlename = new components_1.Input();
    var mediator = new ConcreteMediator(chanboxMiddlename, buttonSave, inputMiddlename);
    console.log("Admin want set middlename");
    chanboxMiddlename.showMiddleName();
    console.log("");
    console.log("Admin save new user");
    buttonSave.resetFields();
}
clientCode();
