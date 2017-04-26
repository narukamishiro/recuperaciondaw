//ejercicio 1
function ejer1(){
	var fc=document.getElementById("content").firstChild;
	var lc=document.getElementById("content").lastChild;
	var ns=document.getElementById("content").nextSibling;
	var ps=document.getElementById("content").previousSibling;
	var pn=document.getElementById("content").parentNode;
	var cn=document.getElementById("content").firstChild;
}
//ejercicio 2
//anadir hijo a nodo dado
function add(nd){
	var hj=document.createElement("p");
	var textnod=document.createTextNode("nuevo hijo");
	hj.appendchild(textnod);
	document.getElementById(nd+"").appendchild(hj);
}
//añadir un nodo hijo antes de un nodo dado
function addbefore(nd,ndc){
	var hj=document.createElement("p");
	var textnod=document.createTextNode("nuevo hijo");
	hj.appendchild(textnod);
	document.getElementById(nd+"").insertBefore(hj,ndc);
}
//borrar un nodo hijo
function dltnode(nd,ndc){
	document.getElementById(nd+"").removeChild(ndc);
}
//reemplazar un nodo por otro
function replnode(nd,ndc1,ndc2){
	document.getElementById(nd+"").removeChild(ndc2,ndc);
}
//ejercicio 3

//ejercicio 1
//ejer1();
//ejercicio 2
p