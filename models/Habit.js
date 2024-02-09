const mongoose = require('mongoose')

const HabitSchema = mongoose.Schema({

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
  ]
})

module.exports = mongoose.model('Habits', HabitSchema)
