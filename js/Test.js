// GLOBAL DOM / VARIABLES

let game = document.getElementById('game')
const ctx = game.getContext('2d')
let unicorn = new Image()
unicorn.src = './img/Unicorn.png'

const arrLeprechaun = []
const arrProjectiles = []
let gameScore = 0;

// ====================== SETUP FOR CANVAS RENDERING ======================= //
// 2D rendering context for canvas element.
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

        this.render = function() {
            ctx.drawImage(unicorn, this.x, this.y, this.width, this.height)
        }
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
        this.speed = 1.25
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
        document.getElementById('btm-left').textContent = 'YOU DESTROYED THE LEPRECHAUNS'
        document.getElementById('btm-right').textContent = ' '
    }
    return true;
}
function gameOver() {
    if (p1.alive === false) {
        document.getElementById('btm-left').textContent = 'How did you die.....'        
        document.getElementById('loose2').textContent = 'UNICORNS EXTINCT' 
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
    //  movementDisplay.textContent = `X: ${p1.x}\n${p1.y}`;
     ctx.clearRect(0, 0, game.width, game.height);
     if (p1.alive) {
         p1.render()
         gameWin()
         arrLeprechaun.forEach(element => element.render())
         arrProjectiles.forEach(element => element.render())
        } 
        detectHit(p1, arrLeprechaun)
        detectProjectile(arrProjectiles, arrLeprechaun)
        detectParameters(arrLeprechaun, p1)
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

document.getElementById('stats').addEventListener('click', () => {
    document.addEventListener('keydown', movementHandler)
    document.getElementById('stats').textContent = 'SAVE THE UNICORN'
    document.getElementsByClassName('GUI') 
    document.getElementById('stats').textContent === 'SAVE THE UNICORN'  
        p1 = new Unicorn(325, 600, "gold", 50, 70);
        p1.alive
        const runGame = setInterval(gameLoop, 60);  
})
 