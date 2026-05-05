const UserRepository = require('../../domain/repositories/UserRepository');

class UserRepositoryImpl extends UserRepository {
  constructor() {
    super();
    this.users = new Map(); // Simulating database
  }

  findById(id) {
    return this.users.get(id);
  }

  save(user) {
    this.users.set(user.id, user);
    return user;
  }
}

module.exports = UserRepositoryImpl;