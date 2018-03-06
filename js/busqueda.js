var entrada = document.getElementsByClassName('entrada')[0];
entrada.value = '';
var resultado = document.getElementsByClassName('objetos')[0];
window.addEventListener('load', iniciar );

  function iniciar(){
    entrada.addEventListener("keyup",mostrar);
  }

  function mostrar(e){
    var valorPeticion = e.target.value.trim();
    if(valorPeticion == ''){
      resultado.innerHTML = '';
      return;
    }else{
      try {
        fetch('js/productos.json/productos?id_like=' + valorPeticion)
        .then(response => response.json())
        .then(json => mostrar(json))
        .catch(error => resultado.innerHTML = 'No es posible conectarse')
        //peticion del archivo JSON y se pasa a una función para su procesamiento
        

        function mostrar(respuesta){
          console.log(respuesta)
            if(respuesta.length>0){
              resultado.innerHTML = '';
                for (var i = 0; i < respuesta.length; i++) {
                  var objeto = respuesta[i];
                  $('div.objetos').append('<div class="producto card">'
                                        + '<p>' + objeto.id + '</p>'
                                        + '<span>' + objeto.Capacidad + '</span>'
                                        + '<span>' + objeto.Ram + '</span>'
                                        + '<span>' + objeto.Precio + '</span>'
                                        + "<button class='redirigir btn btn-danger' >Mas</button>");
                }            
            }else {
              resultado.innerHTML = 'No hay nada relacionado';
            }
        }
      } catch(e) {
        // statements
        console.log(e.message);
      }
    }
  }