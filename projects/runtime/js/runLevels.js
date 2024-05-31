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
    function create(sawblade) [x,y];
    var hitZone = 24;
    var damagefromObstacle = 10;
    var sawblade = game.createobstacle(hitZone, damagefromObstacle);

    sawblade.x = 300;
    sawblade.y = groundY - 50;

    game.addGaneItem(sawblade)

    var sawbladeImage = draw.bitmap("img/sawblade.png");
    sawblade.addChild(sawbladeImage);
    sawbladeImage.x = -hitZone;
    sawbladeImage.y = -hitZone;

    
    

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
