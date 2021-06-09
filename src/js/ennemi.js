
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
        //this.y = this.height;
        //this.x = this.game.canvas.width - this.width;
        this.position.x = Math.floor(Math.random() * (this.game.canvas.width - (3 * this.width)));
        this.position.y = Math.floor(Math.random() * (this.game.canvas.height - (3 * this.height)));

    },

    update(){
        this.renderEllipseEnnemi();
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


}
export default ennemi;