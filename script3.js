var array= new Array();
array = ["john","Sansa","Joffery","Brandon","Gunther", "Jamie","julia","Cersie", "Arya"];
for(var i= 0; i<array.length;i++){
	if(array[i].charAt(array[i])=="j" || array[i].charAt(array[i])=="J"  ){
		console.log("Goodbye\t" + array[i]);
	}
	else
	{
		console.log("Hello\t" + array[i]);
	}
}