
const ennemi = {
    game: null,
    x: 0,
    y:0,
    width: 20,
    height: 20,
    speed : 0.05,

    init(game){
        this.game = game;
        this.y = this.height;
        this.x = this.game.canvas.width - this.width;

    },

    update(){
        this.renderEllipseEnnemi();

    },
    renderEllipseEnnemi(){
        this.game.ctx.fillStyle = "red";
        this.game.ctx.beginPath();
        this.game.ctx.ellipse(this.x, this.y, this.width, this.height, 0, 0, Math.PI * 2/*tout le cercle math.pi = demi cercle *2 = entier*/, false);
        this.game.ctx.fill();
    },


}
export default ennemi;