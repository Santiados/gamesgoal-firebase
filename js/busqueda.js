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
      fetch('js/productos.json')
      .then(response => response.json())
      .then(json => procesarDatos(json.productos))
      .catch(error => resultado.innerHTML = 'No es posible conectarse')
        //peticion del archivo JSON y se pasa a una función para su procesamiento
        
        function mostrarResultado(res){
          console.log(res)
          if(res.length == 0){
            resultado.innerHTML = 'No hay resultados';
          }else {
            resultado.innerHTML = '';
            res.forEach( function(objeto, index) {
              $('div.objetos').append('<div class="producto card">'
                + '<p>' + objeto.id + '</p>'
                + '<span>' + objeto.Capacidad + '</span>'
                + '<span>' + objeto.Ram + '</span>'
                + '<span>' + objeto.Precio + '</span>'
                + "<button class='redirigir btn btn-danger' >Mas</button>");
            });
          }
        }

        function procesarDatos(respuesta){
          console.log(respuesta)
          if(respuesta.length>0){
            var aux = [];
            respuesta.forEach( function(objeto, index) {
              if(objeto.id.toLowerCase().includes(valorPeticion.toLowerCase())){
                aux.push(objeto);
              }
            });
            mostrarResultado(aux);          
          }
        }
      } catch(e) {
        // statements
        console.log(e.message);
      }
    }
  }