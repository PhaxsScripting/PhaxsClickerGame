// =============================
// PHAXS ADMIN SYSTEM
// =============================

const SECRET_CODE = "67";

let adminUnlocked = false;

let infiniteInterval = null;
let slowInfiniteInterval = null;
let fastInfiniteInterval = null;
let autoClickInterval = null;
let superAutoInterval = null;
let ultraAutoInterval = null;

let clickMultiplier = 1;

// =============================
// PANEL TOGGLE
// =============================
document.addEventListener("keydown", function(e) {
    if (e.key === "`") {
        const panel = document.getElementById("adminPanel");
        panel.style.display =
            panel.style.display === "block" ? "none" : "block";
    }
});

// =============================
// GET REACT GAME
// =============================
function getGame() {
    return window.reactClicker || null;
}

// =============================
// 🔓 PUBLIC RESET ALL
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
// MONEY MODS (LOCKED)
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

function maxMoney() {
    if (!adminUnlocked) return;
    setMoney(999999999999);
}

function halveMoney() {
    if (!adminUnlocked) return;
    const game = getGame();
    if (!game) return;

    game.setState(prev => ({
        clicks: Math.floor(prev.clicks / 2)
    }));
}

function doubleMoney() {
    if (!adminUnlocked) return;
    const game = getGame();
    if (!game) return;

    game.setState(prev => ({
        clicks: prev.clicks * 2
    }));
}

function randomMoney() {
    if (!adminUnlocked) return;
    setMoney(Math.floor(Math.random() * 100000000));
}

function stealMoney() {
    if (!adminUnlocked) return;
    const game = getGame();
    if (!game) return;

    game.setState(prev => ({
        clicks: Math.floor(prev.clicks * 0.9)
    }));
}

function addPercentage(p) {
    if (!adminUnlocked) return;
    const game = getGame();
    if (!game) return;

    game.setState(prev => ({
        clicks: Math.floor(prev.clicks * (1 + p / 100))
    }));
}

function setNegative() {
    if (!adminUnlocked) return;
    setMoney(-1000);
}

function setToOne() {
    if (!adminUnlocked) return;
    setMoney(1);
}

// =============================
// INFINITE MODS
// =============================
function toggleInfiniteMoney() {
    if (!adminUnlocked) return;
    const game = getGame();
    if (!game) return;

    if (infiniteInterval) {
        clearInterval(infiniteInterval);
        infiniteInterval = null;
    } else {
        infiniteInterval = setInterval(() => {
            game.setState(prev => ({
                clicks: prev.clicks + 10000
            }));
        }, 100);
    }
}

function toggleSlowInfinite() {
    if (!adminUnlocked) return;
    const game = getGame();
    if (!game) return;

    if (slowInfiniteInterval) {
        clearInterval(slowInfiniteInterval);
        slowInfiniteInterval = null;
    } else {
        slowInfiniteInterval = setInterval(() => {
            game.setState(prev => ({
                clicks: prev.clicks + 100
            }));
        }, 1000);
    }
}

function toggleFastInfinite() {
    if (!adminUnlocked) return;
    const game = getGame();
    if (!game) return;

    if (fastInfiniteInterval) {
        clearInterval(fastInfiniteInterval);
        fastInfiniteInterval = null;
    } else {
        fastInfiniteInterval = setInterval(() => {
            game.setState(prev => ({
                clicks: prev.clicks + 50000
            }));
        }, 10);
    }
}

// =============================
// CLICK MULTIPLIER
// =============================
function setClickMultiplier(mult) {
    if (!adminUnlocked) return;
    clickMultiplier = mult;
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
// AUTO CLICKERS
// =============================
function toggleAutoClicker() {
    if (!adminUnlocked) return;
    const game = getGame();
    if (!game) return;

    if (autoClickInterval) {
        clearInterval(autoClickInterval);
        autoClickInterval = null;
    } else {
        autoClickInterval = setInterval(() => {
            game.setState(prev => ({
                clicks: prev.clicks + 1
            }));
        }, 100);
    }
}

function toggleSuperAutoClicker() {
    if (!adminUnlocked) return;
    const game = getGame();
    if (!game) return;

    if (superAutoInterval) {
        clearInterval(superAutoInterval);
        superAutoInterval = null;
    } else {
        superAutoInterval = setInterval(() => {
            game.setState(prev => ({
                clicks: prev.clicks + 50
            }));
        }, 10);
    }
}

function toggleUltraAutoClicker() {
    if (!adminUnlocked) return;
    const game = getGame();
    if (!game) return;

    if (ultraAutoInterval) {
        clearInterval(ultraAutoInterval);
        ultraAutoInterval = null;
    } else {
        ultraAutoInterval = setInterval(() => {
            game.setState(prev => ({
                clicks: prev.clicks + 500
            }));
        }, 1);
    }
}
