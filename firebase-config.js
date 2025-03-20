import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAqKbPSwF_INJfGD7ADuo5-YkzO9dpJAL4",
    authDomain: "mytaskapp-e0e42.firebaseapp.com",
    databaseURL: "https://mytaskapp-e0e42-default-rtdb.firebaseio.com",
    projectId: "mytaskapp-e0e42",
    storageBucket: "mytaskapp.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcd1234"
};

// Firebase Initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
