var Following = require('../models/following');

exports.postFollowing = function(req, res) {
  var following = new Following();
  following.referenceId = req.body.referenceId;
  following.type = req.body.type;
  following.userId = req.user._id;

  following.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Following added to the locker!', data: following});
  });
};

exports.getFollowing = function(req, res) {
  Following.find({ userId: req.user._id }, function(err, feeds){
    if (err) {
      res.send(err);
    }

    res.json(feeds);
  });
};

exports.deleteFollowing = function(req, res) {
  Following.remove({ userId: req.user._id, _id: req.body.id }, function(err) {
    if (!err) {
      //message.type = 'notification!';
      res.json({ message: 'Following Deleted to the locker!'});
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
