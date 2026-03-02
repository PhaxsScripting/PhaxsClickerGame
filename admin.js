// =============================
// PHAXS ADMIN SYSTEM
// =============================

const SECRET_CODE = "67";

let adminUnlocked = false;
let autoClickInterval = null;
let infiniteInterval = null;
let clickMultiplier = 1;

// =============================
// OPEN PANEL WITH TAB
// =============================
document.addEventListener("keydown", function(e) {
    if (e.key === "`") {
        e.preventDefault();
        const panel = document.getElementById("adminPanel");
        panel.style.display = panel.style.display === "none" ? "block" : "none";
    }
});

// =============================
// GET SCENE SAFELY
// =============================
function getScene() {
    if (!window.game) {
        console.log("Game not loaded yet");
        return null;
    }

    let scenes = Object.values(game.scene.keys);
    if (!scenes.length) return null;

    return scenes[0];
}

// =============================
// UNLOCK
// =============================
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

// =============================
// MONEY CONTROLS
// =============================
function addMoney(amount) {
    if (!adminUnlocked) return;

    let scene = getScene();
    if (!scene) return;

    scene._data.currentMoney += amount;
}

function setMoney(amount) {
    if (!adminUnlocked) return;

    let scene = getScene();
    if (!scene) return;

    scene._data.currentMoney = amount;
}

function toggleInfiniteMoney() {
    if (!adminUnlocked) return;

    let scene = getScene();
    if (!scene) return;

    if (infiniteInterval) {
        clearInterval(infiniteInterval);
        infiniteInterval = null;
        alert("Infinite Money OFF");
    } else {
        infiniteInterval = setInterval(() => {
            scene._data.currentMoney += 10000;
        }, 100);
        alert("Infinite Money ON");
    }
}

// =============================
// CLICK MULTIPLIER
// =============================
function setClickMultiplier(mult) {
    if (!adminUnlocked) return;

    clickMultiplier = mult;
    alert("Click Multiplier x" + mult);
}

// Hook into click system
document.addEventListener("click", function() {
    if (!adminUnlocked) return;

    let scene = getScene();
    if (!scene) return;

    scene._data.currentMoney += (10 * clickMultiplier);
    scene._data.clicks += clickMultiplier;
});

// =============================
// OP AUTO CLICKER (100 per ms)
// =============================
function toggleOPAutoClicker() {
    if (!adminUnlocked) return;

    let scene = getScene();
    if (!scene) return;

    if (autoClickInterval) {
        clearInterval(autoClickInterval);
        autoClickInterval = null;
        alert("OP AutoClicker OFF");
    } else {
        autoClickInterval = setInterval(() => {
            scene._data.currentMoney += 100;
            scene._data.clicks += 1;
        }, 1);
        alert("OP AutoClicker ON");
    }
}

// =============================
// PRODUCTION BOOST
// =============================
function boostProduction() {
    if (!adminUnlocked) return;

    let scene = getScene();
    if (!scene) return;

    if (scene._data.productionPerSecond) {
        scene._data.productionPerSecond *= 100;
        alert("Production x100");
    } else {
        alert("No production variable found");
    }
}
