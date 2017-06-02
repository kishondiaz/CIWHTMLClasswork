var navLoction;
var rc = document.getElementById("content");
var rcinner = document.getElementById("inner_content");
var body = document.getElementsByTagName("BODY")[0];
var table = document.getElementById("gallery");
var imgs = document.getElementsByClassName("images");
var bottomText = document.createElement("div");
var coding = document.getElementById("coding");
var text = [];




$("document").ready(function(){
	
	var pre = document.createElement("pre"); 
			pre.className ="brush: js;";
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'file://C:/Users/Kishon/Desktop/ciwHere/copout/skills_project/database/stringstorage.db', true);
	xhr.responseType = 'arraybuffer';
	
	
	
	text.push("I love to Program everytime it makes me feel like anything is possable <br/>",
						"here i will show some of my works that may not be finished but i am proud of them.<br/>",
						"staring from c++ to javascript these are just piece of projects i have done in school and some on my own.<br/>",
						"<br/>",
						"<br/>",
						"This is my C++ /linux  project i did with a classmate this project i used escape sequences to color the terminal , <br/>",
						"and use sounds even though some of what i called my glammer class is deprecated because of updates to the linux mainframe<br>",
						
						"the coloring of the terminal still works i used this technique the make a multi-colored tic tac toe game where x was red and o was blue their<br>",
						"respective colors fill into the grid in this project my class did the logic i made it pretty.",
						"<br/>");
	
	console.log(xhr);
	
	xhr.onload = function(e) 
	{
		uInt8Array = new Uint8Array(this.response);
		db = new SQL.Database(uInt8Array);
		/*sqlstr = "CREATE TABLE hello (a int, b char);";
		sqlstr += "INSERT INTO hello VALUES (0, 'hello');"
		sqlstr += "INSERT INTO hello VALUES (1, 'world');"*/
		//sqlstr = "INSERT INTO person VALUES (2, 'sam');"
		//db.run(sqlstr); // Run the query without returning anything

		var res = db.exec("SELECT * FROM programs_T");
		/*
		[
			{columns:['a','b'], values:[[0,'hello'],[1,'world']]}
		]*/
		
		
		console.log(db);

		// Prepare an sql statement
		
		
		
	  //console.log(dbHelper.db);
	  
	};
	xhr.send();
	
 	xhr.onloadend = function(e)
	{
		var stmt = db.prepare("SELECT * FROM programs_T WHERE ID=:aval");

		// Bind values to the parameters and fetch the results of the query
		coding.innerHTML+=text.join("");
		coding.innerHTML+="ttt.h";
		stmt.getAsObject({':aval' : 1});
		coding.innerHTML+='<pre class="brush: js;">' +stmt.get()+'\n</pre>';
		
		
		coding.innerHTML+="ttt.cpp";
		stmt.getAsObject({':aval' : 2});
		coding.innerHTML+='<pre class="brush: js;">' +stmt.get()+'\n</pre>';
		
		coding.innerHTML+="tttmain.cpp";
		stmt.getAsObject({':aval' : 3});
		coding.innerHTML+='<pre class="brush: js;">' +stmt.get()+'\n</pre>';
		
		coding.innerHTML+="this is my classes that i created make the terminal colorful <br/>"+
						"glamour.h<br/>";
		stmt.getAsObject({':aval' : 4});
		coding.innerHTML+='<pre class="brush: js;">' +stmt.get()+'\n</pre>';
		
		coding.innerHTML+="glamour.cpp<br/>";
		stmt.getAsObject({':aval' : 5});
		coding.innerHTML+='<pre class="brush: js;">' +stmt.get()+'\n</pre>';
		
		coding.innerHTML+="In my C# class i made a stage in a video game this was based off of a \"beatem-up game\"<br/>"+
						"using the Microsoft xna library i was able to accomplish this one stage, and also using sprites from <br/>"+
						"street of rage for the animation i can't show all the classes, but i will show a few.";
		stmt.getAsObject({':aval' : 6});
		coding.innerHTML+='<pre class="brush: js;">' +stmt.get()+'\n</pre>';
		
		coding.innerHTML+="this is my player class ";
		stmt.getAsObject({':aval' : 7});
		coding.innerHTML+='<pre class="brush: js;">' +stmt.get()+'\n</pre>';
		
		coding.innerHTML+="this is the draw class this is where the animation and drawing of the objects is done.<br/>"+
						"there are more classes that i would like to show but this is just a sample of what i have learned .";
		stmt.getAsObject({':aval' : 8});
		coding.innerHTML+='<pre class="brush: js;">' +stmt.get()+'\n</pre>';
		
		coding.innerHTML+="I have  taught myself a other laugunges like android java,sqllite, opengl <br/>"+
						"I would love to show all my code that i may have written but i have not comleted most of them,<br/>"+ 
						"but i still think i have a long whys to go. ";
		

		// Bind other values
		while (stmt.step()) console.log(stmt.get()); // Will print [0, 'hello']

		// free the memory used by the statement
		stmt.free();
		// You can not use your statement anymore once it has been freed.
		// But not freeing your statements causes memory leaks. You don't want that.

		// Export the database to an Uint8Array containing the SQLite database file
		var binaryArray = db.export();
		
	  // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
		
	}
							
	
});

function getText(text)
{
	
	var txt = [];
	txt.push(txt);
	return txt.join("");
	
}

