
var db = require("../models");

var authController = require('../controllers/htmlController.js');

module.exports = function(app, passport) {

  // The two functions below will not be used 
  // since we are using Modals
  // app.get('/signup', authController.signup);
  // app.get('/signin', authController.signin);


  function isLoggedIn(req, res, next){

    console.log("In Is Logged IN. Below is the req object");
    console.log(req);

    if(req.isAuthenticated()) return next();

    res.redirect("/signin");
  }

  
  app.post('/signup', passport.authenticate('local-signup', {

          // successRedirect: '/dashboard',
          successRedirect: '/profile',

          failureRedirect: '/signup'
      }

  ));


  app.post('/signin', passport.authenticate('local-signin', {

          // successRedirect: '/dashboard',
          successRedirect: '/profile',
  
          failureRedirect: '/signin'
      }
  
  ));


  // make sure the page can only be accessed when a user is logged into the session
  app.get('/dashboard', isLoggedIn, authController.dashboard);
  // app.get('/profile', isLoggedIn, authController.profile);

  app.get('/logout',authController.logout);


   // Load index page
   app.get("/", function (req, res) {
    res.render("index", {
      msg: "Welcome!",
    });
  });


  app.get("/creation", authController.creation);


  app.get("/about", authController.creation);


  app.get("/feed", authController.feed);


<<<<<<< HEAD
  app.get("/profile/", isLoggedIn, authController.profile);

=======
    db.User.findAll({ where: { id: userId } }).then(function (dbUser) {
      res.render("profile", { example: dbUser[0].dataValues});
      console.log(dbUser[0].dataValues);
    });
  })
>>>>>>> 71b41fd61321573741042fbed9219aed41855ea7

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

}


















