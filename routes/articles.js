module.exports = function(router) {
  var Articles = require('../models/article');

  var articlesRoute = router.route('/articles');

  articlesRoute.get(function(req, res) {
    Articles.find(function(err, friends){
      if (err) {
        res.send(err);
      }

      res.json(friends);
    }).sort([['_id', 'descending']]).skip(0).limit(100);;
  });

}
