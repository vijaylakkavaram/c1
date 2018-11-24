const Sequelize = require('sequelize');
const sequelize = new Sequelize('Live_Chat1', 'datapullman', 'system', {
  host: 'localhost',
  dialect: 'mssql',
  operatorsAliases: false,
  multipleStatements: true,


  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
 });
 var Connection = require('tedious').Connection
var isolation=require('tedious').ISOLATON_LEVEL ;
var Request = require('tedious').Request
var ConnectionPool = require('tedious-connection-pool');
var TYPES = require('tedious').TYPES;
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
  if(err)
  console.error(err);
  else{
    console.log('connection establilshed')
  }
});


var a1="192168126";
var a8=1;
var a9=2018-08-03 ;
var a2;
var a;
var b;
var room_ID='a72da327-dcf2-41dd-90d8-0a4d015c0d2a'
/* Insert(room_ID,a1);

function Insert(room_ID,a1)
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
	request.addParameter('room_ID', TYPES.VarChar, room_ID);
	request.addParameter('ip_address', TYPES.VarChar, a1);


	// Check how many rows were inserted
	request.on('doneInProc', function (rowCount, more) {
		console.log(rowCount + ' row(s) inserted');
		console.log("executing the user_ipaddress_roomId");
	});
//	connection.beginTransaction  ()

	connection.callProcedure(request);
//	connection.commitTransaction ()

})


} */
var room_Id='';
var Usr_Id=0;
setTimeout(() => {
  tc_ta(a1)

}, 1000);
function tc_ta(a1)
{
sequelize
.query(
  'SELECT room_Id FROM user_ip_room_ID WHERE ip_address = ?',
  { raw: true, replacements: [a1]}
)
.then(records => {


  var a=records[0][0]['room_Id']
    console.log('a',a)
})}
/*  setTimeout(() => {
  sequelize
  .query('exec New_Ticket_Assignment @Usr_Id='+Usr_Id+';')
  //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
  .spread(records=>{
  console.log(records);
   //console.log('a2  in' ,a2);
   })
  .catch(function(err){
    console.log("err",err);
  })
 }, 800); */
