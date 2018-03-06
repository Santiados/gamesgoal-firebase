
const regis = document.getElementById('registro');
var datosUsuario = {};
const rootUsuarios = firebase.database().ref().child('usuarios');
var longUsuarios;
rootUsuarios.on('value', elemento => {
	longUsuarios = elemento.val().length;
});

// console.log(document.querySelectorAll('[dt=entrada'));

var correo = $('input[type=email]');
var entradaPass1 = $('[target=pass1');
var entradaPass2 = $('[target=pass2');
var enviarDatos = $('input[type=submit]');
console.log(correo)



entradaPass1.on('keyup', e=>{
	var objeto = e.target;
	var valorEntrada = objeto.value;
	var t1 = /^[A-Za-z\d\W]{8,}$/i; 
	var t2 = /([A-Z]{1,})/i;
	var t3 = /([a-z]{1,})/i;
	var t4 = /(\d{1,})/i;
	var t5 = /(\W{1,})/i;
	if(t1.test(valorEntrada) && t2.test(valorEntrada) && t3.test(valorEntrada) && t4.test(valorEntrada) && t5.test(valorEntrada)){
		$(objeto).css('border-color','#20C71C');
	}else {
		$(objeto).css('border-color','#BF4848');
	}
});

entradaPass2.on('keyup',e => {
	var objeto = e.target;
	if(objeto.value == entradaPass1.val() && entradaPass1.val()!=''){
		$(objeto).css('border-color','#20C71C');
	}else {
		$(objeto).css('border-color','#BF4848');
	}
});

enviarDatos.on('click', e => {
	e.preventDefault();
	var email = correo.val();
	var contra = entradaPass1.val();
	var auth = firebase.auth();

	const promise = auth.createUserWithEmailAndPassword(email,contra);

	promise
	.then(function(){
			// firebase.database().ref('usuarios/' + longUsuarios).set(valores);
			registrar();
			getUserByEmail(rootUsuarios,email);
		})
	.catch(function(){
		document.getElementsByClassName('modal-body')[0].innerHTML = '<p>Correo ya existente</p>';
		$('[data-toggle=modal]').trigger('click');
	});


	
});


// Proceso de registro
function registrar(){
	console.log(datosUsuario)

	var entradas = document.querySelectorAll('[dt=entrada');
	console.log(entradas)
	var datosUsuario = {};
	for (var i = 0; i < entradas.length; i++) {
		if(entradas[i].type != 'checkbox' && entradas[i].value != '' && $(entradas[i]).attr('target')!='pass1' && $(entradas[i]).attr('target')!='pass2' ){
			datosUsuario[$(entradas[i]).attr('target')] = entradas[i].value;
			
		}else if(entradas[i].checked){
			console.log(entradas[i])
			datosUsuario[$(entradas[i]).attr('target')] = 'OK';
		}
	}

	firebase.database().ref('usuarios/' + longUsuarios).set(datosUsuario);
}


function getUserByEmail(baseDatos,email){
	var usuario;
	console.log(email)
	baseDatos.on('value', e => {
		console.log(e.val())
		e.val().forEach( function(element, index) {
			if(element.correo==email){
				usuario = element;
			}
		});
		guardarDatosEnCookies(usuario); // Funcion ubicada en ControlCookies.js
		location.href = '../logged/index.html';
	});
}

var btnVolverInicio = document.getElementById('inicio');
btnVolverInicio.addEventListener('click', e=> {
	location.href = '../index.html';
});