const CounterRepository = require('../../domain/repositories/CounterRepository');
const Counter = require('../../domain/entities/Counter');

class CounterRepositoryImpl extends CounterRepository {
  constructor() {
    super();
    this.counters = new Map(); // Simulating database
  }

  findById(id) {
    const stored = this.counters.get(id);
    if (!stored) return null;
    return new Counter(stored.id, stored.value);
  }

  save(counter) {
    this.counters.set(counter.id, { id: counter.id, value: counter.value });
    return counter;
  }
}

module.exports = CounterRepositoryImpl;
