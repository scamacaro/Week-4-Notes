# Week-4-Notes
week 4 notes 
6/3/22 Class Notes 
Make a log in
Username and password when you log in 
We are going to create a form to have user input. 
Event name
Theme
<!DOCTYPE html>
<!--This is for notes purpose Live class 06/01/22 Sanyerlis Camacaro sancamac@uat.edu-->

<html>
    <script src="Live 6 3 22 login.js"></script>
    <link href="Live 6 3 22 login.css" rel="stylesheet" type="text/css" />
    <head>
        <title> UAT Space Login</title>
    </head>

    <body>
        <h1>
            Welcome to Game Night!!!''
        </h1>
        <br>
        <p id="loginStatus" class="loginID">Status of login...</p>
        <br>
        <form id="credSubmit" onsubmit="return false">
            Event Name:      <input type="text" id="eventName" /> <br>
            Theme:      <input type="text" id="theme" /> <br>
            Number of Participants:   <input type="number" id="numPart" /> <br>
            <input type="submit" onclick="checkCreds();" />
        </form>
    </body>

    </html>
.loginID {
    font-weight: bolder;
}

body {
    background-color: rgb(8, 9, 9);
}

p {
    color: white;
}
form {
    color: white;
}

h1 {
    color: white;
}


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
    location.replace("tables.html");
}
    }

After you successfully log in it will show a box with rummy scores. 
Location.replace takes your to another .html.
<!DOCTYPE html>
<!--this is a webpage made to fulfil assign for cs102-->


<html>

<head>
    <!--links my javascript fule to the html file-->

    <!--this links my css file to this html-->
    <link href="live 6 3 22 login.css" rel="stylesheet" type="text/css" />
    <!--This is where my title for the webpage goes-->

    <title>
        Game Night
    </title>
</head>

<body>
    <table class="tableTop">
        <tr>
            <!--tr defines a row in a table-->

            <td>
                <h1>
                    Rummy Scores
                </h1>
            </td>
        </table>
        <table id="data" border="2" width="85%">
            <col style="width: 20%;">
            <col style="width: 20%;">
            <col style="width: 20%;">
            <col style="width: 20%;">
            <thead>
                <tr style="=font-family: fantasy;">
                    <th>Round</th>
                    <th>Luke</th>
                    <th>Rob</th>
                    <th>Sam</th>
                    <th>Jill</th>

