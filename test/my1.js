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
var result2;
var my2=[];
var main_admin;
var callback;
var p_userid;
var Usr_Id;
var q=0;
var async = require('async');

var config1 = {
	userName: 'datapullman',  
	password: 'system',  
	server: 'localhost',
	options: {
		// encrypt: true, /*If you are connecting to a Microsoft Azure SQL database, you will need this
		database: 'Live_Chat1'
	}
} 

var connection = new Connection(config1);  
  
connection.on('connect', function(err) {  
    if (err) {
        console.log(err);
    }  
    else    {
		console.log("Connected");
	}

});

 
 


Get_ticket_color();

function Get_ticket_color() {
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

		//console.log('result data', result2);

	});

//	connection.beginTransaction  () ;
		connection.execSql(request);
//		connection.commitTransaction (callback,"login") ;
}

 
/* 
var ConnectionPool = require('tedious-connection-pool');
var Request = require('tedious').Request;

var poolConfig = {
    min: 2,
    max: 10,
    log: true
};

 var connectionConfig = {
    userName: 'login',
    password: 'password',
    server: 'localhost'
};
 

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
var pool = new ConnectionPool(poolConfig, connectionConfig);

pool.on('error', function(err) {
    console.error(err);
});

//acquire a connection
var a=1;

if(a>0){
    New_Get_Ticket_color();
    console.log("starting")


}
//New_Get_Ticket_color();
function New_Get_Ticket_color(){



pool.acquire(function (err, connection) {
    if (err) {
        console.error(err);
        return;
    }
    else{
        console.log("starting2")

    console.log("connection released in else part");    
    }

    //use the connection as normal
    var request = new Request('New_Get_Ticket_color', function(err, rowCount) {
        if (err) {
            console.error(err);
            return;
        }
else{
    console.log("starting3")

    connection.release();    
    console.log("connection released");
}
        //console.log('rowCount: ' + rowCount);

        //release the connection back to the pool when finished
        connection.release();
    });

    request.on('row', function(columns) {
        console.log('value: ' + columns[0].value);
        console.log("starting4")

        q++;
     //   pool.release();

     });
request.o
    connection.execSql(request);
    console.log("starting5")

   
});

} 


/* if(q>0){
   

     console.log("connections are closed");



} 
 

ip="192.168.1.26";
//checking_ticket(ip);
    
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


        });

 

    });

    // Execute SQL statement
//	connection.beginTransaction  () ;
    connection.execSql(request);
//	connection.commitTransaction () 


})




    } 
    if(p_userid>0){

        pool.release();



    } */