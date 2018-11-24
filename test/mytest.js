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
/*  const sequelize = new Sequelize('Live_Chat1', 'datapullman', 'system', {
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
 */
 var Connection = require('tedious').Connection;
var isolation=require('tedious').ISOLATON_LEVEL ;
var Request = require('tedious').Request;
var ConnectionPool = require('tedious-connection-pool');
var TYPES = require('tedious').TYPES;
var async = require('async');

 var config1 = {

	userName: 'datapullman',
	password: 'system',
	server: '192.168.1.26',

	options: {

		 // encrypt: true, /*If you are connecting to a Microsoft Azure SQL database, you will need this

		database: 'Live_Chat1'

	},

}
//var connection = new Connection(config1);
/* connection.on('connect', function (err) {
	if (err) {
		console.log(err);
	}
	else {
		console.log("Connected");
	}

}); */

/* var result2;
 */
/* setTimeout( function(){

  Get_ticket_color()

},100) */
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

    console.log("result2",result2)
	});

		connection.execSql(request);
} */
// Or you can simply use a connection uri


/* const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  }); */

  // force: true will drop the table if it already exists
 /*  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      firstName: 'jai',
      lastName: 'ganeshji'
    });
  });
   User.findAll().then(users => {
    console.log(users)
  }) */
/*   sequelize.query("SELECT * FROM Admin_Registration").then(myTableRows => {
    console.log(myTableRows)
  }) */
/* var my=[];
 */  /* sequelize
  .query(
    'SELECT * FROM Admin_Registration WHERE Admin_Id = ?',
    { raw: true, replacements: [1]}
  )
  .then(projects => {
    console.log(projects[0])

  }) */
/*
  sequelize.query("New_Get_Ticket_color").then(rows => {
    console.log(JSON.stringify(rows))  }) */
/*     const Project = sequelize.define('project', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT
      })

      const Task = sequelize.define('task', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        deadline: Sequelize.DATE
      })

      Project.title="jai ganeshji"; */
/*       function Insert(firstname, lastname, username, password, gender, email, address, phonenumber, callback) {


        request = new Request('Get_Admin_Registration', function (err) {
          if (err) {

            alert(err);
            console.log(err);
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

        });

        connection.callProcedure(request);

      } */
 /*      'SELECT * FROM Admin_Registration WHERE Admin_Id = ?',
      { raw: true, replacements: [1]} */

     // var a="srirama"

/*
      return sequelize.transaction(function (t) {

        sequelize



      .query(' Get_Admin_Registration (:F_Name, :L_Name, :Admin_Name, :Pass_Word, :Gender, :Email, :Address1, :Ph_No)'),

      {
        replacements:{
          F_Name:'a',
          L_Name:'a',
          Admin_Name:'a',
          Pass_Word:'a',
          Gender:'a',
          Email:'a',
          Address1:'a',
          Ph_No:'123456789'


      }

    }
      //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
      .then(projects => {
        console.log(projects)

      })
            // chain all your queries here. make sure you return them.

          }).then(function (result) {

              console.log("transcation has been committed and result is",result);
            // Transaction has been committed
            // result is whatever the result of the promise chain returned to the transaction callback
          }).catch(function (err) {

            console.log("Transcation has been rolled back and error is",err);
            // Transaction has been rolled back
            // err is whatever rejected the promise chain returned to the transaction callback
          });
 */
/* sequelize
  .query(
    'SELECT * FROM Admin_Registration WHERE Admin_Id = ?',
    { raw: true, replacements: [1]}
  )
  .then(projects => {
    console.log(projects[0])
  }) */

  //
//


 //var a2="lordrudraya2";
/*  var a4=[];
 */
/* working query*/
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


*/




