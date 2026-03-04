let adminUnlocked = false
let gameSpeed = 1
let chaosInterval = null
let decayInterval = null
let rapidInterval = null
let corruptionInterval = null

function resetAll(){
    localStorage.clear()
    location.reload()
}

function unlockAdmin(){
    const code = document.getElementById("adminCodeInput").value
    if(code === "phaxs"){
        adminUnlocked = true
        document.getElementById("adminControls").style.display = "block"
    }
}

function getClicks(){ return window.clicks || 0 }
function setClicks(v){ window.clicks = Math.floor(v) }

function requireAdmin(){ if(!adminUnlocked) return true }

function modifyClicks(v){ if(requireAdmin()) return; setClicks(getClicks()+v) }
function multiplyClicks(v){ if(requireAdmin()) return; setClicks(getClicks()*v) }
function divideClicks(v){ if(requireAdmin()) return; setClicks(getClicks()/v) }
function randomizeClicks(){ if(requireAdmin()) return; setClicks(Math.random()*1e9) }
function bankrupt(){ if(requireAdmin()) return; setClicks(0) }
function reverseClicks(){ if(requireAdmin()) return; setClicks(-getClicks()) }
function percentageBoost(p){ if(requireAdmin()) return; setClicks(getClicks()*(1+p/100)) }
function nanoBoost(){ if(requireAdmin()) return; setClicks(getClicks()+1) }
function massiveSpike(){ if(requireAdmin()) return; setClicks(getClicks()*1000) }
function prestigeBlast(){ if(requireAdmin()) return; setClicks(Math.sqrt(getClicks())*5000) }
function tripleRandom(){ if(requireAdmin()) return; setClicks(getClicks()*Math.random()*3) }
function halveRandom(){ if(requireAdmin()) return; setClicks(getClicks()*Math.random()*0.5) }

function gamble(){
    if(requireAdmin()) return
    if(Math.random()>0.5) setClicks(getClicks()*2)
    else setClicks(getClicks()/2)
}

function chaoticMoney(){
    if(requireAdmin()) return
    clearInterval(chaosInterval)
    chaosInterval=setInterval(()=>{
        setClicks(getClicks()*(Math.random()*4))
    },500)
}

function explodeClicks(){ if(requireAdmin()) return; setClicks(getClicks()*50) }

function drainOverTime(){
    if(requireAdmin()) return
    clearInterval(decayInterval)
    decayInterval=setInterval(()=>{ setClicks(getClicks()*0.95) },1000)
}

function slowDecay(){
    if(requireAdmin()) return
    clearInterval(decayInterval)
    decayInterval=setInterval(()=>{ setClicks(getClicks()*0.99) },1000)
}

function fastDecay(){
    if(requireAdmin()) return
    clearInterval(decayInterval)
    decayInterval=setInterval(()=>{ setClicks(getClicks()*0.8) },1000)
}

function maxUpgrades(){ if(requireAdmin()) return; window.upgrades = 9999 }
function wipeUpgrades(){ if(requireAdmin()) return; window.upgrades = 0 }
function duplicateUpgrades(){ if(requireAdmin()) return; window.upgrades *=2 }
function randomizeUpgrades(){ if(requireAdmin()) return; window.upgrades = Math.floor(Math.random()*5000) }
function spikeUpgrades(){ if(requireAdmin()) return; window.upgrades += 1000 }
function drainUpgrades(){ if(requireAdmin()) return; window.upgrades *=0.5 }
function boostUpgrades(){ if(requireAdmin()) return; window.upgrades += 500 }
function invertUpgrades(){ if(requireAdmin()) return; window.upgrades *= -1 }

function corruptUpgrades(){
    if(requireAdmin()) return
    clearInterval(corruptionInterval)
    corruptionInterval=setInterval(()=>{
        window.upgrades = Math.floor(Math.random()*10000)
    },1000)
}

function chaosUpgrades(){
    if(requireAdmin()) return
    window.upgrades = Math.floor(Math.random()*100000)
}

function speedGame(v){ if(requireAdmin()) return; gameSpeed=v }

