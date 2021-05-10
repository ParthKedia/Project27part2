class rope {
    constructor(body1,body2){
        var A = {
            bodyA: body1,
            bodyB: body2,
            stiffness:0.1,
            length: 5
        }
        this.chain = Constraint.create(A);

        World.add(world,this.chain);
    }
   /* show() {
        push();
      strokeWeight(4);
      stroke(255);
      line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y); 
      pop();
    }*/
}