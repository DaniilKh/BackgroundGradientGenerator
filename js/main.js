var css = document.getElementById("cssButton");
var body = document.getElementById("gradient");
var lColor = document.getElementById("leftColor");
var rColor = document.getElementById("rightColor");
var gradient;



function setGradient(lCol, rCol) {
    body.style.background = "linear-gradient(to right, " 
    + lCol 
    + ", " 
    + rCol 
    + ")";

    lColor.setAttribute("value", lCol);
    rColor.setAttribute("value", rCol);

    gradient = body.style.background + ";"

    css.textContent = gradient;
}

function randColor() {
    var color1 = generateRandColor();
    var color2 = generateRandColor();

    setGradient(color1, color2);
}

function generateRandColor() {
    return '#' + (Math.random().toString(16) + "000000").substring(2,8)
}

function copyClipboard() {
    var temp = document.createElement('textarea');
    temp.value = gradient;
    body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    body.removeChild(temp);
}

lColor.addEventListener('input', setGradient(lColor.value, rColor.value));
rColor.addEventListener('input', setGradient(lColor.value, rColor.value));

document.addEventListener('DOMContentLoaded', randColor());



//lColor.addEventListener("input", setGradient);
//rColor.addEventListener("input", setGradient);
