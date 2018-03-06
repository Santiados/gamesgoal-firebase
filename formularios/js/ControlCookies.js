function setCookie(cname, cvalue, exdays) {
	if(exdays){
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
	}else exdays = '';
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return null;
}

function logged(){
	var usuarioTemporal = getCookie('usuarioTemporal');
	if(usuarioTemporal!=null){
		var usuario = JSON.parse(usuarioTemporal);
		var nombre = usuario.nombre;
		$('.loggin p').text(nombre);
		$('div.condiciones').hide();
	}

	$('.loggin, .carrito').on('click', function(){
		if(getCookie('usuarioTemporal')!=null){
			location.href='formularios/logged/index.html';
		}else{
			location.href='formularios/index.html';
		}
	})

}




function guardarDatosEnCookies(datosUsuario){
	// var correo = datosUsuario.correo;
	setCookie('usuarioTemporal',datosUsuario);
}