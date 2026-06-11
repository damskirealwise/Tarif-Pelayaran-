if(
localStorage.getItem("login")
!== "true"
){

window.location.href =
"login.html";

}

function hitungTarif(){

let berat =
parseFloat(
document.getElementById("berat").value
);

if(isNaN(berat)){

alert("Masukkan Berat");

return;

}

let tarifPerTon = 750000;

let total =
berat * tarifPerTon;

document.getElementById("hasil")
.innerHTML =

"Total Tarif : Rp " +

total.toLocaleString("id-ID");

}

function logout(){

localStorage.removeItem(
"login"
);

window.location.href =
"login.html";

}
