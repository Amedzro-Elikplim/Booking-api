const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const restaurantSchema = new Schema(
  {
    average_cost: {
      type: String,
      required: [true, "provide your average cost"],
    },
    restaurant_name: {
      type: String,
      required: [true, "provide restaurant name"],
    },
    Hours: {
      type: Date,
      required: [true, "provide time"],
    },
    Phone: {
      type: Number,
      required: [true, "provide phone number"],
    },
    Location: {
      type: String,
      required: [true, "provide location"],
    },
    Services: {
      type: String,
      required: [true, "provide services"],
    },
    Amenities: {
      type: String,
      required: [true, "provide your phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Restaurant", restaurantSchema);
