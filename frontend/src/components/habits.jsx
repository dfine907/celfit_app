import React from 'react'
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const Habits = () => {
  return (
    <>
      <h2 style={{ color: 'green' }}> 🥦 Healthy Habits! </h2>

      <FormGroup className='form-group'>
        <FormControlLabel
          control={<Checkbox color="success" />}
          label="Celery Juice"
        />
        <FormControlLabel
          control={<Checkbox color="success" />}
          label="Leafy Greens"
        />
        <FormControlLabel
          control={<Checkbox color="success" />}
          label="Chia Seeds"
        />
        <FormControlLabel
          control={<Checkbox color="success" />}
          label="Water Consumed"
        />
        <FormControlLabel
          control={<Checkbox color="success" />}
          label="45 minutes exercise"
        />
      </FormGroup>
    </>
  )
}

export default Habits
