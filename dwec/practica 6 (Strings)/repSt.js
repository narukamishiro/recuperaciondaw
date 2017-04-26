function contMaymin(cad){
	var tam=cad.length;
	var letr="abcdefghijklmopqrstuvwyz";
	var may=0;
	var min=0;
	var chcad;
	var chpru;
	for (x=0;x<tam;x++){
		for(y=0;y<letr.length;y++){
			chcad=cad.charAt(x);
			chpru=letr.charAt(y);
			if(chcad==chpru){
				min++;
				break;
			}else{
				if(chcad==chpru.toUpperCase()){
					may++;
					break;
				}
			}
		}
	}
	var res="en esta frase hay "+may+" letras mayusculas y "+min+" letras minusculas.";
	return res;
}
function contrep(cad,ch){
	var tam=cad.length;
	var may=0;
	for (x=0;x<tam;x++){
		if(cad.charAt(x).toLowerCase()==ch.toLowerCase()){
			may++;
		}
	}
	var res="el caracter "+ch+" aparece "+ may+" veces en la cadena dada";
	return res;
}
function pali(cad){
	var dac="";
	var tam=cad.length;
	for(x=0;x<tam;x++){
		dac=dac.concat(cad.charAt(tam-1-x));
	}
	if (cad==dac){
		return "esta cadena es palidroma";
	}else{
		return "esta cadena no es palidroma";
	}
}
function trn(cad,ch){
	var tam=cad.length;
	var dac="";
	var p="";
	for (x=0;x<tam;x++){
		p=cad.charAt(x)
		if(p.toLowerCase()==ch.toLowerCase()){
			p=p.toUpperCase();
		}
		dac=dac.concat(p);
	}
	return dac;
}
function elimspc(cad){
	var tam=cad.length;
	var dac="";
	for (x=0;x<tam;x++){
		if(cad.charAt(x)==" "){
		}else{
			dac=dac.concat(cad.charAt(x));
		}
	}
	return dac;
}
//ejercicio 1
/*var cad="Esto Es Una Prueba";
document.getElementById("prueba").innerHTML=contMaymin(cad);
*/
// ejercicio 2
/*var cad="Esto Es Una Prueba";
document.getElementById("prueba").innerHTML=contrep(cad,"a");
*/
//ejercicio 3
/*var cad="merarim";
document.getElementById("prueba").innerHTML=pali(cad);
*/
//ejercicio 4
/*var cad="esto es una prueba";
document.getElementById("prueba").innerHTML=trn(cad,"p");
*/
//ejercicio 5
var cad="esto es una prueba";
document.getElementById("prueba").innerHTML=elimspc(cad);