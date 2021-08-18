// ====================== Possible Canvas Setup ======================= //
//  game.setAttribute("height", getComputedStyle(game)["height"]); @1:19pm
//  game.setAttribute("width", getComputedStyle(game)["width"]); @1:19pm

let x = 0;
const id = setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(x, 50, size, size);
  x += size;
  if (x >= canvas.width) {
    clearInterval(id);
  }
}, 200);
// ====================== GUI ======================= //
 function addNewShrek() {
    shrek.alive = false;
    setTimeout(() => {
      let x = Math.floor(Math.random() * game.width) - 40;
      let y = Math.floor(Math.random() * game.height) - 80;
      shrek = new Crawler(x, y, "#bada55", 40, 80);
    }, 1000);
    return true;
  }
  
  // ====================== POSSIBLE KEYBOARD INTERACTION LOGIC ======================= //
document.addEventListener('keydown', function(evt) {
    if (evt.key === 'ArrowUp' && player.y > 420) {
      player.y -= 30
    } else if (evt.key === 'ArrowLeft' && player.x > 0) {
      player.x -= 30
    } else if (evt.key === 'ArrowDown' && player.y < 495) {
      player.y += 30
    } else if (evt.key === 'ArrowRight' && player.x < 360) {
      player.x += 30
    }
});

 // ====================== POSSIBLE KEYBOARD INTERACTION LOGIC ======================= //
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
 function gameLoop (){
    ctx.clearRect(0, 0, game.width, game.height);
    movementDisplay.textContent = `X:${hero.x}\n${hero.y}`;
    if (shrek.alive) {
        shrek.render()
        let hit = detectHit(hero, shrek);
    }
    hero.render();
}

// ====================== GAME PROCESSES ======================= //

// Unicorn Attack 
let fireStatus = 1
const arrAttack = [];
  document.addEventListener('keydown', function(e) {
    if (e.key === ' ' && fireStatus === 1) {
      const light = new Attack(p1.x - 1 + (p1.width/2), p1.y -5, 6, 'red', 25, 8)
      arrAttack.push(light)
      fireStatus *= -1
      setTimeout(fireReady, 350);
    }
  });
  function fireReady() {
    fireStatus *= -1
  }

  // Spawning Leprechauns

const arrLeprechaun = [];                              
function spawnLeprechaun() {
  for(let row = 0; row < 4; row++) {
     for(let col = 0; col < 9; col++){
      const leprechaun = new Leprechaun (
        col * 35 + 33, row * 35 + 15, 30, 30)
        arrLeprechaun.push(leprechaun)
     }
  }
}
 
// Leprechaun movements
spawnLeprechaun()
    function changeMovement (resetStatus) {
        if (resetStatus) {
            arrLeprechaun.length = 
        }
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

// ====================== COLLISION DETECTION ======================= //
function detectHit() {
    for(a = 0; a < arrVeggies.length; a++) {
        for(b = 0; b < arrProjectiles.length; b++) {
            if(arrProjectiles[b].x < arrVeggies[a].x + 33
                && arrProjectiles[b].x + 3.5 > arrVeggies[a].x
                && arrProjectiles[b].y < arrVeggies[a].y + 30
                && arrProjectiles[b].y + 17 > arrVeggies[a].y) {
                arrVeggies.splice(a,1)
                arrProjectiles.splice(b,1)
                gameScore += 25
             }
        }
    }
}
function detectPlayerHit() {
  for(a = 0; a < arrVeggies.length; a++) {
          if(player.x < arrVeggies[a].x + 33
              && player.x + 3.5 > arrVeggies[a].x
              && player.y < arrVeggies[a].y + 30
              && player.y + 17 > arrVeggies[a].y) {
              arrVeggies.splice(a,1)
              player.alive  =  false                 
            }
          } 
  }
  function spawn() {
    if (player.alive === false) {
      arrVeggies.splice(0, arrVeggies.length)
      populateVeggies()
      changeMovement()
      player.alive = true
      player.x = 180
      player.y = 500
      playerHealth -= 1
      if (playerHealth === 2) {
        document.getElementById('btm-left').textContent = 'Lives 🍔  🍔'
      } else if (playerHealth === 1) {
        document.getElementById('btm-left').textContent = 'Lives 🍔'
      }
    }
  }    
  function gameOver() {
    if (playerHealth < 1) {
      playerImage = image4  
      arrVeggies.length = 0         
      player.alive = true
      document.getElementById('btm-left').textContent = 'Game Over'
      start.pause()
      fail.play()
    }
  }     
  function gameWon() {
    if (arrVeggies.length === 0 && playerHealth > 0) {
      document.getElementById('btm-left').textContent = 'Game Won'
      player.alive = true
      player.render()          
    }
  }
    function scoreUpdate() {
     document.getElementById('top-left').textContent = 'SCORE:' + gameScore   
}

// ====================== POSSIBLE EVENT LISTENERS ======================= //
window.addEventListener('DOMContentLoaded', (e) => {
    hero = new Hero(10, 20, "teal", 20, 20);
    shrek = new Crawler(100, 200, 'hotpink', 40, 80);
    shrek.render();

    const runGame = setInterval(gameLoop, 60);
})

document.addEventListener('keydown', movementHandler);

// ====================== POSSIBLE EVENT LISTENERS ======================= //
document.getElementById('status').addEventListener('click', function() {
    // let timer = setInterval(rePaint, 1000 / 60)
    if (document.getElementById('status').textContent === 'Start Game') {
      setInterval(rePaint, 1000 / 60)
      start.play()
      document.getElementById('status').textContent = 'Reset Game'
    } else if(document.getElementById('status').textContent ==='Reset Game') {
      for(i=0; i<100; i++)
    {
      window.clearInterval(i);
    }
      rePaint(true)
      document.getElementById('status').textContent = 'Start Game'
    }
  });