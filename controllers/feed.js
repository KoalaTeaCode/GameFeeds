var Feed = require('../models/feed');

exports.postFeeds = function(req, res) {
  var feed = new Feed();
  feed.title = req.body.title;
  feed.link = req.body.link;
  feed.publisher = req.body.publisher;
  feed.userId = req.user._id;

  feed.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Beer added to the locker!', data: feed});
  });
};

exports.getFeeds = function(req, res) {
  Feed.find({ userId: req.user._id }, function(err, feeds){
    if (err) {
      res.send(err);
    }

    res.json(feeds);
  });
};

exports.deleteFeeds = function(req, res) {
  Feed.remove({ userId: req.user._id, _id: req.body.id }, function(err) {
    if (!err) {
      //message.type = 'notification!';
      res.json({ message: 'Beer Deleted to the locker!'});
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
