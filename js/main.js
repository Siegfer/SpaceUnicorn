// GLOBAL DOM / VARIABLES
let game = document.getElementById('game')
const ctx = game.getContext('2d')
let unicorn = new Image()
unicorn.src = './img/Unicorn.png'

const arrLeprechaun = []
const arrProjectiles = []
let gameScore = 0;
// ====================== SETUP FOR CANVAS RENDERING ======================= //
// It is used for drawing shapes, text, images, and other objects.
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);
// ====================== ENTITIES ======================= //
 // Unicorn
 class Unicorn {
     constructor (x, y, color, width, height) {
         this.x = x
         this.y = y
         this.color = color
         this.width = width
         this.height = height
         this.alive = true
        }
         render() {
            ctx.drawImage(unicorn, this.x, this.y, this.width, this.height)
     }
 }
 // Bullet
class Attack {
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = +10
        this.alive = true
    } 
    render() {
        ctx.drawImage(attack, this.x, this.y -= this.speed, this.width, this.height)
    }
}
// Leprechaun
class Leprechaun {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = 1.35
        this.alive = true
    }
    render() {
        ctx.drawImage(leprechaun, this.x, this.y += this.speed, this.width, this.height)
    } 
}

// ====================== HELPER FUNCTIONS ======================= //
// Leprechaun Array
function spawnLeprechaun() {
    for(let y = 0; y < 4; y++) {
        for(let x = 0; x < 8; x++) {
            let leprechaun = new Leprechaun (
                x * 90 + 0, y * 70 + 0, 70, 70)
                arrLeprechaun.push(leprechaun)
                }
            }
        }
spawnLeprechaun()

//bullets Array
    document.addEventListener('keydown', (e) => {
        if (e.which === 32 ) {
            let bullet = new Attack(p1.x, p1.y, 35, 40)
            arrProjectiles.push(bullet)
        } 
    })

// Game win/lose conditions
function gameWin() {
    if (arrLeprechaun.length === 0 ) {
        p1.alive = false
        document.getElementById('top').textContent= '[ Enter ] to go again!'
        document.getElementById('btm-left').textContent = ' '
        document.getElementById('btm-right').textContent = ' '
        document.getElementById('win').style.display = "flex"
        document.getElementById('win2').style.display = "flex"
    }
    return true;
}
function gameOver() {
    if (p1.alive === false) {
        document.getElementById('btm-left').textContent = '[ Enter ] to go again!'
        document.getElementById('btm-right').textContent = ' '
        document.getElementById('lost').style.display = "flex"
        document.getElementById('lost2').style.display = "flex"
    }
    return false;
}

 //  KEYBOARD INTERACTION LOGIC
 function movementHandler (e) {

    switch(e.which) { 
        case 87:
            p1.y - 20 >= 0 ? p1.y -= 20 : null;
            break;
        case 65:
            p1.x - 20 >= 0 ? p1.x -= 20 : null;
            break;
        case 83:
            p1.y + 20 <= game.height ? p1.y += 20 : null;
            break;
        case 68:
            p1.x + 20 <=  game.width ? p1.x += 20 : null;
            break;
    }
} 

 // ====================== GAME PROCESSES ======================= //
 
 function gameLoop (){
     ctx.clearRect(0, 0, game.width, game.height);
     if (p1.alive) {
         p1.render()
         gameWin()
         arrLeprechaun.forEach(element => element.render())
         arrProjectiles.forEach(element => element.render())
         detectHit(p1, arrLeprechaun)
         detectProjectile(arrProjectiles, arrLeprechaun)
         detectParameters(arrLeprechaun, p1)
        } else {
            document.addEventListener('keydown', (e) => {
                if (e.which === 13) {
                    location.reload();
                }
            })
        }
    }

// ====================== COLLISION DETECTION ======================= //

function detectHit(p1, p2) {
    for( i = 0; i < p2.length; i++) {
        let hitTest = (
            p1.y + p1.height > p2[i].y  &&
            p1.y < p2[i].y + p2[i].height &&
            p1.x + p1.width > p2[i].x &&
            p1.x < p2[i].x + p2[i].width
        );
        if (hitTest) {
            p1.alive = false;
            p2.splice(i, 1)
            gameOver()
        } 
    }
    return false;
}

function detectProjectile(p1, p2) {
    for( i = 0; i < p2.length; i++) { 
        for (j = 0; j < p1.length; j++) {
            let hitTest = (
                p1[j].y + p1[j].height > p2[i].y  &&
                p1[j].y < p2[i].y + p2[i].height &&
                p1[j].x + p1[j].width > p2[i].x &&
                p1[j].x < p2[i].x + p2[i].width
            )
                if (hitTest) {
                p1.splice(j, 1)
                p2.splice(i, 1)
                gameScore += 3
                document.getElementById('score').innerText = gameScore + ' Unicorns have been saved!!'
            }
        }

    }
    return false;
}

function detectParameters(p1, p2) {
    for (i = 0; i < p1.length; i++) {
        let hitTest = (
            p1[i].y >= 600
        )
        if (hitTest) {
            p2.alive = false
            p1.splice(i, 1)
            gameOver()
        }
    }
    return false
}

// ====================== EVENT LISTENER ======================= //

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('control').style.display = 'none'
        document.getElementById('stats').textContent = 'SAVE THE UNICORN'
        document.getElementById('stats').textContent === 'SAVE THE UNICORN'  
        document.addEventListener('keydown', movementHandler)
        p1 = new Unicorn(325, 630, "gold", 50, 70);
        p1.alive
        const runGame = setInterval(gameLoop, 60);  
    }
})
