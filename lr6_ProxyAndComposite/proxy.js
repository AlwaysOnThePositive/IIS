var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log("RealSubject: Handling request.");
    };
    return RealSubject;
}());
var MyProxy = /** @class */ (function () {
    function MyProxy(realSubject) {
        this.realSubject = realSubject;
    }
    MyProxy.prototype.request = function () {
        if (!this.checkAccess())
            return;
        this.realSubject.request();
        this.logAccess();
    };
    MyProxy.prototype.checkAccess = function () {
        console.log("Proxy: check access");
        return true;
    };
    MyProxy.prototype.logAccess = function () {
        console.log("Proxy: Logging the time of request");
    };
    return MyProxy;
}());
function clientCode(subject) {
    subject.request();
}
console.log("Real subject");
var realSubject = new RealSubject();
clientCode(realSubject);
console.log("");
console.log("Proxy");
var proxy = new MyProxy(realSubject);
clientCode(proxy);
