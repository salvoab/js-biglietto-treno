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
    //console.log(kmViaggio, etaPasseggero);
    document.getElementById("km").innerHTML = kmViaggio;
    document.getElementById("eta").innerHTML = etaPasseggero;

    var prezzoAlKm = 0.21;
    var prezzoBiglietto = kmViaggio * prezzoAlKm;
    //console.log("Prezzo del biglietto: " + prezzoBiglietto + "€");
    document.getElementById("prezzo_pieno").innerHTML = prezzoBiglietto.toFixed(2);

    //Verifico se è necessario applicare uno sconto
    var sconto = 0;
    if(etaPasseggero < 18 ){
        //Passeggero minorenne e applico lo sconto del 20%
        sconto = prezzoBiglietto * 20 / 100;
        //console.log("Sconto del 20%: " + sconto);
    } else if(etaPasseggero >= 65){
        //Passeggero over 65 (lo interpreto come età a partire dai 65 anni in su) e applico lo sconto del 40%
        sconto = prezzoBiglietto * 40 / 100;
        //console.log("Sconto del 40%: " + sconto);
    }
    //Sottraggo lo sconto al prezzoBiglietto (se lo sconto non è stato applicato sottraggo 0)
    prezzoBiglietto = prezzoBiglietto - sconto;
    //console.log("Il prezzo finale del biglietto è: " + prezzoBiglietto.toFixed(2));
    document.getElementById("sconto").innerHTML = sconto.toFixed(2);
    document.getElementById("prezzo_finale").innerHTML = prezzoBiglietto.toFixed(2);
}
else{
    //console.log("Errore! Uno dei valori inseriti non era un numero!");
    alert("Errore! Uno dei valori inseriti non era un numero!");
}