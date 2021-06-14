const axios = require('axios');

class Users {
  static async all() {
    let res = await axios.get('http://localhost:3000/users');
    return res;
  }
}

module.exports = Users;
