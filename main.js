//declare your gameobjects here
var cube;
var karina;
var rect;

//instantiate your components and gameobjects here

function start() { //this function is called once when the window is loaded
    karina = new gameObject(0, 200, 150, 200);
    karina.image = new image(karina, 'karina.jpeg');
    karina.boundsCollison = true;
    karina.setVelocity(0.2, 0.2); //set velocity example
    cube = new gameObject(250, 350, 100, 100);
    cube.image = new image(cube, 'file.png');
    karina.setColision(cube, test);
    cube.onClick(changeSize, cube);
    rect = new gameObject(500, 200, 50, 50);
    karina.setColision(rect, test);
    karina.keyPressed(test);

}

function changeSize() {
    cube.setSize(cube.width * 0.9, cube.height * 0.9);
    if (cube.width < 30) {
        cube.setSize(100, 100);
    }

}

function test() {
    console.log("Direction changed");
    karina.setVelocity(-karina.speedX, -karina.speedY);
}
//this function is called according to your set fps (default is 60 frames by seconds)
function update(deltaP) {
    karina.move(deltaP);
}

//draw your game objects here
//this funcion is called after the update function. First you callculate, the you render
function render() {
    cube.draw();
    karina.draw();
    rect.draw();
    colorText('Engine JS', canvasWidth - 200, canvasHeight - 30, 30, 'white');
}