
//ADD YOUR FIREBASE LINKS HERE
const config = {
      apiKey: "AIzaSyBADqNw1FWdn4TC_yEuLBuMIOI2ww1nGRE",
      authDomain: "kwitter-c523d.firebaseapp.com",
      databaseURL: "https://kwitter-c523d-default-rtdb.firebaseio.com",
      projectId: "kwitter-c523d",
      storageBucket: "kwitter-c523d.appspot.com",
      messagingSenderId: "212776154077",
      appId: "1:212776154077:web:ca5bbf39248fd26eb6bc34"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpuse:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
