const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const embassySchema = new Schema({
  name: { type: String },
  address: { type: String },
  phone: { type: String },
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

const Embassy = mongoose.model('Embassy', embassySchema);
module.exports = Embassy;