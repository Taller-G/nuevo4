const IncrementCounter = require('../../application/use-cases/IncrementCounter');
const DecrementCounter = require('../../application/use-cases/DecrementCounter');
const GetCounter = require('../../application/use-cases/GetCounter');
const CounterRepositoryImpl = require('../../infrastructure/repositories/CounterRepositoryImpl');

class CounterController {
  constructor() {
    const counterRepository = new CounterRepositoryImpl();
    this.incrementCounterUseCase = new IncrementCounter(counterRepository);
    this.decrementCounterUseCase = new DecrementCounter(counterRepository);
    this.getCounterUseCase = new GetCounter(counterRepository);
  }

  getCounter(req, res) {
    const { id } = req.params;
    const counter = this.getCounterUseCase.execute({ id });
    return res.status(200).json(counter);
  }

  increment(req, res) {
    const { id } = req.params;
    const counter = this.incrementCounterUseCase.execute({ id });
    return res.status(200).json(counter);
  }

  decrement(req, res) {
    const { id } = req.params;
    const counter = this.decrementCounterUseCase.execute({ id });
    return res.status(200).json(counter);
  }
}

module.exports = CounterController;
