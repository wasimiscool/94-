var firebaseConfig = {
    apiKey: "AIzaSyDb5pP6vTwhmQwVmgqYcJ0usjOTSSOe8jE",
    authDomain: "kwitter-project-21963.firebaseapp.com",
    databaseURL: "https://kwitter-project-21963-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-21963",
    storageBucket: "kwitter-project-21963.appspot.com",
    messagingSenderId: "616139780242",
    appId: "1:616139780242:web:0c0ef128de2aa947f1f64b",
    measurementId: "G-94FSQBJ9Q8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function logout() {
    window.location.replace('index.html');
    localStorage.removeItem('User Name');
}

function addRoom() {
    roomname = document.getElementById("roomName").value;
    firebase.database().ref("/").child(roomname).update({
        purpose: "Room Name"
    });
    row = "<div style='cursor:pointer;' class='room_name' id='" + Room_names + "' onclick='redirect_to_roomname(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById('output').innerHTML += row;
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Names:\n" + Room_names);
            row = "<div class='room_name' id='" + Room_names + "' onclick='redirect_to_roomname(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById('output').innerHTML += row;
            //End code
        });
    });
}
getData();

function redirect_to_roomname(name) {
    console.log(name);
    localStorage.setItem("Room_name", name);
    window.location = "page.htm";
}