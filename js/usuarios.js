//creemos usuarios a ver que tal nos va

function obtenerUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    if (listaUsuarios== null){
        listaUsuarios=
        [
            //nombre, usuario pass
            ['Wiliam','wdaza','12345'],
            ['Juan','jrubio','12345'],
            
        ]
    }
    return listaUsuarios;
}

//funcion de validar credenciales
function validarCredenciales(usuario,password){
    var listaUsuarios =obtenerUsuarios(); 
    var bacceso=false;

    for(var i =0; i<listaUsuarios.length;i++){
        if(usuario==listaUsuarios[i][1] && password== listaUsuarios[i][2]){
            bacceso=true;
            sessionStorage.setItem('usuarioActivo',listaUsuarios[i][0]+'    ');

        }
    }
    return bacceso;
}