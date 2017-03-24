class ppt{
	var iach;
	var pych;
	var rnd;
	constructor(pl){
		this.pych=pl;
		this.rnd=Math.random()*9+1;
	}
	iarnd(){
		while(rnd>3){
			rnd=rnd-3;
		}
		switch(rnd){
			case 1:aich="piedra";break();
			case 2:aich="papel";break();
			case 3:aich="tijera";break();
		}
	}
	getResult(){
		pl=pych.toLowerCase();
		if(pl=="piedra"){
			if(aich=="tijera"){
				return "has ganado";
			}else{
				if(aich=="papel"){
					return "has perdido";
				}else{return "empate"}
			}
		}
		if(pl=="tijera"){
			if(aich=="papel"){
				return "has ganado";
			}else{
				if(aich=="piedra"){
					return "has perdido";
				}else{return "empate"}
			}
		}
		if(pl=="papel"){
			if(aich=="piedra"){
				return "has ganado";
			}else{
				if(aich=="tijera"){
					return "has perdido";
				}else{return "empate"}
			}
		}
	}
}
 //ejercicio 1 y 2
 var pl=prompt("¿piedra,papel o tijeras? escoge una,con letras minusculas a poder ser,gracias");
 var ppt=new ppt(pl);
 document.getElementById("p").innerHTML=ppt.getResult();