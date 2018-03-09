function convertirDivisas (canI){
	
var cantI = document.getElementById('cantidadInicial').value;
var cantF = document.getElementById('total').value;
var divI = document.getElementById('divisaInicial').value;
var divF = document.getElementById('divisaFinal').value;

var euro;
var euroConvertido;

var dolar;
var dolarConvertido;


/*===========
EURO 
=============*/

switch(divI){ //switch (id de <select>)
	case'dolar': //case'id de <option>'
	//euro a dolar
	euro=cantI/1.23241;
	break;

	case'bitcoin': //case'id de <option>'
	//euro a bitcoin
	euro=cantI/0.00014;
	break;

	case'libra': //case'id de <option>'
	//euro a libra
	euro=cantI/0.888331;
	break;

	case'dirham': //case'id de <option>'
	//euro a dirham
	euro=cantI/11.3293;
	break;

	case 'euro':
		euro=cantI;
}

switch(divF){ //switch (id de <select>)
	case'dolar': //case'id de <option>'
	//dolar a euro
	euroConvertido = euro* 1.23241;
	break;

	case'bitcoin': //case'id de <option>'
	//bitcoin a euro
	euroConvertido = euro* 0.00014;
	break;

	case'libra': //case'id de <option>'
	//libra a euro
	euroConvertido = euro* 0.89203;
	break;

	case'dirham': //case'id de <option>'
	//dirham a euro
	euroConvertido = euro* 11.3293;
	break;

	case'euro':
	euroConvertido = euro;
}

document.getElementById('total').value = euroConvertido;


}//Final de function convertir
