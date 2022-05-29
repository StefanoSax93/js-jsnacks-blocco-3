/*Snack4 (Bonus)
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare
o no alla festa. Interrompi il ciclo appena il nome è stato trovato.*/

// creo la lista con i nomi degli invitati
const hostAllowed = ["Leonardo Di Caprio","Megan Fox","Jamie Foxx","Keanu Reeves","Tom Hardy","Brad Pitt"];

let i=0;

let valid = false;
//chiedo all'utente il suo nome
const userName = prompt("Inserisci il tuo nome");

//verifico se il nome inserito è presente nella lista
while(i<hostAllowed.length && !valid){
    if(userName == hostAllowed[i]){
        valid = true;
    } 
    i++;
}

if (valid){
    alert("Sei autorizzato a partecipare alla festa");
} else {
    alert("Non sei stato invitato alla festa");
}









