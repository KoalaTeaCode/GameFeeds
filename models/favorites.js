var mongoose = require('mongoose');

var FavoriteSchema = new mongoose.Schema({
  articleId: { type: String, required: true },
  userId: {type: String, required: true },
});

module.exports = mongoose.model('Favorite', FavoriteSchema);
