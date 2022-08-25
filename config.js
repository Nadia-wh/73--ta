import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCE8M1wiZwd0iwtkytt77veRKL7XkoZqWo",
  authDomain: "class-71-38af1.firebaseapp.com",
  projectId: "class-71-38af1",
  storageBucket: "class-71-38af1.appspot.com",
  messagingSenderId: "735255197275",
  appId: "1:735255197275:web:7d16b65ab4f175c96bb17e"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
