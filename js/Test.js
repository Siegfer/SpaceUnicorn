// GLOBAL DOM / VARIABLES
/**
 * @todo Setting up all the variables need to be use
 */

 const movementDisplay = document.querySelector('#movement')
 const game = document.querySelector('#game')
 const pic = document.getElementById('unicorn')
 const pic2 = document.getElementById('leprechaun')
 const pic3 = document.getElementById('attack')
 const pic4 = document.getElementById('loose')
 const ctx = game.getContext('2d')
 
 let pIcon = pic
 
 
 // ====================== SETUP FOR CANVAS RENDERING ======================= //
 // 2D rendering context for canvas element.
 // It is used for drawing shapes, text, images, and other objects.
 
 game.setAttribute("height", getComputedStyle(game)["height"]);
 game.setAttribute("width", getComputedStyle(game)["width"]);
 
 // ====================== SETUP FOR CANVAS RENDERING ======================= //
 
 // ====================== ENTITIES ======================= //
 
 // Unicorn
 class Unicorn {
     constructor (x, y, width, height) {
         this.x = x
         this.y = y
         this.width = width
         this.height = height
         this.alive = true
     }
     render() {
         ctx.drawImage(pIcon, this.x, this.y, this,width, this.height)
     }
 }
 
 // ====================== HELPER FUNCTIONS ======================= //
 // SANDBOX FOR TESTING PAINTING TECHNIQUES
 
 //  GUI
 function addNewShrek() {
    shrek.alive = false;
    setTimeout(() => {
      let x = Math.floor(Math.random() * game.width) - 40;
      let y = Math.floor(Math.random() * game.height) - 80;
      shrek = new Crawler(x, y, "#bada55", 40, 80);
    }, 1000);
    return true;
  }
  
 //  KEYBOARD INTERACTION LOGIC
 function movementHandler (e) {
    console.log('movement', e.key);
    
    switch(e.which) { // another way of doing if else
        case 87:
            // move hero up
            // ternary operator
            hero.y - 10 >= 0 ? hero.y -= 10 : null;
            break;
        case 65:
            // move left
            hero.x - 10 >= 0 ? hero.x -= 10 : null;
            break;
        case 83:
            // move down
            hero.y + 10 <= game.height ? hero.y += 10 : null;
            break;
        case 68:
            // move right
            hero.x + 10 <=  game.width ? hero.x += 10 : null;
            break;
    }
}
 // ====================== GAME PROCESSES ======================= //
 
 /**
  * @function gameLoop
  * @todo clear the canvas
  * @todo display p1 location
  */

function gameLoop (){
    ctx.clearRect(0, 0, game.width, game.height);
    movementDisplay.textContent = `X:${hero.x}\n${hero.y}`;
    if (shrek.alive) {
        shrek.render()
        let hit = detectHit(hero, shrek);
    }
    hero.render();
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
         return addNewShrek()
     } else {
         return false
     }
 }
 // ====================== PAINT INTIAL SCREEN ======================= //
 
 // EVENT LISTENERS
 
 
window.addEventListener('DOMContentLoaded', (e) => {
    hero = new Hero(10, 20, "teal", 20, 20);
    shrek = new Crawler(100, 200, 'hotpink', 40, 80);
    shrek.render();

    const runGame = setInterval(gameLoop, 60);
})

document.addEventListener('keydown', movementHandler);
 
 // CODE STASH FOR OLD CODE
 