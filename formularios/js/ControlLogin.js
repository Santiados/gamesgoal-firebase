const cajaEmail = document.getElementById('correo');
const cajaContra = document.getElementById('contra');
const login = document.getElementById('login');
const btnGoogle = document.getElementById('google-log');
const botonHaciaRegistro = document.getElementsByClassName('registro')[0];


 const rootUsuarios = firebase.database().ref().child('usuarios');
    var longUsuarios;
    rootUsuarios.on('value', elemento => {
      longUsuarios = elemento.val().length;
    });

function cargarControlInicio(){
   login.addEventListener('click', e =>{
    e.preventDefault();
      var email = cajaEmail.value;
      var contra = cajaContra.value;
      var auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email,contra);
      promise
      .then(function(){
        getUserByEmail(rootUsuarios,email);
        console.log('Has iniciado sesion')
    })
      .catch(function(e){
        console.log(e)
        document.getElementsByClassName('modal-body')[0].innerHTML = '<p>'+ errCodeLogin(e.code) +'</p>';
        $('[data-toggle=modal]').trigger('click');
      });
  });
}

function errCodeLogin(code){
  if(code == 'auth/invalid-email'){
    return 'No se ha introducido un email o esta mal formado';
  } else{
    return 'La contraseña es inválida';
  }
}


function getUserByEmail(baseDatos,email){
    var usuario;
    // Acceso a base datos Firebase
    baseDatos.on('value', e => {

        e.val().forEach( function(element, index) {
            if(element.correo==email){
                usuario = element;
            }
        });
        usuario = JSON.stringify(usuario);
        guardarDatosEnCookies(usuario); // Funcion ubicada en ControlCookies.js
        location.href = 'logged/index.html';
        // console.log(usuario)
    });
}

function listenerGoogleAuth(){
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        if(getCookie('usuarioTemporal')==null){
          procesarInformacionCuentaGoogle(user);  // Funcion ubicada en ControlFireBase.js
          location.href = 'logged/index.html' 
        }
      }else {
        console.log('Ningun usuario conectado');
      }
    });
}

window.onload = listenerGoogleAuth();


function loginG() {

    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithRedirect(provider).then(function(){
      console.log('hoooooooooooooola');
    }).catch(e => console.log(e));
}


btnGoogle.addEventListener('click', e=> {
  loginG();
});


 // function nuevoUsuarioGoogle(usuario){
      //   if(usuario) {
      //     procesarInformacionCuentaGoogle(usuario);
      //     // location.href = 'logged/index.html';
      //   }else {
      //     var provider = new firebase.auth.GoogleAuthProvider();
      //     firebase.auth().signInWithRedirect(provider);
      //   }
      //   firebase.auth().getRedirectResult().then(function(result){
      //       console.log(result)
      //     }).catch(e => console.log(e));
      // }
      // firebase.auth().onAuthStateChanged(nuevoUsuarioGoogle);


// function googleAuth(){
//   var provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider)
//   .then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   console.log(user.displayName);
//   // ...
//   })
//   .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   alert(errorMessage);
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
// }






// Conexion a FireBase


// (function(){
//     // Initialize Firebase
//     var config = {
//       apiKey: "AIzaSyDdCq0reWh_pJ1WvoKMNWYT5upJN7zCFC4",
//       authDomain: "gamesgoal-3f2f1.firebaseapp.com",
//       databaseURL: "https://gamesgoal-3f2f1.firebaseio.com",
//       projectId: "gamesgoal-3f2f1",
//       storageBucket: "",
//       messagingSenderId: "665424442967"
//     };
//     firebase.initializeApp(config);
//     firebase.auth().signOut();
//     // Conexion a base de datos 
//     const rootUsuarios = firebase.database().ref().child('usuarios');
//     var longUsuarios;
//     rootUsuarios.on('value', elemento => {
//       longUsuarios = elemento.val().length;
//     });




//     // const cajaNombre = document.getElementById('nombre');
//     const cajaEmail = document.getElementById('correo');
//     const cajaContra = document.getElementById('contra');
//     const login = document.getElementById('login');
//     // const logout = document.getElementById('logout');
//     // const regis = document.getElementById('regis');

//     // cajaNombre.value ='';
//     cajaEmail.value ='';
//     cajaContra.value ='';

//     // Proceso de login

//     login.addEventListener('click', e =>{
//       var email = cajaEmail.value;
//       var contra = cajaContra.value;
//       var auth = firebase.auth();
//       const promise = auth.signInWithEmailAndPassword(email,contra);
//       promise
//       .then(function(){
//         // console.log('Has iniciado sesion');
//         getUserByEmail(rootUsuarios,email);
//       })
//       .catch(e=> console.log(e.message));
//     });

//     // // Proceso de registro

//     // regis.addEventListener('click', evento =>{
//     //   var nombreEs = cajaNombre.value;
//     //   var email = cajaEmail.value;
//     //   var contra = cajaContra.value;
//     //   var auth = firebase.auth();

//     //   const promise = auth.createUserWithEmailAndPassword(email,contra);

//     //   promise
//     //   .then(function(){
//     //     firebase.database().ref('usuarios/' + longUsuarios).set(valores);
//     //     alert('Te has registrado');
//     //     })
//     //   .catch(e=> console.log(e.message));


//     // });

//     // // Proceso de logout

//     // logout.addEventListener('click',e=>{
//     //   firebase.auth().signOut();
//     // });




//   })();








