var mongoose = require('mongoose');

var PublisherSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Publisher', FeedSchema);
