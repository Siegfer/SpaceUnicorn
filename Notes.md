# Daily Checklist
- get characters to render
- settle on movement





# Project 1 requirements

- Display a game in the browser
- Switch turns between two players, or have the user play the computer(AI or ostacles)
- Design logic for winning & visually display which payer won
- Include separate HTML/CSS/JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use JavaScript for DOM manipulation
- Deploy your game online, where the rest of the world can access it**
- use semanic markup for HTML and CSS (adhere to best practices)


# Necessary Deliverables
 - A working game, built by me.
 - A git repository hosted on Github, with a link to my hosted game, and frequent commits dating back to the beinging of the project
 - A readme.md file with explainations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

 # Suggested Ways to get started

 - Break the project down into different components ( data, presentation, views, style, DOM manipulation)
 - Use your Development Tools (console.log, inpsector, alert stement,etc) to debug and solve problems
 - work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know.... procrastinating.
 - Commit early, commit often. Don't be affraid to break something because you can always go back in time to previous version.
 - Consult documentation resources (MDN, etc.) to better understand what you'll be getting into.
 - Don't be affraid to write code that you know will have to remove later. Create temporary elements (button, links, etc) that triggers events if real data is not available. For Example, if you're trying to do figure out how to change some text when the game is over but you haven't solved the win/lose game logic. You can create a button to simulate that until then.

# Helpful Functions & Notes

- When working on Grid & Flex, Grid typically go on the Parent & Flex go on the Child.

- Making a class with

class Crawler {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;
        
        this.render = () => {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

- setting up 
let movementDisplay = document.getElementById('movement');
let game = document.getElementById('game');
let hero;
let shrek;
const ctx = game.getContext('2d');

ctx.fillStyle = 'white';
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;

- canvas rendering
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);

- object/AI rendering function
function addNewShrek() {
    shrek.alive = false;
    setTimeout(() => {
      let x = Math.floor(Math.random() * game.width) - 40;
      let y = Math.floor(Math.random() * game.height) - 80;
      shrek = new Crawler(x, y, "#bada55", 40, 80);
    }, 1000);
    return true;
  }

- movement function
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