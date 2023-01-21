dark.onclick = function(){
    document.querySelector("html").style.backgroundColor = "black";
    document.getElementById('texto').style.color = 'white';
    document.getElementById("texto").innerHTML = "Oscuro";

}
light.onclick = function(){
    document.querySelector("html").style.backgroundColor = "white";
    document.getElementById('texto').style.color = 'black';
    document.getElementById("texto").innerHTML = "Claro";

}