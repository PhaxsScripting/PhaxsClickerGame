// =============================
// PHAXS ADMIN SYSTEM (FIXED)
// =============================

const SECRET_CODE = "67";

let adminUnlocked = false;
let autoClickInterval = null;
let infiniteInterval = null;
let clickMultiplier = 1;

// =============================
// OPEN PANEL WITH ` KEY
// =============================
document.addEventListener("keydown", function(e) {
    if (e.key === "`") {
        e.preventDefault();
        const panel = document.getElementById("adminPanel");
        panel.style.display =
            panel.style.display === "none" ? "block" : "none";
    }
});

// =============================
// GET ACTIVE SCENE
// =============================
function getScene() {
    if (!window.game) return null;

    const scenes = game.scene.getScenes(true);
    if (!scenes.length) return null;

    return scenes[0];
}

// =============================
// FORCE UI UPDATE
// =============================
function refreshUI(scene) {
    if (scene && scene.events) {
        scene.events.emit("update");
    }
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

    const scene = getScene();
    if (!scene) return;

    scene.currentMoney += amount;
    refreshUI(scene);
}

function setMoney(amount) {
    if (!adminUnlocked) return;

    const scene = getScene();
    if (!scene) return;

    scene.currentMoney = amount;
    refreshUI(scene);
}

function toggleInfiniteMoney() {
    if (!adminUnlocked) return;

    const scene = getScene();
    if (!scene) return;

    if (infiniteInterval) {
        clearInterval(infiniteInterval);
        infiniteInterval = null;
        alert("Infinite Money OFF");
    } else {
        infiniteInterval = setInterval(() => {
            scene.currentMoney += 10000;
            refreshUI(scene);
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

// Hook only clicker button
document.addEventListener("click", function(e) {
    if (!adminUnlocked) return;

    const scene = getScene();
    if (!scene) return;

    if (e.target && e.target.tagName === "CANVAS") {
        scene.currentMoney += (10 * clickMultiplier);
        scene.totalClicks += clickMultiplier;
        refreshUI(scene);
    }
});

// =============================
// OP AUTO CLICKER
// =============================
function toggleOPAutoClicker() {
    if (!adminUnlocked) return;

    const scene = getScene();
    if (!scene) return;

    if (autoClickInterval) {
        clearInterval(autoClickInterval);
        autoClickInterval = null;
        alert("OP AutoClicker OFF");
    } else {
        autoClickInterval = setInterval(() => {
            scene.currentMoney += 100;
            scene.totalClicks += 1;
            refreshUI(scene);
        }, 10);
        alert("OP AutoClicker ON");
    }
}

// =============================
// PRODUCTION BOOST
// =============================
function boostProduction() {
    if (!adminUnlocked) return;

    const scene = getScene();
    if (!scene) return;

    if (scene.productionPerSecond) {
        scene.productionPerSecond *= 100;
        alert("Production x100");
    } else {
        alert("Production variable not found");
    }
}
