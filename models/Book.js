const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "provide your first name"],
    },
    lastname: {
      type: String,
      required: [true, "provide your last name"],
    },
    email: {
      type: String,
      required: [true, "provide your email"],
    },
    time: {
      type: String,
      required: [true, "provide time"],
    },
    date: {
      type: String,
      required: [true, "provide your date"],
    },
    date: {
      type: String,
      required: [true, "provide your date"],
    },
    restaurant: {
      type: String,
      required: [true, "provide restaurant"],
    },
    table: {
      type: String,
      required: [true, "provide table number"],
    },
    phone: {
      type: String,
      required: [true, "provide phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Booking", bookingSchema);
