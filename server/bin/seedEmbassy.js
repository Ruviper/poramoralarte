require("dotenv").config();

const mongoose = require("mongoose");
const Embassy = require("../models/Embassy");

const dbName = process.env.DBURL;
mongoose.connect(dbName);

Embassy.collection.drop();

const embassies = [
  {
    name: "Embajada americana",
    adress: "Calle de la piruleta",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    coordinates: { lat: 40.42, lng: -2.69 }
  },
  {
    name: "Embajada francesa",
    adress: "Calle de Ironhack",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    coordinates: { lat: 37.42, lng: -2.69 }
  },
  {
    name: "Embajada alemana",
    adress: "Calle de la chopera",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    coordinates: { lat: 33.42, lng: -2.69 }
  }
];

Embassy.create(embassies)
.then(e => console.log(e))
.catch(err => console.log(err))
