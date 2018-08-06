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
    tracks: "",
    audio: "asdasd"
  },
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
  {
    name: "Madrid de los Austrias",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    price: "50 €",
    description: "Una ruta muy chula",
    tracks: "",
    audio: "asdasd"
  }
];

Route.create(routes)
.then(rou => console.log(rou))
.catch(err => console.log(err))
