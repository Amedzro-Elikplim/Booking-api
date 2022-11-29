const mongoose = require("mongoose");
const config = require("config");

mongoose
  .connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to mongoDB successfully"))
  .catch((error) => console.error(error));
