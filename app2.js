var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";
/*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    //Find the first document in the customers collection:
    dbo.collection("customers").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });
 */
