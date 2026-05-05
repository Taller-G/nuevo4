class Email {
  constructor(email) {
    // Simple validation for the email format
    if (!this.validateEmail(email)) {
      throw new Error('Invalid email');
    }
    this.email = email;
  }

  validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
}

module.exports = Email;