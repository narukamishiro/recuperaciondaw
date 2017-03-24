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
 //ejercicio 1 y 2
 var pl=prompt("¿piedra,papel o tijeras? escoge una,con letras minusculas a poder ser,gracias");
 var ppt=new ppt(pl);
 ppt.iarnd();
 document.getElementById("p").innerHTML=ppt.getResult();