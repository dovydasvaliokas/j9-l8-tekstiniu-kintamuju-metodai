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

