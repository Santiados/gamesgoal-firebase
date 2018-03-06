
// Control de botones en el perfil

    function controlPerfil(){
      var btnInicio = document.getElementById('index');
      var btnLogout = document.getElementById('log-out');

      btnInicio.addEventListener('click', e=> {
        location.href = '../../index.html';
      });

      btnLogout.addEventListener('click', e=> {
        document.cookie = 'usuarioTemporal=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        firebase.auth().signOut();
        location.href = '../index.html';
        console.log('Has cerrado sesion');
      }); 
    }


window.onload = imprimirInformacionConCookies();  // Funcion ubicada en ControlFirebase.js
window.onload = controlPerfil();
