var Bookmark = require('../models/bookmarks');

exports.postBookmarks = function(req, res) {
  var bookmark = new Bookmark();
  bookmark.articleId = req.body.articleId;
  bookmark.userId = req.user._id;

  bookmark.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Bookmark added to the locker!', data: bookmark});
  });
};

exports.getBookmarks = function(req, res) {
  Bookmark.find({ userId: req.user._id }, function(err, feeds){
    if (err) {
      res.send(err);
    }

    res.json(feeds);
  });
};

exports.deleteBookmarks = function(req, res) {
  Bookmark.remove({ userId: req.user._id, _id: req.body.id }, function(err) {
    if (!err) {
      //message.type = 'notification!';
      res.json({ message: 'Bookmark Deleted to the locker!'});
    } else {
      //message.type = 'error';
    }
  });
};

// // Create endpoint /api/beers/:beer_id for PUT
// exports.putBeer = function(req, res) {
//   // Use the Beer model to find a specific beer
//   Beer.update({ userId: req.user._id, _id: req.params.beer_id }, { quantity: req.body.quantity }, function(err, num, raw) {
//     if (err)
//       res.send(err);
//
//     res.json({ message: num + ' updated' });
//   });
// };
