import circle from './circle';
const game={
    canvas : document.getElementById('game'),
    ctx: null,

    init(){
        this.ctx = this.canvas.getContext('2d');
        circle.init(this);
        this.animate();
    },

    animate(){
        window.requestAnimationFrame(()=>{
            this.animate();
        })

        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        circle.update();
    },
}
game.init();