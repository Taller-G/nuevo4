const express = require('express');
const UserController = require('./controllers/UserController');
const CounterController = require('./controllers/CounterController');

const app = express();
app.use(express.json());

const userController = new UserController();
app.post('/users', (req, res) => userController.createUser(req, res));

const counterController = new CounterController();
app.get('/counters/:id', (req, res) => counterController.getCounter(req, res));
app.post('/counters/:id/increment', (req, res) => counterController.increment(req, res));
app.post('/counters/:id/decrement', (req, res) => counterController.decrement(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});