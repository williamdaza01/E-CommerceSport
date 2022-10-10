const authLogin = () => {
    const username = localStorage.getItem("username");
    const usernameNew = document.getElementById("username").value;
    if(username != usernameNew || !usernameNew) return true;
    return false;
}

const saveInfo = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}

const login = () => {
    console.log(authLogin());
    if(authLogin() == true) {
        console.log("no exite");
        alert("El usuario no existe");
        return true;
    } else{
        saveInfo();
    }

}