/* working for the ticket creation */

 var a1="192168126";

 var a1="192168127";
 var a8=1;
 var a9=2018-08-03 ;
 var a2;
 var a;
 var b;


 setTimeout(() => {

  sequelize
  .query('exec New_Ticket_Creation @Usr_IP_Address='+a1+', @Usr_Port_Id='+a1+',  @Session_Id='+a8+';')

  //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
  .spread(myTableRows=> {
     console.log('sqldata',myTableRows)
/*      a2++;
/*  * console.log('a2  in' ,a2);*/

  })
  .catch(function(err){

    console.log("err",err);

  })

}, 250);
setTimeout(() => {

  sequelize
  .query('exec New_Ticket_Creation @Usr_IP_Address='+a1+', @Usr_Port_Id='+a1+',  @Session_Id='+a8+';')

  //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
  .spread(myTableRows=> {
     console.log('sqldata',myTableRows)
/*      a2++;
/*  * console.log('a2  in' ,a2);*/

  })
  .catch(function(err){

    console.log("err",err);

  })

}, 250);
 console.log('a2',a2);

/*  setTimeout(() => {

 if(a2!=0){




 sequelize
  .query(
    'SELECT * FROM LiveChatUser_Ticket_Creation WHERE Usr_IP_address = ?',
    { raw: true, replacements: [a1]}
  )
  .then(projects => {
   // console.log(projects[0])
   my=projects[0]
     a=my[0];
    //console.log('my',my[0]);
     b=a['Usr_Id'];

    console.log('user id',b);

  })




 }
}, 500); */
/*
 sequelize
 .query('exec New_Ticket_Creation  @Usr_Id='+ +';')

 //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
 .spread(myTableRows=> {
    console.log('sqldata',myTableRows)
    a2++;
console.log('a2  in' ,a2);

 })
 .catch(function(err){

   console.log("err",err);

 })   */
  // this will return 5



/* working
 sequelize
 .query(' exec Get_Admin_Registration @F_Name='+a1+', @L_Name='+a1+', @Admin_Name='+ a1+', @Pass_Word='+a1+', @Gender='+a1+', @Email='+a1+', @Address1='+a1+', @Ph_No='+a1+';')

 //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
 .then(function(result,err) {
   if(err){
  // console.log('err',err)
   }
   else{
   console.log('result',result);
   }
/*    var a5=sqlData[0];
   console.log('a5',a5);

     var a6=a5[0];
    console.log('a6',a6);
    var b=a6[' '];
    console.log('b',b);
 })
 .catch(function(err){

   console.log("err",err);
 }) */
 /*
  sequelize
 .query(' exec Get_Admin_Registration @F_Name='+a2+', @L_Name='+a2+', @Admin_Name='+ a2+', @Pass_Word='+a2+', @Gender='+a2+', @Email='+a2+', @Address1='+a2+', @Ph_No='+a2+';')

 //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
 .then(sqlData => {
   console.log(sqlData)

 })

 a3="lordganeshayanamha1";
  sequelize
 .query(' exec Get_Admin_Registration @F_Name='+a3+', @L_Name='+a3+', @Admin_Name='+ a3+', @Pass_Word='+a3+', @Gender='+a3+', @Email='+a3+', @Address1='+a3+', @Ph_No='+a3+';')

 //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
 .then(sqlData => {
   console.log(sqlData)

 })   *//*

 setTimeout(() => {

  sequelize
  .query('exec New_Ticket_Creation @Usr_IP_Address='+a1+', @Usr_Port_Id='+a1+',  @Session_Id='+a8+', @Con_Start_Time='+a9+';')

  //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
  .spread(myTableRows=> {
     console.log('sqldata',myTableRows)
     a2++;
 console.log('a2  in' ,a2);

  })
  .catch(function(err){

    console.log("err",err);

  })

}, 250);

 console.log('a2',a2);

 setTimeout(() => {

 if(a2!=0){




 sequelize
  .query(
    'SELECT * FROM LiveChatUser_Ticket_Creation WHERE Usr_IP_address = ?',
    { raw: true, replacements: [a1]}
  )
  .then(projects => {
   // console.log(projects[0])
   my=projects[0]
     a=my[0];
    //console.log('my',my[0]);
     b=a['Usr_Id'];

    console.log('user id',b);

  })




 }
}, 500);
 */

