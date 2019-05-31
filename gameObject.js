class gameObject {
    //the constructor to any gameobject
    //It must have a position x,y, height
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = 'white';
        this.image = null;
    }
    //draw the game object. You need to call this function if you want to see your G.O. on the canvas
    draw() {
        //If the G.O. has a image, let's make sure that the square wont appear 
        if (this.image != null) {
            this.color = canvasColor; //the rect color will be the same as the canvas
        }
        colorRect(this.x, this.y, this.width, this.height, this.color); //draws the G.O.
        if (this.image != null) {
            this.image.draw(); //if it has image, draw the image too
        }
    }
    //set the scale (dimensions) of a gameobject
    setScale(width, height) {
        this.width = width;
        this.height = height;
    }
    //set the position of a gameobject
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    //add a given velocity to the gameobject in one frame
    setVelocity(speedX, speedY, deltaP) {
        this.x += speedX * deltaP; // move the ball based on its current horizontal speed 
        this.y += speedY * deltaP; // same as above, but for vertical
    }
}