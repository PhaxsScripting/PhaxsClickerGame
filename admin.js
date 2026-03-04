let adminUnlocked = true
let chaosInterval = null
let decayInterval = null
let rapidInterval = null
let corruptionInterval = null

function getGame(){
    return window.game || window.__game || null
}

function unlockAdmin(){
    const code = document.getElementById("adminCodeInput").value
    if(code === "phaxs"){
        adminUnlocked = true
        document.getElementById("adminControls").style.display = "block"
    }
}

function resetAll(){
    localStorage.clear()
    location.reload()
}

function requireAdmin(){
    if(!adminUnlocked) return true
}

function modifyClicks(amount){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    game.setState(prev => ({
        clicks: prev.clicks + amount
    }))
}

function multiplyClicks(mult){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    game.setState(prev => ({
        clicks: prev.clicks * mult
    }))
}

function divideClicks(div){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    game.setState(prev => ({
        clicks: prev.clicks / div
    }))
}

function randomizeClicks(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    game.setState({
        clicks: Math.floor(Math.random()*1e9)
    })
}

function bankrupt(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    game.setState({ clicks: 0 })
}

function explodeClicks(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    game.setState(prev => ({
        clicks: prev.clicks * 50
    }))
}

function massiveSpike(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    game.setState(prev => ({
        clicks: prev.clicks * 1000
    }))
}

function prestigeBlast(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    game.setState(prev => ({
        clicks: Math.sqrt(prev.clicks) * 5000
    }))
}

function drainOverTime(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    clearInterval(decayInterval)
    decayInterval = setInterval(()=>{
        game.setState(prev => ({
            clicks: prev.clicks * 0.95
        }))
    },1000)
}

function rapidFire(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    clearInterval(rapidInterval)
    rapidInterval = setInterval(()=>{
        game.setState(prev => ({
            clicks: prev.clicks + 100
        }))
    },50)
}

function superRapid(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    clearInterval(rapidInterval)
    rapidInterval = setInterval(()=>{
        game.setState(prev => ({
            clicks: prev.clicks + 1000
        }))
    },20)
}

function ultraRapid(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    clearInterval(rapidInterval)
    rapidInterval = setInterval(()=>{
        game.setState(prev => ({
            clicks: prev.clicks + 5000
        }))
    },5)
}

function chaoticMoney(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    clearInterval(chaosInterval)
    chaosInterval = setInterval(()=>{
        game.setState(prev => ({
            clicks: prev.clicks * (Math.random()*4)
        }))
    },500)
}

function cubeClicks(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    game.setState(prev => ({
        clicks: Math.pow(prev.clicks,3)
    }))
}

function sqrtClicks(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    game.setState(prev => ({
        clicks: Math.sqrt(prev.clicks)
    }))
}

function infiniteLoop(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    game.setState({ clicks: Infinity })
}

function negativeInfinity(){
    if(requireAdmin()) return
    const game = getGame()
    if(!game) return
    game.setState({ clicks: -Infinity })
}
