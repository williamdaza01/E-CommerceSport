document.querySelectorAll('#btnIngresar').addEventListener("click",iniciarSesion());

function iniciarSesion(){
    var sUsuario='';
    var sPassword='';
    var bAcceso=false;


    const sUsuario=document.querySelector('#username');
    const sPassword=document.querySelector('#password');

    bAcceso=validarCredenciales(sUsuario,sPassword);
    console.log(bAcceso);

}