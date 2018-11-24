// To-do
// Add scroll to load more messages for Admins

// Initialize variables
var $window = $(window);
var $newUser = $('#windowSound')[0];
var $newChat = $('#chatSound')[0];
var $pokeAdmin = $('#pokeSound')[0];
var $usernameInput = $('.usernameInput'); // Input for username
var $passwordInput = $('.passwordInput'); //Input for password
var $loginPage = $('.login.page'); // The login page
var $errorPage = $('.error.page'); // The error page
var $chatPage = $('.chat.page'); // The chat page
var $userList = $('.adminList'); // List of online admins
var $inputMessage; // Input message input box
var $messages; // Messages area
var j=1;
var $buttona=$('.buttona');
var username;	//Store admin username
var authenticated = false; //Boolean to check if admin is authenticated
var connected = false;
var typing = false; //Boolean to check if admin is typing
var timeout = undefined; //Timeout to monitor typing
var socket = io(); //io socket
var y;
var y1;
var y2=1;

$newUser.loop = true;
$usernameInput.focus();
Notification.requestPermission();
var $btn;
if(y2!=null)
{



    $('.content4').hide();
    $('.content2').hide();
    $('.content3').hide();
        $('.content1').show();


}


console.log('checking first session name',sessionStorage.getItem('username'))
if(sessionStorage.getItem('username')){
	$loginPage.remove();
$chatPage.show();

username=sessionStorage.getItem('username');
password=sessionStorage.getItem('username')

socket.emit('login', {
	admin: username,
	password: password
});


socket.emit('add admin', {
	admin: username,
	isAdmin: true
});
connected = true;
console.log('socket on session');
}
else{
socket.on('login', function(data) {
	$userList.empty();
	authenticated = data.login;
 	if (authenticated) {
	$loginPage.fadeOut();
$chatPage.show();
		socket.emit('add admin', {
			admin: username,
			isAdmin: true
		});
	//	localStorage.setItem("username", username);
		console.log('username',username)
		sessionStorage.setItem("username",username);
		console.log('get name',sessionStorage.getItem('username'));		//	sessionStorage.setItem('active', true);
	//	$userList.append('<li id=' + username + '>' + username + '</li>');
		connected = true;
	} else {
		alert(data.err);
		$usernameInput.val('');
		$passwordInput.val('');
		username = null;
		$usernameInput.focus();
	}
})
}

function myaction() {
	if(y==null){

		document.getElementById("demo").innerHTML ="Still Now No Tickets";
	}else{
		document.getElementById("demo").innerHTML =y;

	}

}

$('.button').click(function() {

	myaction(y);


});


/* $('.btn').click(function(data) {

	var id1 = event.target.id;
	console.log('clicked',id1)


//	$chatPage.hide();
});

 */


socket.on('chat message', function(data) {
	y=data['result2'];
	myaction(y);
	$inputMessage = $('#' + data.roomID);
	var $parent = $inputMessage.parent();
	var $messages = $parent.children(".messages");
	if (data.isAdmin)
		var $usernameDiv = $('<span class="username"/>').text("Agent");
	else
		var $usernameDiv = $('<span class="username"/>').text("Client");

	var $messageBodyDiv = $('<span class="messageBody">').text(data.msg);
	var $timestampDiv = $('<span class="timestamp">').text((data.timestamp).toLocaleString().substr(15, 6));
	var $messageDiv = $('<li class="message"/>').append($usernameDiv, $messageBodyDiv, $timestampDiv);
	$messages.append($messageDiv);
	$messages[0].scrollTop = $messages[0].scrollHeight;
	$newChat.play();
});

socket.on('admin added', function(username) {
	//$userList.append('<li id=' + username + '>' + username + '</li>');
	//adminListListener(username);

})

socket.on('admin removed', function(username) {
	$('#' + username).remove();
})


socket.on('New Client', function(data) {
	$('.container').append(getChatArea(data.roomID));
	$inputMessage = $('#' + data.roomID);
	var $parent = $inputMessage.parent();
	var $messages = $parent.children(".messages");
	var $chatHeader = $parent.children(".chatHeader");
	var len = data.history.length;
	$userList.append('<li id=' + username + '>' + "Client"+j + '</li>');
	adminListListener("Client"+j);
	$chatHeader.append("Client"+j);
	j++;
	var sender;
	for (var i = len - 1; i >= 0; i--) {
		if (data["history"][i]["who"])
			sender = "You"
		else
			sender = "Client" ;
		var $usernameDiv = $('<span class="username"/>').text(sender);
		var $messageBodyDiv = $('<span class="messageBody">').text(data["history"][i]["what"]);
		var $timestampDiv = $('<span class="timestamp">').text((data["history"][i]["when"]).toLocaleString().substr(15, 6));
		var $messageDiv = $('<li class="message"/>').append($usernameDiv, $messageBodyDiv, $timestampDiv);
		$messages.append($messageDiv);
		$messages[0].scrollTop = $messages[0].scrollHeight;
	}
	i+=1;
	if (!data.justJoined) {
		$newUser.play();
		notifyAdmin("New Client", "Hey there!" + data.details[0] + " needs help!");
		$parent.css('border', '2px solid red')
		$inputMessage = $('#' + data.roomID);
		$inputMessage.on("focus", function() {
			$newUser.pause();
			$parent.css('border', '1px solid black')
			$inputMessage.off('focus');
			socket.emit('client ack', {});
		});
	}
	$inputMessage.on('click', function() {
		isTyping();
		console.log('id in input message',event.target.id)
	});


})

