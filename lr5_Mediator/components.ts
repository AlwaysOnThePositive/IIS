import { ProtoMediator, Events } from './mediator';

export class BaseComponent {
  protected mediator: ProtoMediator;

  constructor(mediator: ProtoMediator = null) {
    this.mediator = mediator;
  }

  public setMediator(mediator: ProtoMediator): void {
    this.mediator = mediator;
  }
}

export class Checkbox extends BaseComponent {
  public showMiddleName(): void {
    console.log("MiddleName checkbox show middleName");
    this.mediator.notify(this, Events.SHOW_MIDDLE_NAME);
  }

  public hideMiddleName(): void {
    console.log("MiddleName checkbox hide middleName");
    this.mediator.notify(this, Events.HIDE_MIDDLE_NAME);
  }
}

export class Input extends BaseComponent {
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

export class Button extends BaseComponent {
  public resetFields(): void {
    console.log("Login Button reset fields");
    this.mediator.notify(this, Events.RESET_FIELDS);
  }
}