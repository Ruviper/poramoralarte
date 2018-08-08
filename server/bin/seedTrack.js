require("dotenv").config();

const mongoose = require("mongoose");
const Track = require("../models/Track");

const dbName = process.env.DBURL;
mongoose.connect(dbName);

Track.collection.drop();

const tracks = [
  {
    name: "Museo de escultura al aire libre",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "Abierto todo el día",
    price: "Gratuito",
    audio: "Audio",
    address: "Paseo del castellana, 40, 28046 Madrid",
    description:
      "Situado bajo un paso elevado. Destaca la obra de 'La sirena varada' de Chillida, nuestro escultor contemporáneo más galardonado",
    coordinates: {
      lat: 40.4331085,
      lng: -3.6898995
    }
  },
  {
    name: "Complejo comercial ABC Serrano",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "L a S 10 a 21:00 / D cerrado",
    price: "--",
    audio: "Audio",
    address: "Calle de Serrano, 61, 28006 Madrid",
    description:
      "Se trata de un palacete con azulejos en la fachada y coronado por una torre. Fue construido en el año 1926 dentro de la corriente regionalista andaluza, con ladrillo visto para la instalación del periódico ABC. Tiene reminiscencias del arte mudéjar y su constructor fue Anibal González",
    coordinates: {
      lat: 40.4323104,
      lng: -3.6872047
    }
  },
  {
    name: "Museo de Ciencias Naturales",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "M a V de 10:00 a 17:00 / S y D de 10 a 20 / D cerrado",
    price: "Entrada general 6€",
    audio: "Audio",
    address: "Calle de José Gutiérrez Abascal, 2, 28006 Madrid",
    description:
      "Situado sobre una colina es considerado como uno de los más importantes de Europa por su colección de dinosaurios. En los jardines tenemos un monumento en forma de cubo hueco dedicado a nuestra Constitución de 1978. ",
    coordinates: {
      lat: 40.4410156,
      lng: -3.6918791
    }
  },
  {
    name: "Nuevos Ministeriossssssssssssssssssss",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor, s/n",
    description: "Un museo espectacular",
    coordinates: {
      lat: 50.46,
      lng: -4.5
    }
  },
  {
    name: "Palacio Real",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "Abril a septiembre de 10 a 20 / Octubre a Marzo de 10 a 18",
    price: "Tarifa básica 10€",
    audio: "Audio",
    address: "Calle de Bailén, s/n, 28071 Madrid",
    description:
      "Este Palacio, conocido como de Oriente, fue construido para reemplazar el antiguo Alcázar de Felipe II, que estaba en el mismo lugar y fue destruido por un incendio en 1734. Sus arquitectos fueron Jubara, Sachetti y Sabatini que fue el diseñador de los jardines. Está considerado como el Palacio mejor conservado de Europa. No está habitado.",
    coordinates: {
      lat: 40.417955,
      lng: -3.7318215
    }
  },
  {
    name: "Puerta del Sol",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "Abierto todo el día",
    price: "--",
    audio: "Audio",
    address: "Plaza de la Puerta del Sol, s/n, 28013 Madrid",
    description:
      "Del complejo arquitectónico del siglo XIX, sobresale el edificio de la derecha, construido como Central de Correos, donde se encuentra hoy la Presidencia de la Comunidad de Madrid. En él tenemos la  torre del con el reloj más popular de España.",
    coordinates: {
      lat: 40.4169473,
      lng: -3.7057172
    }
  },
  {
    name: "Parque del Retiro",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "Abril a septiembre de 6 a 00 / Invierno a octubre de 6 a 22",
    price: "--",
    audio: "Audio",
    address: "Plaza de la Independencia, 7, 28001 Madrid",
    description:
      "Este parque es un jardín de gran extensión (118 hectáreas). Fue la obra más importante del reinado de Felipe IV. El Retiro que hoy conocemos es mucho menor de aquel de tiempos de Felipe IV. Al pasear por este parque nos encontraremos con el Estanque, El Palacio de Cristal, etc...",
    coordinates: {
      lat: 40.4152606,
      lng: -3.6866935
    }
  },
  {
    name: "TEMPLO DE DEBODDDDDDDD",
    image:
      "https://www.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    duration: "5 horas",
    schedules: "09:00 a 14:00 / 17:00 a 20:30",
    price: "50 €",
    audio: "Audio",
    address: "Plaza mayor, s/n",
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
  }
];

Track.create(tracks)
  .then(trs => console.log(trs))
  .catch(err => console.log(err));
