const admin = {

username: "admin",
password: "admin123"

};

function login(){

let user =
document.getElementById("username").value;

let pass =
document.getElementById("password").value;

if(
user === admin.username &&
pass === admin.password
){

localStorage.setItem(
"login",
"true"
);

window.location.href =
"dashboard.html";

}else{

document.getElementById("error")
.innerHTML =
"Username atau Password Salah";

}

}
