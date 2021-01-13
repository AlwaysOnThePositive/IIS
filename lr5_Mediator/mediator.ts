import { Checkbox, Input, Button } from './components';

export enum Events {
  SHOW_MIDDLE_NAME = 0,
  HIDE_MIDDLE_NAME = 1,
  RESET_FIELDS = 2,
}

export interface ProtoMediator {
  notify(sender: object, event: Events): void;
}

class ConcreteMediator implements ProtoMediator {
  private middleNameCheckbox: Checkbox;
  private loginButton: Button;
  private middleNameInput: Input;

  constructor(c1: Checkbox, c2: Button, c3: Input) {
    this.middleNameCheckbox = c1;
    this.middleNameCheckbox.setMediator(this);
    this.loginButton = c2;
    this.loginButton.setMediator(this);
    this.middleNameInput = c3;
    this.middleNameInput.setMediator(this);
  }

  public notify(sender: object, event: Events): void {
    console.log(`sender is ${sender}`);
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
  }
}

function clientCode(): void {
  const chanboxMiddlename = new Checkbox();
  const buttonSave = new Button();
  const inputMiddlename = new Input();
  const mediator = new ConcreteMediator(
    chanboxMiddlename,
    buttonSave,
    inputMiddlename
  );

  console.log("Admin want set middlename");
  chanboxMiddlename.showMiddleName();

  console.log("");
  console.log("Admin save new user");
  buttonSave.resetFields();
}

clientCode();
