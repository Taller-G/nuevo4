const Counter = require('../../domain/entities/Counter');

class IncrementCounter {
  constructor(counterRepository) {
    this.counterRepository = counterRepository;
  }

  execute(dto) {
    const { id } = dto;
    const existing = this.counterRepository.findById(id);
    const counter = existing ? existing : new Counter(id, 0);
    const updated = counter.increment();
    const saved = this.counterRepository.save(updated);
    return { id: saved.id, value: saved.value };
  }
}

module.exports = IncrementCounter;
