
//ORM import
const models = require('../models')

// module for index

exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Welcome' });
  }

  exports.submit_lead = function(req, res, next) {

    return models.Lead.create({
      email: req.body.lead_email
    }).then(lead => {
      res.redirect('/');
    })
  }
  