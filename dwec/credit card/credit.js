function vali(){
	var cc=prompt("introduzca numero de tarjera de credito (nnnn-nnnn-nnnn-nnnn)");
	var msn="";
	var po=cc.replace(/-/g,"");
	if(po.length===16){
		if(/^([0-9])*$/.test(po)){
			var rpt=true;
			var n=1;
			do{
				p=po.charAt(0);
				p2=po.charAt(n);
				if(p == p2){
					rpt=false;
				}
				n++;
			}while (rpt===true && n<po.length);
			if(rpt===false){
				var sum=0;
				var p=0;
				for(var i=0;i<po.length;i++){
					l=parseFloat(po.charAt(i));
					sum=sum+l;
				}
				if(sum>15){
					msn="tarjeta de credito verificada";
				}else{
					msn="el valor total es mejor de 16";
				}
			}else{
				msn="debe haber al menos 2 numeros diferentes";
			}
		}else{
			msn="todos los elementos deben ser numericos";
		}
	}else{
		msn="debe de tener 16 digitos";
	}
	console.log(msn);
	document.body.getElementsByTagName("h1").innerHTML=msn;
}
vali();