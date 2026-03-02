const SECRET_CODE = "PhaxIsTuff";

let adminUnlocked = false;
let autoClickInterval = null;
let infiniteMoney = false;
let clickMultiplier = 1;
let productionMultiplier = 1;

// Toggle panel with Tab
document.addEventListener("keydown", function(e) {
    if (e.key === "Tab") {
        e.preventDefault();
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

// ===== MONEY CONTROLS =====

function addMoney(amount) {
    if (!adminUnlocked) return;
    if (typeof money !== "undefined") {
        money += amount;
    }
}

function setMoney(amount) {
    if (!adminUnlocked) return;
    if (typeof money !== "undefined") {
        money = amount;
    }
}

function toggleInfiniteMoney() {
    if (!adminUnlocked) return;

    infiniteMoney = !infiniteMoney;

    if (infiniteMoney) {
        setInterval(() => {
            if (typeof money !== "undefined") {
                money += 10000;
            }
        }, 100);
        alert("Infinite Money ON");
    } else {
        alert("Infinite Money OFF (refresh to fully stop)");
    }
}

// ===== CLICK MULTIPLIERS =====

function setClickMultiplier(mult) {
    if (!adminUnlocked) return;
    clickMultiplier = mult;
    alert("Click Multiplier set to x" + mult);
}

// Override click behavior
document.addEventListener("click", function() {
    if (!adminUnlocked) return;

    if (typeof money !== "undefined") {
        money += (10 * clickMultiplier);
    }
});

// ===== OP AUTO CLICKER =====

function toggleOPAutoClicker() {
    if (!adminUnlocked) return;

    if (autoClickInterval) {
        clearInterval(autoClickInterval);
        autoClickInterval = null;
        alert("OP AutoClicker OFF");
    } else {
        autoClickInterval = setInterval(() => {
            if (typeof money !== "undefined") {
                money += 100;
            }
        }, 1); // 100 per millisecond
        alert("OP AutoClicker ON");
    }
}

// ===== GAME SPEED BOOST =====

function boostProduction() {
    if (!adminUnlocked) return;
    productionMultiplier = 100;
    alert("Production x100");
}
