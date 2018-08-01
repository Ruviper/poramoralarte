const express = require("express");
const router = express.Router();
const Route = require("../models/Route");
const Track = require("../models/Track");

// Retrive all routes
router.get("/", (req, res, next) => {
  Route.find()
    .populate("tracks")
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

// Create route
router.post("/add", (req, res, next) => {
  const { image, name, duration, price, audio, description, tracks } = req.body;

  const newRoute = { image, name, duration, price, audio, description, tracks };

  Route.create(newRoute)
    .then(object => res.json(object))
    .catch(e => next(e));
});

// Retrive route detail
router.get("/:id", (req, res, next) => {
    Route.findById(req.params.id)
        .populate('tracks')
        .then(object => {
            console.log(object)
            res.json(object)
        })
        .catch(e => next(e));
  });
  
router.put("/:id", (req, res, next) => {
    const { image, name, duration, price, description, audio, tracks } = req.body;

    const updates = { image, name, duration, price, description, audio, tracks };

    Route.findByIdAndUpdate(req.params.id, updates, { new: true })
        .then(object => res.json(object))
        .catch(e => next(e));
});
  
// Delete route
router.delete("/:id", (req, res, next) => {
    Route.findByIdAndRemove(req.params.id)
        .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
        .catch(e => next(e));
});

module.exports = router;
