require("dotenv").config();

const mongoose = require("mongoose");
const Track = require("../models/Track");

const dbName = process.env.DBURL;
mongoose.connect(dbName);

Track.collection.drop();

const tracks = [
  {
    name: "Museo del Prado",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
];

Track.create(tracks)
  .then(trs => console.log(trs))
  .catch(err => console.log(err));