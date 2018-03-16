function genHeader(){
    var table = document.getElementById("events");
    var header = table.createTHead();
    var newRow = header.insertRow();
    newRow.insertCell().innerHTML = "<b>Event</b>";
    newRow.insertCell().innerHTML = "<b>Address</b>";
    newRow.insertCell().innerHTML = "<b>City</b>";
    newRow.insertCell().innerHTML = "<b>State</b>";
    newRow.insertCell().innerHTML = "<b>Time</b>";
    newRow.insertCell().innerHTML = "<b>Date</b>";
    newRow.insertCell().innerHTML = "<b>Details</b>";
    newRow.insertCell().innerHTML = "<b>Save</b>";
    newRow.insertCell().innerHTML = "<b>Select</b>";
}

function genDummyData(){
    var table = document.getElementById("events");
    var newRow = table.insertRow();
    newRow.insertCell().innerHTML = "CSC 430";
    newRow.insertCell().innerHTML = "501 Dan Reneau Dr";
    newRow.insertCell().innerHTML = "Ruston";
    newRow.insertCell().innerHTML = "LA";
    newRow.insertCell().innerHTML = "10:00 am";
    newRow.insertCell().innerHTML = "2/20/18";
    var newA = document.createElement("a");
    newA.className = "btn btn-primary btn-sm", newA.href = "#", newA.role = "button", newA.innerText = "Details";
    newRow.insertCell().appendChild(newA);
    var newA = document.createElement("a");
    newA.className = "btn btn-primary btn-sm", newA.href = "#", newA.role = "button", newA.innerText = "Save";
    newRow.insertCell().appendChild(newA);
    var newA = document.createElement("a");
    newA.className = "btn btn-primary btn-sm", newA.href = "#", newA.role = "button", newA.innerText = "Select";
    newRow.insertCell().appendChild(newA);
}

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(32.52938, -92.649237),
        zoom: 14
    };
}

function initMap(){
    //alert("initMap()");
    var newDiv = document.createElement("div");
    newDiv.id = "map", newDiv.style = "width:300px;height:300px;position: fixed";
    var map = new google.maps.Map(newDiv, mapProp);
    
    document.body.appendChild(newDiv);
}

function init(){
    var table = document.getElementById("events");
    var header = table.createTHead();
    var newRow = header.insertRow();
    var newCell = newRow.insertCell();
    newCell.innerHTML = "<b>Event</b>"
    newCell = newRow.insertCell();
    newCell.innerHTML = "<b>Address</b>"
    newCell = newRow.insertCell();
    newCell.innerHTML = "<b>City</b>"
    newCell = newRow.insertCell();
    newCell.innerHTML = "<b>State</b>"
    newCell = newRow.insertCell();
    newCell.innerHTML = "<b>Time</b>"
    newCell = newRow.insertCell();
    newCell.innerHTML = "<b>Date</b>"
    newCell = newRow.insertCell();
    newCell.innerHTML = "<b>Details</b>"

    document.body.appendChild(table);
    newRow = table.insertRow(0);

    newRow = document.createElement("TR");
    newRow.setAttribute("id", "row1");
    document.getElementById("EventTable").appendChild(newRow);

    var z = document.createElement("TD");
    var t = document.createTextNode("");
    z.appendChild(t);
    document.getElementById("row1").appendChild(z);

    newRow.insertCell(0);
}
