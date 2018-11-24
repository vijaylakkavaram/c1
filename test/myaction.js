
/*
const pool = new sql.ConnectionPool({
    user: '...',
    password: '...',
    server: 'localhost',
    database: '...'
})
 */
const sql = require('mssql')


var config = {
    server:'localhost',
    database:'Live_Chat1',
    user:'datapullman',
    password:'system',
	port:1433,
	pool: {
        max: 10,
        min: 1,
        idleTimeoutMillis: 30000
    }
};
const config1 = {
    user: '...',
    password: '...',
    server: 'localhost',
    database: '...',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}
/*
const pool1 = new sql.ConnectionPool(config, err => {
    // ... error checks

    // Query

    pool1.request() // or: new sql.Request(pool1)
    .query('select * from Admin_Registration', (err, result) => {
        // ... error checks

        console.dir(result)
    })

})

pool1.on('error', err => {
    // ... error handler
}) */

const pool = new sql.ConnectionPool({ config })

const transaction = new sql.Transaction(pool);
/*
transaction.begin(err => {
    // ... error checks

    let rolledBack = false

    transaction.on('rollback', aborted => {
        // emited with aborted === true

        rolledBack = true
    })

    new sql.Request(transaction)
    .query('insert into chat_history values("jai ganeshas","om namha shivaya","2018-08-01 12:34:20.55"',"hgfth65)", (err, recordset) => {
        // insert should fail because of invalid value

        if (err) {
			console.log('result',result);
         if (!rolledBack) {
                transaction.rollback(err => {
                    // ... error checks
                })
            }
        } else {
			console.log("result",result);
            transaction.commit(err => {
                // ... error checks
            })
        }
    })
})

 */
var my;


transaction.begin(err => {

    // ... error checks
/*  if(err){

	console.log("err",err)
}  */
   /*  request.query('select * from Admin_Registration', (err, result) => {
		// ... error checks
	/* 	if(err){

			console.log(err);
		}


		if(result){
			console.log(result.recordsets.length) // count of recordsets returned by the procedure

			console.log('result',result);
		}
    }) */
    var err;
    var result;
	const request = new sql.Request(transaction)


	    request.query('select * from Admin_Registration', (err, result) => {
			if(!err){

				console.log('result in err',err);
			}
			if(result){

				console.log(result.recordset[0].value) // return 12345
			}
	 //console.log('Transaction Beginned');



		})


/* 	 transaction.commit(err => {


		// ... error checks

		console.log("Transaction committed.")
	})

 */







})




/* const pool2 = new sql.ConnectionPool(config, err => {
    // ... error checks

    // Stored Procedure

    pool2.request() // or: new sql.Request(pool2)
    .input('input_parameter', sql.Int, 10)
    .output('output_parameter', sql.VarChar(50))
    .execute('procedure_name', (err, result) => {
        // ... error checks

        console.dir(result)
    })
})

pool2.on('error', err => {
    // ... error handler
}) */

/*
const pool = new sql.ConnectionPool({config})

globalConnection.connect(err => {
	// ...
	console.log("connected");
})


 */






























/*
const pool = new sql.ConnectionPool({
    user: '...',
    password: '...',
    server: 'localhost',
    database: '...'
})


const transaction = dbConfig.transaction();
/*

sql.connect(dbConfig, function (err) {

    if (err) console.log(err);

	// create Request object


    var request = new sql.Request(transaction);

	transaction.begin(err =>{
		if(err){

			console.log(err)
		}
		const request = new sql.Request(transaction)
		request.query('select * from Admin_Registration', function (err, recordset) {

			if (err)
		 {
			console.log(err)

			transaction.rollback(err=>{
				if(err)
				console.log('error in rollback',err)
			});
		 }

			// send records as a response
			//res.send(recordset);
			console.log("recordset ",recordset);

		});

		transaction.commit(err=>{
if(err){

	console.log("Transcation committed")
}

		})


	})



    // query to the database and get the records
/*
}); */


/*
const config = {
    user: 'datapullman',
    password: 'system',
    server: '192.168.1.26',
    database: 'Live_Chat1',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

const pool = new sql.ConnectionPool({ config })


//const request = new sql.Request(pool)



const transaction = new sql.Transaction(pool)

const request = new sql.Request(transaction)
pool.connect(err => {

	if(err){
console.log(err)

	}
	else{

		console.log("Connected");
	}
	transaction.begin(err=>
		{

			request.query('select * from Admin_Registration', (err, result) => {
	if(err){

		console.log(err);
	}
	if(result){

		console.log("result",result);
	}
			 	transaction.commit(err => {
					// ... error checks

					console.log("Transaction committed.")
				})
			})


	if(err){

		console.log(err)
	}
	else{

		console.log("Transcation is begin")
	}

		})

})




 */