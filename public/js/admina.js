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
	var $inputMessage2; // Input message input box
	var $inputMessage9; // Input message input box
	//var $t1=$('.tab1');
	var content1=0;
	var content2=0;
	var content3=0;
	var content4=0;

	var $t1;
	var $messages; // Messages area
	var j = 1;
	var $keystroke = $('.keystroke')
	var $buttona = $('.buttona');
	var username;	//Store admin username
	var authenticated = false; //Boolean to check if admin is authenticated
	var connected = false;
	var typing = false; //Boolean to check if admin is typing
	var timeout = undefined; //Timeout to monitor typing
	var socket = io(); //io socket
	var $content1=$('.content1');
	var $content2=$('.content2');
	var y;
	var y1;
	var y2 = 1;
	var i = 0;
	$newUser.loop = true                        ;
	var $t2 ;
	var t1 = 0;
	var t2 = 0;
	var t3 = 0;
	var t4 = 0;
	var $cl1;
	var idd;
	var $taba;
	var $tabb;
	var $tabc;
	var $test1=$('#test1');
	$usernameInput.focus();
	Notification.requestPermission();
	var $btn;
	var $content1;
	var iio;
	var id;
	var message='';
	$('.im').show()
	$('.inputMessage1').hide();
	$('.l-success').hide();

	if (y2 != 0) {
		$('.content1').show();
		$('.content2').hide()
		$('.content3').hide()
		$('.content4').hide()
		$('.inputMessage9').hide();

	/*  	$('.inputMessage').click(function () {
			//	console.log('tab1')
			$('.content4,.content2,.content3').hide();
			n1 = 1;
			n2 = 0;
			n3 = 0;
			n4 = 0;
			$('.content1').show()
			console.log(n1)

		}) */
	/* 	$cl1.click(function(){
					console.log('tab1')
					$('.content4,.content2,.content3').hide();

					n1=1;
					n2=0;
					n3=0;
					n4=0;
					$('.content1').show()
					console.log('l1  in click')

					}) */
					$('#tab-1').click(function () {
						//	console.log('tab1')
						$('.content2,.content3,.content4').hide();
						$('.content1').show()
						n2 = 2;
						n1 = 0;
						n3 = 0;
						n4 = 0;
						console.log(n2)
					})
		$('#tab-2').click(function () {
			//	console.log('tab1')
			$('.content1,.content3,.content4').hide();
			$('.content2').show()
			n2 = 2;
			n1 = 0;
			n3 = 0;
			n4 = 0;
			console.log(n2)
		})
		$('#tab-3').click(function () {
			console.log('tab1')
			$('.content4,.content2,.content1').hide();
			$('.content3').show()
			n3 = 3;
			n1 = 0;
			n2 = 0;
			n4 = 0;
			console.log(n3)
		})
		$('#tab-4').click(function () {
			console.log('tab1')
			$('.content1,.content2,.content3').hide();
			$('.content4').show()

			n4 = 4;
			n1 = 0;
			n2 = 0;
			n3 = 0;
			console.log(n4)
		})



	}



	console.log('checking first session name', sessionStorage.getItem('username'))
	if (sessionStorage.getItem('username')) {
		$loginPage.remove();
		$chatPage.show();

		username = sessionStorage.getItem('username');
		password = sessionStorage.getItem('username')

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
	else {
		socket.on('login', function (data) {
			$userList.empty();
			authenticated = data.login;
			console.log('login details',data)
			if (authenticated) {

				$loginPage.fadeOut();
				$chatPage.show();
				socket.emit('add admin', {
					admin: username,
					isAdmin: true
				});
				//	localStorage.setItem("username", username);
				console.log('username', username)
				sessionStorage.setItem("username", username);
				console.log('get name', sessionStorage.getItem('username'));		//	sessionStorage.setItem('active', true);
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

	/* function myaction() {
		if(y==null){
			document.getElementById("demo").innerHTML ="Still Now No Tickets";
		}
		else{
			document.getElementById("demo").innerHTML =y;
		}
	} */

	/* $('.button').click(function() {
		myaction(y);
	});

	*/
	/* $('.btn').click(function(data) {
		var id1 = event.target.id;
		console.log('clicked',id1)
	//	$chatPage.hide();
	});

	*/

function mylogout(){
 		socket.emit('logout', {
			 username:sessionStorage.getItem('username')
		});


		var txt;
		if (confirm("Are you sure for logout")) {
			txt = "You pressed OK!";

			$chatPage.fadeOut();
			$loginPage.show();
			 sessionStorage.removeItem('username')
			 alert('You are successfully logged out')

		} else {
			txt = "You pressed Cancel!";

		}

}

	var n1 = 0;
	var r_id = 0;
	socket.on('chat message', function (data) {
		console.log('data in chat message admin', data)
		y = data['result2'];
		r_id = data['roomID'];
		console.log('r_id and content',r_id,content1)
		if(r_id===content1){

			var $usernameDiv = $('<span class="username"/>').text("Client");
		var $messageBodyDiv = $('<span class="messageBody">').text(data.msg);
		var $timestampDiv = $('<span class="timestamp">').text((data.timestamp).toLocaleString().substr(15, 6));
		var $messageDiv = $('<li class="message"/>').append($usernameDiv, $messageBodyDiv, $timestampDiv);
		$('.content1').append($messageDiv);
	}
	else
	if(r_id===content2){
		var $usernameDiv = $('<span class="username"/>').text("Client");
		var $messageBodyDiv = $('<span class="messageBody">').text(data.msg);
		var $timestampDiv = $('<span class="timestamp">').text((data.timestamp).toLocaleString().substr(15, 6));
		var $messageDiv = $('<li class="message"/>').append($usernameDiv, $messageBodyDiv, $timestampDiv);
		$('.content2').append($messageDiv);

	}
		console.log('chat message',data)

	});

	socket.on('admin added', function (username) {
		$userList.append('<li id=' + username + '>' + username + '</li>');
		$userList.hide();
		//adminListListener(username);


	})

	socket.on('admin removed', function (username) {
		$('#' + username).remove()
	})

	var it = 0;
	socket.on('New Client', function (data) {
 		it = it + 1;
 		if (it === 1) {
		//	$('.t' + it).show();
			$('.inputMessage1').show();
			$('.container').append(getChatArea(data.roomID));
			content1=data.roomID;
 			console.log('content1 room id',content1);
			$inputMessage=$('#'+data.roomID);

			$inputMessage.focus(function () {
				$(this).css('background-color','skyblue')
				$('.inputMessage2,.btn1').css('background-color','white');
				$('.inputMessage2,.btn1').css('color','black');

				n1=1;
				n2=0;
  						$('.content1').show();
						$('.content2').hide();
						$('.content3').hide();
						$('.content4').hide();
						id= event.target.id;
				console.log('$t01', event.target.id);
				$(".inputMessage1").on('keyup', function (e) {
					if (e.keyCode === 13) {
						// Do something
						message = $(this).val()
					//	if(n1===0)
					if(message===''){
						console.log('empty messages')
					}
					else{
					sendmessages(id,message)
					}
						$('.inputMessage1').val('');
					}})
			})
			j++;
		}
		if (it === 2) {
			$('.t' + it).show();
		$('.container').append(getChatArea1(data.roomID));
			$inputMessage=$('#'+data.roomID)
			content2=data.roomID;
			console.log('content1 room id',content2);
 				$inputMessage.focus(function () {
				$(this).css('background-color', 'lightblue');
				$('.inputMessage').css('background-color','white')
						$('.content2').show();
						$('.content1').hide();
						$('.content3').hide();
						$('.content4').hide();
						$('.inm1').hide();
						$('.inm2').show();
						id=event.target.id;
				console.log('$t12', event.target.id)
				$(".inputMessage1").on('keyup', function (e) {
					if (e.keyCode === 13) {
						message = $(this).val()
					console.log('checking after pressing the enter button in second tab',message)
					if(message==='' ){
						console.log('empty messages')
					}
					else{
						sendmessages(id,message)
					}
						$('.inputMessage1').val('');
					}})
			})
		}
		var sender;
		var len = data.history.length;
	console.log(len)

		for (var i = len - 1; i >= 0; i--) {
			console.log('hi',data["history"][i]["who"])
			if (data["history"][i]["who"]===true){
				sender = "You";
				console.log('in if you',data['history'][i]['who'])
			}
			else
				sender = "Client";
				var $usernameDiv = $('<span class="username"/>').text(sender);

			var $usernameDiv = $('<span class="username"/>').text(sender);
			var $messageBodyDiv = $('<span class="messageBody">').text(data["history"][i]["what"]);
			var $timestampDiv = $('<span class="timestamp">').text((data["history"][i]["when"]).toLocaleString().substr(15, 6));
			var $messageDiv = $('<li class="message"/>').append($usernameDiv, $messageBodyDiv, $timestampDiv);
			$('.content'+it).append($messageDiv);
			/* 		$messages[0].scrollTop = $messages[0].scrollHeight;
			*/
		}

		i += 1;
		j++;
		console.log('it 1', it)
		if (!data.justJoined) {
			$newUser.play();
			notifyAdmin("New Client", "Hey there!" + data.details[0] + " needs help!");
			$inputMessage = $('#' + data.roomID);
			$inputMessage.css('border', '2px solid red')
			$inputMessage.on("focus", function () {
				$newUser.pause();
				$inputMessage.css('border', '1px solid black')
				$inputMessage.off('focus');
				socket.emit('client ack', {});
			});
		}

	});

	function sendmessages(id,message) {
		var $parent = $inputMessage.parent();
		var $messages = $parent.children(".messages");
		console.log('In function',message)
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
		if(n1==1)
		$('.content1').append($messageDiv);
		else
		$('.content2').append($messageDiv)
	}
	socket.on('typing', function (data) {
		$inputMessage = $('#' + data.roomID);
		/* var $parent = $inputMessage.parent();
		var $typing = $parent.children(".typing"); */

		if (data.isTyping)
			$keystroke.text("" + data.person + " ...");
		else
			$keystroke.text('');
	})

	socket.on('client ack', function () {
		$newUser.pause();
	})

	socket.on('User Disconnected', function (roomID) {
		$newUser.pause();
		$inputMessage = $('#' + roomID);
		$inputMessage.off();
		var $parent = $inputMessage.parent();
		console.log("user has been disconnected with roomid",roomID);
		$parent.remove();
	})

	socket.on('poke admin', function () {
		$pokeAdmin.play();
	})

	socket.on('reconnect', function () {
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

	socket.on('disconnect', function () {
		console.log("Disconnected!");
		$errorPage.show();
	});

	socket.on('reconnect_failed', function () {
		console.log("Reconnection Failed!");
		var $errorMsg = $errorPage.children(".title")
		$errorMsg.text("Reconection Failed. Please refresh your page. ")
		$window.alert("Disconnected from chat.")
	});

	$passwordInput.keypress(function (event) {
		if (event.which === 13)
			setUsername();
	});

	function sendMessage(id) {
		$inputMessage = $('#' + id);
		/*   $t=$('#'+data.roomID);
		*/
		var $parent = $inputMessage.parent();
		var $messages = $parent.children(".messages");
		var message = $inputMessage.val();
		// Prevent markup from being injected into the message
		message = cleanInput(message);
		// if there is a non-empty message and a socket connection
		if (message && connected) {
			$inputMessage.val('');

			number1 = 'msg_b';

			if (n1 == 1) {
				$(".content1").append('<div class= "' + number1 + '">' + message + '<br>' + date.toDateString().fontsize(0.5) + '</div>');
				$('.inputMessage').val('');
			}
			if (n2 == 2) {
				number1 = "msg_b";
				$(".content2").append('<div class= "' + number1 + '">' + message + '<br>' + date.toDateString().fontsize(0.5) + '</div>');
				$('.formcontrol').val('');
			}
			if (n3 == 3) {
				number1 = "msg_b";
				$(".content3").append('<div class= "' + number1 + '">' + message + '<br>' + date.toDateString().fontsize(0.5) + '</div>');
				$('.formcontrol').val('');
			}
			if (n4 == 4) {
				number1 = "msg_b";
				$(".content4").append('<div class= "' + number1 + '">' + message + '<br>' + date.toDateString().fontsize(0.5) + '</div>');
				$('.formcontrol').val('');
			}
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
		console.log('id', id)
		if (event.which !== 13 && event.which !== undefined) {
			if (typing === false && $('#' + id).is(":focus")) {
				typing = true;
				//getmessage()
				socket.emit("typing", {
					isTyping: true,
					roomID: id,
					person: username
				});
			} else {
				clearTimeout(timeout);
				timeout = setTimeout(function () {
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
		$('#' + target).on('click', function () {
			var pokeAdmin = event.target.id;
			socket.emit('poke admin', pokeAdmin);

		});
	}
function getChatArea1(id) {
/*
		return ("<div class='btn-group' style='width:10%'><input class='inputMessage2' style='width:132%' value ='...' type='button'  id='" + id
		+ "''/><div class='content2' id='test1'>stuff two</div></div>") */
		return ("<div class='dropdown'><button class='btn btn-default dropdown-toggle' type='button' id='menu2' data-toggle='dropdown'>client2<span class='caret'></span></button><ul class='dropdown-menu' role='menu' aria-labelledy='menu1'><li role='presentation'><a role='menuitem' tabindex='-1' href='http://localhost:8124/Transfer'>Transfer Ticket</a></li><li role ='presentation' class='divider'></li><li role='presentation'><a role='menuitem' tabindex='-1' href='#'>Close  Conversation</a></li></ul></div><div class='content2' id='test1'>stuff two</div></div>")



	}

function getChatArea(id) {
	/* return ("<div class='btn-group' style='width:10%'><input class='inputMessage2' style='width:132%' value ='...' type='button'  id='" + id
		+ "''/><div class='content1' id='test1'>stuff one</div></div>")
 */
{/* <button class="btn">Button</button>
<div class="dropdown">
  <button class="btn" style="border-left:1px solid #0d8bf2">
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */}
		//return ("<div class='dropdown'><button class='btn btn-default dropdown-toggle' type='button' id='menu1' data-toggle='dropdown'>client1<span class='caret'></span></button><ul class='dropdown-menu' role='menu' aria-labelledy='menu1'><li role='presentation'><a role='menuitem' tabindex='-1' href='#'>Transfer Ticket</a></li><li role ='presentation' class='divider'></li><li role='presentation'><a role='menuitem' tabindex='-1' href='#'>Close  Conversation</a></li></ul></div><div class='content1' id='test1'>stuff one</div></div>")
	return("<button class='inputMessage2' id='"+id+"'>Client1</button><div class='dropdown'><button class='btn1' style='border-left:1px solid rgb(135, 232, 235)'><i class='fa fa-caret-down'></i></button><div class='dropdown-content'><a href='http://localhost:8124/transfer'>Transfer ticket</a><a href='#'>Close Conversation</a></div></div><div class='content1' id='test1'>Stuff one</div>" )


	}

{
/* <input class='inputMessage2' style='width:132%' value ='client1' type='button'  id='" + id + "''/>
 */
}
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
			notification.onclick = function () {
				$window.focus();
				this.cancel();
			}
		}
	}

	// Prevents input from having injected markup
	function cleanInput(input) {
		return $('<div/>').text(input).text();
	}

	$(document).ready(function () {
		$('.t1').hide();
		$('.t2').hide();
		$('.t3').hide();
		$('.t4').hide();
		$('.im').hide();
	});


/* 	$('#cl1').click(function () {
		console.log('cl1')
		$('.content1').remove();
		$('#tb1').remove();
		$('.content2,.content3,.content4').show();
	}) */
	$('#cl2').click(function () {
		$('.content2').remove();
		$('#tb2').remove();
		$('.content3').show();
	})
	$('#cl3').click(function () {
		$('.content3').remove();
		$('#tb3').remove();
		$('.content4').show();
	})
	$('#cl4').click(function () {
		$('.content4').remove();
		$('#tb4').remove();
		//$('.content').show();
	})
	function close() {
 		$('.content1').hide();
	}


	$('.content4').hide();
	$('.content2').hide();
	$('.content3').hide();
	$('.content1').hide();
	$('.content1').show();


	$('#tab-2').click(function(){
	//console.log('tab2')
	$('.content1,.content3,.content4').hide();
	$('.content2').show()
	n2=2;
	n1=0;
	n3=0;
	n4=0;
	//console.log(n2)
	})
	$('#tab-3').click(function () {
		console.log('tab3')
		$('.content4,.content2,.content1').hide();
		$('.content3').show()
		n3 = 3;
		n1 = 0;
		n2 = 0;
		n4 = 0;
		console.log(n3)
	})
	$('#tab-4').click(function () {
		console.log('tab4')
		$('.content1,.content2,.content3').hide();
		$('.content4').show()

		n4 = 4;
		n1 = 0;
		n2 = 0;
		n3 = 0;
		console.log(n4)
	})


	$('#message1').click(function () {
		console.log('clicked')
		if (n1 == 1) {
			number1 = "msg_b";
			$(".content1").append('<div class= "' + number1 + '">' + number + '<br>' + date.toDateString().fontsize(0.5) + '</div>');
			$('.formcontrol').val('');

		}
		if (n2 == 2) {
			number1 = "msg_b";
			$(".content2").append('<div class= "' + number1 + '">' + number + '<br>' + date.toDateString().fontsize(0.5) + '</div>');
			$('.formcontrol').val('');
		}
		if (n3 == 3) {
			number1 = "msg_b";
			$(".content3").append('<div class= "' + number1 + '">' + number + '<br>' + date.toDateString().fontsize(0.5) + '</div>');
			$('.formcontrol').val('');
		}

		if (n4 == 4) {
			number1 = "msg_b";
			$(".content4").append('<div class= "' + number1 + '">' + number + '<br>' + date.toDateString().fontsize(0.5) + '</div>');
			$('.formcontrol').val('');
		}

	});
