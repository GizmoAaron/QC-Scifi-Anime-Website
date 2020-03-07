const mongoose = require('mongoose')

const MemberSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    FirstName: {
      type: String,
      //required: true,
      trim: true,
      lowercase: true
    },
    LastName: {
      type: String,
      //required: true,
      trim: true,
      lowercase: true
    },
    Password: {
      type: String,
      //required: true
    },
    PhoneNumber: {
      type: String,
      //required: true,
      trim: true
    },
    Email: {
      type: String,
      //required: true,
      trim: true
    },
    isMember: {
      type: Boolean,
      default: 0
    },
    DateCreated: {
      type: Date,
      default: Date.now
    }
  });

module.exports = mongoose.model('member',MemberSchema);