function rapidFire(){
    if(requireAdmin()) return
    clearInterval(rapidInterval)
    rapidInterval=setInterval(()=>{ setClicks(getClicks()+100) },50)
}

function superRapid(){
    if(requireAdmin()) return
    clearInterval(rapidInterval)
    rapidInterval=setInterval(()=>{ setClicks(getClicks()+1000) },20)
}

function ultraRapid(){
    if(requireAdmin()) return
    clearInterval(rapidInterval)
    rapidInterval=setInterval(()=>{ setClicks(getClicks()+5000) },5)
}

function tickStorm(){
    if(requireAdmin()) return
    clearInterval(rapidInterval)
    rapidInterval=setInterval(()=>{ setClicks(getClicks()+Math.random()*10000) },100)
}

function timeWarp(){ if(requireAdmin()) return; setClicks(getClicks()*Math.random()*100) }
function infiniteLoop(){ if(requireAdmin()) return; setClicks(Infinity) }
function negativeInfinity(){ if(requireAdmin()) return; setClicks(-Infinity) }
function cubeClicks(){ if(requireAdmin()) return; setClicks(Math.pow(getClicks(),3)) }
function sqrtClicks(){ if(requireAdmin()) return; setClicks(Math.sqrt(getClicks())) }
function richMode(){ if(requireAdmin()) return; setClicks(1e15) }
function poorMode(){ if(requireAdmin()) return; setClicks(1) }
function flipSign(){ if(requireAdmin()) return; setClicks(getClicks()*-1) }
function exponentialMode(){ if(requireAdmin()) return; setClicks(Math.exp(10)) }
function logMode(){ if(requireAdmin()) return; setClicks(Math.log(getClicks()+1)*1000) }
function sinMode(){ if(requireAdmin()) return; setClicks(Math.sin(getClicks())*1000000) }
function cosMode(){ if(requireAdmin()) return; setClicks(Math.cos(getClicks())*1000000) }
function tanMode(){ if(requireAdmin()) return; setClicks(Math.tan(getClicks())*1000000) }let adminUnlocked = false
let gameSpeed = 1
let chaosInterval = null
let decayInterval = null
let rapidInterval = null
let corruptionInterval = null

function resetAll(){
    localStorage.clear()
    location.reload()
}

function unlockAdmin(){
    const code = document.getElementById("adminCodeInput").value
    if(code === "phaxs"){
        adminUnlocked = true
        document.getElementById("adminControls").style.display = "block"
    }
}

function getClicks(){ return window.clicks || 0 }
function setClicks(v){ window.clicks = Math.floor(v) }

function requireAdmin(){ if(!adminUnlocked) return true }

function modifyClicks(v){ if(requireAdmin()) return; setClicks(getClicks()+v) }
function multiplyClicks(v){ if(requireAdmin()) return; setClicks(getClicks()*v) }
function divideClicks(v){ if(requireAdmin()) return; setClicks(getClicks()/v) }
function randomizeClicks(){ if(requireAdmin()) return; setClicks(Math.random()*1e9) }
function bankrupt(){ if(requireAdmin()) return; setClicks(0) }
function reverseClicks(){ if(requireAdmin()) return; setClicks(-getClicks()) }
function percentageBoost(p){ if(requireAdmin()) return; setClicks(getClicks()*(1+p/100)) }
function nanoBoost(){ if(requireAdmin()) return; setClicks(getClicks()+1) }
function massiveSpike(){ if(requireAdmin()) return; setClicks(getClicks()*1000) }
function prestigeBlast(){ if(requireAdmin()) return; setClicks(Math.sqrt(getClicks())*5000) }
function tripleRandom(){ if(requireAdmin()) return; setClicks(getClicks()*Math.random()*3) }
function halveRandom(){ if(requireAdmin()) return; setClicks(getClicks()*Math.random()*0.5) }

function gamble(){
    if(requireAdmin()) return
    if(Math.random()>0.5) setClicks(getClicks()*2)
    else setClicks(getClicks()/2)
}

