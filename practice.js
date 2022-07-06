apiKey: "AIzaSyBBBZT-_hP3F7LGOhk7T-cyplUQjKWr9dE",
  authDomain: "practice-activity-66255.firebaseapp.com",
  projectId: "practice-activity-66255",
  storageBucket: "practice-activity-66255.appspot.com",
  messagingSenderId: "189255796078",
  appId: "1:189255796078:web:ecefacbbc0fc2ca61f6d7f"

//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update(
        purpose :  "adding user"
 );  
}