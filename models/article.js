var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  title: String,
  link: String,
  data: Date,
});

module.exports = mongoose.model('Article', ArticleSchema);
