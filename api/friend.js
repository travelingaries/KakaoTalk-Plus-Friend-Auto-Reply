var express = require('express');
var router = express.Router();

/* POST new friend. */
router.post('/', function(req, res, next) {
    res.sendStatus(200);
});

/* DELETE friend. */
router.delete('/:user_key', function(req, res, next) {
    res.sendStatus(200);
});

module.exports = router;
