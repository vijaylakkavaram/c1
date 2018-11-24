 var sql = require("mssql");
var setUp = {
    server: 'localhost',
    database: 'Live_Chat1',
    user: 'datapullman',
    password: 'system',
    port: 1433
};
sql.connect(setUp);

var a=1; 
 /*   setTimeout(() => {
       new sqlInstance.Request()
                           

                    .query("New_Get_Ticket_color")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        //console.dir('All the courses');
                        console.dir(dbData);
                    })
                    .catch(function (error) {
                        console.dir(error);
                    });


   }, 100);  */
   // Insert data - Start

/* 
  var transaction = new sql.Transaction(setUp)
   transaction.begin ((err) =>{
    if(err) 
    console.log (err)
else
    request = new sql.Request(transaction)
    request.query ("select * from Admin_registration",function(err, recordset) {
if(err){

    console.log('err',err)
}
console.log(recordset);
    })
       
        transaction.commit ((err, recordset) =>{


        })

   })
        */

       /* sql.close();
   var connection = new sql.connect(setUp, function(err) {
    var transaction = new sql.Transaction(connection);
    transaction.begin(function(err) {
        console.log('begin transaction');
    var     request = new sql.Request(transaction)
        request.query ("select * from Admin_registration",function(err, recordset) {
    if(err){
    
        console.log('err',err)
    }
    console.log(recordset);
        })
    });
}); */

sql.close();

 var connection = new sql.connect(setUp, function(err) {



   var   transaction = new sql.Transaction(connection);
    transaction.begin(function(err) {


        console.log('begin transaction');
    var     request = new sql.Request(transaction)
        request.query ("select * from Admin_registration",function(err, recordset) {
    if(err){
    
        console.log('err',err)
    }
    
    console.log(recordset);
     console.log("connection has been closed here");
        })


    });
    transaction.commit(function(){

console.log('transcation has been committed');

    })


 });
 sql.close();

 var connection = new sql.connect(setUp, function(err) {



    var   transaction = new sql.Transaction(connection);
     transaction.begin(function(err) {
 
 
         console.log('begin transaction');
     var     request = new sql.Request(transaction)
         request.query ("select * from Admin_registration",function(err, recordset) {
     if(err){
     
         console.log('err',err)
     }
     
     console.log(recordset);
      console.log("connection has been closed here");
         })
 
 
     });
     transaction.commit(function(){
 
 console.log('transcation has been committed');
 
     })
 
 
  });
/*  
var connection1 = new sql.connect(setUp, function(err) {
    var transaction = new sql.Transaction(connection1);
    transaction.begin(function(err) {
        console.log('begin transaction1');
    var     request = new sql.Request(transaction)
        request.query ("select * from Admin_login",function(err, recordset) {
    if(err){
    
        console.log('err',err)
    }
    console.log(recordset);
        })
    });
})
 
 */

 /* 
sql.close(); 
var connection = new sql.connect(setUp, function(err) {
    var transaction = new sql.Transaction(connection);
    transaction.begin(function(err) {
        console.log('begin transaction');
    var     request = new sql.Request(transaction)
        request.query ("select * from Admin_Login",function(err, recordset) {
    if(err){
    
        console.log('err',err)
    }
    console.log(recordset);
        })
    });
});
  */
 

 /*
 sql.close(); 

var connection = new sql.connect(setUp, function(err) {

});    
var transaction = new sql.Transaction(connection);




    transaction.begin(function(err) {
        if(err)
        console.log('err in  begining  the transcation',err);
        console.log('begin transaction for admin registration');
    var     request = new sql.Request(transaction)
        request.query ("select * from Admin_registration",function(err, recordset) {
    if(err){
    
        console.log('err',err)
    }
    else{
        if(recordset)
        console.log(recordset);
        transaction.commit(err => {
            if(err){
                console.log('err for transcation commmit');
            }
            else{


                console.log('transcation has been terminated');
            }
            

        })

    }
    

        })
    }); */

 
    
 

 /*     var connection = new sql.connect(setUp, function(err) {
        if(err){
            
    sql.close() 

            console.log('err in connection');
        }
console.log('db connected');
sql.close() 



    });    

    sql.close() 

                    
            var transaction = new sql.Transaction(connection);

        transaction.begin(function(err) {
            if(err)

            console.log('err in  begining  the transcation',err);
            console.log('begin transaction for login');
        var     request = new sql.Request(transaction)
            request.query ("select * from Admin_registration",function(err, recordset) {
        if(err){
        
            console.log('err',err)
        }
        else{
            if(recordset)
            console.log(recordset);
            transaction.commit(err => {
                if(err){
                    console.log('err for transcation commmit');
                }
                else{


                    console.log('transcation has been terminated');
                }
                

            })

        }
        

            })
        });

  */