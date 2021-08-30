import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBOCiDXhVVWbxqmj9kJVWD4Y3NMpIizB9M",
    authDomain: "instagram-clone-b499c.firebaseapp.com",
    databaseURL: "https://instagram-clone-b499c-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-b499c",
    storageBucket: "instagram-clone-b499c.appspot.com",
    messagingSenderId: "542167389862",
    appId: "1:542167389862:web:9b0f51849b33da06934667",
    measurementId: "G-TJ8QK55E8Z"

};


const db = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };


//export default debugger;