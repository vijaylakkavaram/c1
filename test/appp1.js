const { newFunction } = require("./newFunction");

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
var ip2="";
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
exports.chat = chat;
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

/*


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


	});
	request1.addParameter('Usr_Id', TYPES.Int, Usr_Id);
	// Check how many rows were inserted

 	connection.callProcedure(request1);
 })

}*//* 
check(aa);

function check(aa) {
	

for (let index = 0; index < m.length; index++) {
	const element = array[index];


	
	
}
} */

app.get('/', function (req, res) {
	 res.sendFile(__dirname + '/views/client.html');
	   ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log("client page",req.ip);
 	if (ip.substr(0, 7) == "::ffff:") {
		ip = ip.substr(7)
		ip2="";
		ip2=ip.split('.').join("");
		console.log("ip",ip2);

	  }

 if(ip2!=0){

	if(count1!=0){
		New_Ticket_Creation(ip2, config.web_port, ssn, datetime);
		a++;


		count1++;
		console.log('count1',count1);
	}

 }
	  
	
	  //it will selects the usr_Id 

	  function jcheckip(ip2) {
		sequelize
	.query(
	  'select usr_ip_address ,Usr_id from LiveChatUser_Ticket_Creation_History where Usr_IP_address=?;',
	  { raw: true, replacements: [ip2]}
	)
	.spread(projects => {
	  //console.log('projects',projects[0]['usr_ip_address'])
	my1[0]="";
	p_userid="";
	  my1[0]=projects[0]['usr_ip_address']
	  p_userid=projects[0]['Usr_id']
	  console.log('user_ip & user_id',my1[0],p_userid);
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

/* 	function checking_ticket(ip2) {  
		pool.acquire(function (err, connection) {
			if (err) {
				console.error(err);
				return;
			}
	//	console.log('Reading rows from the Table...');
		// Read all rows from table
		request = new Request(
			'select usr_ip_address ,Usr_id from LiveChatUser_Ticket_Creation_History where Usr_IP_address=@ip2;',
			function (err) {
				if (err) {
					console.log(err);
				}
				else{


					connection.release();

				}
			});
		request.addParameter('ip2', TYPES.VarChar, ip2);
		// Print the rows read
		my = "";
		p_userid="";
		request.on('row', function (columns) {
			columns.forEach(function (column) {
				if (column.value === null) {
					console.log('NULL');
				} else {
					my += column.value + " ";
				//	console.log("my", my);

				}

				my1 = my.split(" ", 2);
				p_userid=my1[1];
				console.log("ip address in checking ticket function", my1[0]);
				console.log("user_id in checking ticket function", p_userid);


			});
		});

		// Execute SQL statement
	//	connection.beginTransaction  () ;
		connection.execSql(request);
	//	connection.commitTransaction () 

	})
	

	}  */


	function New_Ticket_Creation(ip2, Usr_Port, ssn) {
		sequelize
		.query('exec New_Ticket_Creation @Usr_IP_Address='+ip2+', @Usr_Port_Id='+Usr_Port+',  @Session_Id='+ssn+';')
		//{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
		.spread(myTableRows=> {
		   console.log('Ticket Creation data',myTableRows)
		 a2++;
		// console.log('a2 first',a2);
 		
		})  
		.catch(function(err){
		  console.log("err",err);
		})  
		}





		/* 		if (ip2 != 0) {
					setTimeout(function () {

						jcheckip(ip2)
					}, 50)

				}
				else{


					console.log('checking ticket is not executing');
				}


		//		setTimeout(function () {
			
				//if (my1[0] !=0) {

					if (ip2 != my1[0])
					 {

						setTimeout(function () {

  							New_Ticket_Creation(ip2, config.web_port, ssn, datetime);
							a++;

						console.log("First Time Ticket going to be created");
					}, 100)

					}
					else {
						console.log("oh my god Ticket already created");
						a1++;
					}
			//	}
				else{

					console.log('In checking ticket out put my is null');
				} 
		//	}, 100)
			
			i++; */
		


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
				//console.log("cmy", cmy);
			}
		});

	//	console.log("my 2", my2);
		my2 = cmy.split(" ", 1);
		main_admin=my2[0];
		console.log("main_admin in checking ", main_admin);

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
/* 

setTimeout(function(){
if(a1>2){
	console.log("just  checking user_id  before the checking_adminid in get_admin_name",p_userid );
	get_admin_name(p_userid);
}
},200) */
/*
function jcheckip(ip2) {
	sequelize
.query(
  'SELECT Usr_Id FROM LiveChatUser_Ticket_Creation WHERE Usr_IP_address = ?',
  { raw: true, replacements: [ip2]}
)
.then(projects => {
  console.log(projects[0][0]['Usr_Id'])
  Usr_Id=projects[0][0]['Usr_Id']
  console.log('userid in',Usr_Id)
})
} */
});




















app.get('/Registration', function (req, res) {
	res.sendFile(__dirname + '/views/Reg.html');
	console.log("Registration page Displayed");
});
app.get('/ping', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', config.parentDomain);
	res.send("OK");
});
 


/* app.post('/logins', function (req, res) {
	res.sendFile(__dirname + '/views/logins.html');
	console.log(req.body.username);

}); */

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



//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.bodyParser());


var login_true=0;

