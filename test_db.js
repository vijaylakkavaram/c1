
var dbFunctions = require('./dbStore/dbFunctions');
var config = require('./config');
var Q = require('q');

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

dbFunctions.ConnectToRedis(startApp);
/*
exports.getMessages = function(roomID, startPos, endPos) {
	if (endPos == undefined) {
		if (startPos > -10 && startPos < 0)
			endPos = -1;
		else
			endPos = startPos + 9
	}
	var deffered = Q.defer();
	redisClient.lrange(roomID, startPos, endPos, function(err, res) {
		if (!err) {
			var result = [];
			// Loop through the list, parsing each item into an object
			for (var msg in res)
				result.push(JSON.parse(res[msg]));
			result.push(roomID);
			deffered.resolve(result)
		} else {
			deffered.reject(err);
		}
	});
	return deffered.promise;
}
 */

var roomID1="d9226910-d3d2-4bbc-877d-5f9e4e31e206"
var roomID="e32e8964-1c0a-489f-959e-5b729f95ea21"
var roomID2='4bedd3f2-3973-4d29-85f0-401c889caabb';
var roomID3='81c8ac15-90e9-48d2-96be-eaa9e00f4c9b';
var users=[];
 //users.push(roomID1);
 users.push(roomID2);
 users.push(roomID3)
/* if(Object.keys){

console.log("users")
} */
/* console.log(Object.keys[users].length) */


/* if (Object.keys(users).length > 0) {
}
console.log(users)
 */
//in users entire socket will be there

setTimeout(() => {
	_.each(users, function (roomID) {

		dbFunctions.getMessages(roomID, 0)
		.then((history) => {
			console.log(history)
			var len = history.length;
		    console.log(len);
		   var userSocket = users[history[len - 1]];
			history.splice(-1, 1);
		}).catch((err) => {
		console.log(err)
		});

	//	});
	})

}, 2000);

 /*

		if (Object.keys(users).length > 0) {
			_.each(users, function (userSocket) {
			//	console.log("users in existing after the admin logins",users);
				dbFunctions.getMessages(userSocket.roomID, 0)
					.then(function (history) {
						var len = history.length;
						console.log(len);
						var userSocket = users[history[len - 1]];
						history.splice(-1, 1);
						console.log("users socket room id",users[socket.roomID]);
						if(adminSocket.username=='abcd')
						{
							socket.join(userSocket.roomID);
							socket.emit("New Client", {
								roomID: userSocket.roomID,
								history: history,
								details: userSocket.userDetails,
								justJoined: true

							}

							)
						}

						console.log("len",len);
					})

			});
        }
*/


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