var express = require('express');
var router = express.Router();
const User = require("../controllers/User");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", User.Register);
router.get("/login", User.Login);
router.post("/booking".User.saveBooking);

module.exports = router;
