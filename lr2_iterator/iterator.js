class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        return this.index < this.data.length
          ? { value: this.data[this.index++], done: false }
          : { value: void 0, done: true };
      },
    };
  }
}

function* generator(collection) {
  let index = 0;

  while (index < collection.length) {
    yield collection[index++];
  }
}

const iterator = new MyIterator([1, 2, 3, 4]);
for (const value of iterator) {
  console.log('iterator value', value);
}

const gen = generator([1, 2, 3, 4]);
console.log('generator', gen.next().value); 
console.log('generator', gen.next().value); 
console.log('generator', gen.next().value); 
console.log('generator', gen.next().value); 