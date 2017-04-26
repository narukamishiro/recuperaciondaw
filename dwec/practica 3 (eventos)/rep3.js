var cp={};
function comptable(cl,fl){
	cp={cl,fl};
	var ht="<table id='tb' border='1'>";
	var n="";
	for(x=1;x<=cl;x++){
		ht=ht+"<tr>";
		for(y=1;y<=fl;y++){
			n=x+"-"+y;
			ht=ht+"<td id="+n+"></td>";
		}
		ht=ht+"</tr>";
	}
	ht=ht+"</table>";
	return ht;
}
function cambcolor(cl,fl){
 }
 function cambfondo(event){
	 document.body.backgroundColor=event.backgroundColor;
 }

function alerta1(){
	 alert("estas en una caja de texto");
 }
 function rep1(){
	 var num=document.getElementById("txt1").value;
	 var dob=document.getElementById("txt2");
	 var cua=document.getElementById("txt3");
	 var x=num*2;
	 var y=num*num;
	 dob.value=x+"";
	 cua.value=y+"";
	 
 }
 //ejercicio 1//
/*document.body.innerHTML=comptable(2,3);
*/
//ejercicio 2//
/*var x=document.getElementById("txt");
x.onmouseover=alerta1;
*/
//ejercicio 3//
var x=document.getElementById("txt1");
x.onkeyup=rep1;



	
