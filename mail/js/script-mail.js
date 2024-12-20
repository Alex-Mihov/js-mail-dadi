// Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email

// lista invitati
let guests = [
    'mario.rossi@example.com', 
    'giulia.bianchi@example.com', 
    'luca.verdi@example.com', 
    'anna.neri@example.com', 
    'francesca.marchi@example.com', 
    'alessandro.ferri@example.com', 
    'elena.galli@example.com', 
    'marco.silvestri@example.com', 
    'sara.vitali@example.com', 
    'federico.mancini@example.com', 
    'laura.toscani@example.com', 
    'paolo.fontana@example.com', 
    'chiara.damiani@example.com', 
    'enrico.conti@example.com', 
    'alice.giusti@example.com']; 


// chiediamo all'utente di inerire la sua mail
let emailGuest = prompt('inserire la vorsta mail: ')
console.log('la vostra mail è: ', emailGuest)

// verifichiamo se la mail è presente nella lista 
for (let i = 0; i < guests.length; i++) {

    // SE la mail è presente 
    if (emailGuest === guests[i]){

        // stampiamo il messaggio di entrata 
        console.log('la sua mail è presente nella lista, la preghiamo di entrare')
    }
    // ALTRIMETI preghiamo stampiamo il messaggio chiedendo all'utente di uscire
    else{
        console.log('la sua mail non è presente nella lista, la preghiamo di uscire')
    }
}


