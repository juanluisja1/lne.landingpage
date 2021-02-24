var express = require('express');
var router = express.Router();

/*modular instance of home or index*/

let landing = require('../controllers/landing.js');

/* GET home page. */
router.get('/', landing.get_landing );

module.exports = router;

//DEBUG=myapp:* npm start