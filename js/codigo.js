/*Comentario de mas de una linea
 Comentario de mas de una linea*/

// comentario de una linea

// añade tu nombre

function ejecutar() {
	var val1 = document.getElementById("val1").value;
	var val2 = document.getElementById("val2").value;
	alert("Tu nombre es:" +val1);

}

// funcion que dice si un numero es par o impar

function parOImpar() {
	// cojo el valor que ha introducido el usuario
	var val1 = document.getElementById("val3").value;
	// El resto de dividir el numero introducido entero dos es 0
	if (val1%2 == 0) {

		alert("Tu numero es par");
	}
	// "else" puede suprimirse. Lo importante es que cumpla o no la primera condición
	else{
		alert("Tu numero es impar");	
	}
}


// funcion de suma dos números

function sumar() {
	// Recojo los numeros introducidos por el usuario
	var val1 = document.getElementById("val1").value;
	var val2 = document.getElementById("val2").value;

	// convuierto los numeros recogidos como texto a numero
	var num1=parseInt(val1);
	var num2=parseInt(val2);
	alert("La suma es:" +(num1+num2));
}


// Verificar la edad y si es chico o chica

function entrada(){
	//Declarar variables para la edad 
	//Declarar variables para genero con el Id en <select> y luego estipular la <option> deseada

	var edad = document.getElementById('edad').value;
	var genero = document.getElementById('genero').value;

	// Verificamos si tiene más o igual de 18 años
	if (edad >= 18) {
		alert("Puedes Continuar");	
	}
	//Si no tiene igual o más de 18 años, podemos personalizar el mensaje en función del género.
	else{
		if (genero=="chico"){
			alert("Lárgate de aqúi, niñato");
		}else{
			alert("Lárgate de aqúi, niñata");
		}
	}
}