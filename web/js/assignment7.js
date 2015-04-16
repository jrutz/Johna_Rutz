Parse.initialize("LYa1FUkbPge8J2kTs9wWrVzW7dXSozRi4jRTnkTj", "qqtixdW0XNmGQn6JSGqyPx6gXkHpX0hgVmXDbmLw");


function createUser() {
	//I never said it was a secure site
	//POST TO PARSE
	
	var userName = $('#uname').val();
	var firstName = $('#fname').val();
	var lastName = $('#lname').val();
	var email = $('#email').val();	
	var color = $('#color').val();
	
	
	var user = new Parse.User();
	user.set("username", userName);
	user.set("fname", firstName);
	user.set("lname", lastName);
	user.set("password", color);
	user.set("email", email);
	
	
	user.signUp(null, {
  success: function(user) {
   loadLoggedInContent();
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});
	
} 


function retrieveUser() {
	var username = $('#uname').val();
	var color = $('#color').val();
	
	viewFriends();
	Parse.User.logIn(username, color, {
  	success: function(user) {
    	loadLoggedInContent();
    	   	
  		},
  	error: function(user, error) {
    	alert("You're not in our database, why don't you create an account?");
  	}
	});
}




function logoutUser() {
	Parse.User.logOut();
	loadLogin();
}



function deleteUser() {
currentUser.destroy({
  success: function(currentUser) {
    alert("You're breaking our hearts! But you've been removed from the database");
    Parse.User.logOut();
    loadCreateAccount();
  },
  error: function(currentUser, error) {
    alert("We just can't let you go, contact our administrator to manually remove yourself");
  }
});
}



function saveFriend () {
	var Friend = Parse.Object.extend("Friends");
	var friend = new Friend();
	
	
	friend.set("user", Parse.User.objectId);	
	friend.set("Name", $('#uname').val());
	friend.set("email", $('#email').val());
	friend.set("country", $('#country').val());
	
	friend.save(null, {
  success: function(friend) {
    // Execute any logic that should take place after the object is saved.
    alert('Look at you! Making friends');
    
    $('#uname').val('');
    $('#email').val('');
    $('#country').val('');
    viewFriends();
    
  },
  error: function(friend, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert("The universe is telling us you probably aren't actually friends with this person");
  }
});
	
	
}


function viewFriends () {
	var Friend = Parse.Object.extend("Friends");
	var listOfFriends = "";
	var friendDropdown="<select id='editSelection'>";
	
	var query = new Parse.Query(Friend);
	query.find({
		success: function(results) {
			var friendArray = new Array();
			
			for(var i = 0; i < results.length; i++) {
				var name = results[i].get('Name');
				var objectId = results[i].id;
				listOfFriends += "<br><button id="+objectId+" class='button' onClick='viewFriendInfo("+JSON.stringify(objectId)+")'>"+name+"</button></br>";
				
				friendDropdown += "<option value="+objectId+">"+name+"</option>"
				console.log(name+" "+objectId);
				console.log("AND THIS IS" +listOfFriends);
				}
			friendDropdown += "</select>";
			$('#friendList').html(listOfFriends);
			$('#friendDrop').html(friendDropdown);
		
		}
	})
}


function viewFriendInfo(id) {
console.log("fuck this");
console.log("INPUT ID IS "+id);
var emailAddress;
var Friends = Parse.Object.extend("Friends");
var query = new Parse.Query(Friends);
query.equalTo("objectId", id);
query.find({
		success: function(results) {
			emailAddress = results[0].attributes.email;
			console.log(JSON.stringify(emailAddress));
			
			emailAddress = JSON.stringify(emailAddress);
			console.log('address is '+JSON.parse(emailAddress));
			emailAddress = JSON.parse(emailAddress);
			window.open('mailto:'+emailAddress+"?subject=Let's catch up");
		
		}
	})
}


function editFriendInfo () {

id = $('#editSelection').val();
var Friends = Parse.Object.extend("Friends");
var query = new Parse.Query(Friends);
query.equalTo("objectId", id);
query.find({
		success: function(results) {
		
			var newFriend = new Friends();
			newFriend = results[0];
			
			console.log(results[0]);
			newFriend.set('email', $('#changedEmail').val());
			newFriend.save();
			
			$('#changedEmail').val('');
		}
	})




}


