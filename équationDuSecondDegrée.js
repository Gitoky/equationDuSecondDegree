const prompt = require("prompt-sync")();

let A = Number(prompt("Veuillez saisir A: "));

let B = Number(prompt("Veuillez saisir B: "));

let C = Number(prompt("Veuillez saisir C: "));

//Si A=0 , L'équation devient de la forme BX + C = 0
if(A == 0){console.log("X="+ (-C / B));
}

//Si A=0 et B=0< alors ce n'est pas une équation
if(A == 0 && B == 0){
    console.log("Ce n'est pas une équation")
}

//Si A!=0 , alors on calcule delta
let delta = ((B * B) - 4 * (A * C))

let racine_delta = Math.sqrt(delta)

let X_1 = (-B + racine_delta) / (2 * A)
let X_2 = (-B - racine_delta) / (2 * A)
let X = (-B) / (2 * A)

if(delta > 0){
    console.log("X="+ X_1 +" ou X="+ X_2);
}

else if(delta < 0){
    console.log("Pas de solution");
}

else{
    console.log("X=" + X);
}
