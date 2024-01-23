const express = require('express')
const router = express.Router()

const Post = require('../models/Post')

router.get('/', (req, res) => {
  res.send('The main page.')
})

router.post('/', (req, res) => {
  // console.log(req.body)
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })
  //returns a promise:
  post.save()
  .then(data => {
    res.json(data)
  })
  .catch(err =>{
    res.json({message: err})
  })
})

module.exports = router
