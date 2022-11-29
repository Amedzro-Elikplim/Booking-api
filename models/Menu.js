const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const menuSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "provide menu"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Menu", menuSchema);
