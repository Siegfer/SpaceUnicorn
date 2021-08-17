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

 let pIcon = pic

 
 // ====================== SETUP FOR CANVAS RENDERING ======================= //
 // 2D rendering context for canvas element.
 // It is used for drawing shapes, text, images, and other objects.
 
 game.setAttribute("height", getComputedStyle(game)["height"]);
 game.setAttribute("width", getComputedStyle(game)["width"]);
 
 // ====================== SETUP FOR CANVAS RENDERING ======================= //
const ctx = game.getContext('2d')

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
        //  ctx.drawImage(pIcon, this.x, this.y, this,width, this.height)
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
     }
 }
 
class Attack {
    constructor(x, y, width, color, speed, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = -1.5
    } 
    render() {
        ctx.drawImage(pic3, this.x, this.y += this.speed, this.width, this.height)
    }
}

class Leprechaun {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = 2
        this.alive = true
    }
    render() {
        ctx.drawImage(pic2, this.x += this.speed, this.y, this.width, this.height)
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
 
 

 // ====================== COLLISION DETECTION ======================= //

 // ====================== PAINT INTIAL SCREEN ======================= //
 
 // EVENT LISTENERS
 
 
 // CODE STASH FOR OLD CODE
 