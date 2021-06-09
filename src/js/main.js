import circle from './circle';
import Square from "./Square";
const game={
    canvas : document.getElementById('game'),
    ctx: null,
    squares:[],
    squaresCount:7,
    init(){
        this.ctx = this.canvas.getContext('2d');
        circle.init(this);
        for (let i = 0; i < this.squaresCount; i++){
            this.squares.push(new Square(this));
        }
        this.animate();
    },

    animate(){
        window.requestAnimationFrame(()=>{
            this.animate();
        })

        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        circle.update();
        this.squares.forEach(square=>{
            square.update();

        })
    },

}
game.init();