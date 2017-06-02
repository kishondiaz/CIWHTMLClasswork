

var firstOpen;
var firstNameBox;
var lastNameBox;
var studentTxtBox,
addressTxtBox,
cityTxtBox,
stateTxtBox,
zipTxtBox,
homeTxtBox,
cellTxtBox,
emailTxtBox,
advisorTxtBox;
var genderRadio;
var degreeDrpDowm;
var paymentCheckBox;
var infoForm;
var submitClick,resetClick;
var front,back;
var doneOnnce = false;
var myAudio;
var textArea;



var main = function(){
	
	var body = document.getElementsByTagName("body")[0];
	var wrapper = document.getElementById("wrapper");
	var infoForm = document.getElementById("info_form");
    firstNameBox = document.getElementById("firstName");
	lastNameBox = document.getElementById("lastName");
	studentTxtBox = document.getElementById("studentID_id");
	addressTxtBox = document.getElementById("address_id");
	cityTxtBox = document.getElementById("city_id");
	stateTxtBox = document.getElementById("state_id");
	zipTxtBox = document.getElementById("zip_id");
	homeTxtBox = document.getElementById("homePhone_id");
	cellTxtBox = document.getElementById("cellPhone_id");
	emailTxtBox = document.getElementById("email_id");
	advisorTxtBox = document.getElementById("advisor_id");
	
	
	genderRadio = document.getElementsByName("gender");
	degreeDrpDowm = document.getElementById("degree");
	reasonCheckBox = document.getElementsByName("reason");
	submitClick = document.getElementById("submitClick");
	resetClick = document.getElementById("resetClick");
	front = document.getElementById("front");
	back = document.getElementById("back");
	myAudio = document.getElementById("wifesVoice");
	textArea = document.getElementById("textarea_id");
	
	var displayInfo = document.getElementById("displayInfo");
	
	
	if(wrapper != null)
	{	wrapper.style.transform = "scale(0,0)";
		back.style.transform = "scale(0,0)";
		document.forms["thisForm"].reset();
		textArea.style.transform = "scaleX(0)";
		
	}
	wrapper.loaded = function()
	{
		console.log("here");
	
	}
	
	if(!firstOpen)
	{
		body.onmousemove = function(e)
		{
			if(wrapper != null){
				
				wrapper.style.transform = "scale(1,1)";
				wrapper.style.transition =" all 3s ease";
				
				firstNameBox.style.transform = "scaleX(1)";
				firstNameBox.style.transition =" all 3s ease";
				lastNameBox.style.transform = "scaleX(1)";
				lastNameBox.style.transition =" all 3s ease";
			}
				
				firstOpen = true;
				
			
		}
	}
	
	resetClick.onclick = function()
	{
		document.getElementById("firstName").required=false;;
		document.getElementById("lastName").required = false;
		document.forms["thisForm"].reset();
		textArea.style.visibility = "hidden";
		textArea.style.transform = "scaleX(0)";
		setTimeout(function(){
			textArea.style.visibility = "visible";
		},200)
		
	}
	var changed = false,changedfoucs = false,textClicked = false,alreadySized = false,
	clickedSized = false, fullsized = false;
	onchangeed = function() 
	{ 
		changed = false;
		changedfoucs = false;
		alreadySized = false;
		textClicked = false;
		console.log(changed);
		if(reasonCheckBox[4].checked)
		{
			if(reasonCheckBox[4].value === "Other")
			{
				textArea.style.transition = "all 2s ease";
				textArea.style.transform = "scaleY(1)";
				
				
				textArea.onfocus = function(e)
				{
					
					if(this.onfocus)
					{
						if(!alreadySized && !clickedSized)
						{
							/* console.log(e);
							setTimeout(function(){
								textArea.style.transform += "scale(5,5)";
								clickedSized = true;
								
							},1000);
							setTimeout(function(){
								textArea.style.transform = "translate("+0+"px,"+-400+"px)";
								
							},100);
							if(!clickedSized)
							{
								alreadySized = true;
								
								
							}
							 */
							
						}  
						
						
						/*
						if(!changedfoucs)
						{
							document.body.onfocus = function()
							{
							
								
								//textArea.style.transform = "scale(1,1)";
								//changedfoucs = true;
								
							}
						}
						*/
	
						setTimeout(function(){
							textArea.onmouseout = function()
							{
								//textArea.style.transform = "scale(1,1)";
								fullsized = true;
							}},3200)

							document.body.ondblclick = function()
							{
								if(!textClicked)
									textClicked = false;
								textArea.style.transition = "all .5s ease";
								textArea.style.transform = "scale(1,1)";
								setTimeout(function(){
									textArea.style.transition = "all 2s ease";
									textArea.style.boxShadow = "10px 10px 5px #888888";
									},5220);
								
								/* document.body.onmouseover = function()
								{	console.log(fullsized);
								
									if(fullsized)
									{
										
										textArea.style.transform = "scale(1,1)";
										fullsized = false
										
									}
								} */
								;
								if(alreadySized)
								{
									alreadySized = false
									//alreadySized = false;
									
								}
								
							}
						if(fullsized)
						{
							/*document.body.onmouseover = function()
							{	console.log(fullsized);
							
								if(fullsized)
								{
									
									//textArea.style.transform = "scale(1,1)";
									fullsized = false
									
								}
							}*/
						}
						if(!textClicked)
						{
							
							 textArea.onclick = function()
							{
								 console.log(alreadySized +" "+ clickedSized)
								
								if(!alreadySized)
								{
									setTimeout(function()
									{
										if(!alreadySized)
										{	
											
											
											textArea.style.transform += "scale(5,5)";
											alreadySized = true
										}
										
									},1100);
									setTimeout(function(){
										textArea.style.transition = "all 1s ease";
										textArea.style.boxShadow = "10px 10px 5px rgba("+255+","+255+","+255+","+.4+")";
										},4520);
									setTimeout(function()
									{
										textArea.style.transform = "translate("+0+"px,"+-400+"px)";
										
									},100);
									
									
									if(clickedSized)
									{	
										//alreadySized = true;
										
									}else
									{
										//clickedSized = false;
									}
									
								} 
							} 
							textClicked = true; 
						}
						
						
						
						
					}
					
					
				}
				
				
			}
		}else
		{
			
			textArea.style.transform = "scaleY(0)";
			textArea.value = "";
			if(!changed)
			{
				textArea.onfocus = function(e)
				{
					
					
				}
				document.body.onmouseover = function()
				{
					//textArea.style.transform = "scale(0,0)";
					
					
				}
				
			}else
			{
				changed = true;
				changedfoucs = true;
				//alreadySized = true;
			}
			//changed = true;
		}
		
	}
	
	
	
	
	submitClick.onclick = function(e)
	{	
		console.log("here");
		if(!validateForm())
		{
			document.getElementById("firstName").required=true;
			document.getElementById("lastName").required=true;
			
		}
		else
		{
			if(document.getElementById("firstName").required === true ||
				document.getElementById("lastName").required=== true)
			{
				document.getElementById("firstName").required=false;
				document.getElementById("lastName").required=false;
			}

		
			if(!doneOnnce)
			{
				front.style.transition =" all 3s ease";
				front.style.transform = "scale(0,0)";
				
				doneOnnce = true;
			}
			setTimeout(function()
			{
				if(doneOnnce)
				{
					
					
					var nametxt = document.getElementById("nametxt");
					var studenttxt = document.getElementById("studenttxt");
					var addresstxt = document.getElementById("addresstxt");
					var citytxt = document.getElementById("citytxt");
					var statetxt = document.getElementById("statetxt");
					var ziptxt = document.getElementById("ziptxt");
					var hometxt = document.getElementById("hometxt")
					var celltxt = document.getElementById("celltxt")
					var emailtxt = document.getElementById("emailtxt")
					var advisortxt = document.getElementById("advisortxt")
					var gendertxt = document.getElementById("genedertxt");
					var degreetxt = document.getElementById("degreetxt");
					var reasonttxt = document.getElementById("reasontxt");
					var othertxt=document.getElementById("textcontainer");
					
					var name_info = document.createTextNode(firstNameBox.value +" "+ lastNameBox.value);
					var student_info = document.createTextNode(stateTxtBox.value),
					address_info = document.createTextNode(addressTxtBox.value),
					city_info = document.createTextNode(cityTxtBox.value),
					state_info = document.createTextNode(stateTxtBox.value),
					zip_info = document.createTextNode(zipTxtBox.value),
					home_info = document.createTextNode(homeTxtBox.value),
					cell_info = document.createTextNode(cellTxtBox.value),
					email_info = document.createTextNode(emailTxtBox.value),
					advisor_info= document.createTextNode(advisorTxtBox.value),
					other_info= document.createTextNode(textArea.value)
										
					var gender_info;
					var reason_info;
					var checkedVal= [];
					for(var i = 0; i < genderRadio.length; i++)
					{
						if(genderRadio[i].checked)
						gender_info = document.createTextNode(genderRadio[i].value);
					}
					var degree_info = document.createTextNode(degreeDrpDowm.options[degreeDrpDowm.selectedIndex].text);
					for(var i = 0; i < reasonCheckBox.length; i++)
					{
						if(reasonCheckBox[i].checked)
						{	
							
							checkedVal.push(reasonCheckBox[i].value);
							reason_info = document.createTextNode(checkedVal);
						}
					}
					back.style.transition =" all 3s ease";
					back.style.transform = "scale(1,1)";
					/* setTimeout(function(){
							wrapper.style.transition = "height 2s ease";
							wrapper.style.transform = "scaleY(.5)";
							wrapper.style.maxHeight = "250px";
						},1000); */
						
					 setTimeout(function(){	
						wrapper.style.transition = "height 2s ease";
						wrapper.style.transform = "scaleY(.5)";
						wrapper.style.maxHeight = "95vh";
					},200);
					setTimeout(function(){	
						wrapper.style.transition = "all 2s ease";
						wrapper.style.transform = "scaleY(1)";
						
					},4000);
							
					var textOnce = false;
					if(!textOnce)
					{
						back.style.marginLeft="50px";
						nametxt.appendChild(name_info);	
						studenttxt.appendChild(student_info);
						addresstxt.appendChild(address_info);
						citytxt.appendChild(city_info); 
						statetxt.appendChild(state_info);
						ziptxt.appendChild(zip_info); 
						hometxt.appendChild(home_info); 
						celltxt.appendChild(cell_info);
						emailtxt.appendChild(email_info); 
						advisortxt.appendChild(advisor_info);
						gendertxt.appendChild(gender_info);
						degreetxt.appendChild(degree_info);
						reasontxt.appendChild(reason_info);
						othertxt.appendChild(other_info);
						textOnce = true;
					}
					goback = function()
					{
						wifesVoice.play();
						document.forms["thisForm"].reset();
						back.style.transition =" all 3s ease";
						back.style.transform = "scale(0,0)";
						
							
						setTimeout(function()
						{
							
							
							nametxt.removeChild(name_info);
							studenttxt.removeChild(student_info);
							addresstxt.removeChild(address_info);
							citytxt.removeChild(city_info); 
							statetxt.removeChild(state_info);
							ziptxt.removeChild(zip_info); 
							hometxt.removeChild(home_info); 
							celltxt.removeChild(cell_info);
							emailtxt.removeChild(email_info); 
							advisortxt.removeChild(advisor_info);
							gendertxt.removeChild(gender_info);
							degreetxt.removeChild(degree_info);
							reasontxt.removeChild(reason_info);
							othertxt.removeChild(other_info);
							/* setTimeout(function(){	
								wrapper.style.transition = "all 2s ease";
								wrapper.style.transform = "scaleY(1.5)";
							},200);
							setTimeout(function()
							{
								wrapper.style.transition = "height 2s ease";
								
								wrapper.style.maxHeight = "initial";
							},500);
							 */
							 setTimeout(function()
							{
							  wrapper.style.transition = "all .2s ease";
							  wrapper.style.maxHeight = "920px";
							},100);
							 setTimeout(function(){	
							wrapper.style.transition = "height 2s ease";
							wrapper.style.transform = "scaleY(1.5)";
							},200);
							 setTimeout(function(){	
							wrapper.style.transition = "all 2s ease";
							wrapper.style.transform = "scale(1,1)";
							},3000)
							
							
							
							
							textArea.style.transform = "scaleX(0)";
							front.style.transition =" all 3s ease";
							front.style.transform = "scale(1,1)";
							doneOnnce = false;
							
							
						},1000);
						
						
					}
					
				};
			},1000);
			
		}
	} 
}

function validateForm() {
	var forms = document.forms["thisForm"];
	
	
    var fname = document.forms["thisForm"]["fname"].value;
	var lname = document.forms["thisForm"]["lname"].value;
	var student = document.forms["thisForm"]["student"].value;
	var address = document.forms["thisForm"]["address"].value;
	var city = document.forms["thisForm"]["city"].value;
	var state = document.forms["thisForm"]["state"].value;
	var zip = document.forms["thisForm"]["zip"].value;
	var homePhone = document.forms["thisForm"]["homePhone"].value;
	var cellPhone = document.forms["thisForm"]["cellPhone"].value;
	var email = document.forms["thisForm"]["email"].value;
	var advisor = document.forms["thisForm"]["advisor"].value;
	array = [fname,lname,student,address,city,state,zip,homePhone,cellPhone,email,advisor];
	for(var i=0 ; i < array.length; i++)
    {
		if (array[i] == null || array[i] == "") {
		
			return false;
		}
	}
	
	return true;
}
main();
