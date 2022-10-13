let tekstas = "Šiandien yra ketvirtadienis";
let zodis = "namas";

console.log(tekstas);

// Teksto ilgis
let tekstoIlgis = tekstas.length;

console.log(tekstoIlgis);
console.log(tekstas.length);

console.log(arDaugiauUz20(tekstas.length));
console.log(arDaugiauUz20(zodis.length));


// Visas raides padidinti į didžiąsias
console.log(zodis.toLocaleUpperCase());

let zodisDidziosiomis = zodis.toLocaleUpperCase();
console.log(zodisDidziosiomis);

// Visas raides suamažinti į mažąsias
console.log(tekstas.toLocaleLowerCase());


// Žodžių palyginimas ignoruojant mažąsias/didžiąsias raides
let zodis1 = "bUTas";
let zodis2 = "butas";
console.log(arLygusZodziai(zodis1, zodis2));
console.log(arLygusZodziaiIgnoruojantDydzius(zodis1, zodis2));




function arDaugiauUz20(skaicius) {
  //  return skaicius > 20;
    if (skaicius > 20) {
        return true;
    }
    else {
        return false;
    }
}


function arLygusZodziai(zodis1, zodis2) {
   // return zodis1 == zodis2;
    if (zodis1 == zodis2) {
        return true;
    }
    else {
        return false;
    }
}

function arLygusZodziaiIgnoruojantDydzius(zodis1, zodis2) {
   // return zodis1.toLocaleLowerCase() == zodis2.toLocaleLowerCase()
    if (zodis1.toLocaleUpperCase() == zodis2.toLocaleUpperCase()) {
        return true;
    }
    else {
        return false;
    }
}