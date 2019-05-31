//declare your gameobjects here
var cube;
var karina;

//instantiate your components and gameobjects here

function start() { //this function is called once when the window is loaded
    karina = new gameObject(0, 200, 150, 200);
    karina.image = new image(karina, 'karina.jpeg');
    cube = new gameObject(50, 50, 100, 100);
    cube.image = new image(cube, 'file.png');
}

//this function is called according to your set fps (default is 60 frames by seconds)
function update(deltaP) {
    karina.setVelocity(1, 0, deltaP); //set velocity example
}

//draw your game objects here
//this funcion is called after the update function. First you callculate, the you render
function render() {
    cube.draw();
    karina.draw();
}