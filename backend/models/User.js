var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = Schema({

  user_name: {
    type: String,
    required: true,
    uppercase: true,
  },
  name: {
    type: String,
    required: true,
    uppercase: true,
  },
  surname: {
    type: String,
    required: true,
    uppercase: true,
  },
  email: {
    type: String,
    required: true,
    uppercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  photo: {
    type: String,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
  update_at: {
    type: Date,
    default: Date.now,
  },
});
//Se agrega un método findByUserName, necesario para buscar por el atributo user_name
UserSchema.static("findByUserName", function (userName) {
  return this.findOne({ user_name: userName });

});

module.exports = mongoose.model("User", UserSchema);
