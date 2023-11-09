// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCfVwV7-JfVzXpDa8yEJ2qd9Z00N_S8Fig",
    authDomain: "project-c100-d7494.firebaseapp.com",
    projectId: "project-c100-d7494",
    storageBucket: "project-c100-d7494.appspot.com",
    messagingSenderId: "659319791426",
    appId: "1:659319791426:web:6b8e5b747677feecd732db"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
 
    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";

}



