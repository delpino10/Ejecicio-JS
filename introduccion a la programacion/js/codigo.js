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

	//variable para tercera opcion
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

/*Cuenta descendente*/

//Con while

function prac_whileDescendente(){

	var contador= document.getElementById("contador").value;
	var i = contador;
	while(i>0){
			alert('El contador es' +i);
			i--;
	}
	alert('Fin');
}

// Con for

function prac_ForDecendente() {

	var contador = document.getElementById("contador").value;
	//document.getElementById("contador").value es el input donde el usuario ha insertado el dato
	for (var i=contador;i>0;i--){
		//la variable "contador" se ha convertido en i
		/*"i>0"  Es la condición que se tiene que cumplir para que siga el proceso. 
		Mientras var i=contador sea mayor que cero, el proceso sigue produciendose*/
		alert("El contador es:" +i); 
	}
	alert("Fin");
}

//Cuanta ascendente

//Con while. No funciona!!!

function prac_whileAscendente() {

	var contador = document.getElementById('contador');
	var i = contador;

	while(i<0){
		alert('El contador es:' +i);
		i++;
	}
	alert('Fin');
}

// Con for

function prac_ForAscendente() {

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



/*=====================================
Array
==============================*/

//obtener el maximo valor de un array

function maxValorDeArray() {

	var miarray = []; //crea un array nuevo, posiciones predefinidas.
	var miarray = [20,25,40,80,5,60,90,3,76,13];

	var max = miarray[0]; //declaras una variable con la posición inicial de mayor valor del array 

	for (var i = 1; i < miarray.length; i++) //"i=1" y no "i=0" porque ya has cogido el 0 al declarar la variable "max"
		if (miarray[i]>max){ 
			max=miarray[i];
		}
		alert('mayor: ' +max);	//este elemento se muestra fuera del if. Si no el alert salta para cada paso que da el "for".

}

//obtener la media de un array

function MediaDeUnArray(){

	var miarray = [20,25,40,80,5,60,90,3,76,13];
	var suma = 0;

	for (var i = 0; i < miarray.length; i++) {
	var suma = suma + miarray[i];
	}
	var media = suma/miarray.length;
	alert('la media:' +media);
}