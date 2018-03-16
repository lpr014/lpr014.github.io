// Generates the navbar at the top of the page, still needs tweaking
function genNavBar(){
    var navBar = document.createElement("nav");
    navBar.className = "navbar sticky-top navbar-expand-lg navbar-dark bg-primary";
    var newA = document.createElement("a");
    newA.innerText = "Parking Vu", newA.href = "./index.html", newA.className = "navbar-brand";
    navBar.appendChild(newA);

    var newButton = document.createElement("button");
    newButton.className = "navbar-toggler", newButton.type = "button";
    newButton.setAttribute("data-toggle", "collapse");
    newButton.setAttribute("data-target", "#navbarToggler");
    newButton.setAttribute("aria-controls", "navbarToggler");
    newButton.setAttribute("aria-expanded", "false");
    newButton.setAttribute("aria-label", "Toggle navigation");

    var newSpan = document.createElement("span");
    newSpan.className = "navbar-toggler-icon";
    newButton.appendChild(newSpan);
    navBar.appendChild(newButton);

    var newDiv = document.createElement("div");
    newDiv.className = "collapse navbar-collapse";
    newDiv.id = "navbarToggler";
    navBar.appendChild(newDiv);

    var newUL = document.createElement("ul");
    newUL.className = "navbar-nav mr-auto mt-2 mt-lg-0";
    newDiv.appendChild(newUL);

    var newLI = document.createElement("li");
    if (window.location.pathname.endsWith("index.html")){newLI.className = "nav-item active";}
    else {newLI.className = "nav-item";}
    newA = document.createElement("a");
    newA.className = "nav-link", newA.href = "./index.html", newA.innerText = "Home";
    newLI.appendChild(newA);
    newUL.appendChild(newLI);

    newLI = document.createElement("li");
    if (window.location.pathname.endsWith("EventMap.html")){newLI.className = "nav-item active";}
    else {newLI.className = "nav-item";}
    newA = document.createElement("a");
    newA.className = "nav-link", newA.href = "./EventMap.html", newA.innerText = "Events";
    newLI.appendChild(newA);
    newUL.appendChild(newLI);

    newLI = document.createElement("li");
    if (window.location.pathname.endsWith("driver_access.html")){newLI.className = "nav-item active";}
    else {newLI.className = "nav-item";}
    newA = document.createElement("a");
    newA.className = "nav-link", newA.href = "#", newA.innerText = "Driver Access";
    newLI.appendChild(newA);
    newUL.appendChild(newLI);

    newLI = document.createElement("li");
    if (window.location.pathname.endsWith("CreationPage.html")){newLI.className = "nav-item active";}
    else {newLI.className = "nav-item";}
    newA = document.createElement("a");
    newA.className = "nav-link disabled", newA.href = "./CreationPage.html", newA.innerText = "New Lot/Event";
    newLI.appendChild(newA);
    newUL.appendChild(newLI);

    newLI = document.createElement("li");
    if (window.location.pathname.endsWith("Owner_Attendant_Lot_Access.html")){newLI.className = "nav-item active";}
    else {newLI.className = "nav-item";}
    newA = document.createElement("a");
    newA.className = "nav-link disabled", newA.href = "./Owner_Attendant_Lot_Access.html", newA.innerText = "Worker Access";
    newLI.appendChild(newA);
    newUL.appendChild(newLI);

    newLI = document.createElement("li");
    if (window.location.pathname.endsWith("registrationPage.html")){newLI.className = "nav-item active";}
    else {newLI.className = "nav-item";}
    newA = document.createElement("a");
    newA.className = "nav-link", newA.href = "#", newA.innerText = "Login/Register";
    newLI.appendChild(newA);
    newUL.appendChild(newLI);

    document.body.appendChild(navBar);
}