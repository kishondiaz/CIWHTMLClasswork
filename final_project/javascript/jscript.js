function main(){}
/* fix the fullscrencontainers and buttons calanderbtn and fullscreencontainerexit */

function Update()
{
	var pageupdate;
	
	
	if(!flags[0])
	{
		menu.style.transform = "scaleX(0)";
		flagsCanvasDoneOnce[1] = true;
	}
	else
	{
		menu.style.transform = "scaleX(1)";
	
	} 
	
	if(!flags[1])
	{
		/* calanderindex.style.transform = "translateY(42px)";
		calanderindex.style.transform += "scaleY(0)"; */
		
		navup=false;
		
	}
	else
	{
		/* calanderindex.style.transform = "translateY(42px)";
		calanderindex.style.transform += "scaleY(1)"; */
		nav.style.transform = "scaleY(0)"; 
		header.style.transform = "scaleY(0)"; 
		
		
		
		navup = true;
		if(!flagsCanvasDoneOnce[0])
		{
			drawknobeonClick();
			flagsCanvasDoneOnce[0] = true;
		}
		
		
	
	} 
	
	if(!flags[2])
	{
		canvaspage.style.transform = "translateY(60px)";
		canvaspage.style.transform += "scaleY(.5)";
		canvaspage.style.top = "80%";
		canvaspage.style.height= "120px";
		canvascontainer.style.transform = "scaleY(0)";
		foot.style.transform = "scaleY(1)";
		/* fullscreencontainer.style.transform = "translateY(0)"; */
		
		console.log("herea "+ navup);
		
	}
	else
	{
		console.log("hereb "+ navup);
		canvaspage.style.transform = "translateY(0)";
		canvaspage.style.transform += "scaleY(1)";
		if(!navup)
		{
			canvaspage.style.top = "97px";
			/* fullscreencontainerexit.style.visibility = "hidden"; */
			console.log("herec ");
			
		}
		else
		{
			
			canvaspage.style.top = "0";
			/* fullscreencontainerexit.style.visibility = "visible"; */
			console.log("hered");
			
			
			
			
		}
		
		
		canvaspage.style.height= "100%";
		canvascontainer.style.transform = "scaleY(1)";
		foot.style.transform = "scaleY(0)";
		canvup = true;
		
	
	}
	
	
	if(flags[3])
	{
		canvaspage.style.transform = "translateY(60px)";
		canvaspage.style.transform += "scaleY(.5)";
		canvaspage.style.top = "81%";
		canvaspage.style.height= "120px";
		canvascontainer.style.transform = "scaleY(0)";
		foot.style.transform = "scaleY(1)";
		/* fullscreencontainer.style.transform = "translateY(0)"; */
		nav.style.transform = "scaleY(1)"; 
		header.style.transform = "scaleY(1)"; 
		/* fullscreencontainerexit.style.visibility = "hidden"; */
		navup = true;
		
		
		
	}else
	{
		if(canvup)
		{
			console.log("here this point");
			
			if(!flagsCanvasDoneOnce[0])
			{
				console.log("at this spot");
				flagsCanvasDoneOnce[0] = false;
			}
			navup = false;
		}
		//navup = true;
			
	}
	
	
	
	
	if(menunavVal !== undefined)
	{	
		if(menunavVal==="Resume Page")
		{
			console.log(flagsDoneOnce[1]);
			if(!flagsDoneOnce[1])
			{
				
				htmlobject = newPage("copout/resume/diaz_resume.html");
				htmlobject.style.marginLeft = "30px";
				/* htmlobject.data="copout/resume/diaz_resume.html";
				htmlobject.style.marginLeft = "30px"; */
				/* flagsDoneOnce[1]=true;
				flagsDoneOnce[2]=false; */
				 for(var i=0; i<flagsDoneOnce.length; i++)
				{
					 if( i === 1)
					{
						flagsDoneOnce[i]=true;
					}
					else
					{
						flagsDoneOnce[i]=false;
					}
				} 
				flags[2] = true;
				/* for(var i=0; i<flagsDoneOnce.length; i++)
				{
					if(i >1)
					{
						console.log("here"+ i);
						flagsDoneOnce[i] = false;
					}
					
				} */
			}
			
		}
		if(menunavVal==="My Calender Page")
		{
			
			if(!flagsDoneOnce[2])
			{
				htmlobject = newPage("copout/calender/diaz_table.html");
				//htmlobject = newPage("copout/calender/diaz_table.html");
				/* htmlobject.data="copout/calender/diaz_table.html";
				htmlobject.style.marginLeft = "30px"; */
				/* flagsDoneOnce[2]=true;
				flagsDoneOnce[1]=false; */
				 for(var i=0; i<flagsDoneOnce.length; i++)
				{
					if(i < 2 && i !=0)
					{	
						console.log(i);
						flagsDoneOnce[i] = false;
					} 
					else if( i === 2)
					{
						flagsDoneOnce[i]=true;
					}
					else
					{
						flagsDoneOnce[i]=false;
					}
				}
					
				flags[2] = true;
			}
			
		}else
		if(menunavVal==="My Skills Page")
		{
			if(!flagsDoneOnce[3])
			{
				htmlobject = newPage("copout/skills_project/diaz_skill.html");
				/* htmlobject.data= "copout/skills_project/diaz_skill.html";
				htmlobject.style.marginLeft = "30px"; */
				/* flagsDoneOnce[3]=true; */
				for(var i=0; i<flagsDoneOnce.length; i++)
				{
					if(i < 3 && i !=0)
					{	
						console.log(i);
						flagsDoneOnce[i] = false;
					} 
					else if( i === 3)
					{
						flagsDoneOnce[i]=true;
					}
					else
					{
						flagsDoneOnce[i]=false;
					}
				} 
				flags[2] = true;
			}
			
		}else
		if(menunavVal==="My ImageMap Page")
		{
			if(!flagsDoneOnce[4])
			{
				htmlobject = newPage("copout/map_image_project/diaz_imagemap.html");
				/* //htmlobject.data="copout/resume/diaz_resume.html";
				htmlobject.style.marginLeft = "30px"; */
				for(var i=0; i<flagsDoneOnce.length; i++)
				{
					if(i < 4 && i !=0)
					{	
						console.log(i);
						flagsDoneOnce[i] = false;
					} 
					else if( i === 4)
					{
						flagsDoneOnce[i]=true;
					}
					else
					{
						flagsDoneOnce[i]=false;
					}
				} 
				flags[2] = true;
			}
			
		}else
		if(menunavVal==="My Forms Page")
		{
			if(!flagsDoneOnce[5])
			{
				htmlobject = newPage("copout/form_project/diaz_form.html");
				/* //htmlobject.data="copout/resume/diaz_resume.html";
				htmlobject.style.marginLeft = "30px"; */
				for(var i=0; i<flagsDoneOnce.length; i++)
				{
					if(i < 5 && i !=0)
					{	
						console.log(i);
						flagsDoneOnce[i] = false;
					} 
					else if( i === 5)
					{
						flagsDoneOnce[i]=true;
					}
					else
					{
						flagsDoneOnce[i]=false;
					}
				}
				flags[2] = true;
			}
			
		}else
		if(menunavVal==="About Me")
		{
			if(!flagsDoneOnce[6])
			{
				htmlobject = newPage("");
				/* //htmlobject.data="copout/resume/diaz_resume.html";
				htmlobject.style.marginLeft = "30px"; */
				for(var i=0; i<flagsDoneOnce.length; i++)
				{
					if(i < 6 && i !=0)
					{	
						console.log(i);
						flagsDoneOnce[i] = false;
					} 
					else if( i === 6)
					{
						flagsDoneOnce[i]=true;
					}
					else
					{
						flagsDoneOnce[i]=false;
					}
				} 
			}
			flags[2] = false;
			
		}
		
		if(!flagsDoneOnce[0])
		{
			
			
			/* htmlobject.data= "copout/\skills_project/diaz_skill.html"; */
			
			flagsDoneOnce[0] = true;
		}
	}
	
	cleanup();
	
}


