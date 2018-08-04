const express = require("express");
const router = express.Router();
const Comment = require('../models/Comment');

router.get('/routes/:id', (req,res) => {
  Comment.find({routeId:req.params.id}).then(comments => 
     res.json(comments)
  )
})

router.post('/routes/:id/comments', (req, res) => {
    console.log(req.body.comment)
    const routeId = req.params.id;
  const {text, title, ownerId} = req.body.comment;
  const newComment = {
      routeId,
      text,
      title,
      ownerId
    }
    console.log(newComment)

  Comment.create(newComment) 
  .then( data => res.json(data))
  .catch( err => console.log(err));
})
module.exports = router;