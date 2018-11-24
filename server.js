

var http=require('http');
var fs=require('fs');
function onRequest(request,response){
	console.log('server up')
	//response.writeHead(200,{'Content-Type':'text/html'});
	fs.readFile('.indexp.html',null,function(error,data){
		if(error){
		//	response.writeHead(404);
			response.write('file not found');
		}else{
			response.write(data);

		}
			response.end();
	});
}
http.createServer( onRequest()).listen(8080);