/*  var res=[];
 var a3;
 var i=[];
 var my='';
 var foo;
 var strParts ;
var qq=0; */
/* return sequelize.transaction(function (t) {
  return User.create({
    firstName: 'Abraham',
    lastName: 'Lincoln'
  }, {transaction: t}).then(function (user) {
    // Woops, the query was successful but we still want to roll back!
    throw new Error();
  });
}); */

 /*  return sequelize.transaction(function (t) {
          sequelize
       .query(' select * From LiveChatUser_Ticket_Creation ;')
        //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
         .spread(function(results, metadata)  {
           qq++;
           console.log('qq',qq);
         //console.log('results',results.length);
       //  console.log('metadata',metadata.JSON());
       my=results;
       console.log('my',my);
       var m=[];
      // m=metadata.split();
     my=  JSON.stringify(results)
   //  console.log('my',my);
     var obj = JSON.parse(my);
//console.log('obj',obj);
     var q='hai this is from bangalore'
       //   var q1=[];
       //   q1=q.split('');
         // console.log('q1',q1);
      // i=my.toString().split(" ");
       console.log('i',i);
       //var i1=obj.split(" ");




       })


             // chain all your queries here. make sure you return them.

           .then(function (results) {
         //    t.commit();
          // res = a3.split(" ");
            //a3=a2[' ,'];
         //   console.log(res[2]);

               console.log("transcation has been committed and result is");
               qq++;
             // Transaction has been committed
             // result is whatever the result of the promise chain returned to the transaction callback
           }).catch(function (err) {
           // t.rollback();
             console.log("Transcation has been rolled back and error is",err);
             // Transaction has been rolled back
             // err is whatever rejected the promise chain returned to the transaction callback
           })

          })








          return;



 return;


console.log('qq one ',qq);
setTimeout(function(){
  if(qq!=0)
  {

  /*         i=my.split(" ");
         console.log('i',i)

         console.log("if block is going to be executed")

  }




},1000)



*/


           /*
   return sequelize.transaction(function (t) {
          sequelize
       .query(' exec Get_Admin_Registration @F_Name='+a1 +', @L_Name='+a1+', @Admin_Name='+ a1+', @Pass_Word='+a1+', @Gender='+a1+', @Email='+a1+', @Address1='+a1+', @Ph_No='+a1+';')
        //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
         .spread(function(results, metadata)  {
         //console.log('results',results.length);
       //  console.log('metadata',metadata.JSON());
       my=results;
       console.log('my',my);
       var m=[];
      // m=metadata.split();
     my=  JSON.stringify(results)
     console.log('my',my);
     var obj = JSON.parse(my);
     console.log('obj',obj);
     var q='hai this is from bangalore'
       //   var q1=[];
       //   q1=q.split('');
         // console.log('q1',q1);
      // i=my.toString().split(" ");
       console.log('i',i);
       //var i1=obj.split(" ");




       })


             // chain all your queries here. make sure you return them.

           }).then(function (results) {
           res = a3.split(" ");
            //a3=a2[' ,'];
            console.log(res[2]);

               console.log("transcation has been committed and result is");
             // Transaction has been committed
             // result is whatever the result of the promise chain returned to the transaction callback
           }).catch(function (err) {

             console.log("Transcation has been rolled back and error is",err);
             // Transaction has been rolled back
             // err is whatever rejected the promise chain returned to the transaction callback
           })
      return sequelize.transaction(function (t) {

        sequelize
      .query('Get_Admin_Registration(:F_Name, :L_Name, :Admin_Name, :Pass_Word, :Gender, :Email, :Address1, :Ph_No)',
      {replacements: {F_Name:'a1', L_Name:'a1',Admin_Name:'a1',Pass_Word:'a1',Gender:'a1',Email:'a1',Address1:'a1',Ph_No:'a1' }})
      //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
      .spread(outputValue => {
        console.log(outputValue)
        console.log('a1',a1)
      })
            // chain all your queries here. make sure you return them.

          }).then(function (result) {

              console.log("transcation has been committed and result is",result);
            // Transaction has been committed
            // result is whatever the result of the promise chain returned to the transaction callback
          }).catch(function (err) {

            console.log("Transcation has been rolled back and error is",err);
            // Transaction has been rolled back
            // err is whatever rejected the promise chain returned to the transaction callback
          });   */
      /*
      working query
      return sequelize.transaction(function (t) {

               sequelize



            .query(' Get_Admin_Registration @F_Name=\'?\', @L_Name=\'srirama\', @Admin_Name=\'sri\', @Pass_Word=\'srirama\', @Gender=\'Male\', @Email=\'srirama@gmail.com\', @Address1=\'asrirama\', @Ph_No=\'123456789\''),
            {raw :true, replacements:[a]}
            //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
            .then(projects => {
              console.log(projects)

            })
                  // chain all your queries here. make sure you return them.

                }).then(function (result) {

                    console.log("transcation has been committed and result is",result);
                  // Transaction has been committed
                  // result is whatever the result of the promise chain returned to the transaction callback
                }).catch(function (err) {

                  console.log("Transcation has been rolled back and error is",err);
                  // Transaction has been rolled back
                  // err is whatever rejected the promise chain returned to the transaction callback
                });   */
