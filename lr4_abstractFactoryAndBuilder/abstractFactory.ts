interface GadgetsFactory {
  createPhone(): Phone;

  createLaptop(): Laptop;
}

class IOSGadgetFactory implements GadgetsFactory {
  public createPhone(): Phone {
    return new Iphone();
  }

  public createLaptop(): Laptop {
    return new MacbookPro();
  }
}

class AndroidGadgetFactory implements GadgetsFactory {
  public createPhone(): Phone {
    return new Pixel();
  }

  public createLaptop(): Laptop {
    return new ChromeBook();
  }
}

interface Phone {
  doPhoto(): string;
}

class Iphone implements Phone {
  public doPhoto(): string {
    return "Iphone do photo";
  }
}

class Pixel implements Phone {
  public doPhoto(): string {
    return "Pixel do photo";
  }
}

interface Laptop {
  /* self */
  checkCodeCreatorLaptop(): string;

  /* both */
  usePhotoFromPhone(collaborator: Phone): string;
}

class MacbookPro implements Laptop {
  public checkCodeCreatorLaptop(): string {
    return "Code written on macbook";
  }

  public usePhotoFromPhone(collaborator: Phone): string {
    const result = collaborator.doPhoto();
    return `Macbook uses photo (${result})`;
  }
}

class ChromeBook implements Laptop {
  public checkCodeCreatorLaptop(): string {
    return "Code written on chrome book";
  }

  public usePhotoFromPhone(collaborator: Phone): string {
    const result = collaborator.doPhoto();
    return `Macbook uses photo (${result})`;
  }
}

function doFactoryCode(factory: GadgetsFactory): void {
  const phone = factory.createPhone();
  const laptop = factory.createLaptop();

  console.log(phone.doPhoto());
  console.log(laptop.checkCodeCreatorLaptop());
  console.log(laptop.usePhotoFromPhone(phone));
}

console.log("Ios pack");
doFactoryCode(new IOSGadgetFactory());

console.log("");
console.log("Android pack");
doFactoryCode(new AndroidGadgetFactory());
