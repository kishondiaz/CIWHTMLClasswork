var dateNumber = document.getElementsByClassName("movenumberdate");
var innerDate = document.getElementsByClassName("innerdate");
var innerMonth = document.getElementById("month");
var table = document.getElementById("thewholetable");
var dynamicBackground = document.getElementById("dynamicImageDiv");
var innerTable = document.getElementById("thistoo");

var isMain = document.getElementById("chackforIE");
console.log(dateNumber.length);
var i=0;
var date = new Date();
var lastMonth  = new Date(date.getFullYear(), date.getMonth() + 0, 0);
var currentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
var nextMonth = new Date(date.getFullYear(), date.getMonth() + 2, 0);
var arrayMonths = ["","January","February","March","April","May","June","July","August","September","October","November","December"]
var s=0,q=0;
var so = false;
var arr = [];
var f=0;
var doitonce =false;
var injdoitonce = false;
console.log(innerMonth.innerHTML = arrayMonths[currentMonth.getMonth()+1]);
console.log(lastMonth);
dynamicBackground.style.width = 100+"px";
dynamicBackground.style.height = 100+"px";
dynamicBackground.style.backgroundImage = "url(image/halloween_pumpkins.jpg)";
dynamicBackground.style.position = 'relative';
dynamicBackground.style.left = 30+"px";
dynamicBackground.style.top = 100+"px";

table.style.top= -90+"px";
innerTable.style.backgroundImage = "url(image/halloween_pumpkins.jpg)";
innerTable.style.backgroundSize = "900px";
var running = 0;

