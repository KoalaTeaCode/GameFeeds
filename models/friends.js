var mongoose = require('mongoose');

var FriendsSchema = new mongoose.Schema({
  screen_name: String,
  data: Date,
  following_user_history: Array,
  following_account: String,
  user_has_unfollowed_history: Array,
  user_is_following_history: Array,
  unfollowing_user_history: Array,
});

module.exports = mongoose.model('friends', FriendsSchema);
