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

//  KEYBOARD INTERACTION LOGIC

// ====================== GAME PROCESSES ======================= //

// ====================== COLLISION DETECTION ======================= //

// ====================== PAINT INTIAL SCREEN ======================= //

// EVENT LISTENERS



// CODE STASH FOR OLD CODE
