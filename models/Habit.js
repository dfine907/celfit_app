const mongoose = require('mongoose')

const HabitSchema = mongoose.Schema({

  healthHabits: [
    {
      date: {
        type: Date,
        default: Date.now,
        unique: true,
        required: true,
      },
      juice: {
        type: String,
        isCompleted: false,
        required: true,
      },
    },
  ]
})

//each habit has it's own attribute

module.exports = mongoose.model('Habits', HabitSchema)
