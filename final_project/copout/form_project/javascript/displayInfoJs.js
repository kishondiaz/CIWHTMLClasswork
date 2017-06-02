
include("sqlite.js");
include("passerJs.js");
var here;

/*var uInt8Array;
var dbHelper = new DBHelper();





	xhr.onloadend = function(e)
	{
		

		// Bind values to the parameters and fetch the results of the query
		//var result = stmt.getAsObject({':aval' : 1, ':bval' : 'kishon'});
		console.log(result.firstname); // Will print {a:1, b:'world'}
		
		

		// Bind other values
		//stmt.bind([1, 'sam']);
	
		while (stmt.step()) console.log(stmt.get()); // Will print [0, 'hello']

		// free the memory used by the statement
		stmt.free();
		// You can not use your statement anymore once it has been freed.
		// But not freeing your statements causes memory leaks. You don't want that.

		// Export the database to an Uint8Array containing the SQLite database file
		var binaryArray = db.export();
	    
	  // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
		
	}
	
	
var xhr = new XMLHttpRequest();
	xhr.open('GET', 'file:///E:/CIWClass/form_project/sql.sqlite', true);
	xhr.responseType = 'arraybuffer';
	
	console.log(xhr);

	xhr.onload = function(e) 
	{
		uInt8Array = new Uint8Array(this.response);
		db = new SQL.Database(uInt8Array);
		/*sqlstr = "CREATE TABLE hello (a int, b char);";
		sqlstr += "INSERT INTO hello VALUES (0, 'hello');"
		sqlstr += "INSERT INTO hello VALUES (1, 'world');"//
		sqlstr = "INSERT INTO person VALUES (2, 'sam');"
		db.run(sqlstr); // Run the query without returning anything

		var res = db.exec("SELECT * FROM person");
		/*
		[
			{columns:['a','b'], values:[[0,'hello'],[1,'world']]}
		]//
		
		
		console.log(db);

		// Prepare an sql statement
		
		
		
	  console.log(dbHelper.db);
	  
	};
	xhr.send();*/
	
/*  	xhr.onloadend = function(e)
	{
		var stmt = pass.db.prepare("SELECT * FROM person WHERE personid=:aval AND firstname=:bval");

		// Bind values to the parameters and fetch the results of the query
		var result = stmt.getAsObject({':aval' : 1, ':bval' : 'sam'});
		var array = []
		var narray = ['kishon','sam'];
		for(var i=0;i < 2; i++)
		{
			//array.push(stmt.getAsObject({':aval' : i, ':bval' : "'"+narray[i]+"'"}));
			
		}
		console.log(stmt.get());
		console.log(stmt.getAsObject({':aval' : 1, ':bval' : narray[0]}));
		console.log(stmt.getAsObject({':aval' : 2, ':bval' : narray[1]}));
		console.log(result); // Will print {a:1, b:'world'}

		// Bind other values
		//stmt.bind([2, 'sam']);
		while (stmt.step()) console.log(stmt.get()); // Will print [0, 'hello']

		// free the memory used by the statement
		stmt.free();
		// You can not use your statement anymore once it has been freed.
		// But not freeing your statements causes memory leaks. You don't want that.

		// Export the database to an Uint8Array containing the SQLite database file
		var binaryArray = db.export();
		
	  // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
		
	}
	  */
	  
	xhr.onloadend = function(e)
	{
		uInt8Array = new Uint8Array(this.response);
		db = new SQL.Database(uInt8Array);
		/* console.log(db.exec("SELECT * FROM person")); */
		
	}
	
	
	 
	
	var div = document.createElement("div");
	var body  = document.getElementsByTagName("body")[0];
	window.onload = function(e)
	{
		
		
	
		
		
		
		
	}
		/* console.log(body);
		div.style.width = 100+"px";
		div.style.height = 100+"px";
		div.style.backgroundColor = "blue";
		div.style.color= "white";
		div.appendChild(document.createTextNode("here"));
		body.appendChild(div) */



var main = function(){
	var body = document.getElementsByTagName("body")[0];
	var wrapper2 = document.getElementById("wrapper2");
	
	
	
	
	
	
	
	
		
				
	//wrapper2.style.transform = "initial";
	//wrapper.style.transition =" all 3s ease";
				
				
			
	
	
	
	
	
	
	
	
	
	
}