/*

      return sequelize.transaction(function (t) {

    sequelize
  .query(
    'SELECT * FROM Admin_Registration WHERE Admin_Id = ?',
    { raw: true, replacements: [1]}
  )
  .then(projects => {
    console.log(projects)

  })
        // chain all your queries here. make sure you return them.

      }).then(function (result) {

          console.log("transcation has been committed and result is",result);
        // Transaction has been committed
        // result is whatever the result of the promise chain returned to the transaction callback
      }).catch(function (err) {
        console.log("Transcation has been rolled back and error is",err);
        // Transaction has been rolled back
        // err is whatever rejected the promise chain returned to the transaction callback
      });  */
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
} */
/* var ip='192.168.1.26'
var add;
var ip1;
jcheckip(ip)


function jcheckip(ip) {
	sequelize
.query(
  'select usr_ip_address ,Usr_id from LiveChatUser_Ticket_Creation_History where Usr_IP_address=?;',
  { raw: true, replacements: [ip]}
)
.spread(projects => {
  //console.log('projects',projects[0]['usr_ip_address'])

  add=projects[0]['usr_ip_address']
  ip1=projects[0]['Usr_id']
  console.log('user_ip & user_id  1',add,ip1);
  add=0;
ip1=0;
console.log('user_ip & user_id 2',add,ip1);

 /*  console.log(projects[0][0]['Usr_Id'])
  Usr_Id=projects[0][0]['Usr_Id']
  console.log('userid in',Usr_Id)
})
}

 */















/*
var a1="192.168.1.26";
//console.log(a1.valueOf());
var a3;
a3=a1.split('.').join("");
//console.log(a3);
var a8=1;
var a9=2018-08-03 ;
var a2;
var a;

var Usr_Id=0;
var Usr_Id1=0;
 var b="";
b=    new Date().toISOString().slice(0, 19).replace('T', ' ');
a=b.split('-',3)
console.log('a',a)
var normalizedDate = new Date(Date.now()).toISOString();
//console.log('normalizeDate',normalizedDate);
//a=b.trim();// 'lotsofwhitespace'
//console.log('a',    new Date().toISOString().slice(0, 19).replace('T', ' '));
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};
console.log('normalizeDate',b);
var dates = dates_as_int.map(function(dateStr) {
  return new Date(dateStr).getTime();
});
var d = Date.parse("2016-07-19T20:23:01.804Z");
console.log('d',d);

ticket_creation();
function ticket_creation(params) {

 sequelize
.query('exec New_Ticket_Creation @Usr_IP_Address='+a3+', @Usr_Port_Id='+a8+',  @Session_Id='+a8+';')

//{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
.spread(myTableRows=> {
   console.log('myTableRows',myTableRows)

})
.catch(function(err){
  console.log("err",err);
})
}

  */
