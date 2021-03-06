const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const trackSchema = new Schema({
  image: { type: String },
  name: { type: String },
  duration: { type: String },
  schedules: { type: String },
  price: { type: String },
  address: { type: String },
  audio: { type: String },
  description: { type: String },
  coordinates: {
    lat: Number,
    lng: Number
  }
}, 
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Track = mongoose.model('Track', trackSchema);
module.exports = Track;
