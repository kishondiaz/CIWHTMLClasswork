

$(document).ready(main());


var navLoction;
var rc = document.getElementById("content");
var rcinner = document.getElementById("inner_content");
var body = document.getElementsByTagName("BODY")[0];
var table = document.getElementById("gallery");
var imgs = document.getElementsByClassName("images");
var bottomText = document.createElement("div"); 
var coding = document.getElementById("coding");

var h = false,scaledone = false;
var isalldone = [false,false,false,false,false,false,false,false,false,false,false,false];
var isDone = [false,false,false,false,false,false,false,false,false,false,false,false];

const RCWIDTH = rc.offsetWidth - 100;
const RCHEIGHT = rc.offsetHeight;

var loaded = function()
{
	this.booleanArray = false;
	this.boolisDone = [];
	
	this.setisDone = function( count, text)
	{
		this.boolisDone[count] = text;
	}
	this.getisDone = function(index)
	{
		return this.boolisDone[index];
	}
	this.setTrue = function(bool){
		this.booleanArray = bool; 
	}
	this.getTrue = function()
	{
		return this.booleanArray;
	}
}


var isLoaded = new loaded();


function rescaleContent(navloction)
{
	var width = RCWIDTH;
	var height = RCHEIGHT;
	var row,cell;
	var position;
	var isScale = false;
	var  finished
	
	const LEFT = "30%";
	
	
	
	
	
	switch(navloction)
	{
		
		case "Home":
		{
			isLoaded.setisDone(0,false);
			console.log(h);
			coding.style.width = "0";
			coding.style.height = "0";
			coding.style.transform = "scale(0,0)";
			rc.style.transition = "all ease 2s ";
			table.style.transition = "all ease ";
			table.style.transform ="scale(0,0)";
			width = RCWIDTH;
			height = RCHEIGHT;
			position = LEFT;
			
			bottomText.innerHTML = "I Still have a lot to learn with such little time....... ";
			bottomText.style.clear = "both";
			bottomText.style.position = "relative";
			bottomText.style.bottom = "50%";
			bottomText.style.left = "28%";
			bottomText.style.zIndex = "1000000";
			//rcinner.style.overflow = "hidden";
			if(!isLoaded.getisDone(0))
			{
				rc.appendChild(bottomText);
				console.log("is heres os");
				isLoaded.setisDone(0,true);
			}
			
			isScale =false;
			break;
		}
		case "Gallery":
		{
			coding.style.width = "0";
			coding.style.height = "0";
			coding.style.transform = "scale(0,0)";
			isLoaded.setisDone(1,false);
			bottomText.style.clear = "both";
			bottomText.style.position = "relative";
			bottomText.style.bottom = "95%";
			bottomText.style.left = "38%";
			//bottomText.style.zIndex = "-100";
			bottomText.innerHTML = "This is Some of my digital arts still a little rusty.";
			
			if(!h)
			{
				
				
				
				
				rc.style.transition = "all ease 2s ";
				table.style.transition = "all 3s ease 2s ";
				table.style.transform ="scale(1,1)";
				setTimeout(function(){for(var i=0; i< imgs.length; i++)
				{
				
					imgs[i].style.transition = "all ease 6s";
					imgs[0].style.zIndex = "3";
					imgs[4].style.zIndex = "3";
					imgs[8].style.zIndex = "3";
					
					imgs[1].style.zIndex ="1";
					imgs[1].style.paddingLeft="20px";
					imgs[1].style.left="40px"
					
					imgs[2].style.zIndex ="1";
					imgs[2].style.paddingLeft="20px";
					imgs[2].style.left="40px"
					
					imgs[3].style.zIndex ="1";
					imgs[3].style.paddingLeft="20px";
					imgs[3].style.left="40px"
					
					
					imgs[5].style.zIndex ="1";
					imgs[5].style.paddingLeft="20px";
					imgs[5].style.left="40px"
					
					imgs[6].style.zIndex ="1";
					imgs[6].style.paddingLeft="20px";
					imgs[6].style.left="40px"
					
					imgs[7].style.zIndex ="1";
					imgs[7].style.paddingLeft="20px";
					imgs[7].style.left="40px"
					
					imgs[9].style.zIndex ="1";
					imgs[9].style.paddingLeft="20px";
					imgs[9].style.left="40px"
					
					imgs[10].style.zIndex ="1";
					imgs[10].style.paddingLeft="20px";
					imgs[10].style.left="40px"
					
					imgs[11].style.zIndex ="1";
					imgs[11].style.paddingLeft="20px";
					imgs[11].style.left="40px"
					
					isScale = true;
					
				}},6000);
				
			}
			else
			{
				table.style.transform ="scale(1,1)";
				isScale = true;
			}
			
			//table.style.transform ="translateX(50000)";
			position ="20%";
			//rcinner.style.overflow = "scroll";
			
			width += 600;
			height += 160;
			
			if(!isLoaded.getisDone(1))
			{
				rc.appendChild(bottomText);
				isLoaded.setisDone(1,true);
			}
			h = true;
			break;
		}
		case "My Codes":
		{
			//var ttth = document.getElementById("ttth");
			console.log("here 3");
			isLoaded.setisDone(2,false);
			
			//coding.style.top= "";
			coding.style.width = "98%";
			coding.style.height = "93%";
			coding.style.transform = "scale(1,1)";
			
			rc.style.transition = "all ease 2s ";
			table.style.transition = "all ease ";
			table.style.transform ="scale(0,0)";
			width = RCWIDTH;
			height = RCHEIGHT+100;
			position = LEFT;
			
			//var pre = document.createElement("pre");
			//pre.className ="brush: js;";
			
			//ttth.appendChild(document.createTextNode("d"));
			//console.log(pre.className);
				
			//coding.appendChild(pre);
						//getFile("file/ttth.txt");
						
						
						
			
			
		
			if(!isLoaded.getisDone(2))
			{
				rc.removeChild(bottomText);
				isLoaded.setisDone(2,true);
				
			}
			isScale =false;
			
			break;
		}
		default:
		{
			//rc.style.width ="initial";
			break;
		}
		
	}
	rc.style.width =""+width+"px";
	rc.style.height =""+height+"px";
	rc.style.left = position;
	
	return isScale;
		
	
}

