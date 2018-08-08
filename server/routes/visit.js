require('dotenv').config();

const express = require("express");
const router = express.Router();
const Visit = require("../models/Visit");
const axios = require("axios");
const { APIKEY } = process.env; 

router.get("/:cityId", (req, res, next) => {
    let cityId = req.params.cityId;
    axios
      .get(
        `https://api.sygictravelapi.com/1.0/es/places/list?parents=city:${cityId}&level=poi&limit=2`,
        {
          headers: { "x-api-key": APIKEY }
        }
      )
      .then(function(response) {
        console.log(response.data.data.places);
        return res.json(response.data.data.places);
      })
      .catch(function(e) {
        console.log(e);
        return res.json(e);
      });
  });

  



module.exports = router;