function newPage(page)
{
	
	var htmlobject = document.createElement("object");

	htmlobject.setAttribute("class", "thisObject");
	htmlobject.type="text/html";
	htmlobject.data=page;
	htmlobject.style.position="fixed";
	htmlobject.style.top="0";
	htmlobject.style.left = "0";
	htmlobject.style.right="0";
	htmlobject.style.bottom = "0";
	htmlobject.style.width="100%";
	htmlobject.style.height = "100%";
	var param = document.createElement("PARAM"); 
	param.name="allowScriptAccess";
	param.value="allways";
	htmlobject.appendChild(param);

	
	scrollCantiner.appendChild(htmlobject); 
	
	
	
	
	return htmlobject;
}


function cleanup()
{
	/* console.log(document.getElementsByClassName("thisObject").length); */
	if(htmlobject.data === undefined)
	{
		scrollCantiner.removeChild(document.getElementsByClassName("thisObject")[0]);
	}
	if(document.getElementsByClassName("thisObject").length> 2)
	{
		
		
		scrollCantiner.removeChild(document.getElementsByClassName("thisObject")[0]);
		objectcounter = 0;
		
	}
	
	
}


function btnClicks()
{
	menuclick = function()
	{
		
		arrayCounter[0]++;
		
		if(arrayCounter[0] === 1)
		{
			flags[0] = true;
		}else
		if(arrayCounter[0] === 2)
		{
			flags[0] = false;
			
			
			arrayCounter[0] = 0;
			
		}
	
	};
	
	/* calanderbtnclick = function()
	{
	
		arrayCounter[1]++;
		
		if(arrayCounter[1]===1)
		{
			flags[1] = true;
		}else
		if(arrayCounter[1] === 2)
		{
			flags[1] = false;
			arrayCounter[1] = 0;
		}
	}; */
	
	drawknobeonClick = function()
	{
		arrayCounter[2]++;
		
		if(arrayCounter[2]===1)
		{
			flags[2] = true;
		}else
		if(arrayCounter[2] === 2)
		{
			flags[2] = false;
			arrayCounter[2] = 0;
		}
	};
	
	/* fullscreenexitbtnclick = function()
	{
		arrayCounter[3]++;
		
		if(arrayCounter[3]===1)
		{
			flags[3] = true;
		}else
		if(arrayCounter[3] === 2)
		{
			flags[3] = false;
			arrayCounter[3] = 0;
		}
	}
	 */
	
	canvaspage.onmouseover = function()
	{
		
		flags[0] = false;
		arrayCounter[0] = 0;
		if(!flagsCanvasDoneOnce[0])
		{
			
			flagsCanvasDoneOnce[0]= true;
		}
		

	}
	
	
	homeonclick = function()
	{
		for(var i = 0; i < flags.length;i++)
		{	
			flags[i] = false;
			arrayCounter[i] = 0;
		}
		for(var i = 0; i < flagsDoneOnce.length;i++)
		{	
			flags[i] = false;
			
		}
		for(var i = 0; i < flagsCanvasDoneOnce.length;i++)
		{	
			flagsCanvasDoneOnce[i] = false;
			
		}
	};
	
	
	
}










