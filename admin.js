// =========================
// PHAXS OPEN ADMIN SYSTEM
// =========================

let infiniteInterval = null;
let slowInfiniteInterval = null;
let fastInfiniteInterval = null;
let autoClickInterval = null;
let superAutoInterval = null;
let ultraAutoInterval = null;
let productionBoost = false;
let clickMultiplier = 1;

// =========================
// GET GAME
// =========================
function getGame(){
    return window.reactClicker || null;
}

// =========================
// PANEL
// =========================
function togglePanel(){
    const panel = document.getElementById("adminPanel");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
}

// =========================
// MONEY
// =========================
function addMoney(amount){
    const game = getGame();
    if(!game) return;
    game.setState({ clicks: game.state.clicks + amount });
}

function setMoney(amount){
    const game = getGame();
    if(!game) return;
    game.setState({ clicks: amount });
}

function maxMoney(){
    setMoney(999999999999);
}

function halveMoney(){
    const game = getGame();
    if(!game) return;
    game.setState({ clicks: Math.floor(game.state.clicks / 2) });
}

function doubleMoney(){
    const game = getGame();
    if(!game) return;
    game.setState({ clicks: game.state.clicks * 2 });
}

function randomMoney(){
    setMoney(Math.floor(Math.random()*100000000));
}

function stealMoney(){
    const game = getGame();
    if(!game) return;
    game.setState({ clicks: Math.floor(game.state.clicks * 0.9) });
}

function addPercentage(p){
    const game = getGame();
    if(!game) return;
    game.setState({ clicks: Math.floor(game.state.clicks * (1 + p/100)) });
}

function setNegative(){
    setMoney(-1000);
}

function setToOne(){
    setMoney(1);
}

// =========================
// INFINITE
// =========================
function toggleInfiniteMoney(){
    const game = getGame();
    if(!game) return;

    if(infiniteInterval){
        clearInterval(infiniteInterval);
        infiniteInterval = null;
    } else {
        infiniteInterval = setInterval(()=>{
            game.setState({ clicks: game.state.clicks + 10000 });
        },100);
    }
}

function toggleSlowInfinite(){
    const game = getGame();
    if(!game) return;

    if(slowInfiniteInterval){
        clearInterval(slowInfiniteInterval);
        slowInfiniteInterval = null;
    } else {
        slowInfiniteInterval = setInterval(()=>{
            game.setState({ clicks: game.state.clicks + 100 });
        },1000);
    }
}

function toggleFastInfinite(){
    const game = getGame();
    if(!game) return;

    if(fastInfiniteInterval){
        clearInterval(fastInfiniteInterval);
        fastInfiniteInterval = null;
    } else {
        fastInfiniteInterval = setInterval(()=>{
            game.setState({ clicks: game.state.clicks + 50000 });
        },10);
    }
}

// =========================
// CLICK MULTIPLIER
// =========================
function setClickMultiplier(mult){
    clickMultiplier = mult;
}

document.addEventListener("click", function(){
    const game = getGame();
    if(!game) return;
    game.setState({ clicks: game.state.clicks + (clickMultiplier-1) });
});

// =========================
// AUTO CLICKERS
// =========================
function toggleAutoClicker(){
    const game = getGame();
    if(!game) return;

    if(autoClickInterval){
        clearInterval(autoClickInterval);
        autoClickInterval = null;
    } else {
        autoClickInterval = setInterval(()=>{
            game.setState({ clicks: game.state.clicks + 1 });
        },100);
    }
}

function toggleSuperAutoClicker(){
    const game = getGame();
    if(!game) return;

    if(superAutoInterval){
        clearInterval(superAutoInterval);
        superAutoInterval = null;
    } else {
        superAutoInterval = setInterval(()=>{
            game.setState({ clicks: game.state.clicks + 50 });
        },10);
    }
}

function toggleUltraAutoClicker(){
    const game = getGame();
    if(!game) return;

    if(ultraAutoInterval){
        clearInterval(ultraAutoInterval);
        ultraAutoInterval = null;
    } else {
        ultraAutoInterval = setInterval(()=>{
            game.setState({ clicks: game.state.clicks + 500 });
        },1);
    }
}

// =========================
// UPGRADES
// =========================
function buyAllUpgrades(){
    const game = getGame();
    if(!game) return;

    let upgrades = game.state.upgrades.map(()=>100);
    game.setState({ upgrades: upgrades });
}

function maxUpgrades(){
    const game = getGame();
    if(!game) return;

    let upgrades = game.state.upgrades.map(()=>9999);
    game.setState({ upgrades: upgrades });
}

function resetUpgrades(){
    const game = getGame();
    if(!game) return;

    let upgrades = game.state.upgrades.map(()=>0);
    game.setState({ upgrades: upgrades });
}

// =========================
// PRODUCTION
// =========================
function toggleProductionBoost(){
    productionBoost = !productionBoost;
}

function maxProduction(){
    const game = getGame();
    if(!game) return;

    game.props.updateInterval = 1;
}

// =========================
// FULL RESET
// =========================
function wipeGame(){
    const game = getGame();
    if(!game) return;

    game.setState({
        clicks: 0,
        upgrades: game.state.upgrades.map(()=>0)
    });

    location.reload();
}
