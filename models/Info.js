const mongoose = require('mongoose')

const InfoSchema = mongoose.Schema({
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
    required: false,
  },

  healthHabits: [
    {
      date: {
        type: Date,
        default: Date.now,
        required: false,
      },
      habit: {
        type: String,
        isCompleted: false,
        required: true,
      },
    },
  ]
})

//one doc per user per day

module.exports = mongoose.model('Information', InfoSchema)
