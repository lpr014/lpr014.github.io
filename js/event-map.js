
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
