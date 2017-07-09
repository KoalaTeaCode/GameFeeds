var mongoose = require('mongoose');

var FollowingSchema = new mongoose.Schema({
  referenceId: { type: String, required: true },
  userId: {type: String, required: true },
  type: {type: String, required: true },
});

module.exports = mongoose.model('Following', FollowingSchema);
