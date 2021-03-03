//https://youtu.be/G8uL0lFFoN0?t=2761
//ORM import
const models = require('../models')

// module for index
// index handler
exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Welcome' });
  }

 // submit lead handler 
exports.submit_lead = function(req, res, next) {

    return models.Lead.create({
      email: req.body.lead_email
    }).then(lead => {
      res.redirect('/leads');
    })
  }

  // show leads handler
  exports.show_leads = function(req, res, next) {
    models.Lead.findAll().then(leads => {
      res.render('landing', { title: 'Express', leads: leads });
    })
  }

  //get a particular lead:id handler
  exports.show_lead = function(req, res, next) {
    models.Lead.findOne({
      where: {
        id : req.params.lead_id
      }
    }).then(lead => {
      res.render('lead', { lead: lead });
    })
  }

  //get a form with the functionality to edit lead:id handler
  exports.show_edit_lead = function(req, res, next) {
    models.Lead.findOne({
      where: {
        id : req.params.lead_id
      }
    }).then(lead => {
      res.render('lead/edit_lead', { lead: lead });
    })
  } 

  // edit lead:id handler
  exports.edit_lead = function(req, res, next) {
    //req.params.lead_id
    //req.body.lead_email

    return models.Lead.update({
      email: req.body.lead_email
    }, {
        where: {
          id:req.params.lead_id
        }
       }).then(result => {
         res.redirect('/lead/'+ req.params.lead_id);
       })
  } 

  // delete lead
  exports.delete_lead = function(req, res, next) {
    return models.Lead.destroy({
      where:{
        id: req.params.lead_id
      }
    }).then(result =>{
      res.redirect('/leads');
    })
  }