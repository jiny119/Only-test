let tasks = [
    { name: "Watch an Ad", type: "ads", reward: 5 },
    { name: "Install an App", type: "install", reward: 10 },
    { name: "Complete a Survey", type: "survey", reward: 15 },
    { name: "Play a Game", type: "gaming", reward: 20 }
];

function showTasks() {
    let taskContainer = document.getElementById("task-list");
    taskContainer.innerHTML = "";
    tasks.forEach((task, index) => {
        taskContainer.innerHTML += `
            <li>${task.name} - Reward: ${task.reward} Coins 
                <button onclick="completeTask(${index})">Complete</button>
            </li>`;
    });
}

function completeTask(index) {
    let coins = parseInt(localStorage.getItem("coins")) || 0;
    coins += tasks[index].reward;
    localStorage.setItem("coins", coins);
    document.getElementById("coin-count").innerText = `Coins: ${coins}`;
    alert(`${tasks[index].name} Completed! You earned ${tasks[index].reward} Coins.`);
}

document.addEventListener("DOMContentLoaded", showTasks);
