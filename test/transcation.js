var sql     = require('mssql');
var Connection = require('tedious').Connection;  
var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  
var result;
var result1;
var p_resultip;
var c_resultip;
var check;
var result1=[];
 var my1=[];
var my_result="::ffff:192.168.1.27";
var my="";
var cmy="";
var my2=[];
var main_admin;
var Usr_Id;
var async = require('async');
var databaseConfig = {
	userName: 'datapullman',  
	password: 'system',  
	server: 'localhost',
	options: {
		// encrypt: true, /*If you are connecting to a Microsoft Azure SQL database, you will need this*/
		database: 'Live_Chat1'
	}
}
/* var connection = new Connection(databaseConfig);  
 
connection.on('connect', function(err) {  
    if (err) {
        console.log(err);
    }  
    else    {
		console.log("Connected");
	}

});
 */


var connection = new Connection(databaseConfig, function(err) {
    var transaction = new Transaction(connection);
    transaction.begin(function(err) {
        console.log('begin transaction');
    });
});