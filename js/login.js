let txtuser=document.querySelector(".username");
let txtpass=document.querySelector(".password");
let sumbit=document.querySelector(".btnIngresar");

if(window.localStorage){



//localsotre creando users
localStorage.setItem("user","wdaza");
localStorage.setItem("pass","1234");

let user=localStorage.getItem("user");
let pass=localStorage.getItem("pass");

//let mensaje=document.querySelector(".prueba");

btnIngresar.addEventListener("click",()=>{

    if(user==txtuser.val && pass==txtpass.val){//sigo teniendo problemas con obtener el valor del input
        
        console.log("no dio ni pass o user");

    }else{


        console.log("no dio ni pass o user");

    }

});

}