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
var my1 = [];
var my2=[];
var callback;
var p_userid;
var result2;
var p_resultip;
var resulta;
var cip;
var result_ipp = [];
var ip;
var resultaa = [];
var Usr_Id;
var c_UsrID;
var c_resultip;
var main_admin;
var creation=0;
var assignemnt=0;
var checkingid=0;
var chat=0;
var getusername=0;
 
var ssn = 1;
var Usr_Port = config.web_port;
var Admin_Login_Ip;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('Live_Chat1', 'datapullman', 'system', {
  host: 'localhost',
  dialect: 'mssql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
 });
/* 
var config1 = {
	userName: 'datapullman',
	password: 'system',
	server: '192.168.1.26',
	
	options: {

		 // encrypt: true, /*If you are connecting to a Microsoft Azure SQL database, you will need this

		database: 'Live_Chat1'

	},
	 
} */


sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');

})
.catch(err => {
  console.error('Unable to connect to the database:', err);
}); 






var connectionConfig = {
	userName: 'datapullman',  
	password: 'system',  
	server: 'localhost',
	options: {
		// encrypt: true, /*If you are connecting to a Microsoft Azure SQL database, you will need this
		database: 'Live_Chat1'
	}
}
//create the pool

var poolConfig = {
    min: 20,
    max:50,
    log: false
}; 


var pool = new ConnectionPool(poolConfig, connectionConfig);

pool.on('error', function(err) {
    console.error(err);
});


var get_ticket=0;
function Get_ticket_color()
{




pool.acquire(function (err, connection) {
    if (err) {

        console.error(err);
        return;
    }

    //use the connection as normal
    var request = new Request('New_Get_Ticket_color', function(err, rowCount) {
        if (err) {
            console.error(err);
            return;
        }
else{



	connection.release();
}



        //console.log('rowCount: ' + rowCount);

        //release the connection back to the pool when finished
        connection.release();
    });

	request.on('row', function (columns) {
		columns.forEach(function (column) {
			if (column.value === null) {
				console.log('NULL');
			} else {
				result2 += column.value + " ";
			}
		});
		get_ticket++;

	});

    connection.execSql(request);
});

}


/* function Get_ticket_color() {
	//	console.log("Inserting into Table...");
	request = new Request("New_Get_Ticket_color", function (err) {
		if (err) {
			console.log(err);
		}
		else {
			//			console.log('no errors for get ticket color');
		}
	}
	);


	request.on('row', function (columns) {
		columns.forEach(function (column) {
			if (column.value === null) {
				console.log('NULL');
			} else {
				result2 += column.value + " ";
			}
		});


	});

		connection.execSql(request);
} */
//var connection = new Connection(config1);
dbFunctions.ConnectToRedis(startApp);
/* 
connection.on('connect', function (err) {
	if (err) {
		console.log(err);
	}
	else {
		console.log("Connected");
	}

}); */

function New_Ticket_Assignment(Usr_Id) {

	pool.acquire(function (err, connection) {
		if (err) {
			console.error(err);
			return;
		}

	//console.log("Executing The New_ticket_Assignement for usr_Id", );
	var request1 = new Request('New_Ticket_Assignment', function (err) {
		if (err) {
			console.log(err);
			var rr = err['message'];
			console.log("rr", rr);
			main_admin = rr;
			if (rr != null) {
				console.log('testing rr', rr);
			}
		}
		else {
			console.log('ticket assigned successfully');
			connection.release();

		}
	});

	resulta = "";
	request1.on('row', function (columns) {
		columns.forEach(function (column) {
			if (column.value === null) {
				console.log('NULL');
			}
			else {
				resulta += column.value + " ";
			}
		});

		resultaa = " ";
		main_admin = " ";
		resultaa = resulta.split(" ", 20);
		console.log('This ', Usr_Id, 'has assigned to ', resultaa[19], );
		main_admin = resultaa[19].valueOf();
		console.log("main_admin ", main_admin);

		assignemnt++;

	});
	request1.addParameter('Usr_Id', TYPES.Int, Usr_Id);
	// Check how many rows were inserted

 	connection.callProcedure(request1);
 })

}
if(assignemnt>0){


}



