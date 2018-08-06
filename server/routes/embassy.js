const express = require("express");
const router = express.Router();
const Embassy = require("../models/Embassy");

// Retrive all embassies
router.get("/", (req, res, next) => {
    Embassy.find()
      .then(objects => res.json(objects))
      .catch(e => next(e));
  });

// Create embassy
router.post("/add", (req, res, next) => {
    const { name, image, address, schedules, coordinates } = req.body;
  
    const newEmbassy = { name, image, address, schedules, coordinates };
  
    Embassy.create(newEmbassy)
      .then(object => res.json(object))
      .catch(e => next(e));
  });

  module.exports = router;