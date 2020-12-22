var IOSGadgetFactory = /** @class */ (function () {
    function IOSGadgetFactory() {
    }
    IOSGadgetFactory.prototype.createPhone = function () {
        return new Iphone();
    };
    IOSGadgetFactory.prototype.createLaptop = function () {
        return new MacbookPro();
    };
    return IOSGadgetFactory;
}());
var AndroidGadgetFactory = /** @class */ (function () {
    function AndroidGadgetFactory() {
    }
    AndroidGadgetFactory.prototype.createPhone = function () {
        return new Pixel();
    };
    AndroidGadgetFactory.prototype.createLaptop = function () {
        return new ChromeBook();
    };
    return AndroidGadgetFactory;
}());
var Iphone = /** @class */ (function () {
    function Iphone() {
    }
    Iphone.prototype.doPhoto = function () {
        return "Iphone do photo";
    };
    return Iphone;
}());
var Pixel = /** @class */ (function () {
    function Pixel() {
    }
    Pixel.prototype.doPhoto = function () {
        return "Pixel do photo";
    };
    return Pixel;
}());
var MacbookPro = /** @class */ (function () {
    function MacbookPro() {
    }
    MacbookPro.prototype.checkCodeCreatorLaptop = function () {
        return "Code written on macbook";
    };
    MacbookPro.prototype.usePhotoFromPhone = function (collaborator) {
        var result = collaborator.doPhoto();
        return "Macbook uses photo (" + result + ")";
    };
    return MacbookPro;
}());
var ChromeBook = /** @class */ (function () {
    function ChromeBook() {
    }
    ChromeBook.prototype.checkCodeCreatorLaptop = function () {
        return "Code written on chrome book";
    };
    ChromeBook.prototype.usePhotoFromPhone = function (collaborator) {
        var result = collaborator.doPhoto();
        return "Macbook uses photo (" + result + ")";
    };
    return ChromeBook;
}());
function doFactoryCode(factory) {
    var phone = factory.createPhone();
    var laptop = factory.createLaptop();
    console.log(phone.doPhoto());
    console.log(laptop.checkCodeCreatorLaptop());
    console.log(laptop.usePhotoFromPhone(phone));
}
console.log("Ios pack");
doFactoryCode(new IOSGadgetFactory());
console.log("");
console.log("Android pack");
doFactoryCode(new AndroidGadgetFactory());