for(var j=0; j< lastMonth.getDate(); j++ )
{
	
	if(j > lastMonth.getDate()-4)
	{
		//console.log(j+1);
		f++;
		//dateNumber[j].innerHTML = j+1;
	}
	//dateNumber[i].innerHTML = i+1;
}
/*for(var i=0 ; i< dateNumber.length ; ++i)
{
	q++;
	arr.push(dateNumber[i]);
	//This gets the end of the calendar
	/* if(i <= currentMonth.getDate()-1)
	{
		console.log(arr[i].innerHTML);
		dateNumber[i].innerHTML = i+1;
		
	}
	if(i > currentMonth.getDate()-1)
	{

		s++;
		console.log(s);
		dateNumber[i].innerHTML = s;
	} *	
	//console.log(f);;
	if(i <=f)
	{
		
		dateNumber[i].innerHTML = "";
		
	}else
	{

		s++;
		
		dateNumber[i].innerHTML = s;
		console.log(dateNumber[i].innerHTML );
		innerDate[i].onmouseover = function()
		{
			if(dateNumber[i].innerHTML === 1)
			{
				console.log(dateNumber[i].innerHTML);
			}
		}
	}
	// if(i <= currentMonth.getDate())
	// {
		// console.log(dateNumber[i].innerHTML=i);
	// }
	// else if( i > nextMonth.getDate() )
	// {	s=0;
		// s++;
		// console.log("here"+s);
		// so = true;
		
		// dateNumber[i].innerHTML =i;
	// }
	// if(so == true)
	// {
		// dateNumber[s].innerHTML =s;
	// }
}*/
function IsMouseOver()
{
	this.mousecounter = this.mousecounter++;
	this.isOver = false;
	this.setmouseovertrue = function( istrue)
	{
		ismouseover = istrue;
	}
	
}
var ismouseover = false;
var divcounted =0;
var k=0,s2=0;
var offset = {x:0,y:0};
var cursorX,cursorY;
function mainLoop()
{	var instanceofTarget,returntoNormal;
	var returnArray = []; 
	var isdoneonlyonce =false;
	var div = document.createElement("div");
	var stillOpen = false;
	var isopen = false;
	
	var button = document.createElement("BUTTON");
	here:
	if(running < dateNumber.length)
	{
		if(!doitonce){
			for(var i=0 ; i< dateNumber.length ; ++i)
			{
				q++;
				arr.push(dateNumber[i]);
				//This gets the end of the calendar
				/* if(i <= currentMonth.getDate()-1)
				{
					console.log(arr[i].innerHTML);
					dateNumber[i].innerHTML = i+1;
					
				}
				if(i > currentMonth.getDate()-1)
				{

					s++;
					console.log(s);
					dateNumber[i].innerHTML = s;
				} */
				
				//console.log(f);;
				if(i <=f)
				{
					
					dateNumber[i].innerHTML = "";
					
				}else
				{

					s++;
					
					dateNumber[i].innerHTML = s;
					
					
					innerDate[i].onmouseover = function(f)
					{

						document.onmouseover = function(e)
						{
							if(f === e)
							{
								
								
								//console.log(f.target.innerHTML);
								console.log(f.clientX);
								f.target.getElementsByClassName("movenumberdate")[0].style.visibility="hidden";
								div.style.position = "relative";
								div.style.transform = "scale(4,4)";
								div.zIndex="1";
								if(button === undefined)
								{
									button = document.createElement("BUTTON");
								}
								button.style.position ="absolute";
								button.style.top = "0";
								button.style.left = "0";
								button.style.width = "100%";
								button.style.height = "100%";
								button.style.clear ="both";
								button.innerHTML = "here";
								div.appendChild(button);
								f.target.style.whiteSpace = "nowrap";
								f.target.style.transform = "scale(2,2)";
								f.target.style.backgroundImage = "linear-gradient(#E6E6E6,white)"
								f.target.style.backgroundSize = "100px";
								f.target.style.zIndex = "1";
								instanceofTarget = e.target.getElementsByClassName("movenumberdate")[0].innerHTML;
								var instanceofMoveNumF = f.target.getElementsByClassName("movenumberdate")[0];
								var instanceofMoveNumE = f.target.getElementsByClassName("movenumberdate");
								returntoNormal = f.target.getElementsByClassName("movenumberdate")[0];
								if(!instanceofTarget.indexOf(returntoNormal))
								{
									
									isdoneonlyonce =true;
									returnArray.push(returntoNormal);
									console.log(instanceofTarget);
									
								}
								if(isdoneonlyonce)
								{
									
									isdoneonlyonce =false;
								}
								console.log(instanceofMoveNumF);
								if(e.target === f.target.getElementsByClassName("movenumberdate")[0])
								{
									e = null;
									console.log("here");
								}
								//var button = document.createElement("BUTTON");
								returnArray.push(instanceofMoveNumF);
								var k = button.onclick = function()
								{
									alert("here");
								}
								f.target.appendChild(button);

								isopen = true;
								//console.log(instanceofTarget);
								
							}
						}
					}
					
					innerDate[i].onmouseout = function(f)
					{
						
						document.onmouseout = function(e)
						{
							//console.log(returnArray.pop());
							if(isopen)
							{
								if(f === e)
								{
									//var instanceofTarget = f.target.getElementsByClassName("movenumberdate")[0];
									//console.log(returnArray.pop());
									if(returnArray !== undefined)
									{
										
									}
									f.target.getElementsByClassName("movenumberdate")[0].style.visibility="initial";
									f.target.removeChild(button);
									//instanceofTarget.style.visibility="initial";
									f.target.style.transform = "initial";
									f.target.style.backgroundImage = "initial";
									f.target.style.zIndex = "initial";
								}
							}
						}
					}
				}
				
				
			}
			doitonce =true;
			
		}
		
				
		++running
		if(running === dateNumber.length)
		{ 
			k=0;
			running=0;
			break here;
		}
	}
}

function getPosition(cell)
{
	//var cx=0, cy=0; cell != null; cx += cell.offsetLeft, cy += cell.offsetTop, cell = cell.offsetParent
	
	//for(var cx=0, cy=0; cell != null; cx += cell.offsetLeft, cy += cell.offsetTop, cell = cell.offsetParent);
	//return{x};
}

/*function setMousOverTrue(iftrue) 
{
	ismouseover = iftrue;
}*/
function getmousOverTrue()
{
	//console.log(ismouseover);
	return ismouseover;
}
if(isMain === undefined)
{
	//console.log(dateNumber.length);
}
function update()
{
	var streamLoop = setInterval(mainLoop,2);
}
//console.log(date.getMonth()+1,0);
var t= new Date();
//alert(currentMonth);
main()
{
	mainLoop();
	
}