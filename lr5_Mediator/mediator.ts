enum Events {
  SHOW_MIDDLE_NAME = 0,
  HIDE_MIDDLE_NAME = 1,
  RESET_FIELDS = 2,
}

interface ProtoMediator {
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

class BaseComponent {
  protected mediator: ProtoMediator;

  constructor(mediator: ProtoMediator = null) {
    this.mediator = mediator;
  }

  public setMediator(mediator: ProtoMediator): void {
    this.mediator = mediator;
  }
}

class Checkbox extends BaseComponent {
  public showMiddleName(): void {
    console.log("MiddleName checkbox show middleName");
    this.mediator.notify(this, Events.SHOW_MIDDLE_NAME);
  }

  public hideMiddleName(): void {
    console.log("MiddleName checkbox hide middleName");
    this.mediator.notify(this, Events.HIDE_MIDDLE_NAME);
  }
}

class Input extends BaseComponent {
  public setVisible(): void {
    console.log("Input was visible");
  }

  public setInvisible(): void {
    console.log("Input was invisible");
  }

  public clearInput(): void {
    console.log("Input was cleared");
  }
}

class Button extends BaseComponent {
  public resetFields(): void {
    console.log("Login Button reset fields");
    this.mediator.notify(this, Events.RESET_FIELDS);
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

this.clientCode();
