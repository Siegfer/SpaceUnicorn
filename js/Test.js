// GLOBAL DOM / VARIABLES
/**
 * @todo Setting up all the variables need to be use
 */

 let movementDisplay = document.getElementById('movement');
 let game = document.getElementById('game');
 let hero;
 let shrek;
 const ctx = game.getContext('2d');
 
 ctx.fillStyle = 'white';
 ctx.strokeStyle = 'red';
 ctx.lineWidth = 6;
 
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
 
class Attack {
    constructor(x, y, color, width, height){
        this.x = x
        this.y = y
        this.color = color
        this.width = width
        this.height = height
        this.speed = -1.5
    } 
    render() {
        // ctx.drawImage(pic3, this.x, this.y += this.speed, this.width, this.height)
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Leprechaun {
    constructor(x, y, color, width, height) {
        this.x = x
        this.y = y
        this.color = color
        this.width = width
        this.height = height
        this.speed = 5
        this.alive = true
    }
    render() {
        // ctx.drawImage(pic2, this.x += this.speed, this.y, this.width, this.height)
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y += this.speed, this.width, this.height);
    }
}

let p1 = new Unicorn(350, 600, "teal", 40, 40);
let leprechaun = new Leprechaun(100, 200, 'gold', 40, 80);
let bullet = new Attack(100, 200, 'blue', 82, 40);

// bullet.render();
// p1.render();
// leprechaun.render();
 // ====================== HELPER FUNCTIONS ======================= //
 
 //  GUI

 // Leprechaun Array
 let arrLeprechaun = [];
 function spawnLeprechaun() {
     for(let y = 0; y < 4; y++) {
         for(let x = 0; x < 10; x++) {
             let leprechaun = new Leprechaun (
                 x * 70 + 20, y * 40 + 70, 'tomato', 30, 30)
                 leprechaun.render();
                 arrLeprechaun.push(leprechaun)
                }
            }
        }


//Leprechaun movement         
function changeMovement ()  {
    arrLeprechaun.forEach((leprechaun) => {
        if (leprechaun.y >= 360) {
            console.log(leprechaun);
            arrLeprechaun.forEach((mv) => {
                mv.speed *= +20
                mv.y += 40
            }) } else (leprechaun.y <= 5); {
                arrLeprechaun.forEach((mv) => {
                    mv.speed *= +20
                    mv.y += 40
                }) }
            })
        }

function changeMovement ()  {
    arrLeprechaun.forEach((leprechaun) => {
        if (leprechaun.y >= 360) {
            arrLeprechaun.forEach((mv) => {
                mv.speed *= +20
                mv.y += 40
            }) } else (leprechaun.y <= 5); {
                arrLeprechaun.forEach((mv) => {
                    mv.speed *= +20
                    mv.y += 40
                }) }
            })
        }


 //  KEYBOARD INTERACTION LOGIC
 
 function movementHandler (e) {
    
    switch(e.which) { // another way of doing if else
        case 87:
            // move hero up
            // ternary operator
            p1.y - 10 >= 0 ? p1.y -= 10 : null;
            break;
        case 65:
            // move left
            p1.x - 10 >= 0 ? p1.x -= 10 : null;
            break;
        case 83:
            // move down
            p1.y + 10 <= game.height ? p1.y += 10 : null;
            break;
        case 68:
            // move right
            p1.x + 10 <=  game.width ? p1.x += 10 : null;
            break;
    }
}


 // ====================== GAME PROCESSES ======================= //
 
 function gameLoop (){
     ctx.clearRect(0, 0, game.width, game.height);
     movementDisplay.textContent = `X:${leprechaun.x}, Y:${leprechaun.y}`;
     if (leprechaun.alive) {
         leprechaun.render()
         changeMovement()
        } 
        spawnLeprechaun()
        p1.render()
}



// ====================== COLLISION DETECTION ======================= //

// ====================== PAINT INTIAL SCREEN ======================= //

// EVENT LISTENERS

window.addEventListener('DOMContentLoaded', (e) => {
    p1 = new Unicorn(500, 900, "teal", 20, 20);
    leprechaun = new Leprechaun(100, 200, 'black', 40, 80);
    p1.render()
    spawnLeprechaun()
    changeMovement()
    
    const runGame = setInterval(gameLoop, 60);
})

document.addEventListener('keydown', movementHandler);
 
 // CODE STASH FOR OLD CODE
 