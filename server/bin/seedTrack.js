require("dotenv").config();

const mongoose = require("mongoose");
const Track = require("../models/Track");

const dbName = process.env.DBURL;
mongoose.connect(dbName);

Track.collection.drop();

const tracks = [
  {
    name: "Museo de escultura al aire libre",
    image: "../../assets/images/Museo de escultura al aire libre.jpg",
    duration: "2 horas",
    schedules: "Abierto todo el día",
    price: "Gratuito",
    audio: "../../assets/audios/Museoalairelibre.opus",
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
    image: "../../assets/images/Complejo comercial ABC Serrano.jpg",
    duration: "3 horas",
    schedules: "L a S 10 a 21:00 / D cerrado",
    price: "Gratuito",
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
    image: "../../assets/images/Museo de ciencias naturales.jpg",
    duration: "5 horas",
    schedules: "M a V de 10:00 a 17:00 / S y D de 10 a 20",
    price: "Entrada general 6€",
    audio: "../../assets/audios/Museodecienciasnaturales.opus",
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
    image: "../../assets/images/Torre Picasso.jpg",
    duration: "2 horas",
    schedules: "L a V de 7 a 22:30 / S y D de 10 a 15",
    price: "Gratuito",
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
    image: "../../assets/images/Palacio Real.jpg",
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
    image: "../../assets/images/Puerta del Sol.jpg",
    duration: "2 horas",
    schedules: "Abierto todo el día",
    price: "Gratuito",
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
    image: "../../assets/images/Parque del Retiro.jpg",
    duration: "3 horas",
    schedules: "Abril a septiembre de 6 a 00 / Invierno a octubre de 6 a 22",
    price: "Gratuito",
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
    image: "../../assets/images/Templo de Debod.jpg",
    duration: "2 horas",
    schedules: "Cerrado por problemas técnicos",
    price: "Gratuito",
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
    image: "../../assets/images/Museo del Prado.jpg",
    duration: "7 horas",
    schedules: "L a S de 10:00 a 20:00 / D de 10:00 a 19:00",
    price: "Entrada general 15€",
    audio: "Audio",
    address: "Paseo del Prado, s/n, 28014 Madrid",
    description:
      "Es uno de los más visitados e importantes del mundo. singularmente rico en cuadros de los siglos XVI al XIX. El Prado debe su origen a la afición coleccionista de las dinastías gobernantes a lo largo de varios siglos. Aquí podemos disfrutar de cuadros como 'Las Meninas', 'El Jardín de las Delicias', 'La Maja Desnuda' o 'Las tres gracias'",
    coordinates: {
      lat: 40.4137818,
      lng: -3.6943211
    }
  },
  {
    name: "Museo Reina Sofía",
    image: "../../assets/images/Museo Reina Sofía.jpg",
    duration: "5 horas",
    schedules: "L a V de 10:00 a 21:00",
    price: "Entrada general 10€",
    audio: "Audio",
    address: "Calle de Santa Isabel, 52, 28012 Madrid",
    description:
      "Alberga obras del siglo XX y contemporáneo. Tomo como sede el antiguo Hospital General de San Carlos, gran edificio neoclásico del siglo XVIII. En la colección permanente del museo destaca su núcleo de obras de grandes artistas españoles del siglo XX, especialmente Pablo Picasso, Salvador Dalí y Joan Miró.",
    coordinates: {
      lat: 40.4079123,
      lng: -3.6967509
    }
  },
  {
    name: "Museo Thyssen",
    image: "../../assets/images/Museo Thyssen.jpg",
    duration: "6 horas",
    schedules: "Consultar web",
    price: "Entrada general 12€",
    audio: "Audio",
    address: "Paseo del Prado, 8, 28014 Madrid",
    description:
      "La colección del Museo Thyssen-Bornemisza se compone de cerca de 1000 obras que el Estado español compró a la familia Thyssen-Bornemisza en julio de 1993. El museo se encuentra en un emplazamiento privilegiado, el Palacio de Villahermosa. Este palacio fue construido a finales del siglo XVIII y es un claro ejemplo de arquitectura neoclásica madrileña. El museo tiene tres plantas; para recorrerlo es recomendable empezar por la segunda planta para posteriormente bajar a la primera y a la planta baja. Durante este recorrido veremos la evolución histórica de la pintura, con obras que abarcan los siglos XVII-XX.",
    coordinates: {
      lat: 40.4160406,
      lng: -3.6971194
    }
  }
];

Track.create(tracks)
  .then(trs => console.log(trs))
  .catch(err => console.log(err));
