const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config()

//when we hit any request, need to run the bodyParser - use() middleware:
app.use(bodyParser.json())

//import routes
const mainRoute = require('./routes/main')

app.use('/main', mainRoute)

const URL = process.env.MONGODB_URI

const { MongoClient, ServerApiVersion } = require('mongodb')

app.get('/', (req, res) => {
  res.send('The home page.')
})

//Connect to database with Mongoose:
mongoose.connect(URL)
.then(() => console.log("Pinged your deployment. You successfully connected to MongoDB!"))
.catch((err) => console.error(err))


//MONGODB - successful connection:
// const client = new MongoClient(URL, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

//LISTEN TO SERVER:
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