function movescaleimgs(index,transform)
{
	var isalldoneh = [];
	isalldone[index]= false;
	
	imgs[index].onmousemove = function()
	{
		
		this.style.transform = transform;
		//this.style.transform = "Scale(5,5)";
		
		isalldone[index] = true;
			
	}
	console.log(isalldone[index]);
	return isalldone[index];
		
	
}
function returnscaleimags(index,transform)
{
	imgs[index].onmousedown = function()
	{
		
		this.style.transform = transform;
		//this.style.transform = "Scale(5,5)";
		isalldone[index++] = true;
			
	}
}

function returnimag()
{
	var isClicked = false;
	
	for(var i=0;i<imgs.length; i++)
	{
			
		switch(i)
		{
			
			case 0:
			{
				//returnscaleimags(i,"translate(-150%,-100%)");
				break;
			}
			case 1:
			{
				movescaleimgs(i,"translate(-25%,-100%)");
				break;
			}
			case 2:
			{
				movescaleimgs(i,"translate(100%,-100%)");
				break;
			}
			case 3:
			{
				movescaleimgs(i,"translate(220%,-100%)");
				break;
			}
			case 4:
			{
				movescaleimgs(i,"translate(-150%,0%)");
				break;
			}
			case 5:
			{
				movescaleimgs(i,"translate(-20%,0%)");
				break;
			}
			case 6:
			{
				movescaleimgs(i,"translate(90%,0%)");
				break;
			}
			case 7:
			{
				movescaleimgs(i,"translate(220%,0%)");
				break;
			}
			case 8:
			{
				movescaleimgs(i,"translate(-150%,100%)");
				break;
			}
			case 9:
			{
				movescaleimgs(i,"translate(-20%,100%)");
				break;
			}
			case 10:
			{
				movescaleimgs(i,"translate(90%,100%)");
				break;
			}
			case 11:
			{
				movescaleimgs(i,"translate(220%,100%)");
				break;
			}
			default:
			{
				break;
			}
		}
		
	}
	
	
	
}
function imgsonhover(index)
{
	
	//isDone[index] = movescaleimgs(index,"translate(150%,100%)");	
	
	var i = index;
	switch(i)
		{
			
			case 0:
			{
				isDone[index] = movescaleimgs(i,"translate(150%,100%)");		
				break;
			}
			case 1:
			{
				isDone[index] =  movescaleimgs(i,"translate(25%,100%)");
				break;
			}
			case 2:
			{
				isDone[index] = movescaleimgs(i,"translate(-100%,100%)");
				break;
			}
			case 3:
			{
				isDone[index] = movescaleimgs(i,"translate(-220%,100%)");
				break;
			}
			case 4:
			{
				isDone[index] = movescaleimgs(i,"translate(150%,0%)");
				break;
			}
			case 5:
			{
				isDone[index] = movescaleimgs(i,"translate(20%,0%)");
				break;
			}
			case 6:
			{
				isDone[index] = movescaleimgs(i,"translate(-90%,0%)");
				
				break;
			}
			case 7:
			{
				isDone[index] = movescaleimgs(i,"translate(-220%,0%)");
				break;
			}
			case 8:
			{
				isDone[index] = movescaleimgs(i,"translate(150%,-100%)");
				break;
			}
			case 9:
			{
				isDone[index] = movescaleimgs(i,"translate(20%,-100%)");
				break;
			}
			case 10:
			{
				isDone[index] = movescaleimgs(i,"translate(-90%,-100%)");
				break;
			}
			case 11:
			{
				isDone[index] = movescaleimgs(i,"translate(-220%,-100%)");
				break;
			}
			default:
			{
				isDone[index] = false;
				break;
			}
		}  
	
	/*  for(var i=0;i<imgs.length; i++)
	{
		switch(i)
		{
			
			case 0:
			{
				movescaleimgs(i,"translate(150%,100%)");
				isDone[index] = true;
				
				break;
			}
			case 1:
			{
				movescaleimgs(i,"translate(25%,100%)");
				isDone[index] = true;
				break;
			}
			case 2:
			{
				movescaleimgs(i,"translate(-100%,100%)");
				break;
			}
			case 3:
			{
				movescaleimgs(i,"translate(-220%,100%)");
				break;
			}
			case 4:
			{
				movescaleimgs(i,"translate(150%,0%)");
				break;
			}
			case 5:
			{
				movescaleimgs(i,"translate(20%,0%)");
				break;
			}
			case 6:
			{
				movescaleimgs(i,"translate(-90%,0%)");
				break;
			}
			case 7:
			{
				movescaleimgs(i,"translate(-220%,0%)");
				break;
			}
			case 8:
			{
				movescaleimgs(i,"translate(150%,-100%)");
				break;
			}
			case 9:
			{
				movescaleimgs(i,"translate(20%,-100%)");
				break;
			}
			case 10:
			{
				movescaleimgs(i,"translate(-90%,-100%)");
				break;
			}
			case 11:
			{
				movescaleimgs(i,"translate(-220%,-100%)");
				break;
			}
			default:
			{
				break;
			}
		}  */
		
		return  isDone[index] ;
		
	//}
	
}
function thisisS()
{
	imgs[8].onclick = function()
	{
		console.log("here");
		//returnimag();
		this.style.transform = "translate(-150%,100%)";
	}
	/* for(var i=0; i<imgs.length; i++)
	{	if(isalldone[i] !== undefined)
		{	if(isalldone[i])
			{	
				
			}
		}
	} */
}
function getFile(fi)
{
	var reader = new FileReader();
	reader.onload = function(event)
	{
		var contents = event.target.result;
		console.log(contents);
	};
	
	reader.onerror = function(event)
	{
		console.log(event);
		
	};
	
	reader.readAsText(fi);
}
function main()
{
	var count =0;
	
	$("body").ready(function(){
		
		isLoaded.setTrue(true);
		console.log("here so");
		coding.style.width = "0";
		coding.style.height = "0";
		coding.style.transform = "scale(0,0)";
		bottomText.style.clear = "both";
		bottomText.style.position = "relative";
		bottomText.style.bottom = "50%";
		bottomText.style.left = "28%";
		bottomText.style.zIndex = "100";
		bottomText.innerHTML = "I Still have a lot to learn with such little time....... "
		rc.appendChild(bottomText);		
	});	
	
	$("a").click(function(){
		//console.log(this.innerHTML);
		navLoction = this.innerHTML;
		scaledone = rescaleContent(navLoction);
		//
		
	});
	
	/*  setInterval(function(){
		count++;
		if(imgs !== undefined)
		{
			for(var j=0;j < imgs.length; j++)
			{	if(imgsonhover(j)===true)
				{
					console.log(true);
				}else
				{
					console.log(false);
				}
			}
			//thisisS();
			
			
		}
		
		
	if(count >= 10)
	{
		count = 0;
	}
	
			
		
	},200);   */
	
	
	
}