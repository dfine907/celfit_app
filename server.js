require('dotenv').config()
const URL = process.env.MONGODB_URI

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const mainRoute = require('./routes/main')

const cors = require('cors')


//Some middleware--bodyParser isn't needed anymore
app.use(bodyParser.json())
app.use(cors())



//route handler local host root
app.get('/', (req, res) => {
  res.send('The home page.')
})

//import routes from route file (main.js)
app.use('/main', mainRoute)

//Connect to database with Mongoose:
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } catch (error) {
    console.error(error);
  }
};

connectToMongoDB();

//middleWare test (this does not log?):
app.use('/', ()=> {
  console.log("This is middleware");
})

//LISTEN TO SERVER:
app.listen(process.env.PORT || port, () => {
  console.log(
    `Listening on port ${process.env.PORT || port}`
  )
})
