const Counter = require('../../domain/entities/Counter');

class GetCounter {
  constructor(counterRepository) {
    this.counterRepository = counterRepository;
  }

  execute(dto) {
    const { id } = dto;
    const existing = this.counterRepository.findById(id);
    const counter = existing ? existing : new Counter(id, 0);
    return { id: counter.id, value: counter.value };
  }
}

module.exports = GetCounter;
