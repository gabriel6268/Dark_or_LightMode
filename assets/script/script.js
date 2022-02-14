var btnCenteer = document.getElementById("btnChancee");
var containeer = document.getElementById("containeer");
var estado = 1;
var titulo = document.getElementById("titulo");

 
btnCenteer.addEventListener("click",choose);

function choose(){
    if(estado === 1){
        containeer.style.backgroundColor = "aliceblue";
        btnCenteer.style.background = "rgb(4, 0, 19)";
        btnCenteer.style.color = "aliceblue";
        titulo.style.color = "rgb(4, 0, 19)";
        titulo.innerHTML = "Light mode on";
        estado = 2;
    }else{
        containeer.style.backgroundColor = "rgb(4, 0, 19)";
        btnCenteer.style.background = "aliceblue";
        btnCenteer.style.color = "rgb(4, 0, 19)";
        titulo.style.color = "aliceblue";
        titulo.innerHTML = "Dark mode on";
        estado = 1;
    };
    
}
