var express = require('express');
var router = express.Router();

/*modular instance of home or index*/

let index = require('../controllers/index.js');

/* GET home page. */
router.get('/', index.index );

module.exports = router;

//DEBUG=myapp:* npm start