import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Signup Function
export async function signupUser(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signup Successful:", userCredential.user);
    } catch (error) {
        console.error("Signup Error:", error.message);
    }
}

// Login Function
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login Successful:", userCredential.user);
    } catch (error) {
        console.error("Login Error:", error.message);
    }
}
