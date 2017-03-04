var express = require('express');
var router = express.Router();

/* DELETE chat room. */
router.delete('/:user_key', function(req, res, next) {
  res.sendStatus(200);
});

module.exports = router;
