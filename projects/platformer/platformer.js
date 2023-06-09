$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
//starter
createPlatform(0,150,150,10)
//start jump 
createPlatform(250,230,50, 10 )
//first wall 
createPlatform(400,300, 50, 100)
// jump off 
createPlatform(225,400,225, 10 )
// dl collect PF 
createPlatform(450,410,50,10)
//2nd wall 
createPlatform(500,275,20, 145)
//roof 
createPlatform(500,275,700,10)
//first low  
createPlatform(50, 675, 50, 10)
//2nd low 
createPlatform (375,675, 50, 10)
// 3rd low
createPlatform(600,575,50,10)
//4th low 
createPlatform(850,600,50,10)
//5th low 
createPlatform(1100,500,20,10)
//step down 
createPlatform(1300,675,100,10)
//last level 
createPlatform(1200,600,10,10)
//step up 
createPlatform(1275,400,60,10)
//
createPlatform(1300,150,30,10)
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

createCollectable("database",450,370,)
createCollectable("database",375,635,0,0)
createCollectable("database",1325,635,0,0)
createCollectable("database",1295,110,0,0)
createCollectable("database",550,350,0,0)



    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

createCannon("right", 800,50); // cannon on right wall, 600px down, shooting twice per second)
createCannon("bottom", 120, 1000);
createCannon("right",350,1200)
createCannon("top",65,12)
createCannon("top",1000,1200)
createCannon("top",1450,20)
createCannon("top",790,1200)
createCannon("bottom",460,1200)

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
