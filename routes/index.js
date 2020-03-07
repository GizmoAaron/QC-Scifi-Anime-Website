var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

const Member = require("../models/members");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index.ejs', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/checkout.ejs', function(req, res, next) {
  res.render('na', { title: 'NA' });
});

router.get('/deposit.ejs', function(req, res, next) {
  res.render('na', { title: 'Express' });
});

router.get('/login.ejs', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/register.ejs', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.get('/patreon', function(req, res, next) {
  res.render('error', { title: 'Express' });
});

router.post('/insert', function(req, res, next) {
  const member = new Member({
    _id: new mongoose.Types.ObjectId(),
    FirstName: req.body.firstname,
    LastName: req.body.lastname,
    Password: req.body.password,
    PhoneNumber: req.body.phone,
    Email: req.body.email
  });
  member
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(201).json({
    message: "Created new member",
    createdMember: member
  })
});

module.exports = router;
