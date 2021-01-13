interface ProtoSubject {
  request(): void;
}

class RealSubject implements ProtoSubject {
  public request(): void {
    console.log("RealSubject: Handling request.");
  }
}

class MyProxy implements ProtoSubject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public request(): void {
    // protection against unauthorized users
    if (!this.checkAccess()) return;

    this.realSubject.request();
    this.logAccess();
  }

  private checkAccess(): boolean {
    console.log("Proxy: check access");
    return true;
  }

  private logAccess(): void {
    console.log("Proxy: log access");
  }
}

function clientCode(subject: ProtoSubject) {
  subject.request();
}

console.log("Real subject");
const realSubject = new RealSubject();
clientCode(realSubject);

console.log("");
console.log("Proxy");
const proxy = new MyProxy(realSubject);
clientCode(proxy);
