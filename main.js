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

const ageUser = Number(prompt("Inserisci la tua età"));
console.log(ageUser);

//prezzo biglietto e il prodotto tra km e 0.21

const priceTicket = kmUser * 0.21;
console.log(priceTicket);

//prezzo finale in caso di sconto


if (ageUser < 18) {
    discount = (priceTicket * 0.8)
    alert(`Il prezzo scontato del 20% è:` + " " + "€" + discount.toFixed(2))
} else if (ageUser >= 65) {
    discount = (priceTicket * 0.6)
    alert(`Il prezzo scontato del 40% è:` + " "+ "€" + discount.toFixed(2))
} else {
    alert(`Il prezzo pieno è:` + " " + "€" + priceTicket.toFixed(2))
}



 



















//let discount = 0;

//sconto 20% da applicare ai minori di 18 anni

//if (ageUser < 18) {
  //  discount = 0.2; /*20% di sconto*/
//}


//sconto 40% da applicare agli over 65 anni

//else if (ageUser >= 65) {
  //  discount = Math.; /*40% di sconto*/
//}

//il prezzo finale massimo 2 decimali (12,34€)

//const finalPrice = priceTicket.toFixed(4);

//console.log(`"Il Prezzo del biglietto è: " ${finalPrice}€`);