main()
{
	var menubtn = document.getElementById("menuicon");
	var menu = document.getElementById("menu");
	/* var calanderbtn = document.getElementById("calanderbtn"); */
	var calanderindex = document.getElementById("calenderindex");
	var canvaspage = document.getElementById("canvaspage");
	var canvascontainer = document.getElementById("canvascontainer");
	var scrollCantiner = document.getElementById("scrollCantiner");
	var content = document.getElementById("content");
	var menunav = document.getElementsByTagName("a");
	var  foot = document.getElementById("foot");
	var nav = document.getElementById("nav");
	var header = document.getElementById("header");
	/* var fullscreencontainer = document.getElementById("calenderset"); */
	/* var fullscreencontainerexit = document.getElementById("fullscreenexitset"); */
	
	var htmlobject = newPage();
	
	
	
	var navup = false;
	var canvup = false;
	//var link = document.createElement("LINK");
	
	
	
	
	var menucount = 0,calbtncount =0;
	var x = "a";
	var ismenuClicked =false, iscalbtnClicked = false;
	var arrayCounter = [0,0,0,0];
	var flags = [false,false,false,false];
	var flagsDoneOnce = [false,false,false,false,false,false,false,false];
	var flagsCanvasDoneOnce = [false,false];
	
	var menunavVal;
	
	/* link.style.height = "100%";
	link.style.width = "100%";
	link.href = "https://www.google.com";
	link.rel = "import"; */
	
	//content.appendChild();
	var update = setInterval(Update,1);
	menu.style.transition = "height 2s";	
	btnClicks()
	
	for(var i=0; i <menunav.length; i++)
			menunav[i].addEventListener("click",function(){
				menunavVal = this.innerHTML;
			
		});
	
	
	
	
	//console.log(flags)
	
	Update()
	{
		x;
		menu;
		menunavVal;
		
	};

		
	
	
	
	
};

