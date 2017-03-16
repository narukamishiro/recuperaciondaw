function maxArray(pk){
	var max=0;
	var p=0;
	var ar=[];
	ar=pk;
	for(i=0;i<ar.length;i++){
		p=parseFloat(ar[i]);
		if(p>max){
			max=p;
		}
	}
	return max;
}
function multArray(pk){
	var mult=1;
	var p=0;
	var ar=[];
	ar=pk;
	for(i=0;i<ar.length;i++){
		p=parseFloat(ar[i]);
		mult=mult*p;
	}
	return mult;
}
function invertir(pk){
	var ab=[];
	var ai=[];
	var l="";
	ab=pk;
	var tam=ab.length;
	for(i=tam-1;i>=0;i--){
		l=ab[i];
		ai.push(l);
	}
	return ai;
}
//ejercicio 3
/*var m=new Array(2,6,3,10,9);
document.getElementById("p").innerHTML=maxArray(m)+"";
*/
//ejercicio 5
/*var m=new Array(2,6);
document.getElementById("p").innerHTML=multArray(m)+"";
*/
//ejercicio 6
var m="es una prueba";
document.getElementById("p").innerHTML=invertir(m)+"";

