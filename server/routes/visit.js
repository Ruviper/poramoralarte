const express = require("express");
const router = express.Router();
const Visit = require("../models/Visit");
const axios = require("axios");
/* const { APIKEY } = require("../../server"); */

router.get("/search/:cityID/:place", (req, res, next) => {
    let cityID = req.params.cityID;
    let place = req.params.place;
    axios
      .get(
        `https://api.sygictravelapi.com/1.0/es/places/list?parents=city:13&level=poi&limit=100`,
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