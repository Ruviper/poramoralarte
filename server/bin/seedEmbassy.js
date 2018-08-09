require("dotenv").config();

const mongoose = require("mongoose");
const Embassy = require("../models/Embassy");

const dbName = process.env.DBURL;
mongoose.connect(dbName);

Embassy.collection.drop();

const embassies = [
  {
    name: "Embajada de Estados Unidos",
    adress: "Calle Serrano, 75",
    phone: "91 587 22 00",
    coordinates: { lat: 40.4346173, lng: -3.6889416 }
  },
  {
    name: "Embajada de Francia",
    adress: "Calle Salustiano Olózaga, 9",
    phone: "914 23 89 00",
    coordinates: { lat: 40.4207291, lng: -3.6920416 }
  },
  {
    name: "Embajada de Alemania",
    adress: "Calle de Fortuny, 8",
    phone: "915 57 90 00",
    coordinates: { lat: 40.4298746, lng: -3.6928626 }
  },
  {
    name: "Embajada de Italia",
    adress: "Calle de Lagasca, 98",
    phone: "91 423 33 00",
    coordinates: { lat: 40.4324876, lng: -3.6862345 }
  },
  {
    name: "Embajada de Japón",
    adress: "Calle de Serrano, 109",
    phone: "915 90 76 00",
    coordinates: { lat: 40.4396454, lng: -3.6886408 }
  },
  {
    name: "Embajada de Marruecos",
    adress: "Calle de Serrano, 179",
    phone: "915 63 10 90",
    coordinates: { lat: 40.4486378, lng: -3.6840988 }
  }
];

Embassy.create(embassies)
.then(e => console.log(e))
.catch(err => console.log(err))
