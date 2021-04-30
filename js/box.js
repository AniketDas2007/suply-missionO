class Box{
    constructor(x, y, w, h){
        this.w = w;
        this.h = h;
        var option = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, option);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill('red')
        rect(pos.x, pos.y, this.w, this.h);
    }
}