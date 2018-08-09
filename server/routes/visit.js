require('dotenv').config();

const express = require("express");
const router = express.Router();
const axios = require("axios");
const { APIKEY } = process.env; 

router.get("/place/:visitId", (req, res, next) => {
    console.log(req.params)
  let visitId = req.params.visitId;
  axios
    .get(
      `https://api.sygictravelapi.com/1.0/es/places/poi:${visitId}`,

      {
        headers: { "x-api-key": APIKEY }
      }
    )
    .then(function(response) {
      console.log(response.data.data.place);
      return res.json(response.data.data.place);
    })
    .catch(function(e) {
      console.log(e);
      return res.json(e);
    });
});

router.get("/:cityId", (req, res, next) => {
    let cityId = req.params.cityId;
    axios
      .get(
        `https://api.sygictravelapi.com/1.0/es/places/list?parents=city:${cityId}&level=poi&limit=10`,
        {
          headers: { "x-api-key": APIKEY }
        }
      )
      .then(function(response) {
       // console.log(response.data.data.places);
        return res.json(response.data.data.places);
      })
      .catch(function(e) {
        // console.log(e);
        return res.json(e);
      });
  });


module.exports = router;

