const express = require("express");
const router = express.Router();
const Comment = require('../models/Comment');

router.get('/routes/:id', (req,res) => {
  Comment.find({route_id:req.params.id}).then(comments => 
     res.json(comments)
  )
})

router.post('/routes/:id/comments', (req, res) => {
    const routeId = req.params.id;
  const {text, title, ownerId, routerId} = req.body;
  const newComment = {
      routeId,
      text,
      title,
      ownerId
    }

  Comment.create(newComment) 
  .then( data => res.json(data))
  .catch( err => console.log(err));
})
module.exports = router;