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
var Connection = require('tedious').Connection
var isolation=require('tedious').ISOLATON_LEVEL ;
var Admin_Login_Port = config.web_port;  //
var Request = require('tedious').Request
var loginc=0;
var reg=0;
var ConnectionPool = require('tedious-connection-pool');
var Request = require('tedious').Request;

var TYPES = require('tedious').TYPES;
var async = require('async');
var connectionsLimit = 6
var result = "";
const os = require('os');
var totAdmins=1;
var io1 = os.networkInterfaces();
var result_ip;
var my_result = "";

var ids='';
var ids1=[];
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
var tr=[];
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
var count=0;
var count1=0;
var count2=0;
var count3=0;
var count4=0;
var count5=0;
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
var c_roomId=0;
var roomID;
var check_roomId=0;
var Usr_Port = config.web_port;
var Admin_Login_Ip;
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
var Admin_ID=0;
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully by sequelieze');

})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
var aa="";
var bb="";
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
    min:10,
    max:50,
    log: false
};
var pool = new ConnectionPool(poolConfig, connectionConfig);
pool.on('error', function(err) {
    console.error(err);
});
//Get_ticket_color()
function Get_ticket_color()
{
pool.acquire(function (err, connection) {
    if (err) {

        console.error(err);
        return;
    }
    var request = new Request('New_Get_Ticket_color', function(err, rowCount) {
        if (err) {
            console.error(err);
            return;
        }
else{
	connection.release();
}        connection.release();
    });

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
});
}
dbFunctions.ConnectToRedis(startApp);
app.get('/', function (req, res) {
	 res.sendFile(__dirname + '/views/client.html');
	   ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log("client page",req.ip);
 	if (ip.substr(0, 7) == "::ffff:") {
		ip = ip.substr(7)
 		ip2=ip.split('.').join("");
		console.log("ip2",ip2);
	  }
	  //it will selects the usr_Id
	  setTimeout(() => {
	if(ip2!=0){
		setTimeout(() => {
			jcheckip(ip2);

		}, 10);
	}
}, 50);
setTimeout(() => {
	if(ip2==my1[0]){
		console.log('Ticket already created for this user from mssql db');

	}
	else{
		setTimeout(() => {
			New_Ticket_Creation(ip2, config.web_port, ssn);
		}, 100);
	}
}, 100);
	function jcheckip(ip2) {
		sequelize
	.query(
	  'select usr_ip_address  from LiveChatUser_Ticket_Creation_History where Usr_IP_address=?;',
	  { raw: true, replacements: [ip2]}
	)
	.spread(projects => {
	  console.log('projects',projects)
/* 	my1[0]="";
	p_userid=""; */
	  my1[0]=projects[0]['usr_ip_address']
	  //p_userid=projects[0]['Usr_id']
 	  console.log('my1[0]',my1[0]);
 	 /*  console.log(projects[0][0]['Usr_Id'])
	  Usr_Id=projects[0][0]['Usr_Id']
	  console.log('userid in',Usr_Id) */
	})
	.catch(function(err){
		if(err){

			console.log(err	);
		}
	})
	}
		function New_Ticket_Creation(ip2, Usr_Port, ssn) {00
			sequelize
			.query('exec New_Ticket_Creation @Usr_IP_Address='+ip2+', @Usr_Port_Id='+Usr_Port+',  @Session_Id='+ssn+';')
			//{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
			.spread(myTableRows=> {
			   console.log('Ticket Creation data',myTableRows)
 			// console.log('a2 first',a2);

			})
			.catch(function(err){
			  console.log("err",err);
			})
			}
function get_admin_name(p_userid) {
	pool.acquire(function (err, connection) {
		if (err) {
			console.error(err);
			return;
		}
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
			}
		});

		my2 = cmy.split(" ", 1);
		main_admin=my2[0];
		console.log("main_admin in checking ", main_admin);

	});
	request.addParameter('p_userid', TYPES.VarChar, p_userid);

	// Check how many rows were inserted
	request.on('doneInProc', function (rowCount, more) {
		//			console.log(rowCount + ' row(s) inserted');
	});
	connection.callProcedure(request);
})
}

});
app.get('/Registration', function (req, res) {
	res.sendFile(__dirname + '/views/Reg.html');
	console.log("signup page Displayed");
});
app.get('/ping', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', config.parentDomain);
	res.send("OK");
});



