const css = document.getElementById("cssButton");
const body = document.getElementById("gradient");
const lColor = document.getElementById("leftColor");
const rColor = document.getElementById("rightColor");



const setGradient = (lCol, rCol) => {
    body.style.background = "linear-gradient(to right, " 
    + lCol 
    + ", " 
    + rCol 
    + ")";

    lColor.setAttribute("value", lCol);
    rColor.setAttribute("value", rCol);
    css.textContent = body.style.background + ";";
}

const randColor = () => {
    let color1 = generateRandColor();
    let color2 = generateRandColor();

    setGradient(color1, color2);
}

const generateRandColor = () => {
    return '#' + (Math.random().toString(16) + "000000").substring(2,8)
}

const copyClipboard = () => {
    let temp = document.createElement('textarea');
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
