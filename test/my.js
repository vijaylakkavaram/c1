var Q = require('q');



var Connection = require('tedious').Connection;

var isolation=require('tedious').ISOLATON_LEVEL ; 

var Request = require('tedious').Request;
var result2;
var Promise = require('promise');

var config1 = {
	userName: 'datapullman',
	password: 'system', 
	server: '192.168.1.26',
	
	options: {

		 // encrypt: true, /*If you are connecting to a Microsoft Azure SQL database, you will need this

		database: 'Live_Chat1'

	},
	 
}
var connection = new Connection(config1);


 connection.on('connect', function (err,result) {
	if (err) {
        console.log(err);
 
    }
    
	else {
        console.log("Connected");
        
         
	}

});

setTimeout(() => {
    

var promise = new Promise(function (resolve, reject) {
    var request = new Request('New_Get_Ticket_color', function(err, res) {
        if (err) {
            if (err) reject(err);

            console.error(err);
            return;
        }
else{

    

    resolve(res);
    console.log('res',res);

 }

        //console.log('rowCount: ' + rowCount);

        //release the connection back to the pool when finished
     });
 	request.on('row', function (columns) {
		columns.forEach(function (column) {
			if (column.value === null) {
				console.log('NULL');
			} else {
				result2 += column.value + " ";
			}
		});

        console.log(result2);
	});

    connection.execSql(request);


    var promise1 = new Promise(function (resolve, reject) {
        var request = new Request('New_Get_Ticket_color', function(err, res) {
            if (err) {
                if (err) reject(err);
    
                console.error(err);
                return;
            }
    else{
    
        
    
        resolve(res);
        console.log('res',res);
    
     }
    
            //console.log('rowCount: ' + rowCount);
    
            //release the connection back to the pool when finished
         });
    
        request.on('row', function (columns) {
            columns.forEach(function (column) {
                if (column.value === null) {
                    console.log('NULL');
                } else {
                    result2 += column.value + " ";
                }
            });
    
            console.log('chescking 2',result2);
        });
    
        connection.execSql(request);
    })
  });
}, 100);
/*   setTimeout(() => {
    //console.log('err in  promise ',promise);
  }, 100);   */
/* 
setTimeout(() => {
    Get_ticket_color()
}, 100); */

 /*function Get_ticket_color()
{
    //use the connection as normal
    var request = new Request('New_Get_Ticket_color', function(err, rowCount) {
        if (err) {
 
            console.error(err);
            return;
        }
else{

    


 }

        //console.log('rowCount: ' + rowCount);

        //release the connection back to the pool when finished
     });

	request.on('row', function (columns) {
		columns.forEach(function (column) {
			if (column.value === null) {
				console.log('NULL');
			} else {
				result2 += column.value + " ";
			}
		});

        console.log(result2);
	});

    connection.execSql(request);


}
/* 

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
 */