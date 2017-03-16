function vali(){
	var cc=prompt("introduzca numero de tarjera de credito (nnnn-nnnn-nnnn-nnnn)");
	var msn="";
	var vd=true;
	var po=cc.replace(/-/g,"");
	if(po.length===16){
		if(/^([0-9])*$/.test(po)){
			var rpt=true;
			var n=1;
			do{
				p=po.charAt(0);
				p2=po.charAt(n);
				if(p != p2){
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
					msn="ningun error";
					
				}else{
					msn="el valor total es menor de 16";
					vd=false;
				}
			}else{
				msn="debe haber al menos 2 numeros diferentes";
				vd=false;
			}
		}else{
			msn="todos los elementos deben ser numericos";
			vd=false;
		}
	}else{
		msn="debe de tener 16 digitos";
		vd=false;
	}
	var mn={valid:vd,error:msn};
	return mn;
	
}
var msj= vali();
console.log("valid:"+msj.valid+", error:"+msj.error);