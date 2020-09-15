class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doLogic(payload: string[]): void {
    const resAfterSort = this.strategy.doAlgorithm(payload);
    const resultArray = [...resAfterSort];
    console.log(resultArray, typeof resultArray);
  }
}

interface Strategy {
  doAlgorithm(data: string[]): string[];
}

class StrategySort implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class StrategyReverse implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

const context = new Context(new StrategySort());
console.log("Strategy sort example");
const testData1 = ["a", "c", "b", "e", "d"];
context.doLogic(testData1);

console.log("");

console.log("Strategy reverse example");
context.setStrategy(new StrategyReverse());
const testData2 = ["a", "b", "c", "e", "d"];
context.doLogic(testData2);
