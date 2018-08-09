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
      "../../front/src/assets/images/Museo de escultura al aire libre.jpg",
    duration: "2 horas",
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
      "../../front/src/assets/images/Complejo comercial ABC Serrano.jpg",
    duration: "3 horas",
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
      "../../front/src/assets/images/Museo de ciencias naturales.jpg",
    duration: "5 horas",
    schedules: "M a V de 10:00 a 17:00 / S y D de 10 a 20",
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
    name: "Torre Picasso",
    image:
      "../../front/src/assets/images/Torre Picasso.jpg",
    duration: "2 horas",
    schedules: "L a V de 7 a 22:30 / S y D de 10 a 15",
    price: "50 €",
    audio: "Audio",
    address: "Pablo Ruiz Picasso, s/n. 28020.",
    description: "Un museo espectacular",
    coordinates: {
      lat: 40.450278,
      lng: -3.6946887
    }
  },
  {
    name: "Palacio Real",
    image:
      "../../front/src/assets/images/Palacio Real.jpg",
    duration: "4 horas",
    schedules: "Abril a septiembre de 10 a 20 / Octubre a Marzo de 10 a 18",
    price: "Tarifa básica 10€",
    audio: "Audio",
    address: "Calle de Bailén, s/n, 28071 Madrid",
    description:
      "Este Palacio, conocido como de Oriente, fue construido para reemplazar el antiguo Alcázar de Felipe II, que estaba en el mismo lugar y fue destruido por un incendio en 1734. Sus arquitectos fueron Jubara, Sachetti y Sabatini que fue el diseñador de los jardines. Está considerado como el Palacio mejor conservado de Europa. No está habitado.",
    coordinates: {
      lat: 40.417955,
      lng: -3.716506
    }
  },
  {
    name: "Puerta del Sol",
    image:
      "../../front/src/assets/images/Puerta del Sol.jpg",
    duration: "2 horas",
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
      "../../front/src/assets/images/Parque del Retiro.jpg",
    duration: "3 horas",
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
    name: "Templo de Debod",
    image:
      "../../front/src/assets/images/Templo de Debod.jpg",
    duration: "2 horas",
    schedules: "Cerrado por problemas técnicos",
    price: "--",
    audio: "Audio",
    address: "Calle Ferraz, 1, 28008, Madrid",
    description:
      "Construido en el siglo IV antes de Cristo, fue un regalo de las autoridades egipcias como agradecimiento a la colaboración española en la Campaña de Nubia, el templo, desmontado y embalado en cajas, partió del puerto de Alejandría.",
    coordinates: {
      lat: 40.4240216,
      lng: -3.7199635
    }
  },
  {
    name: "Museo del Prado",
    image:
      "../../front/src/assets/images/Museo del Prado.jpg",
    duration: "7 horas",
    schedules: "L a S de 10:00 a 20:00 / D de 10:00 a 19:00",
    price: "Entrada general 15€",
    audio: "Audio",
    address: "Paseo del Prado, s/n, 28014 Madrid",
    description:
      "El Museo del Prado tiene la colección de pintura española más completa del mundo. El Prado cuenta con una valiosa colección de 8.600 cuadros y más de 700 esculturas. Es recomendable consultar una guía y preparar la visita antes de entrar en el museo.",
    coordinates: {
      lat: 40.4137818,
      lng: -3.6943211
    }
  },
  {
    name: "Museo Reina Sofía",
    image:
      "../../front/src/assets/images/Museo Reina Sofía.jpg",
    duration: "5 horas",
    schedules: "L a V de 10:00 a 21:00",
    price: "Entrada general 10€",
    audio: "Audio",
    address: "Calle de Santa Isabel, 52, 28012 Madrid",
    description:
      "El Museo Reina Sofía ofrece al visitante amplias colecciones de cuadros de pintores españoles tan importantes como Pablo Picasso, Salvador Dalí y Joan Miró. El cuadro más conocido del museo es el Guernica de Picasso, realizado en memoria del trágico bombardeo aéreo de la homónima ciudad vasca durante la Guerra Civil.",
    coordinates: {
      lat: 40.4079123,
      lng: -3.6967509
    }
  },
  {
    name: "Museo Thyssen",
    image:
      "../../front/src/assets/images/Museo Thyssen.jpg",
    duration: "6 horas",
    schedules: "Consultar web",
    price: "Entrada general 12€",
    audio: "Audio",
    address: "Paseo del Prado, 8, 28014 Madrid",
    description: "Un museo espectacular",
    coordinates: {
      lat: 40.4160406,
      lng: -3.6971194
    }
  }
];

Track.create(tracks)
  .then(trs => console.log(trs))
  .catch(err => console.log(err));
