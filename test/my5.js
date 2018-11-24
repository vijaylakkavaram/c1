

var sql=require('mssql')
/* var config = {
    userName: 'datapullman',
    password: 'system',
    server: '127.0.0.1',
    options: { rowCollectionOnDone: true }
};

 */

/* var config = new sql.ConnectionPool({
    user: 'datapullman',
    password: 'system',
    server: 'testserver1',
    database: 'Live_Chat1'
}) */
var Connection = require('tedious').Connection;
var ConnectionPool = require('tedious-connection-pool');
var result2;
var isolation=require('tedious').ISOLATON_LEVEL ;

var Request = require('tedious').Request;


/* var connection = new sql.Connection(config, function(err) {
    var transaction = new sql.Transaction(connection);
    transaction.begin(function(err) {
        console.log('begin transaction');
    });
}) */

/* pool.connect(err => {
    // ...
    console.log('mssql db connected');



}) */


/*
working

 sql.connect(config).then(pool => {
    // Query

    return pool.request()
    .input('input_parameter', sql.Int, 1)
    .query('select * from Admin_Registration where Admin_Id = @input_parameter')
}).then(result => {
    console.dir(result['recordset'])
    var aa=[];
    aa=result['recordset'];
    console.log('aa',aa[0]);
    var aa1=[];
    aa1=aa[0];
    console.log(aa1['Reg_Date']);
}) */
var a2;
/* const pool = new sql.ConnectionPool({
    user: '...',
    password: '...',
    server: 'localhost',
    database: '...'
}) */
 /*
sql.connect(config).then(() => {
    return sql.query`select * from Admin_Registration where Admin_Id = ${2}`
}).then(result => {
    console.dir(result['recordset'][0]['Admin_Id'])
a=result['recordset'][0]['Admin_Id']
//console.log('a',a);
a2=a;
console.log('a2 in db',a2);
}).catch(err => {
    // ... error checks
})

sql.on('error', err => {
    // ... error handler
})


sql.connect(config).then(() => {
    return sql.query`select * from Admin_Registration where Admin_Id = ${2}`
}).then(result => {
    console.dir(result['recordset'][0]['Admin_Id'])
a=result['recordset'][0]['Admin_Id']
//console.log('a',a);
a2=a;
console.log('a2 in db',a2);
}).catch(err => {
    // ... error checks
})

sql.on('error', err => {
    // ... error handler
})


sql.connect(config).then(() => {
    return sql.query`select * from Admin_Registration where Admin_Id = ${2}`
}).then(result => {
    console.dir(result['recordset'][0]['Admin_Id'])
a=result['recordset'][0]['Admin_Id']
//console.log('a',a);
a2=a;
console.log('a2 in db',a2);
}).catch(err => {

    // ... error checks
})

sql.on('error', err => {
    // ... error handler
})




setTimeout(() => {
    if(a2!=0){

console.log('a2 in the if block',a2);
}

}, 100);
*/

/* const pool = new sql.ConnectionPool({
    user: 'datapullman',
    password: 'system',
    server: 'localhost',
    database: 'Live_Chat1'
})

const transaction = new sql.Transaction(pool)

transaction.begin(err => {
    // ... error checks

    const request = new sql.Request(transaction)
    request.query('select * from Admin_Registration', (err, result) => {
        console.log(result);
        // ... error checks

        transaction.commit(err => {
            // ... error checks

            console.log("Transaction committed.")
        })
    })
}) */
//pool.close()
/* var max = 1;

for (var i = 0; i < max; i++) {
    var connection = new Connection(config);

    function executeStatement() {
        request = new Request("select 42, 'hello world'", function (err, rowCount) {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount + ' rows');
            }
        });

        request.on('row', function (columns) {
            columns.forEach(function (column) {
                console.log(column.value);
            });
        });

        request.on('doneInProc', function (rowCount, more, rows) {
        });

        request.on('doneProc', function (rowCount, more, rows) {
            console.log('statement completed!')
            connection.execSql(request);
        });

        request.on('returnStatus', function (status) {
            console.log('statement completed!')
        });

        connection.execSql(request);
    }

    connection.on('connect', function (err) {
        // If no error, then good to go...
        executeStatement();
    });
}
console.log('Done!'); */




/*
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


	});

		connection.execSql(request);
}
*/
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
    min: 5,
    max:50,
    log: false
};


var pool = new ConnectionPool(poolConfig, connectionConfig);

pool.on('error', function(err) {
    console.error(err);
});



Get_ticket_color()
Get_ticket_color()

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
        console.log(result2);



	});

    connection.execSql(request);
});
}








/*
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

connection.on('connect', function (err) {
    if (err) {
        console.log(err); // replace with your code
        return;
    }
    else{

        console.log("connected mssql db");
    }
    })



 connection.beginTransaction("New_Get_Ticket_color", function( err,results) {
 if (err) {


 console.log("Error dropping Stored Procedure");
 return;
 }
 connection.queryRaw("New_Get_Ticket_color",function(err,results){
if(err){

    console.log('err');
}
console.log(results)


 })

for (var i = 0; i < 10; i++) {
 console.log(results.rows[i]);
 result+= results.rows[i] + "\n";
 }



 console.log("Transaction Started");

 });
  */
    /*
var statements = ["select * from Admin_Registration","select * from Admin_Registration"];

var transaction = new sql.Transaction(connection);
transaction.begin(function(err) {
    // ... error checks

    async.mapSeries(statements, function(statement, next) {
        var request = new sql.Request(transaction);
        request.query(statement, next);
    }, function(err, results) {
     /*    if(err){

            console.log("results",err)
        }

        // ... error checks

        transaction.commit(function(err, recordset) {
            // ... error checks

            console.log("Transaction commited.");
        });
    });
});
 */

