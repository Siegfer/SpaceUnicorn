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
 
 //  KEYBOARD INTERACTION LOGIC
 


 // ====================== GAME PROCESSES ======================= //
 
 

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
 
 
 // CODE STASH FOR OLD CODE
 