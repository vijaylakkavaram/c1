const mongoClient = require('mongodb').MongoClient;
 // replace the uri string with your connection string.
 mongoClient.connect("mongodb+srv://vijay:8142060192@cluster0-qnm7t.mongodb.net/test?retryWrites=true", {

useNewUrlParser: true }, function(err, client) {
      if(err){
        console.log(err)

      }
      else{
        console.log('connected')
      }
      const db = client.db("test");

      db.collection('inventory').updateOne(
{

    '_id': ObjectId("5bbc514756990525e4e402a5"),
    'article':'AAA'
})
      .then(function(result) {
          console.log(result)
        // process result
      })

    }
);



