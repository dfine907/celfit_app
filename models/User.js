const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },

  password: {
    type: String,
    required: true,
  },

  healthHabits: [
    {
      date: {
        type: Date,
        default: Date.now,
        required: true,
      },
      habit: {
        type: String,
        isCompleted: false,
        required: true,
      },
    },
  ],
})

module.exports = mongoose.model('Users', UserSchema)