/*  var Usr_Id="";
 var Admin_Id=0;
var a1='192.168.1.28';

  check(a1)


function check(a1)
{

  sequelize
.query(
  'SELECT Usr_Id FROM LiveChatUser_Ticket_Creation_History WHERE Usr_IP_address = ?',
  { raw: true, replacements: [a1]}
)
.spread(projects => {
  console.log(projects[0]['Usr_Id']);
 // console.log(projects[0][0]['Usr_Id'])
 Usr_Id=projects[0]['Usr_Id']
 console.log('userid in',Usr_Id)
 //check1(Usr_Id)

 sequelize
 .query( 'SELECT Admin_Id FROM LiveChatUser_Ticket_Assignment WHERE Usr_Id = ?',

   { raw: true, replacements: [Usr_Id]}
 )
 .spread(projects => {
   //console.log(projects)
   console.log(projects[0]['Admin_Id']);
   Admin_Id=projects[0]['Admin_Id']

 })
 .catch(function(err){
   if(err)

{



   Admin_Id=0;
  ///  console.log(err)
console.log('admin_ID in catch block',Admin_Id)
  }


 })


  })
}
setTimeout(() => {
  if(Admin_Id!=0){





    //setTimeout(() => {



    console.log('Already assignment done')

    //}, 100);



    }
    else{
      console.log('Do assignment')


    }
}, 100); */


/*
  console.log(projects[0][0]['Usr_Port_Id'])
 var Usr_Port_Id=projects[0][0]['Usr_Port_Id']
 console.log('user port id',Usr_Port_Id)
  console.log(projects);
 })
*/


/*

var s2=check(a1);

console.log('s2'.s2)


 if(s2!=0)
{
console.log('s2'.s2)

}

var Usr_Id=1002;

 setTimeout(() => {
  sequelize
  .query('exec New_Ticket_Assignment @Usr_Id='+Usr_Id+';')
  //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
  .spread(records=>{
  console.log(records[0]['To_Id']);
   //console.log('a2  in' ,a2);
   })
  .catch(function(err){
    console.log("err",err);
  })

 }, 200);
   */

