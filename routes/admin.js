var express = require("express");
var router = express.Router();
const Admin = require("../controllers/Admin");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/users", Admin.AllUsers);
router.get("/restaurants", Admin.Restaurants);
router.get("/menus", Admin.Menus);
router.get("/tables", Admin.Tables);

module.exports = router;
