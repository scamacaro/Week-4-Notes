

function checkCreds() {

    var eventName = document.getElementById(."eventName").value;
    var theme = document.getElementById("theme").value;
    var peopleCount = document.getElementById("numPart").value;
    var eventInfo = eventName + " " +  theme;
    if (eventInfo.length >20   eventInfo.length <4) {
        // if (eventInfo.length > 40   eventInfo.length <2) {
            .document.getElementById("loginStatus").inerHTML = "EventInfo has invalid number of characters!";
        }
        else if (peopleCount >20)  peopleCount <2) {
            document.getElementById("loginStatus".innerHTML) = "Number of participants is an invalid number!";
        }
else {
    alert("Access Granted, Welcome" + eventInfo + "!"):
    location.replace("Live 6 3 22 Tables.html");
}
    }