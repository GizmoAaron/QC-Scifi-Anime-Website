var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

const Member = require("../models/members");

/* GET users listing. */
router.post('/regis', function(req, res, next) {
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
