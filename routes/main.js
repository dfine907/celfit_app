const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

const Person = require('../models/Info')
const Habit = require('../models/Habit')

//POSTS
router.get('/', async (req, res) => {
  try {
    // below is the promise that will be sent back from the database
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {

    res.json({ message: error })
  }
})

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  })

  try {
    // below is the promise
    const savedData = await post.save()
    res.json(savedData)
  } catch (error) {
    res.json({ message: error })
  }
})

//get a specific data by using the model (schema):
router.get('/:postId', async (req, res) => {
  // console.log(req.params.postId)
  // below is the promise
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (error) {
    res.json({ message: error })
  }
})

//delete data
router.delete('/:postId', async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({
      _id: req.params.postId,
    })
    res.json(deletedPost)
  } catch (error) {
    res.json({ message: error })
  }
})

//update information ($set is just a specical operator to update a value)
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    )
    res.json(updatedPost)
  } catch (error) {
    res.json({ message: error })
  }
})

//USER
router.get('/', async (req, res) => {
  try {
    // below is the promise that will be sent back from the database
    const userData = await Person.find()
    res.json(userData)
  } catch (error) {
    res.json({ message: error })
  }
})

router.post('/:userInfo', async (req, res) => {
  const userData = new Person({
    userName: req.body.name,
    age: req.body.age,
    password: req.body.password,
  })
  try {
    // below, returns promise from above
    const savedData = await userData.save()
    res.json(savedData)
  } catch (error) {
    res.json({ message: error })
  }
})

router.get('/:userId', async (req, res) => {
  // console.log(req.params.postId)
  // below is the promise
  try {
    const userData = await Person.findById(req.params.userDataId)
    res.json(userData)
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router
