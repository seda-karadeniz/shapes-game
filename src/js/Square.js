import circle from "./circle";
export default class Square{
    constructor(game) {
        this.game = game;
        this.width = 20;
        this.height = 20;
        this.position = {
            x: this.width/2 + Math.floor(Math.random() * (this.game.canvas.width - (2 * this.width/2))),
            y: this.height/2 + Math.floor(Math.random() * (this.game.canvas.height - (2 * this.height/2)))
        };
        this.speed = {
            x: (-1 + Math.random() * 2),
            y: (-1 + Math.random() * 2)
        };

    }
    draw(){

        this.game.ctx.beginPath();
        this.game.ctx.rect(this.position.x, this.position.y, this.width, this.height);
        this.game.ctx.fill();
    }
    update(){
        this.draw();
        if (this.collisionCircle()){
            delete this.position.x;
            delete this.position.y;
        }

        if (this.position.y + this.height > this.game.canvas.height || this.position.y < 0){
            this.speed.y = -this.speed.y
        }
        if (this.position.x + this.width > this.game.canvas.width || this.position.x  < 0){
            this.speed.x = -this.speed.x
        }


        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
    collisionCircle(){
        let testX = circle.x;
        let testY = circle.y;

        if (circle.x < this.position.x ){
            testX = this.position.x;
        }     // test left edge
        else if (circle.x > this.position.x+this.width) {
            testX = this.position.x+this.width;
        }// right edge
        if (circle.y < this.position.y) {
            testY = this.position.y;
        }// top edge
        else if (circle.y > this.position.y + this.height) {
            testY = this.position.y + this.height;
        }// bottom edge

        // get distance from closest edges
        let distX = circle.x-testX;
        let distY = circle.y-testY;
        let distance = Math.sqrt( (distX*distX) + (distY*distY) );

        // if the distance is less than the radius, collision!
        if (distance <= circle.width) {
            return true;
        }
        return false;
    }



}