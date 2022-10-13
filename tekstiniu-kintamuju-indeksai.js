let tekstas = "Čia YRa pavyzdinis TEKSTAS";

console.log(tekstas[4]);
console.log(tekstas.charAt(4));

console.log(tekstas[0]);

console.log(tekstas[10]);
console.log(tekstas[14]);

let istrauktasTekstas = tekstas.slice(10, 14);              // ištraukia raides nuo 10 iki 14 imtinai
console.log(istrauktasTekstas);

let paskutinesPenkiosRaides = tekstas.slice(-5);            // paskutinės penkios raidės
console.log(paskutinesPenkiosRaides);

let penkiosRaidesNuoSestos = tekstas.substr(5, 6);
console.log(penkiosRaidesNuoSestos);


console.log(tekstas[2]);
console.log(tekstas[tekstas.length - 2]);
console.log(arLygusZodziaiIgnoruojantDydzius(tekstas[2], tekstas[tekstas.length - 2]));     // tekstas[tekstas.length - 2] bus antra nuo galo raidė



// Paieška tekste KELINTOJE VIETOJE
let kelintasTekste = tekstas.indexOf("YRa");
console.log(kelintasTekste);

if (kelintasTekste >= 0) {
    console.log("Teksto gabalą rado kintamajame");
}
else {
    console.log("Nerado teksto gabalo kintamajame");
}


// Paieška AR YRA TEKSTE
let arYraTekste = tekstas.includes("tekstas");
console.log("Ar yra tekste: " + arYraTekste);       // išves false, nes kintamajame yra TEKSTAS, o čia ieškome tekstas

// Paieška AR YRA TEKSTE, ignoruojant raidžių dydžius
let arYraTekste2 = tekstas.toLocaleLowerCase().includes("tekstas");
console.log("Ar yra tekste 2: " + arYraTekste2);


// teksto užpildymas iš abiejų pusių
tekstas = tekstas.padStart(tekstas.length + 5, "*");
console.log(tekstas);

tekstas = tekstas.padEnd(tekstas.length + 3, "#");
console.log(tekstas);





function arLygusZodziaiIgnoruojantDydzius(zodis1, zodis2) {
    // return zodis1.toLocaleLowerCase() == zodis2.toLocaleLowerCase()
     if (zodis1.toLocaleUpperCase() == zodis2.toLocaleUpperCase()) {
         return true;
     }
     else {
         return false;
     }
 }