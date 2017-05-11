var express = require("express");
var router = express.Router(); 
var db = require("../models");

//first route could pull in all stats for the loged-in user team, or if not loggged in can re-route them to signup/signin page
router.get("/", function(req, res) {

    //currently we have no db, so just render empty index page
    res.render("index");

    /*db.User.findAll({
      order: '`User_name` ASC'
    }).then(function(dbUser) { 
      var UserObject = {
        users: dbUser
      };       
      res.render("index", UserObject);
    });*/
});

//example route for posting
/*router.post("/insert", function(req, res) { 
    db.User.create({
      user_name: req.body.newUser
    }).then(function(dbUser) { 
      res.redirect("/");
    });
});*/

//example route to update/put
/*router.put("/:id", function(req, res) { 
    db.User.update({
      some_other_data: 1
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.redirect("/");
    });
});*/


module.exports = router;