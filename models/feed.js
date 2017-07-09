var mongoose = require('mongoose');

var FeedSchema = new mongoose.Schema({
  title: String,
  link: String,
  genre: Array,
  publisher: String,
  tags: String,
  userId: String
});

module.exports = mongoose.model('Feed', FeedSchema);
