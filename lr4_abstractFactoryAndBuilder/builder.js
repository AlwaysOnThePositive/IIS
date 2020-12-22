var ConcreteBuilder1 = /** @class */ (function () {
    function ConcreteBuilder1() {
        this.reset();
    }
    ConcreteBuilder1.prototype.reset = function () {
        this.product = new BusinessLunch();
    };
    ConcreteBuilder1.prototype.addSoup = function () {
        this.product.dishes.push("Red borscht");
    };
    ConcreteBuilder1.prototype.addMainCourse = function () {
        this.product.dishes.push("Bolognese pasta");
    };
    ConcreteBuilder1.prototype.addDrink = function () {
        this.product.dishes.push("Orange Juice");
    };
    ConcreteBuilder1.prototype.addBread = function () {
        this.product.dishes.push("Bread");
    };
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
    ConcreteBuilder1.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ConcreteBuilder1;
}());
/**
 * Имеет смысл использовать паттерн Строитель только тогда, когда ваши продукты
 * достаточно сложны и требуют обширной конфигурации.
 *
 * В отличие от других порождающих паттернов, различные конкретные строители
 * могут производить несвязанные продукты. Другими словами, результаты различных
 * строителей могут не всегда следовать одному и тому же интерфейсу.
 */
var BusinessLunch = /** @class */ (function () {
    function BusinessLunch() {
        this.dishes = [];
    }
    BusinessLunch.prototype.getLunch = function () {
        console.log("Your busines-lunch:");
        console.log(this.dishes.join(", ") + "\n");
    };
    return BusinessLunch;
}());
/**
 * Директор отвечает только за выполнение шагов построения в определённой
 * последовательности. Это полезно при производстве продуктов в определённом
 * порядке или особой конфигурации. Строго говоря, класс Директор необязателен,
 * так как клиент может напрямую управлять строителями.
 */
var Director = /** @class */ (function () {
    function Director() {
    }
    /**
     * Директор работает с любым экземпляром строителя, который передаётся ему
     * клиентским кодом. Таким образом, клиентский код может изменить конечный
     * тип вновь собираемого продукта.
     */
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    /**
     * Директор может строить несколько вариаций продукта, используя одинаковые
     * шаги построения.
     */
    Director.prototype.createLowCostBusinesLunch = function () {
        this.builder.addSoup();
        this.builder.addBread();
        this.builder.addDrink();
    };
    Director.prototype.createHighCostBusinesLunch = function () {
        this.builder.addSoup();
        this.builder.addBread();
        this.builder.addMainCourse();
        this.builder.addDrink();
    };
    return Director;
}());
/**
 * Клиентский код создаёт объект-строитель, передаёт его директору, а затем
 * инициирует процесс построения. Конечный результат извлекается из объекта-
 * строителя.
 */
function doBuilderCode(director) {
    var builder = new ConcreteBuilder1();
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
var director = new Director();
doBuilderCode(director);
