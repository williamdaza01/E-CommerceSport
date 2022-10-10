document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion);

function iniciarSesion(){
    var sUsuario='';
    var sPassword='';
    var bAcceso=false;


    sUsuario=document.querySelector('#username').value;
    sPassword=document.querySelector('#password').value;

    bAcceso=validarCredenciales(sUsuario,sPassword);
    console.log(bAcceso);

}