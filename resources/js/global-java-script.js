//ParkingVu Client-ID
{
  client_id: 'WEB: 512485883540-4bq08gsc34i10p4blggc4660k4o8vqvd.apps.googleusercontent.com'
}

//javascript load

function onSuccess(googleUser) {
    var profile = googleUser.getBasicProfile();
    gapi.client.load('plus', 'v1', function () {
        var request = gapi.client.plus.people.get({
            'userId': 'me'
        });
        //Display the user details
        request.execute(function (resp) {
            var profileHTML = '<div class="profile"><div class="head">Welcome '+resp.name.givenName+'! <a href="javascript:void(0);" onclick="signOut();">Sign out</a></div>';
            profileHTML += '<img src="'+resp.image.url+'"/><div class="proDetails"><p>'+resp.displayName+'</p><p>'+resp.emails[0].value+'</p><p>'+resp.gender+'</p><p>'+resp.id+'</p><p><a href="'+resp.url+'">View Google+ Profile</a></p></div></div>';
            $('.userContent').html(profileHTML);
            $('#gSignIn').slideUp('slow');
        });
    });
}
 
function onFailure(error) {
    alert(error);
} 

//sign-out function this is the result of an on-click event.
//example:
// <a href="#" onclick="signOut();">Sign out</a>
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  
 function renderButton() {
    gapi.signin2.render('gSignIn', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}
  
GoogleAuth.then(onInit, onError)

//returns if the user is signed in or not.
//user is given
//access_token: string of its access token
//id_token: strong of its id token
//scope: stong of scopes granted in the access token
//expires_in: number of the amount of seconds that a token expires_in
//first_issued_at: number of the timestamp of issuance
//expires_at: number of timestamp of when token expires
GoogleAuth.isSignedIn.get()


//forces a user's login token to be refreshed so they are not logged out.
GoogleUser.reloadAuthResponse()

//forces the removal of all user scopes
GoogleUser.disconnect()