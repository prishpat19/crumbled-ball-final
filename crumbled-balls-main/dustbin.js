class dustbin
{
	constructor(x, y, width, height)
	{
		var options = {
			isStatic: true,
			'retitution': 0,
			'friction': 1,
			'density': 0.1
		}
		this.width = width;
this.height = height;
		this.image = loadImage("trashcan.png");
		
		this.body = Bodies.rectangle(x, y, width, height, options);

World.add(world, this.body);
	}
	display()
	{
			push();
		
			rectMode(CENTER)
			
			fill(255)
			image(this.image, 900, 450, this.width, this.height);
			pop();
	}

};