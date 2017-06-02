var db ;
var sqlstr = "";



var DBHelper = function()
{
	this.db;
	this.afterLoad;
	this.arr = [];
	this.setDB = function(db)
	{
		this.db = db;
	}
	this.setVaule = function([])
	{
		this.arr = [];
	}
	this.getVaules = function()
	{
		return this.arr;
	}
	this.getDB = function()
	{
		
		return this.db;
	}
	
}
var uInt8Array;
var dbHelper = new DBHelper();

var result;
var stmt;

var db2;
var xhr = new XMLHttpRequest();
	xhr.open('GET', 'file:///E:/CIWClass/form_project/database/sql.sqlite', true);
	xhr.responseType = 'arraybuffer';
	

	xhr.onloadend = function()
	{
		console.log(db);
	}
	/* xhr.onload = function(e) 
	{
		uInt8Array = new Uint8Array(this.response);
		db = new SQL.Database(uInt8Array);
		pass.db = db;
		
		/*sqlstr = "CREATE TABLE hello (a int, b char);";
		sqlstr += "INSERT INTO hello VALUES (0, 'hello');"
		sqlstr += "INSERT INTO hello VALUES (1, 'world');"*
		try
		{
			console.log(firstNameBox.value)
			sqlstr += "INSERT INTO person VALUES (1, '"+firstNameBox.value+"', 'diaz','true','grants''Cash');"
			function submitClick()
			{
				console.log("here");
				
			}
		}catch( e if e instanceof ReferenceError)
		{
			
		}
		db.run(sqlstr); // Run the query without returning anything

		dbHelper.afterLoad = true;
		var res = db.exec("SELECT * FROM person");
		/*
		[
			{columns:['a','b'], values:[[0,'hello'],[1,'world']]}
		]
		
		*
		stmt = db.prepare("SELECT * FROM person WHERE personid=:aval AND firstname=:bval");
		pass.stmt = stmt;
		dbHelper.setDB(stmt);
		// Bind values to the parameters and fetch the results of the query
		result = stmt.getAsObject({':aval' : 1, ':bval' : 'sam'});
		pass.result = result;
		console.log(result); // Will print {a:1, b:'world'}

		// Bind other values
		//stmt.bind([1, 'kishon']);
		
		//console.log(db);

		// Prepare an sql statement
		
	//  console.log(e);
	while (stmt.step()) console.log(stmt.get()); // Will print [0, 'hello']

		// free the memory used by the statement
		stmt.free();
		// You can not use your statement anymore once it has been freed.
		// But not freeing your statements causes memory leaks. You don't want that.

		// Export the database to an Uint8Array containing the SQLite database file
		var binaryArray = db.export();
		db2 = new SQL.Database(binaryArray);
		pass.db2 = db2;
	  // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
	  
	};
	xhr.send();
	
	 */








	
	




if(db != undefined)
	db.run(sqlstr); // Run the query without returning anything

//var res = db.exec("SELECT * FROM person");
/*
[
    {columns:['a','b'], values:[[0,'hello'],[1,'world']]}
]
*/

// Prepare an sql statement
//var stmt = db.prepare("SELECT * FROM person WHERE firstName=kishon");

// Bind values to the parameters and fetch the results of the query
//var result = stmt.getAsObject({':aval' : 1, ':bval' : 'kishon'});
//console.log("here"+result); // Will print {a:1, b:'world'}

// Bind other values
//stmt.bind([0, 'hello']);
//while (stmt.step()) console.log(stmt.get()); // Will print [0, 'hello']

// free the memory used by the statement
//stmt.free();
// You can not use your statement anymore once it has been freed.
// But not freeing your statements causes memory leaks. You don't want that.

// Export the database to an Uint8Array containing the SQLite database file
//var binaryArray = db.export();
