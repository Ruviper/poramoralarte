require("dotenv").config();

const mongoose = require("mongoose");
const Track = require("../models/Track");

const dbName = process.env.DBURL;
mongoose.connect(dbName);

Track.collection.drop();

const tracks = [
  {
    name: "Madrid de los Austrias",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    price: "50 €",
    description: "Una ruta muy chula",
    tracks: "",
    audio: "asdasd"
  },
];

Track.create(tracks)
.then(trs => console.log(trs))
.catch(err => console.log(err))


/* {
    image: { type: String },
    name: { type: String },
    duration: { type: String },
    schedules: { type: String },
    price: { type: String },
    audio: { type: String },
    description: { type: String },
    coordinates: {
      lat: Number,
      lng: Number
    }
  } */