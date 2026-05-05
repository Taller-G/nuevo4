const CreateUser = require('../../application/use-cases/CreateUser');
const UserRepositoryImpl = require('../../infrastructure/repositories/UserRepositoryImpl');

class UserController {
  constructor() {
    this.userRepository = new UserRepositoryImpl();
    this.createUserUseCase = new CreateUser(this.userRepository);
  }

  createUser(req, res) {
    const userDto = req.body;
    const user = this.createUserUseCase.execute(userDto);
    return res.status(201).json(user);
  }
}

module.exports = UserController;