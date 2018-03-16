// Used by "Owner_Attendant_Lot_Access.html"

// "SanityCheck" checks the input for the lot status update by the lot owner/attendent. If the user attempts to submit nothing, a warning will appear, and no input will be submitted.
function SanityCheck()
	{
		var s=document.getElementById("status").value;
		if (s == "NULL"){
			alert("To update the status of the parking lot availability you must select a status.");
			return null;
			}
		else{
			document.getElementById("lot_update").submit();
			return true;
			}
	}
	