function chaoticMoney(){
    if(requireAdmin()) return
    clearInterval(chaosInterval)
    chaosInterval=setInterval(()=>{
        setClicks(getClicks()*(Math.random()*4))
    },500)
}

function explodeClicks(){ if(requireAdmin()) return; setClicks(getClicks()*50) }

function drainOverTime(){
    if(requireAdmin()) return
    clearInterval(decayInterval)
    decayInterval=setInterval(()=>{ setClicks(getClicks()*0.95) },1000)
}

function slowDecay(){
    if(requireAdmin()) return
    clearInterval(decayInterval)
    decayInterval=setInterval(()=>{ setClicks(getClicks()*0.99) },1000)
}

function fastDecay(){
    if(requireAdmin()) return
    clearInterval(decayInterval)
    decayInterval=setInterval(()=>{ setClicks(getClicks()*0.8) },1000)
}

function maxUpgrades(){ if(requireAdmin()) return; window.upgrades = 9999 }
function wipeUpgrades(){ if(requireAdmin()) return; window.upgrades = 0 }
function duplicateUpgrades(){ if(requireAdmin()) return; window.upgrades *=2 }
function randomizeUpgrades(){ if(requireAdmin()) return; window.upgrades = Math.floor(Math.random()*5000) }
function spikeUpgrades(){ if(requireAdmin()) return; window.upgrades += 1000 }
function drainUpgrades(){ if(requireAdmin()) return; window.upgrades *=0.5 }
function boostUpgrades(){ if(requireAdmin()) return; window.upgrades += 500 }
function invertUpgrades(){ if(requireAdmin()) return; window.upgrades *= -1 }

function corruptUpgrades(){
    if(requireAdmin()) return
    clearInterval(corruptionInterval)
    corruptionInterval=setInterval(()=>{
        window.upgrades = Math.floor(Math.random()*10000)
    },1000)
}

function chaosUpgrades(){
    if(requireAdmin()) return
    window.upgrades = Math.floor(Math.random()*100000)
}

function speedGame(v){ if(requireAdmin()) return; gameSpeed=v }

function rapidFire(){
    if(requireAdmin()) return
    clearInterval(rapidInterval)
    rapidInterval=setInterval(()=>{ setClicks(getClicks()+100) },50)
}

function superRapid(){
    if(requireAdmin()) return
    clearInterval(rapidInterval)
    rapidInterval=setInterval(()=>{ setClicks(getClicks()+1000) },20)
}

function ultraRapid(){
    if(requireAdmin()) return
    clearInterval(rapidInterval)
    rapidInterval=setInterval(()=>{ setClicks(getClicks()+5000) },5)
}

function tickStorm(){
    if(requireAdmin()) return
    clearInterval(rapidInterval)
    rapidInterval=setInterval(()=>{ setClicks(getClicks()+Math.random()*10000) },100)
}

function timeWarp(){ if(requireAdmin()) return; setClicks(getClicks()*Math.random()*100) }
function infiniteLoop(){ if(requireAdmin()) return; setClicks(Infinity) }
function negativeInfinity(){ if(requireAdmin()) return; setClicks(-Infinity) }
function cubeClicks(){ if(requireAdmin()) return; setClicks(Math.pow(getClicks(),3)) }
function sqrtClicks(){ if(requireAdmin()) return; setClicks(Math.sqrt(getClicks())) }
function richMode(){ if(requireAdmin()) return; setClicks(1e15) }
function poorMode(){ if(requireAdmin()) return; setClicks(1) }
function flipSign(){ if(requireAdmin()) return; setClicks(getClicks()*-1) }
function exponentialMode(){ if(requireAdmin()) return; setClicks(Math.exp(10)) }
function logMode(){ if(requireAdmin()) return; setClicks(Math.log(getClicks()+1)*1000) }
function sinMode(){ if(requireAdmin()) return; setClicks(Math.sin(getClicks())*1000000) }
function cosMode(){ if(requireAdmin()) return; setClicks(Math.cos(getClicks())*1000000) }
function tanMode(){ if(requireAdmin()) return; setClicks(Math.tan(getClicks())*1000000) }
