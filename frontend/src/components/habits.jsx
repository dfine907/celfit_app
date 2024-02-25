import React from 'react'
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { useState, useEffect } from 'react'

//click event attached to state add to each check box
//event listeners for each

// const initialState = {
//   celeryJuiceChecked: false,
//   leafyGreensChecked: false,
//   chiaSeedsChecked: false,
//   waterConsumedChecked: false,
//   exerciseChecked: false
// }

// const Habits = () => {
//   const [selection, setSelection] = useState(initialState)

const Habits = () => {
  const [checkedStates, setCheckedStates] = useState({
    celeryJuiceChecked: false,
    leafyGreensChecked: false,
    chiaSeedsChecked: false,
    waterConsumedChecked: false,
    exerciseChecked: false,
  })

  const handleCheckboxChange = (habit) => {
    setCheckedStates(prevStates => ({
      ...prevStates,
      [habit]: !prevStates[habit],
    }))
  }

  useEffect(() => {
    console.log(checkedStates)
  }, [checkedStates])

  let todayDate = new Date().toLocaleDateString()

  const habitLabels = {
    celeryJuiceChecked: 'Celery Juice',
    leafyGreensChecked: 'Leafy Greens',
    chiaSeedsChecked: 'Chia Seeds',
    waterConsumedChecked: 'Water Consumed',
    exerciseChecked: '45 minutes exercise',
  }

  return (
    <>
      <h3 style={{ color: 'green' }}> {todayDate} </h3>
      <h2 style={{ color: 'green' }}> 🥦 Healthy Habits 🥦 </h2>

      <FormGroup className="form-group">
        {Object.entries(habitLabels).map(([habit, label]) => (
          <FormControlLabel
            key={habit}
            control={
              <Checkbox
                checked={checkedStates[habit]}
                onChange={() => handleCheckboxChange(habit)}
                color="success"
              />
            }
            label={label}
          />
        ))}
      </FormGroup>

      <Button sx={{ mt: 4 }} color="success" variant="contained">
        Enter
      </Button>
    </>
  )
}

export default Habits
