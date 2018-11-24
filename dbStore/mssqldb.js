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
 var ConnectionPool = require('tedious-connection-pool');
var TYPES = require('tedious').TYPES;
var Q = require('q');


 sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully by sequelieze');

})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


var Request = require('tedious').Request;
var result2='';
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
pool.on('error', function(err,result) {
  if(err){

    console.log('error in connecting')
  }
  else{

    console.error(err);
  }

});

exports.get_ticket_color=function Get_ticket_color()
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

    console.log(result2)
	});

    connection.execSql(request);
});

}
 var ip2;
var Usr_Port;
var ssn;
var Usr_ID;
exports.New_ticket_creation=function New_Ticket_Creation(ip2, Usr_Port, ssn) {
  sequelize
  .query('exec New_Ticket_Creation @Usr_IP_Address='+ip2+', @Usr_Port_Id='+Usr_Port+',  @Session_Id='+ssn+';')
  //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
  .spread(myTableRows=> {
     console.log('Ticket Creation data',myTableRows)
   console.log('a2 first',a2);

  })
  .catch(function(err){
    console.log("err",err);
  })
  }
var p_userid1;

  exports.Get_Usr_Id=function Get_Usr_Id(clientip1)
  {
    sequelize
  .query(
    'SELECT Usr_Id,Usr_IP_address FROM LiveChatUser_Ticket_Creation_History WHERE Usr_IP_address = ?',
    { raw: true, replacements: [clientip1]}
  )
  .spread(projects => {
    console.log('projects in get_usr_id',projects);
   // console.log(projects[0][0]['Usr_Id'])
   Usr_Id=0;
   p_userid1=0;
   //main_admin="";

   Usr_Id=projects[0]['Usr_Id']
   p_userid1=projects[0]['Usr_IP_address']
  console.log('Usr_Id and P_userId1',Usr_Id,p_userid1);

return Usr_ID;

  // console.log('userid in',Usr_Id)
   })
   .catch(error=>{

    console.log('err',error)

   })
  }
