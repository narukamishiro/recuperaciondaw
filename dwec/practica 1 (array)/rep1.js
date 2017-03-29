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
	var l=" ";
	ab=pk.split("");
	var tam=ab.length;
	for(i=tam-1;i>=0;i--){
		l=ab[i];
		ai.push(l);
	}
	rs=ai.toString();
	return rs;
}
function FindHugePhase(pk){
	var mx=0;
	var mp="";
	ar=pk;
	for(i=0;i<ar.length;i++){
		p=ar[i];
		if (p.length>mx){
			mx=p.length;
			mp=p;
		}
	}
	return "la mayor palabra de ese array es "+mp+" con un total de "+mx+" letras";
}
function filtro(pk,tam){
	var mn=tam;
	var mp=[];
	ar=pk;
	for(i=0;i<ar.length;i++){
		p=ar[i];
		if (p.length>=mn){
			mp.push(p);
		}
	}
	return mp;
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
/*var m="es una prueba";
document.getElementById("p").innerHTML=invertir(m)+"";
*/
//ejercicio 7
/*var m=["moro","tolma","reck"];
document.getElementById("p").innerHTML=FindHugePhase(m)+"";*/
//ejercicio 8
/*var m=["moro","tolma","reck","trimno"];
document.getElementById("p").innerHTML=filtro(m,5)+"";*/


