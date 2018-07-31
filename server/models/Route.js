const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const routeSchema = new Schema({
  image: { type: String },
  duration: { type: String },
  name: { type: String },
  price: { type: String },
  tracks: [{type: Schema.Types.ObjectId, ref: 'Track'}],
  description: { type: String },
}, 
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;