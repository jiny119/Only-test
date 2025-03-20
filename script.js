let users = [];
let currentUser = null;
let coins = 0;

// Signup Function
function signup() {
    let username = document.getElementById("signupUser").value;
    let password = document.getElementById("signupPass").value;

    if (username && password) {
        users.push({ username, password, coins: 0 });
        alert("Signup Successful! Now Login.");
    } else {
        alert("Please enter a valid username and password.");
    }
}

// Login Function
function login() {
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let userFound = users.find(user => user.username === username && user.password === password);

    if (userFound) {
        currentUser = userFound;
        coins = userFound.coins;
        document.getElementById("userName").innerText = username;
        document.getElementById("coins").innerText = coins;

        document.getElementById("auth").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        alert("Invalid Username or Password!");
    }
}

// Complete Task (Earn 5 Coins)
function completeTask() {
    if (currentUser) {
        coins += 5;
        currentUser.coins = coins;
        document.getElementById("coins").innerText = coins;
    }
}

// Withdraw Coins
function withdraw() {
    if (coins >= 15000) {
        alert("Withdrawal Successful! You have redeemed 15000 coins.");
        coins -= 15000;
        currentUser.coins = coins;
        document.getElementById("coins").innerText = coins;
    } else {
        alert("You need at least 15000 coins to withdraw.");
    }
}

// Share & Earn (Dummy)
function share() {
    alert("Shared Successfully! Keep earning.");
}
