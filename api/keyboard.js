var express = require('express');
var router = express.Router();

var response = {
      "type": "buttons",
      "buttons" : ["Initial keyboard options"]
  };

/* GET initial keyboard settings. */
router.get('/', function(req, res, next) {
  res.json(response);
});

module.exports = router;
