
import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyDlYt-hon1cNQUYVGfYqrZuP_PSpCz4cbY",
        authDomain: "todo-app-ae2f2.firebaseapp.com",
        projectId: "todo-app-ae2f2",
        storageBucket: "todo-app-ae2f2.appspot.com",
        messagingSenderId: "535044721018",
        appId: "1:535044721018:web:c96c2336799ae0053a6ec3",
        measurementId: "G-BXZ0QQZ5MR"
        

    }
);
const db= firebaseApp.firestore();

export{db}; 