app.get('/', function (req, res) {
	 res.sendFile(__dirname + '/views/client.html');

	   ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	   console.log("client page",req.ip);
	/* var t=   new Date().toLocaleString().substr(0, 24);
	var t1=   new Date().toLocaleString().substr(0, 24);
	if(t==t1) */
//	user_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//	result_ipp = user_ip.split(":",3);
 	if (ip.substr(0, 7) == "::ffff:") {
		ip = ip.substr(7)
		console.log("ip",ip);
	  }
 
	  
	function checking_ticket(ip) {
		pool.acquire(function (err, connection) {
			if (err) {
				console.error(err);
				return;
			}




		console.log('Reading rows from the Table...');

		// Read all rows from table
		request = new Request(
			'select usr_ip_address ,Usr_id from LiveChatUser_Ticket_Creation_History where Usr_IP_address=@ip;',
			function (err) {
				if (err) {
					console.log(err);
				}
				else{


					connection.release();

				}
			});
		request.addParameter('ip', TYPES.VarChar, ip);
		// Print the rows read
		my = "";
		p_userid="";
		request.on('row', function (columns) {
			columns.forEach(function (column) {
				if (column.value === null) {
					console.log('NULL');
				} else {
					my += column.value + " ";
					console.log("my", my);

				}

				my1 = my.split(" ", 2);
				p_userid=my1[1];
				console.log("my array0", my1[0]);
				console.log("p_userid", p_userid);
				checkingid++;


			});
		});

		// Execute SQL statement
	//	connection.beginTransaction  () ;
		connection.execSql(request);
	//	connection.commitTransaction () 

	})
	

	}

	if(checkingid>0)
	{


		console.log("connections released");
	}



	setTimeout(function () {

	if (ip != null) {

		
			checking_ticket(ip);
	}
}, 50)

	setTimeout(function () {
	if (my !=null) {
		if (ip != my1[0]) {

				New_Ticket_Creation(result_ipp[0], config.web_port, ssn, datetime);
				a++;


			console.log("First Time Ticket going to be created");
		}
		else {
			console.log("oh my god Ticket already created");
			a1++;
		}

	}
}, 100)


function get_admin_name(p_userid) {



	pool.acquire(function (err, connection) {
		if (err) {
			console.error(err);
			return;
		}
	//console.log("Executing The New_Ticket_Creation");
	request = new Request('get_admin_name', function (err) {
		if (err) {
			console.log(err);
			var rr = err['message'];
			console.log("rr", rr);
			if (rr != null) {
				console.log('testing rr', rr);
				a++;
			}
		}
		else {
			console.log('ticket  checking  successfully');
			connection.release();

		}

	});
	cmy="";
	my2="";
	request.on('row', function (columns) {
		columns.forEach(function (column) {
			if (column.value === null) {
				console.log('NULL');
			} else {
				cmy += column.value + " ";
				console.log("cmy", cmy);
			}
		});

		console.log("my 2", my2);
		my2 = cmy.split(" ", 1);
		main_admin=my2[0];
		console.log("main_admin in checking ", main_admin);
		getusername++;

	});
	request.addParameter('p_userid', TYPES.VarChar, p_userid);

	// Check how many rows were inserted
	request.on('doneInProc', function (rowCount, more) {
		//			console.log(rowCount + ' row(s) inserted');
	});
//	connection.beginTransaction  () 
	connection.callProcedure(request);
//	connection.commitTransaction (); 
})
}
if(getusername>0){


}


setTimeout(function(){
if(a1!=0){
	console.log("just  checking p_userid before the checking_adminid ",p_userid );
	get_admin_name(p_userid);
}
},200)
	function New_Ticket_Creation(Usr_Ip, Usr_Port, ssn) {
		pool.acquire(function (err, connection) {
			if (err) {
				console.error(err);
				return;
			}

		
		//console.log("Executing The New_Ticket_Creation");
		request = new Request('New_Ticket_Creation', function (err) {
			if (err) {
				console.log(err);
				var rr = err['message'];
				console.log("rr", rr);
				if (rr != null) {
					console.log('testing rr', rr);

				}

			}
			else {
				console.log('ticket created successfully');
				connection.release();

				}

		});
		result = "";
		result1 = "";
		request.on('row', function (columns) {
			columns.forEach(function (column) {
				if (column.value === null) {
					console.log('NULL');
				} else {
					result += column.value + " ";
				}
			});
			result1 = result.split(" ", 3);
			p_resultip = result.split(" ", 14);
			c_resultip = p_resultip[13];
			Usr_Id = 0;
			Usr_Id = result1[1];
			creation++;
		});
		request.addParameter('Usr_IP_Address', TYPES.VarChar, ip);
		request.addParameter('Usr_Port_Id', TYPES.VarChar, Usr_Port);
		request.addParameter('Session_Id', TYPES.VarChar, ssn);
		request.addParameter('Con_Start_Time', TYPES.DateTime, new Date());
		// Check how many rows were inserted
		request.on('doneInProc', function (rowCount, more) {
			//			console.log(rowCount + ' row(s) inserted');
		});
//		connection.beginTransaction  ();
		 connection.callProcedure(request);
//		 connection.commitTransaction () ;



	})
	}
if(creation>0){


}


});
app.get('/Registration', function (req, res) {
	res.sendFile(__dirname + '/views/Reg.html');
	console.log("Registration page Displayed");
});
app.get('/ping', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', config.parentDomain);
	res.send("OK");
});


