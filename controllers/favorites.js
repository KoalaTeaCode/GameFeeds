var Favorite = require('../models/favorites');

exports.postFavorites = function(req, res) {
  var favorite = new Favorite();
  favorite.articleId = req.body.articleId;
  favorite.userId = req.user._id;

  favorite.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Favorite added to the locker!', data: favorite});
  });
};

exports.getFavorites = function(req, res) {
  Favorite.find({ userId: req.user._id }, function(err, feeds){
    if (err) {
      res.send(err);
    }

    res.json(feeds);
  })
};

exports.deleteFavorites = function(req, res) {
  Favorite.remove({ userId: req.user._id, _id: req.body.id }, function(err) {
    if (!err) {
      //message.type = 'notification!';
      res.json({ message: 'Favorite Deleted to the locker!'});
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
