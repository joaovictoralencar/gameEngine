//ADDED
var delta = 0;
var lastFrameTimeMs = 0;
var fps = 60;
var timeStep = 1000 / fps;
// save the canvas for dimensions, and its 2d context for drawing to it
var canvas, canvasContext;
var canvasWidth = 800;
var canvasHeight = 600;
var canvasColor = 'black'

function mainLoop(timeStamp) {
    //if the fps is over the set value, just call the function again and don't do anything else
    if (timeStamp < lastFrameTimeMs + timeStep) {
        requestAnimationFrame(mainLoop);
        return;
    }
    //else...
    delta += timeStamp - lastFrameTimeMs;
    lastFrameTimeMs = timeStamp;
    //runs update() according to your set fps (default is 60 frames by seconds)
    while (delta >= timeStep) {
        update(timeStep);
        delta -= timeStep;
    }
    colorRect(0, 0, canvas.width, canvas.height, canvasColor);
    render(); //after the all update, render the elements
    requestAnimationFrame(mainLoop); //call the main loop again
}

//runs when the window is loaded
window.onload = function () {
    canvas = document.createElement("canvas"); //create a canvas
    canvas.id = 'gameCanvas';
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    document.body.appendChild(canvas); //put the canvas in the DOM
    canvasContext = canvas.getContext('2d');
    start(); //runs the start function
    colorRect(0, 0, canvas.width, canvas.height, canvasColor); //draw the backgorund color
    requestAnimationFrame(mainLoop); //start the main loop
}
//draw a collored rect on the canvas
function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}
//daw a collored circle on the canvas
function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}
//draw a collored text on the canvas
function colorText(showWords, textX, textY, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(showWords, textX, textY);
}