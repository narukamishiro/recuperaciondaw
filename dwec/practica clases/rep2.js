class ppt{
	var iach;
	var pych;
	var rnd;
	constructor(){
		this.pych="";
		this.rnd=0;
		this.iach="";
	}
	constructor(pl){
		this.pych=pl;
		this.rnd=Math.random()*9+1;
		this.iach="";
	}
	iarnd(){
		while(rnd>3){
			rnd=rnd-3;
		}
		switch(rnd){
			case 1:iach="piedra";break();
			case 2:iach="papel";break();
			case 3:iach="tijera";break();
		}
	}
	getResult(){
		pl=pych.toLowerCase();
		if(pl=="piedra"){
			if(iach=="tijera"){
				return "has ganado";
			}else{
				if(iach=="papel"){
					return "has perdido";
				}else{return "empate"}
			}
		}
		if(pl=="tijera"){
			if(iach=="papel"){
				return "has ganado";
			}else{
				if(iach=="piedra"){
					return "has perdido";
				}else{return "empate"}
			}
		}
		if(pl=="papel"){
			if(iach=="piedra"){
				return "has ganado";
			}else{
				if(iach=="tijera"){
					return "has perdido";
				}else{return "empate"}
			}
		}
	}
}
class agenda{
	var lst=[];
	var dt;
	function add(nom,dir,tlf,email){
		dt=[nom,dir,tlf,email];
		lst.push(dt);
	}
	function mostrar(nom){
		var tam=lst.length;
		var dat;
		for(t=0;t<tam;t++){
			dat=list[t];
			if(dat[0]===nom){
				return dat;
			}
		}
		return "no se encontro el contacto";
	}
	function mostrarall(){
		var tam=lst.length;
		var rs;
		var rp=[""];
		var dat;
		var min;
		for(t=0;t<tam;t++){
			dat=list[t];
			for(z=0;z<rp.length;z++){
				if(dat[0]===rp[z]){
				}else{
					if (rp[z]===""){
						min=dat[0];
					}else{
						if(dat[0]<rp[z]){
							min=dat[0];
						}
					}
				}
			}
		}
		return rs;
	}
	function borrar(nom){
		var tam=lst.length;
		var dat;
		for(t=0;t<tam;t++){
			dat=list[t];
			if(dat[0]===nom){
				list..splice(t,1);
			}
		}
		return "no se encontro el contacto";
	}
}
function caja{
	var user;
	var cuenta;
	var access;
	var total;
	constructor(){
		user={};
		cuenta={};
		access=false;
		total=0;
	}
	function newuser(us,des){
		user={us,des};
	}
	function inicuenta(){
		access=true;
	}
	function scan(prd,cant){
		if(access){
			var sbtot= prd[1]*cant;
			total=total+sbtot;
		}
	}
	function fincuenta(){
		desc=total*user[1]/100;
		total=total-desc;
		access=false;
	}
}
 //ejercicio 1 y 2
 /*var pl=prompt("�piedra,papel o tijeras? escoge una,con letras minusculas a poder ser,gracias");
 var ppt=new ppt(pl);
 ppt.iarnd();
 document.getElementById("p").innerHTML=ppt.getResult();*/