socket.on('typing', function(data) {
	$inputMessage = $('#' + data.roomID);
	var $parent = $inputMessage.parent();
	var $typing = $parent.children(".typing");
	if (data.isTyping)
		$typing.append("<small>" + data.person + " ...<small>");
	else
		$typing.text('');
})


socket.on('client ack', function() {
	$newUser.pause();
})

socket.on('User Disconnected', function(roomID) {
	$newUser.pause();
	$inputMessage = $('#' + roomID);
	$inputMessage.off();
	var $parent = $inputMessage.parent();
	console.log("user has been disconnected");
	$parent.remove();

})

socket.on('poke admin', function() {
	$pokeAdmin.play();
})

socket.on('reconnect', function() {
	console.log("Reconnected!");
	$userList.empty();
	$('.container').empty();
	$errorPage.fadeOut();
	//$userList.append('<li id=' + username + '>' + username + '</li>');
	if (authenticated)
		socket.emit('add admin', {
			admin: username,
			isAdmin: true
		});
});

socket.on('disconnect', function() {
	console.log("Disconnected!");
	$errorPage.show();
});

socket.on('reconnect_failed', function() {
	console.log("Reconnection Failed!");
	var $errorMsg = $errorPage.children(".title")
	$errorMsg.text("Reconection Failed. Please refresh your page. ")
	$window.alert("Disconnected from chat.")
});

$passwordInput.keypress(function(event) {
	if (event.which === 13)
		setUsername();
});

function sendMessage(id) {
	$inputMessage = $('#' + id);
	var $parent = $inputMessage.parent();
	var $messages = $parent.children(".messages");
	var message = $inputMessage.val();
	// Prevent markup from being injected into the message
	message = cleanInput(message);
	// if there is a non-empty message and a socket connection
	if (message && connected) {
		$inputMessage.val('');
		// tell server to execute 'new message' and send along one parameter
		var time = ("" + new Date());
		socket.emit('chat message', {
			roomID: id,
			msg: message,
			timestamp: time
		});
		var $usernameDiv = $('<span class="username"/>').text("You");
		var $messageBodyDiv = $('<span class="messageBody">').text(message);
		var $timestampDiv = $('<span class="timestamp">').text(time.toLocaleString().substr(15, 6));
		var $messageDiv = $('<li class="message"/>').append($usernameDiv, $messageBodyDiv, $timestampDiv);
		$messages.append($messageDiv);
		$messages[0].scrollTop = $messages[0].scrollHeight;
	}
}

function isTyping() {
	var id = event.target.id;
	console.log('id',id)
	if (event.which !== 13 && event.which !== undefined) {
		if (typing === false && $('#' + id).is(":focus")) {
			typing = true;
			socket.emit("typing", {
				isTyping: true,
				roomID: id,
				person: username
			});
		} else {
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				timeoutFunction(id);
			}, 2000);
		}
	} else {
		sendMessage(id);
		clearTimeout(timeout);
		timeoutFunction(id);
	}
}

function timeoutFunction(id) {
	typing = false;
	socket.emit("typing", {
		isTyping: false,
		roomID: id,
		person: username
	});
}

function adminListListener(target) {
	$('#' + target).on('click', function() {
		var pokeAdmin = event.target.id;
		socket.emit('poke admin', pokeAdmin);

	});
}

function getChatArea(id) {
	return ("<div class='chatArea'><div class='chatHeader'></div><ul class='messages'>" +
		"</ul><div class='typing'></div><input class='inputMessage' id='" + id + "'' type='radio'  /></div>");

}

$('.container').click(function(){
	console.log('chatArea')
	//$('.chatHeader').hide();

})

function setUsername() {
	username = cleanInput($usernameInput.val().trim());
	username = username.toLowerCase();
	password = $passwordInput.val();
	if (username) {
		// If the username is valid
		socket.emit('login', {
			admin: username,
			password: password
		});
	}
}

