var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade (x,y){
    var hitZone = 25;
    var damagefromObstacle = 10;
    var sawBlade = game.createobstacle(hitZone, damagefromObstacle);
    sawBlade.x = 300;
    sawBlade.y = groundY - 10;
    game.addGaneItem(sawBlade)
    var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBlade.addChild(sawBladeImage);
    obstacleImage.x = -hitZone;
    obstacleImage.y = -hitZone;
    }
    
  createSawBlade (600, groundY - 50)
  createsawBlade (800, groundY - 100)


  

  var enemy = game.createGameItem ("enemy")
    

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
