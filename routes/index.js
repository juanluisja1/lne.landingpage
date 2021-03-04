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
//Get lead id
router.get('/lead/:lead_id', landing.show_lead);
//get lead to edit
router.get('/lead/:lead_id/edit',landing.show_edit_lead);
//post lead edited
router.post('/lead/:lead_id/edit',landing.edit_lead);
//post delete lead:id
router.post('/lead/:lead_id/delete',landing.delete_lead);
//post detele lead:id using JavaScript
router.post('/lead/:lead_id/delete-json', landing.delete_lead_json)
module.exports = router;

//DEBUG=myapp:* npm start