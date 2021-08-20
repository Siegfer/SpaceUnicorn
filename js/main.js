// GLOBAL DOM / VARIABLES

let movementDisplay = document.getElementById('movement');
let game = document.getElementById('game');
const arrLeprechaun = [];
const arrProjectiles = [];

const ctx = game.getContext('2d');
let gameScore = 0;

// ====================== SETUP FOR CANVAS RENDERING ======================= //
// 2D rendering context for canvas element.
// It is used for drawing shapes, text, images, and other objects.

game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);

// ====================== SETUP FOR CANVAS RENDERING ======================= //

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
       //  ctx.drawImage(pIcon, this.x, this.y, this,width, this.height)
       ctx.fillStyle = this.color;
       ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Bullet
class Attack {
   constructor(x, y, color, width, height){
       this.x = x
       this.y = y
       this.color = color
       this.width = width
       this.height = height
       this.speed = +10
       this.alive = true
   } 
   render() {
       // ctx.drawImage(pic3, this.x, this.y += this.speed, this.width, this.height)
       ctx.fillStyle = this.color;
       ctx.fillRect(this.x, this.y -= this.speed , this.width, this.height);
   }
}

// Leprechaun
class Leprechaun {
   constructor(x, y, color, width, height) {
       this.x = x
       this.y = y
       this.color = color
       this.width = width
       this.height = height
       this.speed = 1
       this.alive = true
   }
   render() {
       // ctx.drawImage(pic2, this.x += this.speed, this.y, this.width, this.height)
       ctx.fillStyle = this.color;
       ctx.fillRect(this.x, this.y += this.speed, this.width, this.height);
   } 
}

// ====================== HELPER FUNCTIONS ======================= //

// Leprechaun Array
function spawnLeprechaun() {
   for(let y = 0; y < 4; y++) {
       for(let x = 0; x < 10; x++) {
           let leprechaun = new Leprechaun (
               x * 70 + 20, y * 40 + 70, 'tomato', 30, 30)
               arrLeprechaun.push(leprechaun)
               }
           }
       }
spawnLeprechaun()

//bullets Array
   document.addEventListener('keydown', (e) => {
       if (e.which === 32 ) {
           let bullet = new Attack(p1.x, p1.y, "red", 20, 20)
           arrProjectiles.push(bullet)
       } 
   })

// Game win/lose conditions
function gameWin() {
   if (arrLeprechaun.length === 0) {
       document.getElementById('btm-left').textContent = 'YOU DESTROYED THE LEPRECHAUNS'
   }
   return true;
}
function gameOver() {
   if (p1.alive === false) {
       document.getElementById('btm-left').textContent = 'How did you die.....'        
       document.getElementById('btm-right').textContent = 'UNICORNS EXTINCT' 
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
       } 
       detectHit(p1, arrLeprechaun)
       detectProjectile(arrProjectiles, arrLeprechaun)
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
           );
               if (hitTest) {
               console.log('got hit!');
               p1.splice(j, 1)
               p2.splice(i, 1)
               gameScore += 3
               document.getElementById('score').innerText = gameScore + ' Unicorns have been saved!!'

           }
       }

   }
   return false;
}

// ====================== PAINT INTIAL SCREEN ======================= //

// EVENT LISTENERS

document.getElementById('stats').addEventListener('click', () => {
   document.addEventListener('keydown', movementHandler)
   document.getElementById('stats').textContent = 'SAVE THE UNICORN'
   document.getElementsByClassName('GUI') 
   document.getElementById('stats').textContent === 'SAVE THE UNICORN'  
       p1 = new Unicorn(325, 600, "gold", 20, 20);
       p1.alive
       const runGame = setInterval(gameLoop, 60);  
})