app.get(config.admin_url, function (req, res) {
	res.sendFile(__dirname + '/views/admin.html');
	var ip1 = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	Admin_Login_Ip = ip1.split("::");
	console.log("This is at COnfig.admin url ");
});

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.bodyParser());
app.post('/adminURL', function (req, res) {
	res.sendFile(__dirname + '/views/admin.html');
	Insert(req.body.firstname, req.body.lastname, req.body.username, req.body.password, req.body.gender, req.body.email, req.body.address, req.body.phonenumber);

});
function Insert(firstname, lastname, username, password, gender, email, address, phonenumber, callback) {

	pool.acquire(function (err, connection) {
		if (err) {
			console.error(err);
			return;
		}


	request = new Request('Get_Admin_Registration', function (err) {
		if (err) {
			console.log(err);
		}
		else{


			connection.release();

		}
	}
	);
	request.addParameter('F_Name', TYPES.VarChar, firstname);
	request.addParameter('L_Name', TYPES.VarChar, lastname);
	request.addParameter('Admin_Name', TYPES.VarChar, username);
	request.addParameter('Pass_Word', TYPES.VarChar, password);
	request.addParameter('Gender', TYPES.VarChar, gender);
	request.addParameter('Email', TYPES.VarChar, email);
	request.addParameter('Address1', TYPES.VarChar, address);
	request.addParameter('Ph_No', TYPES.VarChar, phonenumber);

	// Check how many rows were inserted
	request.on('doneInProc', function (rowCount, more) {
		console.log(rowCount + ' row(s) inserted');
		console.log("Inserting into Table for Registration...");
		reg++;

	});
//	connection.beginTransaction  () 

	connection.callProcedure(request);
//	connection.commitTransaction () 

})
}
if(reg>0){


}


