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
    constructor(x, y, color, speed, width, height){
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
        this.speed = 2
        this.alive = true
    }
    render() {
        // ctx.drawImage(pic2, this.x += this.speed, this.y, this.width, this.height)
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let p1 = new Unicorn(350, 600, "teal", 20, 20);
let leprechaun = new Leprechaun(100, 200, 'hotpink', 40, 80);
let bullet = new Attack(100, 200, 'blue', 82, 40);

bullet.render();
console.log(bullet.render)
 // ====================== HELPER FUNCTIONS ======================= //
 
 //  GUI
 
 function addNewLeprechaun() {
    leprechaun.alive = false;
    setTimeout(() => {
      let x = Math.floor(Math.random() * game.width) - 40;
      let y = Math.floor(Math.random() * game.height) - 80;
      leprechaun = new Leprechaun(x, y, "#bada55", 40, 80);
    }, 1000);
    return true;
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
    movementDisplay.textContent = `X:${p1.x}\n${p1.y}`;
    if (leprechaun.alive) {
        leprechaun.render()
        let hit = detectHit(p1, leprechaun);
    }
    p1.render();
}



 // ====================== COLLISION DETECTION ======================= //
 function detectHit (p1, p2) {
    let hitTest = (
       p1.y + p1.height > p2.y  &&
       p1.y < p2.y + p2.height &&
       p1.x + p1.width > p2.x &&
       p1.x < p2.x + p2.width
    );

    if (hitTest) {
        return addNewLeprechaun()
    } else {
        return false
    }
}
 // ====================== PAINT INTIAL SCREEN ======================= //
 
 // EVENT LISTENERS
 
 window.addEventListener('DOMContentLoaded', (e) => {
    leprechaun.render();

    const runGame = setInterval(gameLoop, 60);
})

let fireStatus = 1
const arrProjectiles = [];
    document.addEventListener('keydown', function(e) {
        if (e.key === 'b' && fireStatus === 1) {
        const bullet = new Attack(p1.x - 1 + (p1.width/2), p1.y -5, 6, 'red', 25, 8)
        arrProjectiles.push(bullet)
        console.log('bullet:',bullet);
        fireStatus *= -1
        setTimeout(fireReady, 350);
        //   sound.play()
        }
    });
    function fireReady() {
    fireStatus *= -1
  }

document.addEventListener('keydown', movementHandler);


 
 // CODE STASH FOR OLD CODE
 