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
      "../../assets/images/rutaMadridModerno.jpg",
    duration: "11 horas",
    description:
      "Una ruta en la que podrás hacer un recorrido por la historia más reciente de la ciudad de Madrid a través de sus edificios más significativos.",
    tracks: [
      "5b6c6d6950b2100f7477c0a1",
      "5b6c6d6950b2100f7477c0a2",
      "5b6c6d6950b2100f7477c0a3",
      "5b6c6d6950b2100f7477c0a4",
    ],
    audio: "../../assets/audios/Rutamadridmoderno.opus"
  },
  {
    name: "Madrid histórico",
    image:
      "../../assets/images/rutaMadridHistórico.jpg",
    duration: "10 horas",
    description:
      "En esta ruta haremos un recorrido por los edificios más emblemáticos de la ciudad de Madrid, realizando así un repaso por su historia",
    tracks: [
      "5b6c6d6950b2100f7477c0a5",
      "5b6c6d6950b2100f7477c0a6",
      "5b6c6d6950b2100f7477c0a8",
      "5b6c6d6950b2100f7477c0a7",
    ],
    audio: "../../assets/audios/Rutamadridhistórico.opus"
  },
  {
    name: "El Triángulo del arte",
    image:
      "../../assets/images/rutaMuseoDelPrado.jpg",
    duration: "2 días",
    description: "Todo el arte en una sola ruta visitando tres de los museos más imporantes de Madrid",
    tracks: [
      "5b6c6d6950b2100f7477c0a9",
      "5b6c6d6950b2100f7477c0aa",
      "5b6c6d6950b2100f7477c0ab",
    ],
    audio:""
  }
];

Route.create(routes)
  .then(rou => console.log(rou))
  .catch(err => console.log(err));
