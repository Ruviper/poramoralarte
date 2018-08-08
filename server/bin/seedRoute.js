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
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    description:
      "Una ruta en la que podrás hacer un recorrido por la historia más reciente de la ciudad de Madrid a través de sus edificios más significativos.",
    tracks: [
      "5b696211e02ae2060697c4c0",
      "5b696211e02ae2060697c4bf",
      "5b696211e02ae2060697c4c1",
      "5b696211e02ae2060697c4c2",
      "5b696211e02ae2060697c4c3"
    ],
    audio: "asdasd"
  },
  {
    name: "Madrid histórico",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    description:
      "En esta ruta haremos un recorrido por los edificios más emblemáticos de la ciudad de Madrid, realizando así un repaso por su historia",
    tracks: [
      "5b696211e02ae2060697c4c4",
      "5b6838ab64329d2d2097bd11",
      "5b696211e02ae2060697c4c5",
      "5b696211e02ae2060697c4c7",
      "5b696211e02ae2060697c4c8"
    ],
    audio: "asdasd"
  },
  {
    name: "Madrid antiguo",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    description: "Una ruta muy chula",
    tracks: [
      "5b696211e02ae2060697c4cc",
      "5b696211e02ae2060697c4cb",
      "5b696211e02ae2060697c4cd",
      "5b696211e02ae2060697c4ca",
      "5b696211e02ae2060697c4c9"
    ],
    audio: "asdasd"
  }
];

Route.create(routes)
  .then(rou => console.log(rou))
  .catch(err => console.log(err));
