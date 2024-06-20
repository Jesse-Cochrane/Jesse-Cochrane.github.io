/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  }
  var walker = {
     speedX : 0,
     speedY : 0,
     locationX : 0,
     locationY : 0
  }
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown); 
  $(document).on('keyup', handleKeyUp)                          // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT){
      walker.speedX = -5
      console.log("left pressed");
    }
    else if (event.which === KEY.RIGHT){
      walker.speedY = -5 
      console.log("right pressed")
    }
    else if (event.which === KEY.UP){
      walker.speedX = 5
      console.log("enter up")
    }
    else if (event.which === KEY.DOWN){
      walker.speedY = 5
      console.log("enter down ")
    }
console.log()
  }
  function handleKeyUp(event) {
    if (event.which === KEY.LEFT){
      walker.speedX = walker.speedX - walker.speedX;
      console.log("left released")
    }
    else if (event.which === KEY.RIGHT){
      walker.speedX = walker.speedX - walker.speedX;
      console.log("right has been released")
    }
    else if (event.which === KEY.UP) {
      walker.speedY = walker.speedY - walker.speedY;
      console.log("up was released ")
    }
    else if (event.which === KEY.DOWN){
      walker.speedY = walker.speedY - walker.speedY;
      console.log("down was let go")
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
walker.locationX += walker.speedX;
walker.locationY += walker.speedY;
  }
function redrawGameItem () {
$("#walker").css("left", walker.locationX)
 $("#walker").css("top", walker.locationY)
 
}

  function wallCollision () {
    if (walker.locationX > 360){
      walker.speedX = walker.speedX - walker.speedX
      walker.locationX = 360; 
    }
    else if (walker.locationX < 1){
    walker.speedX = walker.speedX - walker.speedX; 
    walker.locationY = 1;
    }
    else if (walker.locationY > 360) {
      walker.speedY = walker.speedY - walker.speedY;
      walker.locationY = 360;
    }
    else if (walker.locationY < 1){
      walker.speedY = walker.speedY - walker.speedY;
      walker.locationY = 1
    }
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
