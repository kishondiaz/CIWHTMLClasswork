

var CreatDiv = function CreatDiv(type)
{
	this.x =0.0;
	this.y = 0.0;
	this.div = document.createElement(type);
	this.doc = document;
	this.height = 1;
	this.width=1;
	this.bgColor = "";
	this.color = "";
	this.speed =0;
	if(this.div !== undefined || this.div !== null)
	{
		if( this.style !== undefined || this.style !=="" 
			|| this.style !==" " || this.style !==null )
				this.div.style=this.style;
		
		this.Width = function()
		{
			if( this.width !== undefined || this.width !=="" 
			|| this.width !==" " || this.width !==null
			||this.width >1)
			{	
				
				return this.div.style.width = this.width+"px";
			}
		};
		this.Height = function()
		{
			if( this.height !== undefined || this.height !=="" 
			|| this.height !==" " || this.height !==null ||
			this.height > 0)
				return this.div.style.height = this.height+"px";
			
		};
		this.move = function()
		{
			if(this.div !== undefined)
				this.div.style.transform = "translate("+this.x+"px,"+this.y+"px)";
			
		};
		this.update = function()
		{
			this.x;
			this.y;
			this.height;
			this.width;
			this.bgColor;
			this.color;
			this.style;
			this.Width();
			this.Height();
			setInterval(this.move,this.speed);
		};
		this.appendToChild = function()
		{
			this.update();
			return this.div;
		};
	}
	
	
}

var mouseObject = new CreatDiv("div");
var video = document.createElement("video");
var source = sourceogg = document.createElement("SOURCE");
var counter = 0;
var speed =0;
var x=0;
var memoryInfo = window.performance.memory;

//video.setAttribute("autoplay","true");
createMouseObject();
createVidoeObject();

source.src = "assets/life_and_death_of_a_star.mp4";
sourceogg.src = "assets/life_and_death_of_a_star.ogv";
source.type = "video/mp4";
sourceogg.type = "video/ogg";
video.style.transform = "scale(0,0)";

video.appendChild(source);
video.appendChild(source);


