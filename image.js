class image {
    //the constructor for the component
    constructor(gameObject, sprite) {
        this.sprite = sprite; //the name of the image file to be loaded
        this.gameObject = gameObject; //the reference to the gameobject which contains the component image
        this.image = new Image(); //instantiating the javascript image
        this.image.src = 'Images/' + this.sprite; //defines the source image to be the sprite parameter
    }
    draw() {
        //draw the image in the canvas with the position and size of the attached gameobject
        canvasContext.drawImage(this.image, this.gameObject.x, this.gameObject.y, this.gameObject.width, this.gameObject.height);
    }
}