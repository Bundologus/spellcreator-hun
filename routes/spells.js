var express = require("express");
var router = express.Router();

/* GET spell creation form. */
router.get("/new-spell", function (req, res, next) {
    res.render("spellForm");
});

module.exports = router;
