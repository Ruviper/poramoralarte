const express = require("express");
const router = express.Router();
const Track = require("../models/Track");

// Retrive all tracks
router.get("/", (req, res, next) => {
  Track.find()
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

// Create track
router.post("/add", (req, res, next) => {
  const { image, name, duration, schedules, price, audio, description, coordinates } = req.body;

  const newTrack = { image, name, duration, schedules, price, audio, description, coordinates };

  Track.create(newTrack)
    .then(object => res.json(object))
    .catch(e => next(e));
});

// Retrive track detail
router.get("/:id", (req, res, next) => {
    Track.findById(req.params.id)
      .then(object => res.json(object))
      .catch(e => next(e));
});
 
router.put("/:id", (req, res, next) => {
    const { image, name, duration, price, audio, description, coordinates } = req.body;
  
    const updates = { image, name, duration, price, audio, description, coordinates };
  
    Track.findByIdAndUpdate(req.params.id, updates, { new: true })
      .then(object => res.json(object))
      .catch(e => next(e));
});
  
// Delete track
router.delete("/:id", (req, res, next) => {
    Track.findByIdAndRemove(req.params.id)
      .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
      .catch(e => next(e));
});

module.exports = router;
