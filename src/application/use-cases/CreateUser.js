const UserRepository = require('../../domain/repositories/UserRepository');
const User = require('../../domain/entities/User');
const Email = require('../../domain/value-objects/Email');

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(dto) {
    const email = new Email(dto.email);
    const user = new User(dto.id, dto.name, email);
    return this.userRepository.save(user);
  }
}

module.exports = CreateUser;