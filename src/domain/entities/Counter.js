class Counter {
  constructor(id, value = 0) {
    if (!id) {
      throw new Error('Counter id is required');
    }
    if (typeof value !== 'number' || !Number.isInteger(value)) {
      throw new Error('Counter value must be an integer');
    }
    this.id = id;
    this.value = value;
  }

  increment() {
    return new Counter(this.id, this.value + 1);
  }

  decrement() {
    return new Counter(this.id, this.value - 1);
  }
}

module.exports = Counter;
