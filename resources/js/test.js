function signinCallback(authResult) {
			if (authResult['status']['signed_in']) {

				// Add the Google access token to the Cognito credentials login map.
				AWS.config.credentials = new AWS.CognitoIdentityCredentials({
				IdentityPoolId: 'us-east-2_n3cYC4lAz',
					Logins: {
						'accounts.google.com': authResult['id_token']
					}
				});

				// Obtain AWS credentials
				AWS.config.credentials.get(function(){
				// Access AWS resources here.
				});
			}
}


// AWS Cognito init
		/*AWS.config.region = 'us-east-2'; // Region
		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: 'us-east-2:82429378-6dd8-4648-b824-e4643262722b',
		});
		var cognitoidentity = new AWS.CognitoIdentity();
		cognitoidentity.createIdentityPool(params, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
		});
		AWS.config.credentials.get(function(){
		var syncClient = new AWS.CognitoSyncManager();
			syncClient.openOrCreateDataset('myDataset', function(err, dataset) {
				dataset.put('myKey', 'myValue', function(err, record){
					dataset.synchronize({
						onSuccess: function(data, newRecords) {
							// Your handler code here
						}
					});
				});
			});
		});*/