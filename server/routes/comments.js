const express = require("express");
const router = express.Router();
const Comment = require('../models/Comment');

router.get('/routes/:id', (req,res) => {
  Comment.find({route_id:req.params.id}).then(comments => 
     res.json(comments)
  )
})

router.post('/', (req, res) => {
  const {route_id, text} = req.body;

  Comment.create( {route_id, text} ) 
  .then( data => res.json(data))
  .catch( err => console.log(err));
})
module.exports = router;