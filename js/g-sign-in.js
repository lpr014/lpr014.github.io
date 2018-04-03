//var mysql = require('mysql');
//Change this stuff to link to the DB
var mysql = require('mysql')
  , async = require('async')

function onSignIn(googleUser) {
	// Useful data for your client-side scripts:
	// variables used by MySQL
	var profile = googleUser.getBasicProfile();
	var id = profile.getId();
	console.log("ID: " + profile.getId()); // Don't send this directly to your server!
	var full_name = profile.getName();
	console.log('Full Name: ' + profile.getName());
	var first_name = profile.getGivenName();
	console.log('Given Name: ' + profile.getGivenName());
	var last_name = profile.getFamilyName();
	console.log('Family Name: ' + profile.getFamilyName());
	var email = profile.getEmail();
	console.log("Email: " + profile.getEmail());

	// The ID token you need to pass to your backend:
	var id_token = googleUser.getAuthResponse().id_token;
	console.log("ID Token: " + id_token);
	
	
  };
  
  var con = mysql.createConnection({
	host: "parkingvudb.cscupoamphmi.us-east-2.rds.amazonaws.com@3306",
	user: "parkingvu",
	password: "parkingvu",
	database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
});

con.connect(function(err){
	if(err) throw errl
	console.log("logged in");
	var sql = "INSERT INTO users (UserID, FullName, GivenName, FamilyName, Email, IDToken) VALUES (id, full_name, first_name, last_name, email)";
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log("1 record inserted");
	});
});
