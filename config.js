var config = {
	parentDomain : 'http://localhost:8124', 	//Host Domain
	web_port : 8124,		 					//Port where app will be hosted
	admin_url : '/adminURL',					//Choose a URL where admin panel can be accessed
	redis_port : 6379,							//Redis Port
	redis_hostname : "localhost", 				//Redis Hostname
	admin_users : ['admin','a','b'], 					//Add usernames for different admins
	key : 'YQ=='	 //LBJToRockets18					//Admin Password btoa hashed (Default = 'password')

};

module.exports = config;
