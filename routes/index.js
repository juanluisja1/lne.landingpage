var express = require('express');
var router = express.Router();

/*modular instance of home or index*/

let landing = require('../controllers/landing.js');

//Routes

/* GET home page. */
router.get('/', landing.get_landing );
/* Post form*/
router.post('/', landing.submit_lead);
//GET show leads route
router.get('/leads', landing.show_leads);
//Get lead it
router.get('/lead/:lead_id', landing.show_lead);
module.exports = router;

//DEBUG=myapp:* npm start