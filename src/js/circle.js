import Square from "./Square";
const circle = {
    game: null,
    x: 20,
    y:20,
    width: 20,
    height: 20,
    speed : 0.05,

    init(game){
        this.game = game;
        this.y = this.game.canvas.height - this.height;

    },

    update(){
       this.renderEllipse();
       //this.collisionSquare();
       window.addEventListener('keydown', (e)=>{

           if (e.key === 'ArrowRight'){
               //this.x=0;
               this.x+=this.speed;
               if (this.x > this.game.canvas.width){
                   this.x = 0;
               }



           }
           else if (e.key === 'ArrowLeft'){

               this.x-=this.speed;
               if (this.x < 0){
                   this.x = this.game.canvas.width+this.width;
               }

           }
           if (e.key === 'ArrowDown'){

               this.y+=this.speed;
               if (this.y > this.game.canvas.height){
                   this.y = 0;
               }



           }
           else if (e.key === 'ArrowUp'){

               this.y-=this.speed;
               if (this.y < 0){
                   this.y = this.game.canvas.height+this.height;
               }

           }
       })



    },
    renderEllipse() {
        this.game.ctx.fillStyle = "black";
        this.game.ctx.beginPath();
        this.game.ctx.ellipse(this.x, this.y, this.width, this.height, 0, 0, Math.PI * 2/*tout le cercle math.pi = demi cercle *2 = entier*/, false);
        this.game.ctx.fill();
    },


}
export default circle;