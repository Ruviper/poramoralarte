const express = require("express");
const router = express.Router();
const Route = require("../models/Route");

// Retrive all routes
router.get("/", (req, res, next) => {
  Route.find()
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

// Create route
router.post("/route", (req, res, next) => {
  const { image, duration, name, price, comments, tracks, description } = req.body;

  const newRoute = { image, duration, name, price, comments, tracks, description };

  Route.create(newRoute)
    .then(object => res.json(object))
    .catch(e => next(e));
});
