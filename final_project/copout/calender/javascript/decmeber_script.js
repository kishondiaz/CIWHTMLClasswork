var dateNumber = document.getElementsByClassName("movenumberdate");
var innerDate = document.getElementsByClassName("innerdate");
var innerMonth = document.getElementById("month");
var lastbutton = document.getElementById("lastButton");
var centerbutton = document.getElementById("centerButton");
var nextButton = document.getElementById("nextButton");
var table = document.getElementById("thewholetable");
var dynamicBackground = document.getElementById("dynamicImageDiv");
var innerTable = document.getElementById("thistoo");

var dayscounted=0,q=0;
var blankDays=0;
var doitonce =false;
var running = 0;
var divcounted =0;

var date = new Date();
var lastMonth  = new Date(date.getFullYear(), date.getMonth() + 2, 0);
var currentMonth = new Date(date.getFullYear(), date.getMonth() + 3, 0);
var nextMonth = new Date(date.getFullYear(), date.getMonth() + 4, 0);
var arrayMonths = ["","January","February","March","April","May","June","July","August","September","October","November","December"];

//Main function below like c++

innerMonth.innerHTML ="December";

var HtmlObject = function HtmlObject(object,width,height)
{
	 this.htmlobject = document.createElement(object);
	 this.width = width;
	 this.height= height;
	 this.color;
	 this.background;
	 this.backgroundImage;
	 this.style = this.htmlobject.style;
	 
	
	 this.htmlobject.style = this.style;
	 this.htmlobject.style.width = this.width+"px";
	 this.htmlobject.style.height = this.height+"px";
	 this.htmlobject.style.color = "'"+this.color+"'";
	 this.htmlobject.style.background = this.background;
	 this.htmlobject.style.backgroundImage ="url("+this.backgroundImage+")";
	 
	 this.render = function()
	 {
		 document.appendChild(this);
	 }
	 this.remove = function()
	 {
		 document.removeChild(this);
	 }
	 
	 
	
	
}
function Loop()
{	var instanceofTarget,returntoNormal;
	var returnArray = []; 
	var isdoneonlyonce =false;
	var div = document.createElement("div");
	var stillOpen = false;
	var isopen = false;
	var htmlLink = document.createElement("A");
	htmlLink.href="http://www.google.com";
	htmlLink.innerHTML = "here";
	
	
	var button = document.createElement("BUTTON");

	
	
	here:
	if(running < dateNumber.length)
	{
		if(!doitonce){
			for(var i=0 ; i< dateNumber.length ; ++i)
			{
				q++;
				//Gets the counted last days of the previous month else fills the rest of the table;
				htmlLink.style.position ="absolute";
				htmlLink.style.top = "25%";
				htmlLink.style.left = "0";
				htmlLink.style.width = "100%";
				htmlLink.style.height = "100%";
				htmlLink.style.textAlign="center";
				htmlLink.style.color = "yellow";
				htmlLink.style.clear ="both";

				if(i <= blankDays)
				{
					dateNumber[i].innerHTML = "";
				}else
				if(i <= currentMonth.getDate()+1)
				{
					dayscounted++;
					dateNumber[i].innerHTML = dayscounted;
					/* LogMessage("75",dateNumber[i].innerHTML); */
					innerDate[i].style.color = "black";
					if(dateNumber[i].innerHTML === "24")
					{
						innerDate[i].style.backgroundImage = "url(../image/tree_decorations.gif)";
						innerDate[i].style.backgroundSize = "100%";
						innerDate[i].style.backgroundPosition = "center";
						//innerDate[i].appendChild(htmlLink);
						htmlLink.style.color = "white";
						htmlLink.innerHTML="Christmas";
						htmlLink.style.textDecoration = "bold";
						htmlLink.style.fontSize = 20+"px";
						innerDate[i].appendChild(htmlLink);
						//innerDate[i].appendChild(htmlLink);
						
						
					}else
					if(dateNumber[i].innerHTML === "25")
					{
						innerDate[i].style.backgroundImage = "url(../image/tree_decorations.gif)";
						innerDate[i].style.backgroundSize = "100%";
						innerDate[i].style.backgroundPosition = "center";
						//innerDate[i].appendChild(htmlLink);
						htmlLink.style.color = "white";
						htmlLink.innerHTML="Christmas";
						htmlLink.style.textDecoration = "bold";
						htmlLink.style.fontSize = 20+"px";
						innerDate[i].appendChild(htmlLink);
						//innerDate[i].appendChild(htmlLink);
						
						
					}else
					if(dateNumber[i].innerHTML === "26")
					{
						innerDate[i].style.backgroundImage = "url(../image/animated_present.gif)";
						innerDate[i].style.backgroundSize = "100%";
						innerDate[i].style.backgroundPosition = "center";
						//innerDate[i].appendChild(htmlLink);
						htmlLink.style.color = "white";
						htmlLink.innerHTML="Christmas <br/> Eve";
						htmlLink.style.textDecoration = "white";
						htmlLink.style.fontSize = 20+"px";
						innerDate[i].appendChild(htmlLink);
						
						
					}else
					if(dateNumber[i].innerHTML === "31")
					{
						innerDate[i].style.backgroundImage = "url(../image/happy_new_year_fireworks.gif)";
						innerDate[i].style.backgroundSize = "100%";
						innerDate[i].style.backgroundPosition = "center";
						//innerDate[i].appendChild(htmlLink);
						htmlLink.style.color = "red";
						htmlLink.innerHTML="New <br/> Years";
						htmlLink.style.textDecoration = "bold";
						htmlLink.style.fontSize = 20+"px";
						innerDate[i].appendChild(htmlLink);
						
						
					}
					
					innerDate[i].onmouseover = function(inDateEvent)
					{
						document.onmouseover = function(docEvent)
						{
							
							if(inDateEvent === docEvent)
							{
								instanceofTarget = docEvent.target.getElementsByClassName("movenumberdate")[0].innerHTML;
								var instanceofMoveNumF = inDateEvent.target.getElementsByClassName("movenumberdate")[0];
								var instanceofMoveNumE = inDateEvent.target.getElementsByClassName("movenumberdate");
								returntoNormal = inDateEvent.target.getElementsByClassName("movenumberdate")[0];
								var txtdatenumber = inDateEvent.target.getElementsByClassName("movenumberdate")[0].style.visibility="hidden";
								var number = inDateEvent.target.getElementsByClassName("movenumberdate")[0].innerHTML;
								
								/*div.style.position = "relative";
								div.style.transform = "scale(4,4)";
								div.zIndex="1";*/
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
								button.innerHTML = "Check Events";
								//div.appendChild(button);\
								
							    
								
								inDateEvent.target.style.whiteSpace = "nowrap";
								inDateEvent.target.style.transform = "scale(2,2)";
								inDateEvent.target.style.backgroundImage = "linear-gradient(#E6E6E6,white)"
								inDateEvent.target.style.backgroundSize = "100px";
								inDateEvent.target.style.zIndex = "1";
								
								if(!instanceofTarget.indexOf(returntoNormal))
								{
									
									isdoneonlyonce =true;
									returnArray.push(returntoNormal);
									//console.log(instanceofTarget);
									
								}
								if(isdoneonlyonce)
								{
									
									isdoneonlyonce =false;
								}
								//console.log(instanceofMoveNumF);
								if(docEvent.target === inDateEvent.target.getElementsByClassName("movenumberdate")[0])
								{
									//inDateEvent.target = null;
									//console.log("here");
								}
						
								var k = button.onclick = function()
								{
									alert("no event for today")	;							
								}
								if(number === "24")
								{
									inDateEvent.target.style.backgroundImage = "url(../image/tree_decorations.gif)";
									inDateEvent.target.style.transform = "initial";
									inDateEvent.target.style.backgroundSize = "100%";
									htmlLink.style.whiteSpace = "wrap";
									htmlLink.style.color = "white";
									htmlLink.href = "http://www.history.com/topics/christmas"
									htmlLink.innerHTML = "Christmas"
									htmlLink.style.textDecoration = "bold";
									htmlLink.style.fontSize = 20+"px";
									htmlLink.setAttribute("target","_blank");
									inDateEvent.target.appendChild(htmlLink);
								}else
								if(number == "25")
								{
									inDateEvent.target.style.backgroundImage = "url(../image/tree_decorations.gif)";
									inDateEvent.target.style.transform = "initial";
									inDateEvent.target.style.backgroundSize = "100%";
									htmlLink.style.whiteSpace = "wrap";
									htmlLink.style.color = "white";
									htmlLink.href = "http://www.history.com/topics/christmas"
									htmlLink.innerHTML = "Christmas"
									htmlLink.style.textDecoration = "bold";
									htmlLink.style.fontSize = 20+"px";
									htmlLink.setAttribute("target","_blank");
									inDateEvent.target.appendChild(htmlLink);
									
								}else
								if(number === "26")
								{
									inDateEvent.target.style.backgroundImage = "url(../image/animated_present.gif)";
									inDateEvent.target.style.transform = "initial";
									inDateEvent.target.style.backgroundSize = "100%";
									htmlLink.style.whiteSpace = "wrap";
									htmlLink.style.color = "white";
									htmlLink.href = "http://theweek.com/articles/441360/brief-history-christmas-present"
									htmlLink.innerHTML = "Christmas <br/> Eve"
									htmlLink.style.textDecoration = "bold";
									htmlLink.style.fontSize = 20+"px";
									htmlLink.setAttribute("target","_blank");
									inDateEvent.target.appendChild(htmlLink);
									
									//inDateEvent.target.appendChild(htmlLink);
									
									
									//inDateEvent.target.innerHTML = "<a id='innerLink' href='http://www.google.com'>here</a>";
									
									////inDateEvent.target.style.backgroundImage = "url(image/witch.gif)";
									/*button.style.backgroundImage = "url(image/witch.gif)";
									button.style.color = "orange";
									button.innerHTML = "Halloween";
									button.onclick = function()
									{
										alert("This day is Halloween");							
									}*/
								}else
								if(number == "31")
								{
									inDateEvent.target.style.backgroundImage = "url(../image/happy_new_year_fireworks.gif)";
									inDateEvent.target.style.transform = "initial";
									inDateEvent.target.style.backgroundSize = "100%";
									htmlLink.style.whiteSpace = "wrap";
									htmlLink.style.color = "white";
									htmlLink.href = "http://www.history.com/topics/holidays/new-years"
									htmlLink.innerHTML = "New <br/> Years"
									htmlLink.style.textDecoration = "bold";
									htmlLink.style.fontSize = 20+"px";
									htmlLink.setAttribute("target","_blank");
									inDateEvent.target.appendChild(htmlLink);
									
								}
								else
								{
									inDateEvent.target.appendChild(button);
								}
								isopen = true;							
							}
						}
					}
					
					innerDate[i].onmouseout = function(inDateEvent)
					{
						
						document.onmouseout = function(e)
						{
							if(isopen)
							{
								if(inDateEvent === e)
								{	
									var number = inDateEvent.target.getElementsByClassName("movenumberdate")[0].innerHTML;
									inDateEvent.target.style.transform = "initial";
									button.style.color = "black";
									if(number === "24")
									{
										
										//button.style.backgroundImage = "initial";
										inDateEvent.target.getElementsByClassName("movenumberdate")[0].style.visibility="visible";
										inDateEvent.target.style.backgroundImage = "url(../image/tree_decorations.gif)";
										inDateEvent.target.style.transform = "initial";
										inDateEvent.target.style.zIndex = "initial";				
										
										
									}else
									if(number === "25")
									{
										
										//button.style.backgroundImage = "initial";
										inDateEvent.target.getElementsByClassName("movenumberdate")[0].style.visibility="visible";
										inDateEvent.target.style.backgroundImage = "url(../image/tree_decorations.gif)";
										inDateEvent.target.style.transform = "initial";
										inDateEvent.target.style.zIndex = "initial";				
										
										
									}else
									if(number === "26")
									{
										
										//button.style.backgroundImage = "initial";
										inDateEvent.target.getElementsByClassName("movenumberdate")[0].style.visibility="visible";
										inDateEvent.target.style.backgroundImage = "url(../image/animated_present.gif)";
										inDateEvent.target.style.transform = "initial";
										inDateEvent.target.style.zIndex = "initial";				
										
										
									}else
									if(number === "31")
									{
										
										//button.style.backgroundImage = "initial";
										inDateEvent.target.getElementsByClassName("movenumberdate")[0].style.visibility="visible";
										inDateEvent.target.style.backgroundImage = "url(../image/happy_new_year_fireworks.gif)";
										inDateEvent.target.style.transform = "initial";
										inDateEvent.target.style.zIndex = "initial";				
										
										
									}
									
										
									inDateEvent.target.removeChild(button);
									
									inDateEvent.target.getElementsByClassName("movenumberdate")[0].style.visibility="visible";
									
									inDateEvent.target.style.backgroundImage = "initial";
									inDateEvent.target.style.zIndex = "initial";
									
									
								}
								
								
							}
						}
					}
					
				}else
				if(i >=currentMonth.getDate()+2)
				{

/* 					console.log("here");
 */					dateNumber[i].innerHTML = "";
				} 				
			}
			doitonce =true;
		}
		
		++running
		if(running === dateNumber.length)
		{ 
			running=0;
			break here;
		}
	}
}


function update()
{
	var streamLoop = setInterval(Loop,2);
}
main()
{
	
	var nextdiv = new HtmlObject("div",100,100);

	innerTable.style.backgroundImage = "url(../image/snowman.jpg)";
	innerTable.style.backgroundSize = "900px";
	
		//gets amount in previous month
	for(var j=0; j< lastMonth.getDate(); j++ )
	{
		//gets last days count from previous month and counts 
		if(j > lastMonth.getDate()-2)
		{
			//console.log(j+1);
			blankDays++;

		}

	}
	
	

	
	Loop();
	lastButton.onmouseover = function(event)
 	{
		var div = document.createElement("div")
		div.style.backgroundColor = "blue";
		document.appendChild(div);
	}
	centerButton.onmouseover = function(event)
 	{
		
	}
	nextButton.onmouseover = function(event)
 	{
		
	}
	update();
	
}