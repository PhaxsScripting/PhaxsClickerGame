// =============================
// PHAXS ADMIN SYSTEM (React Compatible)
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
// GET REACT GAME INSTANCE
// =============================
function getGame() {
    return window.reactClicker || null;
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

    let game = getGame();
    if (!game) return;

    game.setState({
        clicks: game.state.clicks + amount
    });
}

function setMoney(amount) {
    if (!adminUnlocked) return;

    let game = getGame();
    if (!game) return;

    game.setState({
        clicks: amount
    });
}

function toggleInfiniteMoney() {
    if (!adminUnlocked) return;

    let game = getGame();
    if (!game) return;

    if (infiniteInterval) {
        clearInterval(infiniteInterval);
        infiniteInterval = null;
        alert("Infinite OFF");
    } else {
        infiniteInterval = setInterval(() => {
            game.setState({
                clicks: game.state.clicks + 10000
            });
        }, 100);
        alert("Infinite ON");
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

// Hook into clicks
document.addEventListener("click", function() {
    if (!adminUnlocked) return;

    let game = getGame();
    if (!game) return;

    game.setState({
        clicks: game.state.clicks + (clickMultiplier - 1)
    });
});

// =============================
// OP AUTO CLICKER
// =============================
function toggleOPAutoClicker() {
    if (!adminUnlocked) return;

    let game = getGame();
    if (!game) return;

    if (autoClickInterval) {
        clearInterval(autoClickInterval);
        autoClickInterval = null;
        alert("OP AutoClicker OFF");
    } else {
        autoClickInterval = setInterval(() => {
            game.setState({
                clicks: game.state.clicks + 100
            });
        }, 1);
        alert("OP AutoClicker ON");
    }
}

// =============================
// PRODUCTION BOOST
// =============================
function boostProduction() {
    if (!adminUnlocked) return;

    let game = getGame();
    if (!game) return;

    if (game.props.updateInterval) {
        alert("Production boost active (visual only in this version)");
    } else {
        alert("No production variable found");
    }
}
