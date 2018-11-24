
var express = require('express');
var app = express();


var server = require('http').Server(app)
var io = require('socket.io')();
var uuid = require('node-uuid');
var Q = require('q');
var _ = require("underscore")
var dbFunctions = require('./dbStore/dbFunctions');
var config = require('./config');
var mail = require('./mail');	//Configure mail.js and un-comment the mail code
var btoa = require('btoa');		//Password is btoa hashed
var c = 0;
var a = 0;
var bodyParser = require('body-parser');
var admins = {};
var users = {};
var Connection = require('tedious').Connection;

var isolation=require('tedious').ISOLATON_LEVEL ;
var Admin_Login_Port = config.web_port;  //port

var Request = require('tedious').Request;

var loginc=0;
var reg=0;
var ConnectionPool = require('tedious-connection-pool');
var TYPES = require('tedious').TYPES;
var async = require('async');

const os = require('os');
var Admin_name='aaaa';
var pool;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('Live_Chat1', 'datapullman', 'system', {
  host: 'localhost',
  dialect: 'mssql',
  operatorsAliases: false,

  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
 });


//create the pool
dbFunctions.ConnectToRedis(startApp);
var ids1=[];
var ids='';
setTimeout(() => {
	get_clients_room_id(Admin_name);

}, 100);






if(Admin_name)
{
 //console.log('ids1',ids1)
/*  for(var i=0;i<ids1.length;i++){
//	ids1.push(ids[i]['room_Id'])
	console.log('ids',ids1)
} */
function get_clients_room_id(Admin_name){
	sequelize
	.query(
	  'select room_Id from Session_Table where Admin_name=?;',
	  { raw: true, replacements: [Admin_name]}
	)
	.spread(projects => {
	ids=projects;
	for(var i=0;i<ids.length;i++){
	ids1.push(ids[i]['room_Id'])
	}
/* 	 setTimeout(() => {
		if(ids1){
		_.each(ids1, function (ids1) {
			//console.log("users in existing after the admin logins",userSocket);
			dbFunctions.getMessages(ids1[i], 0)
				.then(function (history) {
					console.log('history',history)
					var len = history.length;
					console.log('len',len);
					var userSocket = ids1[history[len - 1]];
					history.splice(-1, 1);
	console.log('admin name',socket.username)


			}
			)
			}
			)
		}

				},1500); */
})
.catch(function(err){
	if(err){
	  console.log(err);
	}
  })
}setTimeout(() => {
	console.log('ids',ids1);
	//

//;

	setTimeout(() => {
	//
		if(ids1){

			for(var i=0;i<=2;i++){
				//var roomID=ids1[0]
		_.each(ids[i], function (roomID) {
			//console.log("users in existing after the admin logins",userSocket);
			dbFunctions.getMessages(roomID, 0)
				.then(function (history) {
					console.log('history1',history);
			}	)	})}
		}

	//}
		},1000);
	//
//}
}, 2000);
}
/* setTimeout(() => {
	if(ids1){
	_.each(ids1, function (roomID) {
		//console.log("users in existing after the admin logins",userSocket);
		dbFunctions.getMessages(roomID, 0)
			.then(function (history) {
				console.log('history',history)
				var len = history.length;
				console.log('len',len);
				var userSocket = ids1[history[len - 1]];
				history.splice(-1, 1);
console.log('admin name',socket.username)


		}
		)
		}
		)
	}

			},1500); */


function startApp(isSuccess) {
	if                        (isSuccess) {
		server.listen(config.web_port, function () {
			console.log('Server started ' + config.web_port + ' at ' +
				(new Date().toLocaleString().substr(0, 24)));
		});
		io.attach(server, {
			'pingInterval': 15000,
			'pingTimeout': 15000
		});
	} else {
		console.log("Server failed to start.");
	}
}