/*
app.post('/adminURL', function (req, res) {
console.log("login",req.body.username,req.body.password);
aa=req.body.username;
bb=req.body.password;
Admin_Login_Ip=req.ip;
console.log('a,b',aa,bb);
if(req.body.username!="" && req.body.password!="")
{
	console.log('if')//if input given control comes here
	Admin_Login(aa, bb, Admin_Login_Ip, Admin_Login_Port);
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
				//	res.redirect(req.adminURL)

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
				login_true++;
				res.sendFile(__dirname + '/views/admin.html');

			 	socket.emit('login', {
					login: true
				}); 


			}
			connection.release();
	
	
		});
		request.addParameter('Admin_Name', TYPES.VarChar, aa);
		request.addParameter('Pass_Word', TYPES.VarChar, bb);
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
	







}else{
	console.log('else')


}

	//Insert(req.body.firstname, req.body.lastname, req.body.username, req.body.password, req.body.gender, req.body.email, req.body.address, req.body.phonenumber);

});*/
app.get(config.admin_url, function (req, res) {
	res.sendFile(__dirname + '/views/admin.html');
	var ip1 = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	Admin_Login_Ip = ip1.split("::");
	console.log("This is at COnfig.admin url ");
});

app.use(express.static(__dirname + '/public'));


				console.log("Inserting into Table for Login");

io.on('connection', function (socket) {
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




	}); 

	app.get('/login', function (req, res) {	
		res.sendFile(__dirname + '/views/login.html');
		console.log("Login page displayed");
	
	});






	//Init admin
	socket.on('add admin', function (data) {
		this.isAdmin = data.isAdmin;
		socket.username = data.admin;
	//	console.log("admin socket username",admins);
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

//Init user
	 	socket.on('add user', function (data) {
		socket.isAdmin = false;
	//	console.log("socket.handshake.address of client",socket.handshake.address);
		clientip=socket.handshake.address;
				if (clientip.substr(0, 7) == "::ffff:") {
					clientip = clientip.substr(7)
				//	console.log("ip",clientip);
					clientip1=clientip.split('.').join("");
					console.log('clientip1',clientip1);
				   }
		if(count!=0){
count++;
console.log('count',count);
	Get_Usr_Id(clientip1)
		}
		else{


			//console.log('No tickets are there')
		}

		function Get_Usr_Id(clientip1)
		{   
		  sequelize
		.query(
		  'SELECT Usr_Id,Usr_IP_address FROM LiveChatUser_Ticket_Creation WHERE Usr_IP_address = ?',
		  { raw: true, replacements: [clientip1]}
		)
		.spread(projects => {
		  console.log(projects[0]['Usr_Id']);
		 // console.log(projects[0][0]['Usr_Id'])
		 Usr_Id=0;
		 p_userid1=0;
		 Usr_Id=projects[0]['Usr_Id']
		 p_userid1=projects[0]['Usr_Ip_address']

		// console.log('userid in',Usr_Id) 
 		})
	}



	/* 	if(count1!=0){
		 check1(Usr_Id)
		 console.log('count1',count1);
 		count1++;
		
		}

		function check1(Usr_Id)
		{   
	
		 sequelize
		 .query( 'SELECT Admin_Id FROM LiveChatUser_Ticket_Assignment WHERE Usr_Id = ?',
		 
		   { raw: true, replacements: [Usr_Id]}
		 )
		 .spread(projects => { 
		   //console.log(projects)
		   console.log('Admin_Id in result',projects[0]['Admin_Id']); 
		   Admin_Id=projects[0]['Admin_Id'] 
		  
		 })

		 .catch(function(err){
		   if(err)
		  
		{
		
		
		
		   //Admin_Id=0;
		  ///  console.log(err)
		console.log('admin_ID in catch block',Admin_Id)
		  }
		
		
		 })
 	
		  
		} */

	
		   console.log('a2 second',a2);
 
/* 	function clickip(clientip1) {
	sequelize	 

		 .query( 'SELECT Admin_Id FROM LiveChatUser_Ticket_Assignment_History WHERE Usr_Id = ?',
  { raw: true, replacements: [clientip1]}
)
.then(projects => {
	console.log('Admin_Id in result',projects[0]['Admin_Id']); 
	Admin_Id1=projects[0]['Admin_Id'] 
})
}   */	


				if(clientip1!=p_userid1){
 						console.log('Assignment_ID before assignment',Admin_Id);
					   New_Ticket_Assignment(Usr_Id); 
 					
						count2++;
						console.log('count2',count2)

				   console.log('First Assignment is going to be done')
		   }
		   else{

			   console.log('Assignment is Done ')
		   }


			

		
 		
		function New_Ticket_Assignment(Usr_Id) {
		sequelize
				.query('exec New_Ticket_Assignment @Usr_Id='+Usr_Id+';')
				//{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
				.spread(records=>{
				console.log(records[0]['To_Id']);
				main_admin=records[0]['To_Id']
				Usr_Id=0;
				clientip1=0;
				Admin_Id=0;
					console.log('Usr_Id in assignment',Usr_Id);
				 //console.log('a2  in' ,a2);
				 })  
				.catch(function(err){
				  console.log("err",err);
				})    

 			}


 
		


 
	 
 



	if (data.isNewUser) {
		console.log('main admin name after executing the ticket assignment',main_admin);

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
			setTimeout(() => {
				
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
		},150);


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