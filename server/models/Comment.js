const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  ownerId: {type: Schema.Types.ObjectId, ref: 'User'},
  routeId:{type: Schema.Types.ObjectId, ref: 'Route'},
  trackId:{type: Schema.Types.ObjectId, ref: 'Track'},
  title: { type: String },
  text: { type: String },
}, 
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;