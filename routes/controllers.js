const Post = require('../models/Post');

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
};

// Create a new post
exports.createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedData = await post.save();
    res.json(savedData);
  } catch (error) {
    res.json({ message: error });
  }
};

// Get a specific post
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({ _id: req.params.postId });
    res.json(deletedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

// Update a post
exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
};
