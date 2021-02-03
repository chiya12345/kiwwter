//YOUR FIREBASE LINKS
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
user_name=localstorage.getitem("user_name");
room_name=localstorage("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
