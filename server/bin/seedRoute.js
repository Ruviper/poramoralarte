require("dotenv").config();

const mongoose = require("mongoose");
const Route = require("../models/Route");

const dbName = process.env.DBURL;
mongoose.connect(dbName);

Route.collection.drop();

const routes = [
  {
    name: "Madrid moderno",
    image:
      "../../front/src/assets/images/ruta - Madrid moderno.jpg",
    duration: "11 horas",
    description:
      "Una ruta en la que podrás hacer un recorrido por la historia más reciente de la ciudad de Madrid a través de sus edificios más significativos.",
    tracks: [
      "5b6c0007c15b90317f19db65",
      "5b6c0007c15b90317f19db66",
      "5b6c0007c15b90317f19db67",
      "5b6c0007c15b90317f19db68",
    ],
    audio: "Audio"
  },
  {
    name: "Madrid histórico",
    image:
      "../../front/src/assets/images/ruta - Madrid histórico.jpg",
    duration: "10 horas",
    description:
      "En esta ruta haremos un recorrido por los edificios más emblemáticos de la ciudad de Madrid, realizando así un repaso por su historia",
    tracks: [
      "5b6c0007c15b90317f19db6c",
      "5b6c0007c15b90317f19db69",
      "5b6c0007c15b90317f19db6a",
      "5b6c0007c15b90317f19db6b",
    ],
    audio: "Audio"
  },
  {
    name: "El Triángulo del arte",
    image:
      "../../front/src/assets/images/ruta - Museo del Prado.jpg",
    duration: "2 días",
    description: "Todo el arte en una sola ruta",
    tracks: [
      "5b6c0007c15b90317f19db6d",
      "5b6c0007c15b90317f19db6e",
      "5b6c0007c15b90317f19db6f",
    ],
    audio: "Audio"
  }
];

Route.create(routes)
  .then(rou => console.log(rou))
  .catch(err => console.log(err));