/* app.post('/logins', function (req, res) {
	res.sendFile(__dirname + '/views/logins.html');
	console.log(req.body.username);
}); */

function Insert(firstname, lastname, username, password, gender, email, address, phonenumber, callback)
{
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
	connection.callProcedure(request);
})
}
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.bodyParser());
var login_true=0;
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/adminURL1', function (req, res) {
	res.sendFile(__dirname + '/views/adminURL1.html');
	 console.log('login ')
	});

app.post('/adminURL1', function (req, res) {
	//res.sendFile(__dirname + '/views/admin.html');
console.log('req.body.firstname',req.body.firstname)
var name=req.body.username;
var A_Id=0;
check_Register_name(name);

function check_Register_name(name) {
	sequelize
.query(
  'select Admin_Id  from Admin_Registration where Admin_Name=?;',
  { raw: true, replacements: [name]}
)
.spread(projects => {
  console.log('projects',projects)
  A_Id=projects[0]['Admin_Id'];
  console.log('A_Id',A_Id)
})
.catch(function(err){
	if(err){
		console.log(err	);
	}
})
}
if(A_Id==0)
setTimeout(() => {
	Insert(req.body.firstname, req.body.lastname, req.body.username, req.body.password, req.body.gender, req.body.email, req.body.address, req.body.phonenumber);

}, 1000);



	function Insert(firstname, lastname, username, password, gender, email, address, phonenumber, callback) {

		pool.acquire(function (err, connection) {
			if (err) {
				console.error(err);
				return;
			}


		request = new Request('Get_Admin_Registration', function (err) {
			if (err) {
				console.log(err);
				var rr = err['message'];

				if (rr != null) {
					//res.redirect('/Registration')
					console.log('testing rr', rr);
					res.write('<html>')
				res.write('<body bgcolor=#88c7ec>')
				res.write('	<img src="http://www.chandusoft.com/images/logo/chandusoft_logo.png" alt="chandusoft logo">')
				res.write('<h1>Hi '+rr+'</h1>')
				res.write('<h2>Please Register again<br>  again</h2>')
				res.write('<a href="http://localhost:8124/Registration">Registration</a><br>')
				res.write('<a href="http://localhost:8124/adminURL">Login</a>')
				res.write('</body>')
				res.write('</html>')
				res.end();

				req.body.username='';
 				} else {
					socket.emit('login', {
						login: false,
						err: "Invalid Login"
					})
				}
			}
			else{
				res.write('<html>')
				res.write('<body bgcolor=#88c7ec>')
				res.write('	<img src="http://www.chandusoft.com/images/logo/chandusoft_logo.png" alt="chandusoft logo">')
				res.write('<h1>Hi you are successfully registered as a agent in the chat_application your username is '+req.body.username+'</h1>')
				res.write('<h2>click login to enter chat_application</h2>')
				res.write('<a href="http://localhost:8124/Registration">Registration</a><br>')
				res.write('<a href="http://localhost:8124/adminURL">Login</a>')
				res.write('</body>')
				res.write('</html>')
				res.end()
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

		request.on('doneInProc', function (rowCount, more) {
			console.log(rowCount + ' row(s) inserted');
			console.log("Inserting into Table for Registration...");
			reg++;

		});
		connection.callProcedure(request);
	})
	}
});

app.get(config.admin_url, function (req, res) {
	res.sendFile(__dirname + '/views/admin.html');
	var ip1 = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	Admin_Login_Ip = ip1.split("::");
	console.log("This is at COnfig.admin url ");
});

console.log("Inserting into Table for Login");
io.on('connection', function (socket) {
	//Login Admin
 	socket.on('login', function (data) {
		var a = data['admin'];
		var b = data['password'];
		var Admin_Login_Status="";
setTimeout(() => {
	login_check(a)
}, 10);
		function login_check(a)
		{
			sequelize
		.query(
		  'SELECT Admin_Login_Status FROM Admin_Login WHERE Admin_Name = ?',
		  { raw: true, replacements: [a]}
		)
		.spread(projects => {
		//  console.log('projects in get_usr_id',projects);
		Admin_Login_Status=projects[0]['Admin_Login_Status']
		console.log(Admin_Login_Status)
		// console.log('userid in',Usr_Id)
		 })
		 .catch(error=>{
			console.log('err',error)
		 })
		}
setTimeout(() => {
	if(Admin_Login_Status=='IN'){

		console.log('Already logged in')

		}
		else{
			Admin_Login(a, b, Admin_Login_Ip, Admin_Login_Port);

		}
}, 100);
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
	});


	//Init admin
	socket.on('add admin', function (data) {



		this.isAdmin = data.isAdmin;
		socket.username = data.admin;
		tr.push(socket.username)
	//	console.log("admin socket username",admins);
		_.each(admins, function (adminSocket) {
			adminSocket.emit("admin added", socket.username)
			socket.emit("admin added", adminSocket.username)
			console.log('add admin',socket.username,adminSocket.username)
		});
        admins[socket.username] = socket;
		var Admin_name=socket.username;
		admins[socket.username] = socket;
		console.log('username',socket.username,Admin_name)

		 // roomID=ids1[0];
		 ids1=[];ids='';



	setTimeout(() => {
		get_clients_room_id(Admin_name);


	}, 500);

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



setTimeout(() => {
	console.log('ids',ids1);
	//

//;

	setTimeout(() => {
	//
		if(ids1){

			for(var i=0;i<=ids1.length;i++){
				//var roomID=ids1[0]
		_.each(ids[i], function (roomID) {
			//console.log("users in existing after the admin logins",userSocket);
			dbFunctions.getMessages(roomID, 0)
				.then(function (history) {
					var len = history.length;
					console.log('history1',history,history[len-1]);
				var userSocket=history[len-1];
				//	var userSocket = users[history[len - 1]];
					history.splice(-1, 1);
					setTimeout(() => {
						console.log('main',ids1[i])

						if(socket.username==Admin_name)
						{
							setTimeout(() => {


								console.log('main',ids1[i])

								socket.join(userSocket);
								socket.emit("New Client", {
									roomID: userSocket,
									history: history,
									details: socket.userDetails,
									justJoined: true
								}
								)


							}, 500);


						}
					}, 1000);




			}	)	})}
		}

	//}
		},1500);
	//
//}
}, 2500);


		if (Object.keys(users).length > 0) {
		//	console.log('users',users)
			_.each(users, function (userSocket) {
				dbFunctions.getMessages(userSocket.roomID, 0)
					.then(function (history) {
						var len = history.length;
						var userSocket = users[history[len - 1]];
						history.splice(-1, 1);
  					console.log('checking in the add  admin')
						if(adminSocket.username=='abcd')
						{
							socket.join(userSocket.roomID);
							socket.emit("New Client", {
								roomID: userSocket.roomID,
								history: history,
								details: userSocket.userDetails,
								justJoined: true
							})
						}
						console.log("len",len);
					})
			});

		}
	});
	 function user_IPaddress_roomID(c_roomId1,clientip1)

	 {
		 pool.acquire(function (err, connection) {
			 if (err) {
				 console.error(err);
				 return;
			 }

		 request = new Request('user_IPaddress_roomID', function (err) {
			 if (err) {
				 console.log('err',err);
			 }
			 else{
	 console.log('stored procedure executed completely')
				 connection.release();
			 }
		 }
		 );
		 request.addParameter('room_ID', TYPES.VarChar, socket.roomID);
		 request.addParameter('ip_address', TYPES.VarChar, clientip1);
		 // Check how many rows were inserted
		 request.on('doneInProc', function (rowCount, more) {
			 console.log(rowCount + ' row(s) inserted');
			 console.log("executing the user_ipaddress_roomId");
		 });
	 //	connection.beginTransaction  ()
		 connection.callProcedure(request);
	 //	connection.commitTransaction ()
	 })


	 }
/* 	 app.get('/transfer', function (req, res) {
		console.log('tr',tr)
		res.write('<html>')
		res.write('<body bgcolor=#88c7ec>')
		res.write('	<img src="http://www.chandusoft.com/images/logo/chandusoft_logo.png" alt="chandusoft logo">')
		res.write('<a href="">'+tr[0]+'</a><br>')
		res.write('</body>')
		res.write('</html>')
		res.end();
	});
 */

//Init user
	 	socket.on('add user', function (data) {
		socket.isAdmin = false;
	//	console.log("socket.handshake.address of client",socket.handshake.address);
		clientip=socket.handshake.address;
				if (clientip.substr(0, 7) == "::ffff:") {
					clientip = clientip.substr(7)
				//	console.log("ip",clientip);
					clientip1=clientip.split('.').join("");
					p_userid1=0;
				//	console.log('clientip1 and p_userid1 in socket.handshake',clientip1,p_userid1);
				   }
/*
setTimeout(() => {
	if(clientip1){
		tc_ta(clientip1)
	}

}, 100);
 */

/*
function tc_ta(clientip1)
{
sequelize
.query(
  'SELECT room_Id FROM user_ip_room_ID WHERE ip_address = ?',
  { raw: true, replacements: [clientip1]}
)
.then(records => {


	check_roomId =records[0][0]['room_Id'];

    console.log('check_roomID in tc_ta',check_roomId)
})}
setTimeout(() => {


}, 500); */
function Get_Usr_Id(clientip1)
{
sequelize
.query(
  'SELECT Usr_Id,Usr_IP_address FROM LiveChatUser_Ticket_Creation_History WHERE Usr_IP_address = ?',
  { raw: true, replacements: [clientip1]}
)
.spread(projects => {
 // console.log('projects in get_usr_id',projects);
 // console.log(projects[0][0]['Usr_Id'])
 Usr_Id=0;
 p_userid1=0;
 //main_admin="";
 Usr_Id=projects[0]['Usr_Id']
 p_userid1=projects[0]['Usr_IP_address']
console.log('Usr_Id and P_userId1',Usr_Id,p_userid1);
// console.log('userid in',Usr_Id)
 })
 .catch(error=>{
	console.log('err',error)
 })
}
/*
function get_a_user_Admin_id(Usr_Id)
{
sequelize
.query(
  'SELECT Admin_Id  from  LiveChatUser_Ticket_Assignment WHERE Usr_Id = ?',
  { raw: true, replacements: [Usr_Id]}
)
.spread(projects => {
  console.log('projects in get_usr_id',projects);
 // console.log(projects[0][0]['Usr_Id'])


 Admin_ID=projects[0]['Admin_Id'];
 console.log('Admin_id',Admin_ID)

 })
 .catch(error=>{
	console.log('err',error)
 })
} */
if(clientip1)
{
	setTimeout(() => {
		Get_Usr_Id(clientip1)
	}, 10);
}
		/* setTimeout(() => {
	if(clientip1!=p_userid1){
		setTimeout(() => {
			Get_Usr_Id(clientip1)
		}, 10);
	   }
	   else{
console.log('No tickets are there')
	   }
}, 20); */

/* setTimeout(() => {
	console.log('just before assignment checking the Usr_ID',Usr_Id)
			if(Usr_Id!=0)
			{
			//	setTimeout(() => {
				get_a_user_Admin_id(Usr_Id)
					//}, 20);
				 }
			   else{
	   console.log('No Tickets are there')
			   }
			}, 40); */
setTimeout(() => {
console.log('just before assignment checking the Usr_ID',Usr_Id)
		if(Usr_Id!=0)//usr_Id is present
		{
 			New_Ticket_Assignment(Usr_Id);
  console.log('after executing the ticket assignment usr_id',Usr_Id);
			 }
		   else{
		//	main_admin='';
			console.log('This is Duplicate window... you have opened a another window with same ip')
		   }
		}, 40);

		function New_Ticket_Assignment(Usr_Id) {
			sequelize
				.query('exec New_Ticket_Assignment @Usr_Id='+Usr_Id+';')
				//{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
				.spread(records=>{
			//	console.log(records[0]['To_Id']);
				main_admin=records[0]['To_Id']
				Usr_Id=0;
 				//clientip1=0;
				Admin_Id=0;
					console.log('Usr_Id in assignment and main_admin',Usr_Id,main_admin);
				 //console.log('a2  in' ,a2);
				 })
				.catch(function(err){
				  console.log("err",err);
			})
			 }
	if (data.isNewUser) {
		data.roomID = uuid.v4();
		dbFunctions.setDetails(data);
		socket.emit("roomID", data.roomID);
	//	console.log('data is new user and data,roomId',data.roomID)
	roomID=data.roomID;

	}
	socket.roomID = data.roomID;
	/* 	else{

setTimeout(() => {
	if(check_roomId!=0){
		//check_roomId value is present

socket.room_Id=check_roomId;
console.log('check_roomId in checking condition',check_roomId)

}
else{			//check_roomId is null

socket.roomID = data.roomID;
console.log('In else socket.roomID',socket.roomID)
}
},1000);
		} */
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
		console.log('!users[socket.roomId]')
	}
	//Fetch message history
	roomID=socket.roomID;

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
			setTimeout(() => {
						if (newUser) {
							console.log('newUser')
				socket.emit('log message', "Hello User, How can I help you?");
				//Make all available admins join this users room.
					_.each(admins, function (adminSocket) {
						//console.log(admins)
						console.log('adminSocket.username',adminSocket.username)
	roomID=socket.roomID;
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
		 	setTimeout(() => {
							Session_Id_Name(roomID,main_admin)
						}, 200);
						console.log('socket.roomid',socket.roomID)
 					/* 	setTimeout(() => {
							user_IPaddress_roomID(check_roomId,clientip1)
						}, 100); */
					}
				});
 			}
		},200);
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

function Session_Id_Name(roomID,main_admin)
		{
			pool.acquire(function (err, connection) {
				if (err) {
					console.error(err);
					return;
				}
			//use the connection as normal
			var request = new Request('Sessio_Id_Name', function(err, rowCount) {
				if (err) {
					console.error(err);
					return;
				}
				else{
					connection.release();
				}
			});
			request.on('row', function (columns) {
				columns.forEach(function (column) {
					if (column.value === null) {
						console.log('NULL');
					} else {
						result2 += column.value + " "
					}
				});
				console.log(result2);
			});
			request.addParameter('room_Id', TYPES.VarChar, roomID);
			request.addParameter('Admin_Name', TYPES.VarChar, main_admin);
			request.on('doneInProc', function (rowCount, more) {
				//			console.log(rowCount + ' row(s) inserted');
			});

			connection.callProcedure(request);
		})
		}

	var now ='yes';
	var n_check=0;
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
		console.log('k1 now', );
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
					else {
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
				});
				connection.execSql(request);
			})
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
	socket.on('logout',function (data){
		 console.log(data)
	})
	socket.on('Transfer Ticket',function (data){
		console.log(data)
		var a_id=data['room_Id']
		var main_admin1=data['username'];

		dbFunctions.getMessages(a_id, 0)
		.then(function (history) {
			history.splice(-1, 1)
			socket.emit('chat history', {
				history: history,
				getMore: false
			});

			setTimeout(() => {
							console.log('newUser')
				socket.emit('log message', "Hello User, How can I help you?");

					_.each(admins, function (adminSocket) {
						console.log('adminSocket.username',adminSocket.username)
					if (adminSocket.username == main_admin1) {
						console.log("near join", main_admin1);
						socket.emit('log message', "Hello User, How can I help you?");
						adminSocket.join(socket.roomID);
						adminSocket.emit("New Client", {
							roomID: a_id,
							history: history,
							details: socket.userDetails,
							justJoined: false
						})
				 	setTimeout(() => {
							Session_Id_Name(roomID,main_admin)

						}, 200);
						console.log('socket.roomid',socket.roomID)
 					/* 	setTimeout(() => {
							user_IPaddress_roomID(check_roomId,clientip1)

						}, 100); */
					}
				});

		},200);
		})

   })
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
	if(isSuccess) {
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