/*
var a11="sriguruvenamha3990";
//var a8=1;
//var a9=2018-08-03 ;
var a2;
var a;
var b;


 sequelize
.query('exec New_Ticket_Creation @Usr_IP_Address='+a11+', @Usr_Port_Id='+a11+',  @Session_Id='+a8+', @Con_Start_Time='+a9+';')

//{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
.spread(myTableRows=> {
   console.log('myTableRows',myTableRows)

})
.catch(function(err){

  console.log("err",err);

})





sequelize
.query(
  'SELECT Usr_Id FROM LiveChatUser_Ticket_Creation WHERE Usr_IP_address = ?',
  { raw: true, replacements: [a11]}
)
.then(projects => {
  console.log(projects[0][0]['Usr_Id'])
  Usr_Id1=projects[0][0]['Usr_Id']
  console.log('userid in',Usr_Id1)
})

 setTimeout(() => {

  sequelize
  .query('exec New_Ticket_Assignment @Usr_Id='+Usr_Id1+';')

  //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
  .spread(records=>{

  console.log(records);



   //console.log('a2  in' ,a2);

   })



  .catch(function(err){

    console.log("err",err);

  })

 }, 400);


var a12="sriguruvenamha3990";
//var a8=1;
//var a9=2018-08-03 ;
var a2;
var a;
var b;


 sequelize
.query('exec New_Ticket_Creation @Usr_IP_Address='+a12+', @Usr_Port_Id='+a12+',  @Session_Id='+a8+', @Con_Start_Time='+a9+';')

//{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
.spread(myTableRows=> {
   console.log('myTableRows',myTableRows)

})
.catch(function(err){

  console.log("err",err);

})





sequelize
.query(
  'SELECT Usr_Id FROM LiveChatUser_Ticket_Creation WHERE Usr_IP_address = ?',
  { raw: true, replacements: [a11]}
)
.then(projects => {
  console.log(projects[0][0]['Usr_Id'])
  Usr_Id1=projects[0][0]['Usr_Id']
  console.log('userid in',Usr_Id1)
})

 setTimeout(() => {

  sequelize
  .query('exec New_Ticket_Assignment @Usr_Id='+Usr_Id1+';')

  //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
  .spread(records=>{

  console.log(records);



   //console.log('a2  in' ,a2);

   })



  .catch(function(err){

    console.log("err",err);

  })

 }, 400); */
 /*
 var a1="sriguruvenamha23";
 var a8=1;
 var a9=2018-08-03 ;
 var a2;
 var a;
 var b;


  sequelize
 .query('exec New_Ticket_Creation @Usr_IP_Address='+a1+', @Usr_Port_Id='+a1+',  @Session_Id='+a8+', @Con_Start_Time='+a9+';')

 //{ F_Name: "omsrirama", L_Name: "omsrirama", Admin_Name: "srirama", Pass_Word: "srirama", Gender: "Male",Email: 'srirama@ggmail.com',Address1: "bangalore",Ph_No: "123456789",}} )
 .spread(myTableRows=> {
    console.log('myTableRows',myTableRows)

 })
 .catch(function(err){

   console.log("err",err);

 })

 var Usr_Id=0;
 sequelize
 .query(
   'SELECT Usr_Id FROM LiveChatUser_Ticket_Creation WHERE Usr_IP_address = ?',
   { raw: true, replacements: [a1]}
 )
 .then(projects => {
   console.log(projects[0][0]['Usr_Id'])
   Usr_Id=projects[0][0]['Usr_Id']
   console.log('userid in',Usr_Id)
 })

  setTimeout(() => {

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

  }, 600);+*/

  var a1="sriguruvenamha39";
  var a8=1;
  var a9=2018-08-03 ;
  var a2;
  var a;
  var b;

tc_ta()


  var Usr_Id=0;
  function tc_ta()
  {
  sequelize
  .query(
    'SELECT Usr_Id FROM LiveChatUser_Ticket_Creation WHERE Usr_IP_address = ?',
    { raw: true, replacements: [a1]}
  )
  .then(projects => {
    console.log(projects[0][0]['Usr_Id'])
    Usr_Id=projects[0][0]['Usr_Id']
    console.log('userid in',Usr_Id)
  })
   setTimeout(() => {
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
   }, 800);
  }
/*
 var aaa=1;
 var b=0;

sequelize
.query(
  'SELECT * FROM Admin_Registration WHERE Admin_Id = ?',
  { raw: true, replacements: [aaa]}
)
.then(projects => {
  //console.log(projects[0][0]['Admin_Id'])
  a=projects[0][0]['Admin_Id'];
  b=b+1;;
  console.log('a',a);
  console.log('b',b);

})

setTimeout(() => {

  if(b!=0){

    console.log('a in',a);
  }

}, 1);
 */
/* if(b!=0){

  console.log('a in',a);
}
 */
/*

sequelize
.query(
 'SELECT * FROM Admin_Registration WHERE Admin_Id = ?',
 { raw: true, replacements: [2]}
)
.then(projects => {
 console.log(projects[0])
})

sequelize
.query(
 'New_Ticket_Creation',
 { raw: true, replacements: [1]}
)
.then(projects => {
 console.log(projects[0])
})   */