class gameObject {
    //the constructor to any gameobject
    //It must have a position x,y, height
    constructor(x, y, width, height) {
        this.self = canvas.appendChild(document.createElement("div"));
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = 'white';
        this.image = null;
        this.boundsCollison = false;
        this.speedX;
        this.speedY;
        this.collidesWith = [];
        this.collisionEvent;
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
        if (this.collidesWith.length > 0) {
            for (let i = 0; i < this.collidesWith.length; i++) {
                if (this.x + this.width > this.collidesWith[i].x && this.x < this.collidesWith[i].x + this.collidesWith[i].width && this.y + this.height > this.collidesWith[i].y && this.y < this.collidesWith[i].y + this.collidesWith[i].height) {
                    if (this.x > this.collidesWith[i].x && this.speedX < 0) {
                        return;
                    }
                    if (this.y + this.height > this.collidesWith[i].y && this.speedY < 0) {
                        return;
                    }
                    canvas.dispatchEvent(this.collisionEvent);

                }
            }
        }
    }
    //set the color of a gameobject
    setColor(color) {
        this.color = color;
    }
    //set the scale (dimensions) of a gameobject
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }
    //set the position of a gameobject
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    move(deltaP) {
        if (this.boundsCollison) {
            if (this.x + this.width > canvasWidth || this.x < 0) {
                this.speedX = -this.speedX;
            }
            if (this.y + this.height > canvasHeight || this.y < 0) {
                this.speedY = -this.speedY;
            }
        }
        this.x += this.speedX * deltaP; // move the ball based on its current horizontal speed 
        this.y += this.speedY * deltaP; // same as above, but for vertical
    }

    //adds a given velocity to the gameobject in one frame
    setVelocity(speedX, speedY) {
        this.speedX = speedX;
        this.speedY = speedY;
    }
    setColision(gameObject, callBack) {
        this.collidesWith.push(gameObject);
        if (callBack != undefined) {
            this.collisionEvent = new Event('collison');
            canvas.addEventListener('collison', callBack);
        }
    }

    keyPressed(callBack) {
        document.addEventListener('keypress', (event) => {
            callBack();
        });
    }

    onClick(callBack, self) {
        canvas.addEventListener('click', function () {
            if (mouseX >= self.x && mouseX <= self.x + self.width && mouseY >= self.y && mouseY <= self.y + self.height) {
                callBack();
            }
        });
    }
}