import circle from './circle';
import Square from "./Square";
import ennemi from "./ennemi";
const game={
    canvas : document.getElementById('game'),
    ctx: null,
    squares:[],
    squaresCount:7,
    requestId: 0,
    init(){
        this.ctx = this.canvas.getContext('2d');
        circle.init(this);
        for (let i = 0; i < this.squaresCount; i++){
            this.squares.push(new Square(this));

        }
        ennemi.init(this);
        this.animate();
    },

    animate(){
        this.requestId = window.requestAnimationFrame(()=>{
            this.animate();
        })

        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        circle.update();
        this.squares.forEach(square=>{
            square.update();


        })
        ennemi.update();
    },

    cancelAnimation(){
        window.cancelAnimationFrame(this.requestId);
    }

}
game.init();