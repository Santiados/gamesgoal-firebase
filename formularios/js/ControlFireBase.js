  


    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDdCq0reWh_pJ1WvoKMNWYT5upJN7zCFC4",
      authDomain: "gamesgoal-3f2f1.firebaseapp.com",
      databaseURL: "https://gamesgoal-3f2f1.firebaseio.com",
      projectId: "gamesgoal-3f2f1",
      storageBucket: "",
      messagingSenderId: "665424442967"
    };
    firebase.initializeApp(config);

    // Generar Perfil de google

    function procesarInformacionCuentaGoogle(datosUsuario){
      var usuario = {
        imagen: datosUsuario.photoURL,
        nombre: datosUsuario.displayName,
        correo: datosUsuario.email
      };
      usuario = JSON.stringify(usuario);
      guardarDatosEnCookies(usuario); //Funcion ubicada en ControlCookies.js
    }

    
    // Imprimir datos con cookies

    function imprimirInformacionConCookies(){
      var contenedor = document.getElementsByClassName('carta')[0];
      var usuario = JSON.parse(getCookie('usuarioTemporal'));
      for (var dato in usuario) {
        if(dato == 'imagen'){
          var fotoPerfil = document.createElement('img');
          fotoPerfil.setAttribute('src', usuario[dato]);
          contenedor.appendChild(fotoPerfil);
        }
        if(dato!='id' && dato!='imagen'){
          var detalle = document.createElement('p');
          detalle.innerHTML =  dato + ': ' + usuario[dato];
          contenedor.appendChild(detalle);
        }
      }
    }




// Una vez se haya loggeado el usuario se genera su información
    function generarInformacion(usuario){
      var contenedor = document.getElementsByClassName('carta')[0];
      console.log(usuario)
      
      for(var dato in usuario){
        var caja = document.createElement('p');
        if(typeof usuario[dato] =='boolean') {
          caja.innerHTML = dato + ': Ok';
        }else if(imagen in usuario){
          var fotoPerfil = document.createElement('img');
          fotoPerfil.setAttribute('src',usuario.imagen);
          contenedor.appendChild(fotoPerfil);
        }else{
          caja.innerHTML = dato + ': ' + usuario[dato];
        }
        contenedor.appendChild(caja);
      }
    }
   



    
    // function loginG() {
    //   function nuevoUsuarioGoogle(usuario){
    //     if(usuario) {
    //       procesarInformacionCuentaGoogle(usuario);
    //     }else {
    //       var provider = new firebase.auth.GoogleAuthProvider();
    //       firebase.auth().signInWithRedirect(provider);
    //     }
    //   }
    //   firebase.auth().onAuthStateChanged(nuevoUsuarioGoogle);
    // }


    // Conexion a base de datos     

    // const cajaNombre = document.getElementById('nombre');
    // const cajaEmail = document.getElementById('correo');
    // const cajaContra = document.getElementById('contra');
    // const login = document.getElementById('login');
    // const logout = document.getElementById('logout');
    // const regis = document.getElementById('regis');

    // // cajaNombre.value ='';
    // cajaEmail.value ='';
    // cajaContra.value ='';

    // Proceso de login

    // login.addEventListener('click', e =>{
    //   var email = cajaEmail.value;
    //   var contra = cajaContra.value;
    //   var auth = firebase.auth();
    //   const promise = auth.signInWithEmailAndPassword(email,contra);
    //   promise
    //   .then(function(){
    //     // console.log('Has iniciado sesion');
    //     getUserByEmail(rootUsuarios,email);
    //   })
    //   .catch(e=> console.log(e.message));
    // });

    // // Proceso de registro

    // regis.addEventListener('click', evento =>{
    //   var nombreEs = cajaNombre.value;
    //   var email = cajaEmail.value;
    //   var contra = cajaContra.value;
    //   var auth = firebase.auth();

    //   const promise = auth.createUserWithEmailAndPassword(email,contra);

    //   promise
    //   .then(function(){
    //     firebase.database().ref('usuarios/' + longUsuarios).set(valores);
    //     alert('Te has registrado');
    //     })
    //   .catch(e=> console.log(e.message));


    // });

    // // Proceso de logout

    // logout.addEventListener('click',e=>{
    //   firebase.auth().signOut();
    // });

