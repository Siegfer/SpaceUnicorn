# SpaceUnicorn

SEI802 Project 1: Space Unicorn
A Galaga inspired game! 
This project was created as a class assignment for General Asembly's Software Engineering Immersive.

---
## How to install 🕹
---

> 1. Go to [Space Unicorn](https://siegfer.github.io/SpaceUnicorn/).
> 2. Otherwise `fork` or `clone` this repository to your local machine.
> 3. Open `index.html` in your browser to play!

---
## How to Play 🕹
---
- [W]: move Up.
- [S]: move Down.
- [A]: move Left.
- [D]: move Right.
- [Space]: Attack the Leprechauns.
- Destroy all drunk Leprechauns!
- Don't let the Drunk Leprechaun catch the Precious Unicorn.
- Don't let the Leprechauns escape otherwise you'll loose.

---
## Languages 
---

- JavaScript
- HTML5 Canvas
- CSS

---
## Defining Classes
---

There are three different class within the game. However, two of them are similar in terms of `constructor`. 

``` javascript
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
```
The main difference between these two is the addition of the `.speed` within the declaration of the `constructor` & `render`. This is use to move the `Class` up and down the `y` axis. 

---
## Helper Functions
---

Space Unicorn runs on a logic loop that set up two movement functions: one controls the movement of the Leprechauns, the other controls the movement of the bullets.

Moving every `Objects` into an `Array` allow the game to populate the Leprechauns onto the canvas once both conditions for rows and column have been met. Similar requirement is being used for the bullets as well.

``` javascript
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
```

---
## Game Loop
---

The `gameLoop()` checks to see if there are any collision to determine the player won or lost. Otherwise the `gameLoop()` allow the player to `restart` the game.

``` javascript
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
```

---
## Collision Detection
---

Two collision detection is needed for the game. One to detect the Unicorn & Leprechauns, the other the bullet & Leprechauns.

``` javascript
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
```
`detectProjectile()` allow the `gameLoop()` to detect the collision between the bullet & Leprechaun. For each collision the loop will remove the Leprechaun and add the score to the player score board.
