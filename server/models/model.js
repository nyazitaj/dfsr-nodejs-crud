const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true, minlength: 6, select: false }
  },
);

module.exports = mongoose.model('User', userSchema);