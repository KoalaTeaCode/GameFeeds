var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var ejs = require('ejs');
var session = require('express-session');

//Models
var Friends = require('./models/friends');

mongoose.connect('mongodb://localhost:27017/games');

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

// Use express session support since OAuth2orize requires it
app.use(session({
  secret: 'Super Secret Session Key',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());

var port = process.env.PORT || 3000;

var router = express.Router();

//Controllers
var userController = require('./controllers/user');
var authController = require('./controllers/auth');
var feedController = require('./controllers/feed');
var clientController = require('./controllers/client');
var bookmarkController = require('./controllers/bookmark');
var favoriteController = require('./controllers/favorites');
var followingController = require('./controllers/following');
var oauth2Controller = require('./controllers/oauth2');

//Routes
router.get('/', function(req, res){
  res.json({ message: 'You are runnning dangersouly low'});
});

// Create endpoint handlers for oauth2 authorize
router.route('/oauth2/authorize')
  .get(authController.isAuthenticated, oauth2Controller.authorization)
  .post(authController.isAuthenticated, oauth2Controller.decision);

// Create endpoint handlers for oauth2 token
router.route('/oauth2/token')
  .post(authController.isClientAuthenticated, oauth2Controller.token);

router.route('/clients')
  .post(authController.isAuthenticated, clientController.postClients)
  .get(authController.isAuthenticated, clientController.getClients);

router.route('/bookmark')
  .delete(authController.isAuthenticated, bookmarkController.deleteBookmarks)
  .post(authController.isAuthenticated, bookmarkController.postBookmarks)
  .get(authController.isAuthenticated, bookmarkController.getBookmarks);

router.route('/favorites')
  .delete(authController.isAuthenticated, favoriteController.deleteFavorites)
  .post(authController.isAuthenticated, favoriteController.postFavorites)
  .get(authController.isAuthenticated, favoriteController.getFavorites);

router.route('/following')
  .delete(authController.isAuthenticated, followingController.deleteFollowing)
  .post(authController.isAuthenticated, followingController.postFollowing)
  .get(authController.isAuthenticated, followingController.getFollowing);

router.route('/feeds')
  .delete(authController.isAuthenticated, feedController.deleteFeeds)
  .post(authController.isAuthenticated, feedController.postFeeds)
  .get(authController.isAuthenticated, feedController.getFeeds);

router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

require('./routes/articles.js')(router);



//Start
app.use('/api', router);
app.use(express.static('public'));

app.listen(port);
console.log("Running on port" + port);
