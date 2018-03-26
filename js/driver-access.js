document.getElementById("clock-in").onClick = function() {clockIn()};
document.getElementById("clock-out").onClick = function() {clockOut()};

function clockIn() {
    document.getElementById("clocked-in").innerHTML = "You are clocked in.";
}

function clockOut() {
    document.getElementById("clocked-in").innerHTML = "You are clocked out.";
}