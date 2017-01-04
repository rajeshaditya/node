var monk=require('monk');
var database = require('../db');
var db=monk(database.db);
var stinfo =db.get('staffinfo');

module.exports.getUser = function(username,pwd,cb) {
  stinfo.findOne({StaffCode:parseInt(username),Password:pwd}, function(err,docs) {
    if (err) return cb(err)
    cb(null, docs)
  });

}


module.exports.updateFile=function(staffcode,path,cb){

stinfo.update({"PinNo" :staffcode },{$set:path},false,true,function(err){

	if(err) return err;
});


}