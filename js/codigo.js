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


/*=====================================
Verificar la edad y si es chico o chica
=====================================*/

//opción 1

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

//opcion 2

function entrada2() {

	var edad = document.getElementById('edad').value;
	var genero = document.getElementById('genero').value;

	if (edad>= 18){
		if (genero == "chico"){
			alert("Puedes pasar, chico");
		}
		else if (genero == "chica") {
			alert("Puedes pasar, chica");
		}
		else{
			alert("Puedes pasar, cosa");
		}
	}else{
			alert("Puedes pasar");
	}

}

//Opcion 3

function entrada3() {

	var edad = document.getElementById('edad').value;
	var genero = document.getElementById('genero').value;

	if ((edad>= 18) && ((genero=="chico") || (genero=="chica"))){
		alert("Puedes Pasar" +genero);
	}
	else{
		alert( "No puedes Pasar, " +genero);
	}

}

/*=====================================
switch 
==============================*/


function operaciones() {
	// Datos introducidos por el usuario
	var op1 = document.getElementById("op1").value;
	var op2 = document.getElementById("op2").value;
	var operacion = document.getElementById("operacion").value;

	//variable paraa tercera opcion
	// var textoResultado = document.getElementById("resultado");

	op1 = parseInt(op1);
	op2 = parseInt(op2);

	//se iguala a cero porque es recomendable darle un valor. Si fuese texto, habría que igualarle a ="";
	var resultado=0;
 
	switch (operacion){
	case "1":
	// Suma
	// resultado=op1+op2; //Primera opcion
	// alert( "La suma es:" +(op1+op2)); //Segunda opcion
	document.getElementById("resultado").value=op1+op2;	//Tercera opcion

	break;

	case "2":
	//resta
	// resultado=op1-op2;
	// alert( "La suma es:" +(op1-op2));
	document.getElementById("resultado").value=op1-op2;
	break;

	case "3":
	//multiplicar
	// resultado=op1*op2;
	// alert( "La suma es:" +(op1*op2));
	document.getElementById("resultado").value=op1*op2;
	break;

	case "4":
	//division
	// resultado=op1/op2;
	// alert( "La suma es:" +(op1/op2));
	document.getElementById("resultado").value=op1/op2;
	break;
	}
}



/*=====================================
While 
==============================*/

// Contador hacia atrás en ventana emergente

function repetir(){
	// al apretar el botón comienza la cuenta atrás 
	var contador = 5;
	while (contador > 0){
		alert("El contador es:" +contador);
		contador= contador-1;
	}
	alert("Fin");
}


//Misma función que arriba, pero con var = i

function repetir_i(){
	var i=5;
	while (i > 0){
		alert("El contador es:" +i);
		i--;
	}
	alert("Fin");
}

/*=====================================
For 
==============================*/

function repetir_for() {
	var contador = 5;
	for(contador = 5; contador > 0; contador=contador-1){
		alert("El contador es:" +contador);
	}
	alert("Fin")
}

/*=====================================
Practica while/for
==============================*/

function prac_whileFor() {

	var contador = document.getElementById("contador").value;
	//document.getElementById("contador").value es el input donde el usuario ha insertado el dato
	for (var i=contador;i>0;i--){
		//la variable "contador" se ha convertido en i
		//"i>0" significa que es una cuanta atrás. Desde el número que ha insertado el usuario hasta cero
		alert("El contador es:" +i); 
	}
	alert("Fin");
}

//Cuanta atrás inversa

function prac_whileFor2() {

	var contador = document.getElementById("contador").value;
	//document.getElementById("contador").value es el input donde el usuario ha insertado el dato
	for (var i=0;i<contador;i++){
		//"var i=0" significa el valor inicial desde donde comienza la cuenta hacia delante
		//i<contador significa que es una cuanta hacia delante. Desde cero hasta el numero que ha insertado el usuario 
		//i++ significa que suma por cada click que de el usuario
		alert("El contador es:" +i); 
	}
	alert("Fin");
}