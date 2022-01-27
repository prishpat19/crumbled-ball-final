class paper
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
            'restitution' : 0.3,
            'friction': 0,
            'density': 2.5

			}
		
    this.radius = radius;
			this.image = loadImage("paper.png");
		this.body=Bodies.circle(x, y, radius, options);
 		World.add(world, this.body);

	}
	display()
	{
			var pos = this.body.position;
			push();
			translate(pos.x, pos.y);
			
			ellipseMode(CENTER);
			strokeWeight(10);
			fill('blue');
			image(this.image, 0, 0, this.radius, this.radius);
			pop();
			
	}

}