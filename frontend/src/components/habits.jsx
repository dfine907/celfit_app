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
  const [celeryJuiceChecked, setCeleryJuiceChecked] = useState(false)
  const [leafyGreensChecked, setLeafyGreensChecked] = useState(false)
  const [chiaSeedsChecked, setChiaSeedsChecked] = useState(false)
  const [waterConsumedChecked, setWaterConsumedChecked] =
    useState(false)
  const [exerciseChecked, setExerciseChecked] = useState(false)

  
  //   two things.  which and what value

  const juiceHandler = () => {
    setCeleryJuiceChecked(!celeryJuiceChecked)
  }

  const leafyHandler = () => {
    setLeafyGreensChecked(!leafyGreensChecked)
  }

  const chiaHandler = () => {
    setChiaSeedsChecked(!chiaSeedsChecked)
  }

  const waterHandler = () => {
    setWaterConsumedChecked(!waterConsumedChecked)
  }

  const exerciseHandler = () => {
    setExerciseChecked(!exerciseChecked)
  }

  // callback function will log an object with keys and boolean values.
  useEffect(() => {
    console.log({
      celeryJuiceChecked,
      leafyGreensChecked,
      chiaSeedsChecked,
      waterConsumedChecked,
      exerciseChecked,
    })
  }, [
    celeryJuiceChecked,
    leafyGreensChecked,
    chiaSeedsChecked,
    waterConsumedChecked,
    exerciseChecked,
  ])

  //how to do this for the rest of the boxes?
  // look at MUI and state

  let todayDate = new Date().toLocaleDateString()

  return (
    <>
      <h3 style={{ color: 'green' }}> {todayDate} </h3>
      <h2 style={{ color: 'green' }}> 🥦 Healthy Habits 🥦 </h2>

      {/* need to loop over each to render checkboxes true or false:  
     Object.keys or Object.entites
     Stack overflow:
     Object.keys(options).map((key, i, all_keys) => {
        let val = options[key];
          console.log(typeof val) */}

      <FormGroup className="form-group">
        <FormControlLabel
          control={
            <Checkbox
              value={celeryJuiceChecked}
              onChange={juiceHandler}
              color="success"
            />
          }
          label="Celery Juice"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={leafyGreensChecked}
              onChange={leafyHandler}
              color="success"
            />
          }
          label="Leafy Greens"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={chiaSeedsChecked}
              onChange={chiaHandler}
              color="success"
            />
          }
          label="Chia Seeds"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={waterConsumedChecked}
              onChange={waterHandler}
              color="success"
            />
          }
          label="Water Consumed"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={exerciseChecked}
              onChange={exerciseHandler}
              color="success"
            />
          }
          label="45 minutes exercise"
        />
      </FormGroup>

      <Button sx={{ mt: 4 }} color="success" variant="contained">
        Enter
      </Button>
    </>
  )
}

export default Habits
