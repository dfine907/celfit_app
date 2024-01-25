const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const cors = require('cors')

require('dotenv').config()

//when we hit any request, need to run the bodyParser - use() middleware:
app.use(bodyParser.json())
app.use(cors())

//import routes
const mainRoute = require('./routes/main')

app.use('/main', mainRoute)

const URL = process.env.MONGODB_URI

app.get('/', (req, res) => {
  res.send('The home page.')
})

//Connect to database with Mongoose:
mongoose
  .connect(URL)
  .then(() =>
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  )
  .catch((err) => console.error(err))

//LISTEN TO SERVER:
app.listen(process.env.PORT || port, () => {
  console.log(
    `Example app listening on port ${process.env.PORT || port}`
  )
})
