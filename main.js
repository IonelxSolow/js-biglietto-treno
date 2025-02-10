/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//-----------------------------------------------------------------------------------------------------

// chiedere all'utente il numero di chilometri da percorere

const kmUser = Number(prompt("Inserisci la distanza da percorere in km"));
console.log(kmUser);

// chiedere all'utente l'età

const ageUser = Number(prompt("Inserischi la tua età"));
console.log(ageUser);

//prezzo biglietto e il prodotto tra km e 0.21

const priceBiglietto = kmUser * 0.21
console.log(priceBiglietto)

//il prezzo finale massimo 2 decimali (12,34€)

