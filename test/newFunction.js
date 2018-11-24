 var a=1;
 var b=a+2;
 setTimeout(() => {
	 a=1000;
	console.log(a);
 }, 10);
 
 setTimeout(() => {

	 console.log(b);

 }, 10);
 setTimeout(() => {
	console.log('done');	 
 }, 10);
 