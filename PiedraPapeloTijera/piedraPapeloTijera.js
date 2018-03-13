function juego() {
	// body...
	
//Se ponen fuera de la función para que vuelvan a 0 cada vez se repita la funcion
var contadorDeHombre = 0; //contador que asigna puntos para que gane el hombre. 

var contadorDeMaquina = 0;	//contador que asigna puntos para que gane la máquina


while (contadorDeMaquina<2 && contadorDeHombre<2) {

	var opcion_usuario = 0;

	var ordenadorElige = parseInt(Math.random()*3); //ParseInt añadido para que devuelva números enteros

		alert("Ordenador elige: "+ordenadorElige);

	var usuarioElige = prompt('¿Piedra, Papel o Tijera');

	switch(usuarioElige) //Se determinan que valor se van asociar a "Piedra, "Papel O "Tijera"
	{

	    case "Piedra": opcion_usuario=0; break;

	    case "Papel": opcion_usuario=1; break;

	    case "Tijera": opcion_usuario=2; break;

	    default: alert ("Opcion Incorrecta, piedra, papel, tijeras");

	}


	if (ordenadorElige==opcion_usuario) alert("Empate");
	else
	{

		switch(ordenadorElige) //Compara opcion de usuario con opcion elegida por la maquina
		{

			case 0: if (usuarioElige==1) {contadorDeHombre++; /*case 0: => Piedra*/
		            }else {
		            contadorDeMaquina++;}
		            break;

		    case 1: if(usuarioElige==0){contadorDeMaquina++; //Case 1: => Papel
		    		} 
		    		else {contadorDeHombre++;
		    		}
		     		break;

		    case 2: if (usuarioElige==0) {contadorDeMaquina++; //Case 2: => Tijeras
		   			}
		   			else {contadorDeHombre++;
		   			}	
		   			break;

		    default: alert ("Opcion Incorrecta, piedra, papel, tijeras");

		}

	}


} // Cierre While



if (contadorDeHombre=2){alert("Ha ganado el hombre "+usuarioElige+" "+ordenadorElige); }
	else
       { 
       	alert("Ha ganado la maquina "+ordenadorElige+" "+usuarioElige);  }


} //Cierre Function