function notifyAdmin(title, body) {
	if (Notification.permission !== "granted")
		Notification.requestPermission();
	else {
		var notification = new Notification(title, {
			icon: '',
			body: body,
		});
		notification.onclick = function() {
			$window.focus();
			this.cancel();
		}
	}
}

// Prevents input from having injected markup
function cleanInput(input) {
	return $('<div/>').text(input).text();
}
var date=new Date();
var number;
var n1=0;
var n2=0;
var n3=0;
var n4=0;
var number1;
var number2;
var i=0;
$(document).ready(function(){
$('.t1').hide();
$('.t2').hide();
$('.t3').hide();
$('.t4').hide();
$('.im').hide();
});
$('.t1').click(function(){

console.log('ok')
})
$('.formcontrol2').click(function(){
i++;
if(i==1){
$('.im').show();

}
$('.t'+i).show();
$(".t"+i).animate({
        height: '410px'
    });

console.log('ok',i)
})
$('#cl1').click(function(){
console.log('cl1')
$('.content1').remove();
$('#tb1').remove();
$('.content2,.content3,.content4').show();
})
$('#cl2').click(function(){
$('.content2').remove();
$('#tb2').remove();
$('.content3').show();
})
$('#cl3').click(function(){
$('.content3').remove();
$('#tb3').remove();
$('.content4').show();
})
$('#cl4').click(function(){
$('.content4').remove();
$('#tb4').remove();
//$('.content').show();
})
function close(){
    number2=1;
    console.log('number2',number2)
$('.content1').hide();
}
 console.log('number2',number2)
function getmessage(){
     number=document.getElementById("message").value;
}
function getmessage1(){
     number=document.getElementById("message").value;
console.log(number)
return number;
}


$('.content4').hide();
$('.content2').hide();
$('.content3').hide();
$('.content1').hide();
$('.content1').show();

{

n1=1;
console.log('n1',n1)
}
$('#tab-1').click(function(){
console.log('tab1')
$('.content4,.content2,.content3').hide();
n1=1;
n2=0;
n3=0;
n4=0;
$('.content1').show()
console.log(n1)

})
$('#tab-2').click(function(){
console.log('tab1')
$('.content1,.content3,.content4').hide();
$('.content2').show()
n2=2;
n1=0;
n3=0;
n4=0;
console.log(n2)
})
$('#tab-3').click(function(){
console.log('tab1')
$('.content4,.content2,.content1').hide();
$('.content3').show()
n3=3;
n1=0;
n2=0;
n4=0;
console.log(n3)
})
$('#tab-4').click(function(){
console.log('tab1')
$('.content1,.content2,.content3').hide();
$('.content4').show()

n4=4;
n1=0;
n2=0;
n3=0;
console.log(n4)
})


$('#message1').click(function() {
console.log('clicked')
if(n1==1){
number1="msg_b";
        $(".content1").append('<div class= "' +number1 +'">'+number+'<br>'+date.toDateString().fontsize(0.5)+'</div>');
$('.formcontrol').val('');

    }
    if(n2==2){
        number1="msg_b";
        $(".content2").append('<div class= "' +number1 +'">'+number+'<br>'+date.toDateString().fontsize(0.5)+'</div>');
$('.formcontrol').val('');
    }
    if(n3==3){
number1="msg_b";
        $(".content3").append('<div class= "' +number1 +'">'+number+'<br>'+date.toDateString().fontsize(0.5)+'</div>');
$('.formcontrol').val('');
}

    if(n4==4){
number1="msg_b";
        $(".content4").append('<div class= "' +number1 +'">'+number+'<br>'+date.toDateString().fontsize(0.5)+'</div>');
$('.formcontrol').val('');
}

});

$(".formcontrol").on('keyup', function (e) {
if (e.keyCode == 13) {
    // Do something
var ii=getmessage1()
console.log('ii',ii)
    if(n1==1){
        if(ii!==''){
console.log('number',number)
          number1="msg_b";
        $(".content1").append('<div class= "' +number1 +'">'+number+'<br>'+date.toDateString().fontsize(0.5)+'</div>');
$('.formcontrol').val('');
        }else
        alert('please enter the text')
    }
    if(n2==2){
number1="msg_b";
        $(".content2").append('<div class= "' +number1 +'">'+number+'<br>'+date.toDateString().fontsize(0.5)+'</div>');
$('.formcontrol').val('');


    }
    if(n3==3){
number1="msg_b";
        $(".content3").append('<div class= "' +number1 +'">'+number+'<br>'+date.toDateString().fontsize(0.5)+'</div>');
$('.formcontrol').val('');
}


    if(n4==4){
number1="msg_b";
        $(".content4").append('<div class= "' +number1 +'">'+number+'<br>'+date.toDateString().fontsize(0.5)+'</div>');
$('.formcontrol').val('');
}
}

})