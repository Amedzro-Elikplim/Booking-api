const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const tableSchema = new Schema(
  {
    restaurant_name: {
      type: String,
      required: [true, "provide menu"],
    },
    table_number: {
      type: Number,
      required: [true, "provide menu"],
    },
    booked: {
      type: Boolean,
      required: [true, "provide menu"],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Table", tableSchema);
