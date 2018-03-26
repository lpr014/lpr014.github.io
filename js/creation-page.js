
function openCreationPage(page, pageName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(pageName).style.display = "block";
    page.currentTarget.className += " active";
}

function cancelBtn(){
    document.getElementById("eventCreationForm").reset();
}

function submitEventBtn(){
    // if the form is completed submit the form to t he database 
    // and reset form 
    // else if  make sure the form is filled out completely 

    document.getElementById("eventCreationForm").reset();
}

var eventLocationSearch;
function initializeEventLocationSearch() {
    eventLocationSearch = new google.maps.places.Autocomplete(
    /** @type {HTMLInputElement} */(document.getElementById('eventLocation')),
    { types: ['geocode'] });
    google.maps.event.addListener(eventLocationSearch, 'place_changed', function() {
    });
}

var lotLocationSearch;
function initializeLotLocationSearch() {
    lotLocationSearch = new google.maps.places.Autocomplete(
    /** @type {HTMLInputElement} */(document.getElementById('lotLocation')),
    { types: ['geocode'] });
    google.maps.event.addListener(lotLocationSearch, 'place_changed', function() {
    });
}

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('eventLocation')),
        {types: ['geocode']});
}

function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
        });
    }
}












