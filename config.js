import firebase from "firebase"
require ("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyDZ1V8dsZ8jIcgkqYUDEM5HawHNQKkyex0",
    authDomain: "classnotes-89dcc.firebaseapp.com",
    projectId: "classnotes-89dcc",
    storageBucket: "classnotes-89dcc.appspot.com",
    messagingSenderId: "88426406965",
    appId: "1:88426406965:web:40c9a3041d29c4abeafd7c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();