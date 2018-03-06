# Genearación de productos con peticiones AJAX
	
## Utilización
* **Nota: para la realización de pruebas se ha utilizado el servidor JSON SERVER proporcionado**.
* El contenido de este directorio debe guardarse en una carpeta **public**. Desde este directorio lanzar el comando de inicio de servicio.

* Se lanza desde la carpeta contenedora :

* json-server --watch ruta_del_archivo_json, ejemplo: **json-server --watch public/js/productos.json**.

* Se ha creado un archivo JSON con los datos necesarios. Se encuentra ubicado en la carpeta **js/productos.json**.

* Se ha descargadado con anterioridad el paquete de **JSON SERVER**.

* Lo que se puede buscar es : **Modelo  T,V,W,X,Y,Z**



## Peticiones FETCH y MutationObserver
1. El proceso se realiza desde el archivo **busqueda.js**. Con el método **fecth** de javascript podemos acceder al json alojado en el directorio, eso nos devuelve el objeto **JSON** que posteriormente convertiremos a objeto manipulable con Javascript.
<br> 1.1 Además las peticiones se realizan con una la terminación ,proporcionada por JSON server, propiedad_a_buscar ***_like***. Para poder acceder a la propiedad, en este caso se ha realizado así: **/productos?id_like" + entradaDeUsuario**.

2. Una vez tenemos el **array** con los resultados, lo recorremos mediante un **for** para generar las cajas de productos. En caso de no tener ninguna coincidencia dentro pues se mostraria un mensaje con la cadena de **"Ninguna coincidencia"**.

3. Para la generación de cajas de productos se utilizado **append** de Jquery y para detectar las clases que se les otorga, además notar los cambios realizados en DOM, concretamente en la caja donde irán los productos encontrados, 
se utiliza **MutationObserver**, y se genera la funcion **observer** para notar los cambios. Se encuentra ubicado en el archivo **index.js**


## Peticiones paises mediante JSON externo
1. El procedimiento se mantiene en la función **listaPaises** dentro del archivo **dom.js**. De igual forma, se recibe un objeto y este se procesa como un objeto con un bucle **for in** y se genera una opción dentro del campo países en el formulario.




# Manipulación del DOM

## COMENTARIOS
 1. Por defecto se crean X comentarios para preparar el entorno donde se colocarán los comentarios de los usuarios **logeados**.
 <br>
 2. Para la creación de comentarios se ha reutilizado la función **getCookies** para la verificación del usuario **temporal**.
 	Si este se cumple se permitirá incluir el comentario el la caja de comentarios, sino se le invitará al cliente a iniciar sesion
 	en su defecto se le dará la opción de registrarse, simplemente a traves de un enlace.

## Paises
 1. Para la generación de los paises se ha creado un array conteniendolos, se ha recorrido dicho **array** y con métodos DOM se han añadido
 	a la caja del selector **Pais**.

## Tarjeta de crédito
 1. Se ha seleccionado a los campos que seran el control de la tarjeta de crédito con **querySelectorAll**.De igual forma se ha recurrido a la 
    función **forEach** para recorrer las entradas que serán los **flags** para activar el campo de **tarjeta de crédito**. Y mediante booleanos se activa.


# Diseño web 960 grid

**Nota: Todo el proyecto incluye la funcionalidad de Jquery y Javascript puro, ninguna libreria.<br>
		 Siempre intentando realizar los efectos de forma autónoma, con pequeñas ayudas relativas a conceptos y teoria.**

# Formulario incluido.


## Imagen
 1. Obtenidos los iconos de [Flaticon](https://www.flaticon.es/), tambien reciclando imagenes anteriores.

## Efectos 

 1. Carrusel
 <br> 1.1 Para el carrusel se ha jugado con la propiedad de **overflow**, limitando el espacio de scroll horizontal del **Carrusel**.
 	      Se ha medido la cantidad de **px** de scrolling  con **innerWidth** para ir moviendo las imagenes.
 		  Además, se ha utilizado la funcion animate de **Jquery**.

 2. Scroll
 <br> 2.1 El efecto de scroll se ha conseguido utilizando **Jquery**, jugando con **Keyframes**
 <br> 2.2 Gracias a las propiedades de **scrollTop** y la funcion **getBoundingClientRect()**, ha sido posible detectar 
      los elementos a los que aplicar el efecto scroll.

 3. Efecto doble borde 
 <br> 3.1 Jugando con los pseudo selectores **before** y **after**, usando estos para generar elementos a los que aplicar el efecto, <br>
 		  ya que al borde no es posible aplicarle efecto de crecimiento lateral.
	
## Funcionalidad
 1. Cookies 
 <br> 1.1 Una vez terminadas las funcionalidad de cookies, se ha generado la funcion **logged** para identificar al usuario conectado o bien 
      para ofrecerle un formulario de registro en caso de no se encuentre registrado.
 <br> 2.1 Mostrar politicas de cookies, una vez registrado esta desaparece de la pagina de inicio aprovechando la funcion **logged** al inicio.

