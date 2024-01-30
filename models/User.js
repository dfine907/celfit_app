const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name required"]
  },

  lastName: {
    type: String,
    required: [true, "Last name required"]
  },

  email: {
    type: String,
    required: [true, "Enter your email"]
  },
  //this takes more with authentication
  password: {
    type: String,
    required: [true, "Password needed. Shhhh... keep it secret"]
  }
})

module.exports = mongoose.model('Users', UserSchema)