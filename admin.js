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
// GET REACT GAME
// =============================
function getGame() {
    return window.reactClicker || null;
}

// =============================
// UNLOCK ADMIN
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
// 🔓 PUBLIC RESET ALL (ALWAYS WORKS)
// =============================
function resetAll() {
    const game = getGame();
    if (!game) return;

    game.setState({
        clicks: 0,
        upgrades: game.state.upgrades.map(() => 0)
    });

    alert("Game Fully Reset");
}

// =============================
// MONEY CONTROLS (LOCKED)
// =============================
function addMoney(amount) {
    if (!adminUnlocked) return;

    const game = getGame();
    if (!game) return;

    game.setState(prev => ({
        clicks: prev.clicks + amount
    }));
}

function setMoney(amount) {
    if (!adminUnlocked) return;

    const game = getGame();
    if (!game) return;

    game.setState({ clicks: amount });
}

function toggleInfiniteMoney() {
    if (!adminUnlocked) return;

    const game = getGame();
    if (!game) return;

    if (infiniteInterval) {
        clearInterval(infiniteInterval);
        infiniteInterval = null;
        alert("Infinite OFF");
    } else {
        infiniteInterval = setInterval(() => {
            game.setState(prev => ({
                clicks: prev.clicks + 10000
            }));
        }, 100);
        alert("Infinite ON");
    }
}

// =============================
// CLICK MULTIPLIER (LOCKED)
// =============================
function setClickMultiplier(mult) {
    if (!adminUnlocked) return;
    clickMultiplier = mult;
    alert("Click Multiplier x" + mult);
}

document.addEventListener("click", function() {
    if (!adminUnlocked) return;

    const game = getGame();
    if (!game) return;

    game.setState(prev => ({
        clicks: prev.clicks + (clickMultiplier - 1)
    }));
});

// =============================
// OP AUTO CLICKER (LOCKED)
// =============================
function toggleOPAutoClicker() {
    if (!adminUnlocked) return;

    const game = getGame();
    if (!game) return;

    if (autoClickInterval) {
        clearInterval(autoClickInterval);
        autoClickInterval = null;
        alert("OP AutoClicker OFF");
    } else {
        autoClickInterval = setInterval(() => {
            game.setState(prev => ({
                clicks: prev.clicks + 100
            }));
        }, 1);
        alert("OP AutoClicker ON");
    }
}
