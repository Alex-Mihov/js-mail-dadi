// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?

// generiamo numero utente
let userNumber = Math.floor(Math.random() * 7);
console.log("il numero dell'utente è: ", userNumber);

// generiamo numero computer
let computerNumber = Math.floor(Math.random() * 7);
console.log("il numero del computer è: ", computerNumber);

// SE l'utente ha il numero più alto vince 
if (userNumber > computerNumber) {
    console.log("l'utente ha ottenuto il punteggio più alto, congratulazioni hai vinto")
}
// ALTRIMENTI SE i numeri sono uguali si pareggia
else if (userNumber === computerNumber) {
    console.log("il punteggio ottenuto è uguale, hai pareggiato")
}
// ALTRIMENTI vince il computer
else {
    console.log("il computer ha ottenuto il punteggio più alto, spiacente hai perso")
}
