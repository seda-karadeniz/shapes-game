import circle from "./circle";

const ennemi = {
    game: null,
    position : {
        x:0,
        y:0,
    },
    width: 20,
    height: 20,
    speed : {
        x: (-2 + Math.random() * 2),
        y: (-2 + Math.random() * 2)
    },

    init(game){
        this.game = game;
        this.position.x = Math.floor(Math.random() * (this.game.canvas.width - (3 * this.width)));
        this.position.y = Math.floor(Math.random() * (this.game.canvas.height - (3 * this.height)));

    },

    update(){
        this.renderEllipseEnnemi();
        this.collisionCircle();
        if (this.position.y + this.height > this.game.canvas.height || this.position.y -this.height  < 0){
            this.speed.y = -this.speed.y
        }
        if (this.position.x + this.width > this.game.canvas.width || this.position.x - this.width < 0){
            this.speed.x = -this.speed.x
        }


        this.position.x += this.speed.x;
        this.position.y += this.speed.y;



    },

    renderEllipseEnnemi(){
        this.game.ctx.fillStyle = "red";
        this.game.ctx.beginPath();
        this.game.ctx.ellipse(this.position.x, this.position.y, this.width, this.height, 0, 0, Math.PI * 2/*tout le cercle math.pi = demi cercle *2 = entier*/, false);
        this.game.ctx.fill();
    },

    collisionCircle(){
        let circle1 = {radius: circle.width, x: circle.x, y: circle.y};
        let circle2 = {radius: this.width, x: this.position.x, y: this.position.y};

        let dx = circle1.x - circle2.x;
        let dy = circle1.y - circle2.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < circle1.radius + circle2.radius) {

            this.game.cancelAnimation();
        }

    }


}
export default ennemi;