// ===== SECRET CODE =====
const SECRET_CODE = "PHAXS-ADMIN-2026";

let adminUnlocked = false;
let autoClickInterval = null;

// Open panel with F8
document.addEventListener("keydown", function(e) {
    if (e.key === "F8") {
        const panel = document.getElementById("adminPanel");
        panel.style.display = panel.style.display === "none" ? "block" : "none";
    }
});

function unlockAdmin() {
    const input = document.getElementById("adminCodeInput").value;
    if (input === SECRET_CODE) {
        adminUnlocked = true;
        document.getElementById("adminControls").style.display = "block";
        alert("Admin Access Granted");
    } else {
        alert("Wrong Code");
    }
}

// ===== MODIFY THESE TO MATCH YOUR GAME VARIABLES =====

// Example assumes global variable called money
function setMoney(amount) {
    if (!adminUnlocked) return;
    money = amount;
}

function addMoney(amount) {
    if (!adminUnlocked) return;
    money += amount;
}

function setClickPower(power) {
    if (!adminUnlocked) return;
    clickPower = power;
}

function toggleAutoClicker() {
    if (!adminUnlocked) return;

    if (autoClickInterval) {
        clearInterval(autoClickInterval);
        autoClickInterval = null;
        alert("AutoClicker OFF");
    } else {
        autoClickInterval = setInterval(() => {
            money += 100; // change value here
        }, 1); // 1ms interval
        alert("AutoClicker ON");
    }
}

function maxUpgrades() {
    if (!adminUnlocked) return;
    if (typeof upgrades !== "undefined") {
        upgrades.forEach(u => u.level = 999);
    }
}

function resetGame() {
    if (!adminUnlocked) return;
    money = 0;
}
