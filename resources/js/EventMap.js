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

function initMapold(){
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

var map;

function initMap()
{
    var mapProp = {
        center: new google.maps.LatLng(32.52938, -92.649237),
        zoom: 14,
        mapTypeId: 'roadmap'
    };
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var center;
    function calculateCenter() {
        center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function () {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function () {
        map.setCenter(center);
    });

    //var newDiv = document.center.appendChild(document.createElement("div"));
    //newDiv.id = "legend", newDiv.innerHTML = "<h3>Legend</h3>";
    UpdateLegend();
    DrawData();
    AddDrawingTools();
}

function UpdateLegend()
{
    /* Icon Setup */
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
    parking: {
        name: 'Parking',
        icon: iconBase + 'parking_lot_maps.png' },
    info: {
        name: 'Info',
        icon: iconBase + 'info-i_maps.png'}
    };
    
    /* Data import */
    //Dummy Data
    var importFeatures = [
        { position: new google.maps.LatLng(32.53138, -92.649437), type: 'info' },
        { position: new google.maps.LatLng(32.52738, -92.649037), type: 'parking' }
    ];

    /* Marker Generation */
    //var map = document.getElementById("googleMap");
    importFeatures.forEach(function(feature) {
        var marker = new google.maps.Marker({
          position: feature.position,
          icon: icons[feature.type].icon,
          map: map
        });
        marker.addListener('click', function() {
            alert("Do the thing");
            //map.setZoom(8);
            //map.setCenter(marker.getPosition());
          });
  
      });

    /* Legend Generation */
    var legend = document.getElementById('legend');
    for (var key in icons) {
        var type = icons[key];
        var name = type.name;
        var icon = type.icon;
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.appendChild(div);
    }

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
    //google.maps.event.trigger(map, 'resize');
}

var data = {lots:[], markers:[]};

function DrawData()
{
    GenDummyDrawingData();

    data.lots.forEach(function(path){
        var newLot = new google.maps.Polygon({paths: path, map: map});
        newLot.addListener('click', function() {
            alert("Do the other thing");
            //map.setZoom(8);
            //map.setCenter(marker.getPosition());
          });
    });
}

function GenDummyDrawingData()
{
    data.lots.push(paths= [{lat: 32.53538, lng: -92.649937},{ lat: 32.52538, lng: -92.649937 },{ lat: 32.52538, lng: -92.639937 },{ lat: 32.53538, lng: -92.639937 },{ lat: 32.53538, lng: -92.649937 }]);
}

function AddDrawingTools()
{
    // Drawing
    var drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions:
        {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['marker', 'polygon']
        },
        markerOptions: 
        {
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            draggable: true
        },
        polygonOptions:
        {
            editable: true
        }
    });
    drawingManager.setMap(map);
}

/*function SaveLots()
{
    map.data.forEach(function()){
    };
}*/