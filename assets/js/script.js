
// Desafio Parte 1

let borde = new Boolean(false);

const borderFunction = () => {

    if (borde==false) {
document.querySelector("#imgRickMorty").border = "2px solid";
document.querySelector("#imgRickMorty").style.borderColor = "red";
borde=Boolean(true);
console.log(borde);
} 

    else if (borde==true) {
document.querySelector("#imgRickMorty").border = "none";
borde=Boolean(false);
console.log(borde);
}
}


// Desafio Parte 2

const verificar = () => {
const inputAvion = parseInt( document.querySelector("#inputAvion").value);
const inputCalavera = parseInt(document.querySelector("#inputCalavera").value);
const inputPanda = parseInt(document.querySelector("#inputPanda").value);
sumaStickers = inputAvion + inputCalavera + inputPanda;

if (sumaStickers <= 10) {
    document.querySelector("#textoVerifica").innerHTML = "Llevas " + sumaStickers + " stickers";
}
else {
document.querySelector("#textoVerifica").innerHTML = "Llevas demasiados stickers";
}
}


// Desafio Parte 3

const ingresar = () => {
const select1 = document.querySelector("#opSelect1").value;
const select2 = document.querySelector("#opSelect2").value;
const select3 = document.querySelector("#opSelect3").value;
const password = select1+select2+select3;
    console.log(password);
    
    if (password==911) {
        document.querySelector("#resultadoIngresar").innerHTML = "password 1 correcto"
    }
    else if (password==714) {
        document.querySelector("#resultadoIngresar").innerHTML = "password 2 es correcto"
    }
    else {
        document.querySelector("#resultadoIngresar").innerHTML = "password incorrecto"
    }

}
