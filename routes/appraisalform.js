var express = require('express');
var router = express.Router();
var moment= require('moment');
var formidable = require('formidable');
var path = require('path');
var staffInfo = require('../models/staffinfo');
var reviewDate=require('../models/reviewdates');
// var appraisalAec=require('../models/aecappraisal');
// var appraisalAect=require('../models/aectappraisal');
// var appraisalAce=require('../models/aceappraisal');
var fs = require('fs');
var moment=require('moment');
var current_year=moment().year();

//*********************************************************************************

router.post('/subaverage',function(req,res){
  // if(req.session.user.College=="ACE")
  // {
  appraisalAce.insertData(req.body ,function(err,staff){
    if(err){

    }
    if(!staff){
      
    }

  
	});
  });

router.get('/getData',function(req,res){
	data=req.session.user;
	console.log(data);
	res.json(data);

});

  router.get('/appraisal',function(req,res){
  
  		res.render('appraisalform');
  	}
  );


  module.exports = router;