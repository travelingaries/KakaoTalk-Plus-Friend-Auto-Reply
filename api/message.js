var express = require('express');
var router = express.Router();

/* Define responses. */
var photoResponse = {
	"message":{
        "text" : "Response to an image."
    },
    "keyboard": {
    	"type": "buttons",
    	"buttons": [
    	    "Button 1",
    		"Button 2"
    	]
    }
};

var textResponse = {
	"message":{
		"text": "Response to a text input/button"
	}
};

/* POST auto-reply messages. */
router.get('/', function(req, res, next) {
	if(req.body.type == "photo"){
		res.json(photoResponse);	
	}
	else res.json(textResponse);
});

module.exports = router;