
var express = require('express');
var app = express();
var server = require('http').Server(app)
var io = require('socket.io')();
  var session = require("express-session")({
    secret: "my-secret",
    resave: true,
    saveUninitialized: true
});

var sharedsession = require("express-socket.io-session");
app.use(session);


var uuid = require('node-uuid');
var Q = require('q');
var _ = require("underscore")
var dbFunctions = require('./dbStore/dbFunctions');
 var config = require('./config');
var mail = require('./mail');	//Configure mail.js and un-comment the mail code
var btoa = require('btoa');		//Password is btoa hashed
var c = 0;
 var a=""
 var b=""
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
var connectionsLimit = 6
var result = "";
const os = require('os');
var totAdmins=1;
var io1 = os.networkInterfaces();
var result_ip;
var my_result = "";
var my = "";
var cmy="";
var datetime;
var user_ip;
var result;
var result1;
var a1=0;
var a2=0;
var my1 = [];
var my2=[];
var callback;
var p_userid;
var  p_userid1;
var result2;
var p_resultip;
var resulta;
var cip;
var result_ipp = [];
var ip;
var ip2=0;
var clientip;
var clientip1=0;
var resultaa = [];
var Usr_Id=0;
var c_UsrID;
var c_resultip;
var main_admin;
var creation=0;
var assignemnt=0;
var checkingid=0;
var chat=0;
 var Usr_Id
var tc=0;
var ta=0;
var m=[];
var getusername=0;
var pool;
var i;
 var Admin_Id;
 var Admin_Id1;
var ssn = 1;
var Usr_Port = config.web_port;
var Admin_Login_Ip;
var admin="";
var username1="";
var Admin_name="";

// Use shared session middleware for socket.io
// setting autoSave:true

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
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully by sequelieze');

})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

var connectionConfig = {
	userName: 'datapullman',
	password: 'system',
	server: 'localhost',
	options: {
 		database: 'Live_Chat1'
	}
}
//create the pool

var poolConfig = {
    min:10,
    max:50,
    log: false
};

dbFunctions.ConnectToRedis(startApp);

var pool = new ConnectionPool(poolConfig, connectionConfig);
pool.on('error', function(err) {
    console.error(err);
});
var ids='';
var ids1=[];

Admin_name='aaaa'
setTimeout(() => {
    get_clients_room_id(Admin_name);

}, 1000);


					//get_clients_room_id function started
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
							console.log('ids',ids1)
							}
						})
						.catch(function(err){
							if(err){
							  console.log(err	);
							}
						  })
					}
  console.log(ids1)


setTimeout(() => {
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
				console.log('checking at add admin name',socket['username'])
					})
				})
			}
}, 2000);






function startApp(isSuccess) {
	if (isSuccess) {
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