//video.pause();
function update()
{
	var mouseMove = false;
	here:
	if(counter < 1 )
	{
		console.log(memoryInfo);
		
		
		counter++;
		document.onmousemove = function(event)
		{
			mouseObject.x = event.pageX;
			mouseObject.y = event.pageY;
			//followDiv(event.pageX,event.pageY);
			
		}
		if(star !== undefined || star !== null)
		{
			
			
			updateMap();
			star.onmouseover = function()
			{
				video.style.transition =" all 3s ease";
				video.style.transform = "scale(.5,.8)";
				video.style.opacity = "1";
				
				
				source.src = "assets/life_and_death_of_a_star.mp4";
				sourceogg.src = "assets/life_and_death_of_a_star.ogv";
				if(video.play)
				{
					video.load();
				}
				source.type = "video/mp4";
				sourceogg.type = "video/ogg";
				
				setTimeout(function(){video.play();},500);
				mouseMove = true;
				
				
			
				
				
			}
			star.onmouseout = function()
			{
				console.log("off");

				if(video.play)
				{
					setTimeout(function(){video.pause();},1);
					
				}
				video.style.transition =" all 1s ease";
				video.style.transform = "scale(0,0)";
				setTimeout(function(){video.pause();},1);
				
			}
			
		}
		if(circle !== undefined || circle !== null)
		{
			
			updateMap();
			circle.onmouseover = function()
			{
				
				video.style.transition =" all 3s ease";
				video.style.transform = "scale(.5,.8)";
				video.style.opacity = "1";
				source.src = "assets/circle.mp4";
				sourceogg.src = "assets/circle.ogv";
				sourceogg.type = "video/ogg";
				if(video.play)
				{
					video.load();
				}
				source.type = "video/mp4";
			
				
				setTimeout(function(){video.play();},500);
				mouseMove = true;
				
				
			
				
				
			}
			circle.onmouseout = function()
			{
				

				if(video.play)
				{
					setTimeout(function(){video.pause();},1);
					
				}
				video.style.transition =" all 1s ease";
				video.style.transform = "scale(0,0)";
				setTimeout(function(){video.pause();},1);
				
			}
			
		}
		if(rectangle !== undefined || rectangle !== null)
		{
			
			updateMap();
			rectangle.onmouseover = function()
			{
				
				video.style.transition =" all 3s ease";
				video.style.transform = "scale(.5,.8)";
				video.style.opacity = "1";
				source.src = "assets/rectangle.mp4";
				sourceogg.src = "assets/rectangle.ogv";
				if(video.play)
				{
					video.load();
				}
				source.type = "video/mp4";
				sourceogg.type = "video/ogg";
			
				
				setTimeout(function(){video.play();},500);
				mouseMove = true;	
				
			}
			rectangle.onmouseout = function()
			{
				

				if(video.play)
				{
					setTimeout(function(){video.pause();},1);
					
				}
				video.style.transition =" all 1s ease";
				video.style.transform = "scale(0,0)";
				
			}
		}
		if(polygon !== undefined || polygon !== null)
		{
			
			updateMap();
			polygon.onmouseover = function()
			{
				video.style.right="290px";
				video.style.bottom="123px";
				
				video.style.transition =" all 3s ease";
				video.style.transform = "scale(.35555,.5)";
				
				video.style.opacity = "1";
				source.src = "assets/polygon.mp4";
				sourceogg.src = "assets/polygon.ogv";
				
				if(video.play)
				{
					video.load();
				}
				source.type = "video/mp4";
				sourceogg.type = "video/ogg";
				
				setTimeout(function(){video.play();},500);
				mouseMove = true;
				
				
			
				
				
			}
			polygon.onmouseout = function()
			{
				

				if(video.play)
				{
					setTimeout(function(){video.pause();},1);
					console.log("in here");
				}

				video.style.transition =" all 1s ease";
				video.style.right="145px";
				video.style.bottom="24px";
				video.style.transform = "scale(0,0)";
				setTimeout(function(){video.pause();},1);
				
			}
			
		}
		
		if(arrow !== undefined || arrow !== null)
		{
			updateMap();
			arrow.onmouseover = function()
			{
				
				video.style.transition =" all 3s ease";
				video.style.transform = "scale(.5,.8)";
				video.style.opacity = "1";
				source.src = "assets/arrows.mp4";
				sourceogg.src = "assets/arrows.ogv";
				
				if(video.play)
				{
					video.load();
				}
				source.type = "video/mp4";
				sourceogg.type = "video/ogg";
			
				
				setTimeout(function(){video.play();},500);
				mouseMove = true;
				
				
			
				
				
			}
			arrow.onmouseout = function()
			{
				

				if(video.play)
				{
					setTimeout(function(){video.pause();},1);
					
				}

				video.style.transition =" all 1s ease";
				video.style.right="145px";
				video.style.bottom="24px";
				video.style.transform = "scale(0,0)";
				setTimeout(function(){video.pause();},1);
				
				
			}
			
			
		}

		
		mouseObject.move();
		mouseObject.update();
		if(counter === 1)
		{
			counter = 0;
			break here;
		}
	}
}

function createMouseObject()
{
	mouseObject.div.style.position ="relative";
	mouseObject.width = 370;
	mouseObject.height = 300;
	mouseObject.div.style.backgroundColor = "rgba("+232+","+232+","+232+","+.5+")";
	mouseObject.div.style.zIndex = "2";
	mouseObject.update();
	document.body.appendChild(mouseObject.appendToChild());
	
}
function createVidoeObject()
{
	video.style.position = "relative";
	video.style.right="145px";
	video.style.bottom="24px";
	video.setAttribute("fullscreen","true");
	
	mouseObject.div.appendChild(video);
}

function followDiv(x,y)
{
	var thisX = mouseObject.x;
	mouseObject.x = x;
	mouseObject.y = y;
}

setInterval(update,1);