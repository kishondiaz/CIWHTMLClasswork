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
var lastMonth  = new Date(date.getFullYear(), date.getMonth() + 1, 0);
var currentMonth = new Date(date.getFullYear(), date.getMonth() + 2, 0);
var nextMonth = new Date(date.getFullYear(), date.getMonth() + 3, 0);
var arrayMonths = ["","January","February","March","April","May","June","July","August","September","October","November","December"];

//Main function below like c++

console.log(innerMonth.innerHTML = arrayMonths[currentMonth.getMonth()+1]);
console.log(lastMonth);

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
				htmlLink.style.position ="absolute";
				htmlLink.style.top = "25%";
				htmlLink.style.left = "0";
				htmlLink.style.width = "100%";
				htmlLink.style.height = "100%";
				htmlLink.style.textAlign="center";
				htmlLink.style.color = "yellow";
				htmlLink.style.clear ="both";
				
				if(i <= currentMonth.getDate()-1)
				{
					dayscounted++;
					dateNumber[i].innerHTML = dayscounted;
					LogMessage("75",dateNumber[i].innerHTML);
					if(dateNumber[i].innerHTML === "1")
					{
						innerDate[i].style.backgroundImage = "url(../image/daylight_savings.gif)";
						innerDate[i].style.backgroundSize = "100%";
						innerDate[i].style.backgroundPosition = "center";
						//innerDate[i].appendChild(htmlLink);
						htmlLink.style.color = "red";
						htmlLink.innerHTML="Daylight <br/> Saving";
						htmlLink.style.textDecoration = "bold";
						htmlLink.style.fontSize = 20+"px";
						innerDate[i].appendChild(htmlLink);
						
						
					}
					if(dateNumber[i].innerHTML === "11")
					{
						innerDate[i].style.backgroundImage = "url(../image/memorialday.gif)";
						innerDate[i].style.backgroundSize = "100%";
						innerDate[i].style.backgroundPosition = "center";
						htmlLink.style.color = "yellow";
						htmlLink.innerHTML="Memorial <br/>Day";
						htmlLink.style.textDecoration = "bold";
						htmlLink.style.fontSize = 20+"px";
						innerDate[i].appendChild(htmlLink);
						//innerDate[i].appendChild(htmlLink);
						
						
					}
					if(dateNumber[i].innerHTML === "26")
					{
						
						innerDate[i].style.backgroundImage = "url(../image/thanksgivings.gif)";
						innerDate[i].style.backgroundColor = "white";
						
						innerDate[i].style.backgroundSize = "120%";
						innerDate[i].style.backgroundPosition = "center";
						htmlLink.style.color = "black";
						htmlLink.style.whiteSpace = "nowrap";
						htmlLink.innerHTML="ThanksGiving";
						htmlLink.style.textDecoration = "bold";
						htmlLink.style.fontSize = 20+"px";
						innerDate[i].appendChild(htmlLink);
						//innerDate[i].appendChild(htmlLink);
						
						
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
								if(number === "1")
								{
									inDateEvent.target.style.backgroundImage = "url(../image/daylight_savings.gif)";
									inDateEvent.target.style.transform = "initial";
									inDateEvent.target.style.backgroundSize = "100%";
									htmlLink.style.whiteSpace = "wrap";
									htmlLink.style.color = "red";
									htmlLink.href = "http://www.al.com/news/index.ssf/2015/10/daylight_savings_time_2015_get.html"
									htmlLink.innerHTML = "Daylight <br/> Savings"
									htmlLink.style.textDecoration = "bold";
									htmlLink.style.fontSize = 20+"px";
									htmlLink.setAttribute("target","_blank");
									inDateEvent.target.appendChild(htmlLink);
									
								}else
								if(number == "11")
								{
									inDateEvent.target.style.backgroundImage = "url(../image/memorialday.gif)";
									inDateEvent.target.style.transform = "initial";
									inDateEvent.target.style.backgroundSize = "100%";
									htmlLink.style.color = "yellow";
									htmlLink.href = "http://www.calendar-12.com/holidays/memorial_day/2015";
									htmlLink.innerHTML = "Memorial <br/>Day"
									htmlLink.style.textDecoration = "bold";
									htmlLink.style.fontSize = 20+"px";
									htmlLink.setAttribute("target","_blank");
									inDateEvent.target.appendChild(htmlLink);
									
								}else
								if(number === "26")
								{
									inDateEvent.target.style.backgroundImage = "url(../image/thanksgivings.gif)";
									inDateEvent.target.style.transform = "initial";
									inDateEvent.target.style.backgroundSize = "120%";
									htmlLink.style.color = "black";
									htmlLink.href = "http://www.calendar-365.com/holidays/thanksgiving.html";
									htmlLink.innerHTML = "ThanksGiving"
									htmlLink.style.textDecoration = "bold";
									htmlLink.style.fontSize = 20+"px";
									htmlLink.setAttribute("target","_blank");
									inDateEvent.target.appendChild(htmlLink);
									//inDateEvent.target.appendChild(htmlLink);
									
									htmlLink.onmouseover = function(k)
									{
										
										
									}
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
									if(number === "1")
									{
										LogMessage("here");
										//button.style.backgroundImage = "initial";
										inDateEvent.target.getElementsByClassName("movenumberdate")[0].style.visibility="visible";
										inDateEvent.target.style.backgroundImage = "url(../image/daylight_savings.gif)";
										inDateEvent.target.style.transform = "initial";
										inDateEvent.target.style.zIndex = "initial";
										inDateEvent.target.appendChild(htmlLink);										
										
										
									}else
									if(number === "11")
									{
										LogMessage("here");
										//button.style.backgroundImage = "initial";
										inDateEvent.target.getElementsByClassName("movenumberdate")[0].style.visibility="visible";
										inDateEvent.target.style.backgroundImage = "url(../image/memorialday.gif)";
										inDateEvent.target.style.transform = "initial";
										inDateEvent.target.style.zIndex = "initial";
										inDateEvent.target.appendChild(htmlLink);										
										
										
									}else
									if(number === "26")
									{
										LogMessage("here");
										//button.style.backgroundImage = "initial";
										inDateEvent.target.getElementsByClassName("movenumberdate")[0].style.visibility="visible";
										inDateEvent.target.style.backgroundImage = "url(../image/thanksgivings.gif)";
										inDateEvent.target.style.transform = "initial";
										inDateEvent.target.style.zIndex = "initial";	
										inDateEvent.target.appendChild(htmlLink);
										
										
									}
									
										
									inDateEvent.target.removeChild(button);
									
									inDateEvent.target.getElementsByClassName("movenumberdate")[0].style.visibility="visible";
									
									inDateEvent.target.style.backgroundImage = "initial";
									inDateEvent.target.style.zIndex = "initial";
									
									
								}
								
								
							}
						}
					}
					
				}
				if(i > currentMonth.getDate()-1)
				{

					console.log("here");
					dateNumber[i].innerHTML = "";
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

	innerTable.style.backgroundImage = "url(../image/thanksgiving_cornucopia.jpg)";
	innerTable.style.backgroundSize = "900px";
	
		//gets amount in previous month
	for(var j=0; j< lastMonth.getDate(); j++ )
	{
		//gets last days count from previous month and counts 
		if(j > lastMonth.getDate()-4)
		{
			//console.log(j+1);
			blankDays++;

		}

	}
	lastButton.onmouseover = function(event)
 	{
		
	}
	centerButton.onmouseover = function(event)
 	{
		
	}
	nextButton.onmouseover = function(event)
 	{
		
	}
	

	
	Loop();
	update();
	
}