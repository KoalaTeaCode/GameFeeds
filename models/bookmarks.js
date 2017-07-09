var mongoose = require('mongoose');

var BookmarkSchema = new mongoose.Schema({
  articleId: { type: String, required: true },
  userId: {type: String, required: true },
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);
