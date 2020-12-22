interface BusinesLunchBuilder {
  addSoup(): void;
  addMainCourse(): void;
  addDrink(): void;
  addBread(): void;
}

class MondayLunchBuilder implements BusinesLunchBuilder {
  private product: BusinessLunch;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new BusinessLunch();
  }

  public addSoup(): void {
    this.product.dishes.push("Red borscht");
  }

  public addMainCourse(): void {
    this.product.dishes.push("Bolognese pasta");
  }

  public addDrink(): void {
    this.product.dishes.push("Orange Juice");
  }

  public addBread(): void {
    this.product.dishes.push("Bread");
  }

  /**
   * Конкретные Строители должны предоставить свои собственные методы
   * получения результатов. Это связано с тем, что различные типы строителей
   * могут создавать совершенно разные продукты с разными интерфейсами.
   * Поэтому такие методы не могут быть объявлены в базовом интерфейсе
   * Строителя (по крайней мере, в статически типизированном языке
   * программирования).
   *
   * Как правило, после возвращения конечного результата клиенту, экземпляр
   * строителя должен быть готов к началу производства следующего продукта.
   * Поэтому обычной практикой является вызов метода сброса в конце тела
   * метода getProduct. Однако такое поведение не является обязательным, вы
   * можете заставить своих строителей ждать явного запроса на сброс из кода
   * клиента, прежде чем избавиться от предыдущего результата.
   */
  public getProduct(): BusinessLunch {
    const result = this.product;
    this.reset();
    return result;
  }
}

/**
 * Имеет смысл использовать паттерн Строитель только тогда, когда ваши продукты
 * достаточно сложны и требуют обширной конфигурации.
 *
 * В отличие от других порождающих паттернов, различные конкретные строители
 * могут производить несвязанные продукты. Другими словами, результаты различных
 * строителей могут не всегда следовать одному и тому же интерфейсу.
 */
class BusinessLunch {
  public dishes: string[] = [];

  public getLunch(): void {
    console.log(`Your busines-lunch:`);
    console.log(`${this.dishes.join(", ")}\n`);
  }
}

/**
 * Директор отвечает только за выполнение шагов построения в определённой
 * последовательности. Это полезно при производстве продуктов в определённом
 * порядке или особой конфигурации. Строго говоря, класс Директор необязателен,
 * так как клиент может напрямую управлять строителями.
 */
class Director {
  private builder: BusinesLunchBuilder;

  /**
   * Директор работает с любым экземпляром строителя, который передаётся ему
   * клиентским кодом. Таким образом, клиентский код может изменить конечный
   * тип вновь собираемого продукта.
   */
  public setBuilder(builder: BusinesLunchBuilder): void {
    this.builder = builder;
  }

  public createLowCostBusinesLunch(): void {
    this.builder.addSoup();
    this.builder.addBread();
    this.builder.addDrink();
  }

  public createHighCostBusinesLunch(): void {
    this.builder.addSoup();
    this.builder.addBread();
    this.builder.addMainCourse();
    this.builder.addDrink();
  }
}

function createLunchs(director: Director) {
  const builder = new MondayLunchBuilder();
  director.setBuilder(builder);

  console.log("Low cost busines lunch:");
  director.createLowCostBusinesLunch();
  builder.getProduct().getLunch();

  console.log("High cost busines lunch:");
  director.createHighCostBusinesLunch();
  builder.getProduct().getLunch();

  console.log("Custom lunch:");
  builder.addSoup();
  builder.addDrink();
  builder.getProduct().getLunch();
}

const director = new Director();
createLunchs(director);
