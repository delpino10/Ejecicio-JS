//alert("hola");





function guardar() {
	//  /*Validar que nombre y apellido no estén vacíos */

	var nombre = document.getElementById('nombre').value;
	var edad = document.getElementById('edad').value;

	// var celda1 = document.createElement("td");
	// var celda2 = document.createElement("td");

	if (isNaN(edad)) { //tambien funciona edad==isNaN
		//error
		alert('¡Introduce un número!');
	}else if (nombre==""){
		alert('¡Introduce un nombre!');
	}else{ 	

	var fila = "<tr><td>"+nombre+"</td><td>"+edad+"</td></tr>";

	var btn = document.createElement("tr");

	btn.innerHTML=fila;

	document.getElementById("tabla").appendChild(btn);

	}
	
	
	
}

