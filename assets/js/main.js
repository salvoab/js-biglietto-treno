/*********************************************
 * Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 * Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 * il prezzo del biglietto è definito in base ai km (0.21 € al km)
 * va applicato uno sconto del 20% per i minorenni
 * va applicato uno sconto del 40% per gli over 65
 *******************************************/

 var kmViaggio, etaPasseggero;
kmViaggio = prompt("Inserisci il numero di km da percorrere");
etaPasseggero = prompt("Inserisci la tua età");
 //if di validazione dei dati (mi devo accertare che l'utente inserisca numeri per kmViaggio ed etaPasseggero)
if( !isNaN(kmViaggio) && !isNaN(etaPasseggero) ){
    kmViaggio=Number(kmViaggio);
    etaPasseggero=Number(etaPasseggero);
    console.log(kmViaggio, etaPasseggero);
}
else{
    //console.log("Errore! Uno dei valori inseriti non era un numero!");
    alert("Errore! Uno dei valori inseriti non era un numero!");
}