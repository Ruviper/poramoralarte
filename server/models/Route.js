const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const routeSchema = new Schema({
  image: { type: String },
  name: { type: String },
  duration: { type: String },
  price: { type: String },
  description: { type: String },
  audio: { type: String },
  tracks: [{type: Schema.Types.ObjectId, ref: 'Track'}],
}, 
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;