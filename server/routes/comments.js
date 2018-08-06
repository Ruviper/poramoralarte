const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

router.get("/routes/:id", (req, res) => {
  Comment.find({ routeId: req.params.id })
  .populate('ownerId')
  .then(comments => res.json(comments));
});

router.post("/routes/:id/comments", (req, res) => {
  const routeId = req.params.id;
  const { text, title, ownerId } = req.body.comment;
  const newComment = {
    routeId,
    text,
    title,
    ownerId
  };
  console.log(newComment);

  Comment.create(newComment)
    .then(data => res.json(data))
    .catch(err => console.log(err));
});




router.get("/tracks/:id", (req, res) => {
  Comment.find({ trackId: req.params.id })
  .populate('ownerId')
  .then(comments => res.json(comments));
});

router.post("/tracks/:id/comments", (req, res) => {
  const trackId = req.params.id;
  const { text, title, ownerId } = req.body.comment;
  const newComment = {
    trackId,
    text,
    title,
    ownerId
  };
  console.log(newComment);

  Comment.create(newComment)
    .then(data => res.json(data))
    .catch(err => console.log(err));
});







module.exports = router;
