require("dotenv").config();

const mongoose = require("mongoose");
const Route = require("../models/Route");

const dbName = process.env.DBURL;
mongoose.connect(dbName);

Route.collection.drop();

const routes = [
  {
    name: "Madrid de los Austrias",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    price: "50 €",
    description: "Una ruta muy chula",
    tracks: [
      "5b6838ab64329d2d2097bd0b",
      "5b6838ab64329d2d2097bd0c",
      "5b6838ab64329d2d2097bd0d",
      "5b6838ab64329d2d2097bd0e",
      "5b6838ab64329d2d2097bd0f"
    ],
    audio: "asdasd"
  },
  {
    name: "Madrid moderno",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    price: "50 €",
    description: "Una ruta muy chula",
    tracks: [
      "5b6838ab64329d2d2097bd10",
      "5b6838ab64329d2d2097bd11",
      "5b6838ab64329d2d2097bd12",
      "5b6838ab64329d2d2097bd13",
      "5b6838ab64329d2d2097bd14",
    ],
    audio: "asdasd"
  },
  {
    name: "Madrid antiguo",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    price: "50 €",
    description: "Una ruta muy chula",
    tracks: [
      "5b6838ab64329d2d2097bd15",
      "5b6838ab64329d2d2097bd16",
      "5b6838ab64329d2d2097bd17",
      "5b6838ab64329d2d2097bd18",
      "5b6838ab64329d2d2097bd19"
    ],
    audio: "asdasd"
  }
];

Route.create(routes)
.then(rou => console.log(rou))
.catch(err => console.log(err))