app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	var Admin_Login_Port = config.web_port;  //port
	//Login Admin
	socket.on('login', function (data) {
		
		var a = data['admin'];
		var b = data['password'];
		Admin_Login(a, b, Admin_Login_Ip, Admin_Login_Port);
		function Admin_Login(a, b, Admin_Login_Ip, Admin_Login_Port) {



			pool.acquire(function (err, connection) {
				if (err) {
					console.error(err);
					return;
				}
			//	console.log("Inserting into Table for Login");
			request = new Request('Let_Admin_Login', function (err) {
				if (err) {
					console.log(err);
					var rr = err['message'];
					console.log("rr", rr);
					if (rr != null) {
						console.log('testing rr', rr);
						socket.emit('login', {
							login: false,
							err: rr
						})
					} else {
						socket.emit('login', {
							login: false,
							err: "Invalid Login"
						})
					}
				}
				else {
					socket.emit('login', {
						login: true
					});
				}
				connection.release();


			});
			request.addParameter('Admin_Name', TYPES.VarChar, a);
			request.addParameter('Pass_Word', TYPES.VarChar, b);
			request.addParameter('Admin_Login_Ip', TYPES.VarChar, Admin_Login_Ip);
			request.addParameter('Admin_Login_Port', TYPES.VarChar, Admin_Login_Port);

			// Check how many rows were inserted
			request.on('doneInProc', function (rowCount, more) {
				loginc++;
				//console.log(rowCount + ' row(s) inserted');
			});
//			connection.beginTransaction(callback,"login", ) 
			connection.callProcedure(request);
//			connection.commitTransaction (callback,"login",) 



		})
		}

if(loginc>0)
{


}


	});
	//Init admin
	socket.on('add admin', function (data) {
		this.isAdmin = data.isAdmin;
		socket.username = data.admin;

		_.each(admins, function (adminSocket) {
			adminSocket.emit("admin added", socket.username)
			socket.emit("admin added", adminSocket.username)
		});
		admins[socket.username] = socket;	 
		//If some user is already online on chat
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
	});
	setTimeout(function () {
	if (a != 0) {
		if (Usr_Id != 0) {
 				New_Ticket_Assignment(Usr_Id);
				Usr_Id = 0;
 		}
		else {
			console.log("no tickets are there", Usr_Id)
		}
	}
	
}, 500)
//Init user
	socket.on('add user', function (data) {

		socket.isAdmin = false;

		if (data.isNewUser) {
			data.roomID = uuid.v4();
			dbFunctions.setDetails(data);
			socket.emit("roomID", data.roomID);
		}

		socket.roomID = data.roomID;

		//Fetch user details
		dbFunctions.getDetails(socket.roomID)
			.then(function (details) {
				socket.userDetails = details;
			})
			.catch(function (error) {
				console.log("Line 95 : ", error)
			})
			.done();
		socket.join(socket.roomID);
		var newUser = false;
		if (!users[socket.roomID]) {
			// Check if different instance of same user. (ie. Multiple tabs)
			users[socket.roomID] = socket;
			newUser = true;
		}
		//Fetch message history
		dbFunctions.getMessages(socket.roomID, 0)
			.then(function (history) {
				history.splice(-1, 1)
				socket.emit('chat history', {
					history: history,
					getMore: false
				});
				/* 	if (Object.keys(admins).length == 0) {
						//Tell user he will be contacted asap and send admin email
						socket.emit('log message', "Thank you for reaching us." +
							" Please leave your message here and we will get back to you shortly.");
						} else { */
				if (newUser) {


					socket.emit('log message', "Hello User, How can I help you?");
					//Make all available admins join this users room.
					_.each(admins, function (adminSocket) {
						if (adminSocket.username == main_admin) {
							console.log("near join", main_admin);
							socket.emit('log message', "Hello User, How can I help you?");
							adminSocket.join(socket.roomID);
							adminSocket.emit("New Client", {
								roomID: socket.roomID,
								history: history,
								details: socket.userDetails,
								justJoined: false
							})
						}
					});
				}
				//}
			})
			.catch(function (error) {
				console.log("Line 132 : ", error)
			})
			.done();
		dbFunctions.getMsgLength(socket.roomID)
			.then(function (len) {
				socket.MsgHistoryLen = (len * -1) + 10;
				socket.TotalMsgLen = (len * -1);
			})
			.catch(function (error) {
				console.log("Line 140 : ", error)
			})
			.done();
	});

	socket.on('chat message', function (data) {
		setTimeout(function () {
			Get_ticket_color();
		}, 100);

		console.log("checking before messaging",data);
		if (data.roomID === "null")

			data.roomID = socket.roomID;
		data.isAdmin = socket.isAdmin;
		dbFunctions.pushMessage(data);

		console.log('result', data.result2 = result2);
		result2 = '';
		var k = data['msg'];
		var k1 = data['isAdmin'];
		var k2 = data['timestamp'];
		var k3 = data['roomID'];
		console.log('k1', k1);
		console.log((data['msg']));
		if (k1 == false) {
			Insert('client', k, k2, k3);

		}
		else {

			Insert('agent', k, k2, k3);
		}


		function Insert(name, msg, timestamp, roomID, callback) {


			pool.acquire(function (err, connection) {
				if (err) {
					console.error(err);
					return;
				}
			console.log("Inserting into Table...");

			request = new Request("INSERT  chat_history (name, msg,timestamp,roomID) OUTPUT INSERTED.slno VALUES (@Name, @msg,@timestamp,@roomID);", function (err) {
				if (err) {
					console.log(err);
				}
				else{


					connection.release();

				}
			}
			);
			request.addParameter('name', TYPES.VarChar, name);
			request.addParameter('msg', TYPES.VarChar, msg);
			request.addParameter('timestamp', TYPES.VarChar, timestamp);
			request.addParameter('roomID', TYPES.VarChar, roomID);


			// Check how many rows were inserted
			request.on('doneInProc', function (rowCount, more) {
				console.log(rowCount + ' row(s) inserted');
				chat++;

			});
			//connection.beginTransaction  () 

			connection.execSql(request);
		//	connection.commitTransaction () 




		})
		}
if(chat>0){




}



		socket.broadcast.to(data.roomID).emit('chat message', data);
	});

	socket.on("typing", function (data) {
		socket.broadcast.to(data.roomID).emit("typing", {
			isTyping: data.isTyping,
			person: data.person,
			roomID: data.roomID
		});
	});

	socket.on('disconnect', function () {
		if (socket.isAdmin) {
			//	console.log('disconnect',admins);
			delete admins[socket.username];

			_.each(admins, function (adminSocket) {
				adminSocket.emit("admin removed", socket.username)
			});
		} else {
			if (io.sockets.adapter.rooms[socket.roomID]) {
				var total = io.sockets.adapter.rooms[socket.roomID]["length"];
				  
				//var totAdmins = Object.keys(admins).length;
				var clients = total - totAdmins;
				console.log("clients count", clients);

			/* 	console.log("totAdmins admins",Object.keys(admins).ag);
				console.log("sockets ",io.sockets.adapter.rooms[socket.roomID]);

				console.log("clients count",clients);
				console.log("total count",total);
				console.log("totAdmins count",totAdmins); */


 				if (clients == 0) {
					//check if user reconnects in 4 seconds 
					setTimeout(function () {
						if (io.sockets.adapter.rooms[socket.roomID])
							total = io.sockets.adapter.rooms[socket.roomID]["length"];
						//totAdmins = Object.keys(admins).length;
						console.log("total <=totAdmins",total,totAdmins);

						if (total <= totAdmins) {
							/*mail.sendMail({
								roomID: socket.roomID,
								MsgLen: socket.TotalMsgLen,
								email: socket.userDetails
							});*/
							delete users[socket.roomID];
							socket.broadcast.to(socket.roomID).emit("User Disconnected", socket.roomID);
							_.each(admins, function (adminSocket) {
								adminSocket.leave(socket.roomID)
							});
							console.log("Application Running Here at disonnect  total<=totAdmins");

						}
					}, 4000);
				}
				console.log("disconnecting in socket.on disconnect 1");
				console.log("socket.handshake.addressaaa",socket.handshake.address);

			} else {
				if (socket.userDetails)
					/*mail.sendMail({
						roomID: socket.roomID,
						MsgLen: socket.TotalMsgLen,
						email: socket.userDetails
					});*/
					delete users[socket.roomID];
					console.log("socket.handshake.address",socket.handshake.address);


					
				console.log("disconnecting in socket.on disconnect2");
			}
		}
	});

	socket.on('poke admin', function (targetAdmin) {
		admins[targetAdmin].emit("poke admin", {})
	});

	socket.on('client ack', function () {
		for (adminSocket in admins) {
			if (!admins.hasOwnProperty(adminSocket)) {
				continue;
			}
			admins[adminSocket].emit("client ack", {})
		}
	});

	socket.on("more messages", function () {
		if (socket.MsgHistoryLen < 0) {
			dbFunctions.getMessages(socket.roomID, socket.MsgHistoryLen)
				.then(function (history) {
					history.splice(-1, 1)
					socket.emit('more chat history', {
						history: history
					});
				})
			socket.MsgHistoryLen += 10;
		}
	});
});

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