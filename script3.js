var array= new Array();
array = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var i= 0; i<array.length;i++){
	if(array[i].charAt(array[i])=="j" || array[i].charAt(array[i])=="J"  ){
		console.log("Goodbye\t" + array[i]);
	}
	else
	{
		console.log("Hello\t" + array[i]);
	}
}
