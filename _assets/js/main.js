/*

01 - Il programma dovrà chiedere all'utente il numero di chilometri 
che vuole percorrere e l'età del passeggero.

02 - Sulla base di queste informazioni dovrà calcolare il prezzo totale
del viaggio, secondo queste regole:

03 - il prezzo del biglietto è definito in base ai km (0.21 € al km)

04 - va applicato uno sconto del 20% per i minorenni

05 - va applicato uno sconto del 40% per gli over 65.

06 - L'output del prezzo finale va messo fuori in forma umana
(con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

function btnSubmit() {
    const kmDaPercorrere = document.getElementById("kmDaPercorrere").value;
    const agePeople = document.getElementById("agePeople").value;
    let costoAlKM = 0.21;

    if (agePeople < 18) {
        costoAlKM *= 0.8;
    } else if (agePeople >= 65) {
        costoAlKM *= 0.6;
    }

    let prezzoFinale = costoAlKM * kmDaPercorrere;

    document.getElementById("display_price").innerHTML = `${prezzoFinale.toFixed(2).replace(".", ",")} €`;
}