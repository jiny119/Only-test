import { database } from "./firebase-config.js";
import { ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// User Data Save
export async function saveUserData(userId, name, email, coins) {
    try {
        await set(ref(database, 'users/' + userId), {
            username: name,
            email: email,
            coins: coins
        });
        console.log("User Data Saved Successfully!");
    } catch (error) {
        console.error("Data Save Error:", error.message);
    }
}

// User Data Fetch
export async function getUserData(userId) {
    try {
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, 'users/' + userId));
        if (snapshot.exists()) {
            console.log("User Data:", snapshot.val());
        } else {
            console.log("No Data Found!");
        }
    } catch (error) {
        console.error("Data Read Error:", error.message);
    }
}
